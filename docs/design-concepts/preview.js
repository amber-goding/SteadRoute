// All state lives in this document. Refreshing starts a new fictional session.
const concept = document.body.dataset.concept;
const identity = {
  almanac: ["Desert Almanac", "Arizona housing guide", "Colorado River country", "A landscape study"],
  wayfinder: ["Wayfinder", "Arizona program directory", "Bullhead City area", "Illustrative route diagram"],
  courtyard: ["Courtyard", "Arizona housing guide", "A shared courtyard", "Illustrative setting"]
}[concept];
const iconPaths = {
  search: '<circle cx="10" cy="10" r="6"/><path d="m15 15 5 5"/>',
  save: '<path d="M6 4h12v17l-6-4-6 4z"/>',
  lock: '<rect x="5" y="10" width="14" height="10" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/>',
  pin: '<path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 0 1 14 0z"/><circle cx="12" cy="10" r="2"/>',
  arrow: '<path d="M3 12h17m-6-6 6 6-6 6"/>',
  filters: '<path d="M3 7h7m5 0h6M3 17h12m4 0h2"/><circle cx="12" cy="7" r="2"/><circle cx="17" cy="17" r="2"/>',
  user: '<circle cx="12" cy="8" r="3.5"/><path d="M5 20a7 7 0 0 1 14 0"/>'
};
function icon(name) {
  return '<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">' + iconPaths[name] + '</svg>';
}
const main = document.querySelector("main");
const dialog = document.querySelector("dialog");
const saved = new Set();
const selected = new Set();
const filterKeys = ["immediate","intake","access","include",...morePreferences.map(f=>f.key)];
const initial = {place:"86442", radius:"10", budget:"", ...Object.fromEntries(filterKeys.map(k=>[k,false]))};
let applied = {...initial};
let sort = "nearest";
let view = "";
let detailFrom = "results";
let returnFocus = "";
let panelOpen = false;
let replacing = "";
const narrow = matchMedia("(max-width: 720px)");
function esc(value) {
  return String(value).replace(/[&<>"']/g, char => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[char]);
}
function announce(message) { document.querySelector("#announcement").textContent = message; }
function action(key, label, style = "", attrs = "") {
  return '<button type="button" class="' + style + '" data-action="' + key + '" ' + attrs + '>' + label + '</button>';
}
function heading(title, sub) {
  return '<div class="page-heading"><div class="eyebrow">' + identity[1] + '</div><h1 tabindex="-1">' + title + '</h1><p>' + sub + '</p></div>';
}
function masthead() {
  const nav = (dest, label, glyph, active) => '<a href="#' + dest + '"' + (active ? ' aria-current="page"' : '') + '>' + icon(glyph) + label + '</a>';
  document.querySelector("header").innerHTML = '<div class="brand"><span class="mark" aria-hidden="true"><i></i><i></i><i></i></span>SteadRoute</div><nav aria-label="Participant navigation">' +
    nav("search","Find housing","search",view !== "saved") + nav("saved",'Saved <span class="count">' + saved.size + '</span>',"save",view === "saved") +
    '</nav><div class="persona">' + icon("user") + '<span>Jordan<small>Fictional participant</small></span></div>';
}
function illustration() {
  return '<figure class="illustration"><img src="art/' + concept + '.webp" alt=""><figcaption><span>' + identity[2] + '</span><span>' + identity[3] + '</span></figcaption></figure>';
}
function searchFields() {
  return '<div class="fields"><label>Destination city or ZIP<input name="place" value="' + esc(applied.place) +
    '" placeholder="City or ZIP" autocomplete="off" aria-describedby="distance-note"></label><label>Search radius<select name="radius">' +
    [5,10,25,50].map(n => '<option value="' + n + '"' + (n == applied.radius ? " selected" : "") + '>' + n + ' miles</option>').join("") +
    '</select></label><label class="budget-field">Max. weekly cost<span class="money"><span aria-hidden="true">$</span><input type="number" step=".01" min="0" name="budget" value="' +
    esc(applied.budget) + '" placeholder="Any budget"></span></label></div>';
}
const distanceNote = 'Approximate straight-line distance from the city or ZIP reference point. Driving distance may differ.';
function searchPage() {
  const intro = '<div class="intro">' + heading("Find housing for your next chapter.", "Explore Arizona transitional housing and sober living. Compare costs, daily rules and support before you decide.") + '</div>';
  const form = '<form id="search-form" class="search-box"><h2>Search programs</h2>' + searchFields() +
    '<p id="distance-note" class="note">' + distanceNote + '</p><p class="error" role="alert"></p><div class="actions"><button class="primary">Search programs ' + icon("arrow") +
    '</button>' + action("example","Browse example results","secondary") + '</div></form>';
  const privacy = '<aside class="privacy">' + icon("lock") + '<div><h2>Your choices stay yours</h2><p>Search preferences are temporary. Programs cannot see your searches or saved list.</p></div></aside>';
  return '<div class="landing"><div class="hero">' + intro + illustration() + '</div>' + form + privacy + '</div>';
}
const byId = id => programs.find(p => p.id === id);
const distance = p => applied.place === "Bullhead City" ? p.cityMiles : p.miles;
function unknownMatch(p) {
  return (applied.budget !== "" && p.weekly === null) || (applied.immediate && p.immediate === null) ||
    (applied.intake && p.intake === unknown) || (applied.access && p.stepFree === null) ||
    morePreferences.some(f => applied[f.key] && f.known[p.id] === undefined);
}
function matches(p) {
  const test = (fact, knownMatch) => fact === null ? applied.include : knownMatch;
  return (!applied.place || distance(p) <= Number(applied.radius)) &&
    (applied.budget === "" || test(p.weekly, p.weekly <= Number(applied.budget))) &&
    (!applied.immediate || test(p.immediate,p.immediate)) &&
    (!applied.intake || test(p.intake === unknown ? null : p.intake, p.intake === "Accepting applications")) &&
    (!applied.access || test(p.stepFree,p.stepFree)) &&
    morePreferences.every(f => !applied[f.key] || test(f.known[p.id] ?? null, f.known[p.id]));
}
function compareOrder(a,b) {
  let diff = 0;
  if (sort === "nearest" && applied.place) diff = distance(a)-distance(b);
  if (sort === "cost") diff = (a.weekly ?? Infinity)-(b.weekly ?? Infinity);
  // All specimen dates are identical. Name and stable ID also break recency ties.
  return diff || a.name.localeCompare(b.name) || a.id.localeCompare(b.id);
}
function saveButton(p) {
  return action("save",icon("save") + (saved.has(p.id) ? "Saved" : "Save"),"save-button",
    'data-id="' + p.id + '" aria-label="Save ' + p.name + '" aria-pressed="' + saved.has(p.id) + '"');
}
function card(p) {
  return '<article class="card"><div class="card-head"><div><span class="eyebrow">' + p.category + '</span><h2>' + p.name +
    '</h2></div><span class="listing">' + listingType(p) + '</span></div><p class="location">' + icon("pin") + 'Bullhead City, AZ' +
    (applied.place ? ' · About ' + distance(p) + ' miles' : '') + '</p>' +
    (view === "results" && unknownMatch(p) ? '<p class="uncertain">Included with unconfirmed criteria</p>' : '') +
    '<dl class="card-facts"><div><dt>Recurring cost</dt><dd class="price">' + weeklyCost(p) +
    '</dd></div><div><dt>Upfront</dt><dd>' + p.upfront + '</dd></div><div><dt>Employment</dt><dd>' + p.work +
    '</dd></div><div><dt>Intake</dt><dd>' + p.intake + '</dd></div></dl><p class="service">' + p.services +
    '</p><p class="note">' + sourceLabel(p) + '</p><div class="card-actions">' +
    action("view","View program " + icon("arrow"),"primary",'data-id="' + p.id + '"') + saveButton(p) +
    '<label class="check compare-check"><input type="checkbox" data-compare="' + p.id + '" aria-label="Compare ' + p.name + '"' +
    (selected.has(p.id) ? " checked" : "") + '>Compare</label></div></article>';
}
function filters() {
  const boxes = [["immediate","Work may begin immediately"],["intake","Accepting applications"],["access","Confirmed step-free entry"],["include","Include unconfirmed information"]];
  const checkbox = ([key,label]) => '<label class="check"><input type="checkbox" name="' + key + '"' + (applied[key] ? " checked" : "") + '>' + label + '</label>';
  return '<form id="filter-form" class="filter-box"><h2>' + icon("filters") + ' Search filters</h2>' +
    searchFields() + action("panel","More filters","panel-toggle",'aria-controls="policy" aria-expanded="' + panelOpen + '"') +
    '<div id="policy"' + (narrow.matches && !panelOpen ? ' hidden' : '') + '><fieldset><legend>Program preferences</legend>' +
    boxes.slice(0,3).map(checkbox).join("") + '<details class="other-prefs"' + (morePreferences.some(f=>applied[f.key]) ? ' open' : '') +
    '><summary>More preferences</summary>' + morePreferences.map(f=>checkbox([f.key,f.label])).join("") + '</details>' + checkbox(boxes[3]) +
    '</fieldset><p class="note" id="distance-note">' + distanceNote + '</p></div><p class="pending" role="status">Showing applied filters</p><p class="error" role="alert"></p><div class="actions"><button class="primary">Apply filters</button>' +
    action("cancel","Cancel changes","secondary") + '</div></form>';
}
function tray() {
  return '<aside class="tray"><span><strong>' + selected.size + ' of 3</strong> selected</span>' +
    action("compare","Compare selected " + icon("arrow"),"primary",selected.size < 2 ? "disabled" : "") + '</aside>';
}
function resultPage() {
  const list = programs.filter(matches).sort(compareOrder);
  const active = [applied.budget !== "" && "Up to $" + applied.budget + "/week", applied.immediate && "Immediate work",
    applied.intake && "Accepting applications", applied.access && "Step-free entry", ...morePreferences.filter(f=>applied[f.key]).map(f=>f.label),
    applied.include && "Unconfirmed information included"].filter(Boolean);
  const sorts = [...(applied.place ? [["nearest","Nearest first"]] : []),["name","Program name"],["cost","Weekly cost"],["recent","Most recently reviewed"]];
  return heading("Housing search results",list.length + ' fictional program' + (list.length === 1 ? '' : 's') +
    (applied.place ? ' within ' + applied.radius + ' miles of ' + esc(applied.place) : ' across Arizona') + '.' +
    (active.length ? '<span class="applied-list">Applied filters · ' + active.join(' · ') + '</span>' : '')) +
    '<div class="results-grid">' + filters() + '<div class="results-list"><div class="sort-bar"><label>Sort by <select id="sort">' +
    sorts.map(([key,label])=>'<option value="' + key + '"' + (sort === key ? ' selected' : '') + '>' + label + '</option>').join("") +
    '</select></label></div><div id="cards">' + (list.map(card).join("") || '<div class="empty"><h2>No programs match all your filters</h2><p>Your criteria are still applied. Try a wider radius, a higher budget or include unconfirmed information.</p>' +
    action("edit","Edit search filters","secondary") + '</div>') + '</div>' + tray() + '</div></div>';
}
function savedPage() {
  return heading("Saved programs","Your private list for this fictional session. Refreshing the preview clears it.") +
    (saved.size ? '<div class="saved-list">' + [...saved].map(id=>card(byId(id))).join("") + tray() + '</div>' :
    '<div class="empty"><h2>No saved programs yet</h2><p>Save a program from its result card or detail page.</p><a class="button primary" href="#results">Browse results</a></div>');
}
const sections = [
  ["overview","Overview"],["eligibility","Eligibility"],["costs","Costs"],["rules","Daily rules"],
  ["services","Services and accessibility"],["questions","Questions and applications"],["sources","Sources and reporting"]
];
const rows = items => '<dl class="detail-facts">' + items.map(([label,value]) => '<div><dt>' + label + '</dt><dd>' + value + '</dd></div>').join("") + '</dl>';
function detailPage(p) {
  const gating = p.provider ? "An authorized COIII must enable new inquiries and applications for this fictional participant. Existing activity remains available through the participant workspace." :
    "This research listing has no participating provider. In-app inquiries and applications are unavailable.";
  const blocks = [
    '<p>' + p.overview + '</p>',
    rows([["Reentry acceptance","Accepts people returning from incarceration"],["Additional criteria",unknown]]),
    rows([facts[0],facts[1],facts[7],facts[9],facts[10]].map(([label,read])=>[label,read(p)])),
    rows([["Employment",p.work],["Personal outings",p.outings],["Family visits",p.visits],["Family housing",p.household],["Phone restrictions",unknown]]),
    rows([["Services and transportation",p.services],["Access features",p.access]]),
    '<p>' + gating + '</p><div class="actions"><button disabled>Ask a question</button><button disabled>Start application</button></div>',
    '<p>' + listingType(p) + ' · ' + sourceLabel(p) + '</p><details><summary>View example source evidence</summary><div class="evidence"><strong>' +
    (p.provider ? "Fictional provider information sheet" : "Fictional public program description") + '</strong>' +
    rows([["Recorded intake status",p.intake],["Employment policy",p.work]]) + '</div></details>' + action("report","Report information concern","secondary")
  ];
  return '<div class="back-row"><a href="#' + detailFrom + '">← Back to ' + ({saved:"saved programs",compare:"comparison",results:"results"}[detailFrom]) +
    '</a></div><div class="profile-head"><div class="eyebrow">' + p.category + '</div><h1 tabindex="-1">' + p.name +
    '</h1><p class="location">' + icon("pin") + 'Bullhead City, AZ · ' + listingType(p) + '</p><p>Intake: ' + p.intake + ' · Fictional program</p>' +
    (p.intake === "Accepting applications" ? '<p>Current vacancies are unconfirmed.</p>' : '') +
    saveButton(p) + '</div><div class="profile-grid"><nav class="section-nav" aria-label="Program sections">' +
    sections.map(([id,name])=>action("section",name,"",'data-section="' + id + '"')).join("") + '</nav><div class="sections">' +
    sections.map(([id,name],i)=>'<section><h2 tabindex="-1" id="section-' + id + '">' + name + '</h2>' + blocks[i] + '</section>').join("") + '</div></div>';
}
function comparison() {
  const list = [...selected].map(byId);
  if (list.length < 2) return heading("Compare your options","Select two or three programs to compare their policies.") + '<a class="button primary" href="#results">Back to results</a>';
  const topics = [["Program",p=>action("view","View program","secondary",'data-id="' + p.id + '"')],...facts];
  return '<div class="back-row"><a href="#results">← Back to results</a></div>' + heading("Compare your options",list.length +
    " fictional programs. Unconfirmed details are labeled in each topic.") + '<div class="comparison" style="--columns:' + list.length + '">' +
    topics.map(([title,read])=>'<section><h2>' + title + '</h2><div class="topic">' + list.map(p=>'<div><h3>' + p.name +
    '</h3><div>' + read(p) + '</div></div>').join("") + '</div></section>').join("") + '</div>';
}
function render(moveFocus = true) {
  const [page,id] = location.hash.slice(1).split("/");
  view = ["results","compare","saved"].includes(page) || (page === "detail" && byId(id)) ? page : "search";
  masthead();
  const pages = {search:searchPage,results:resultPage,saved:savedPage,compare:comparison,detail:()=>detailPage(byId(id))};
  main.innerHTML = pages[view]();
  document.title = main.querySelector("h1").textContent + " · " + identity[0] + " · SteadRoute";
  if (moveFocus) {
    const target = returnFocus && main.querySelector(returnFocus);
    (target || main.querySelector("h1")).focus({preventScroll:true});
    if (target) target.scrollIntoView({block:"center"}); else window.scrollTo(0,0);
  }
  returnFocus = "";
}
function go(page) {
  if (location.hash === "#" + page) render(); else location.hash = page;
}
function values(form) {
  const data = new FormData(form);
  return {place:String(data.get("place") ?? "").trim(),radius:data.get("radius"),budget:data.get("budget"),
    ...Object.fromEntries(filterKeys.map(k=>[k,data.has(k)]))};
}
function updatePending() {
  const form = document.querySelector("#filter-form");
  if (!form) return;
  const dirty = JSON.stringify(values(form)) !== JSON.stringify(applied);
  form.querySelector(".pending").textContent = dirty ? "Changes waiting to be applied" : "Showing applied filters";
  form.querySelector(".pending").classList.toggle("dirty",dirty);
}
document.addEventListener("submit",event => {
  event.preventDefault();
  const form = event.target;
  const next = values(form);
  if (/^bullhead city(?:,? az)?$/i.test(next.place)) next.place = "Bullhead City";
  if (!["","86442","Bullhead City"].includes(next.place)) {
    form.querySelector(".error").textContent = "For this preview, enter Bullhead City or 86442, or leave the destination blank to browse Arizona.";
    form.elements.place.setAttribute("aria-invalid","true");
    form.elements.place.focus();
    return;
  }
  if (next.place !== applied.place || form.id === "search-form") sort = next.place ? "nearest" : "name";
  applied = next;
  panelOpen = false;
  go("results");
});
function syncSelection() {
  document.querySelectorAll("[data-compare]").forEach(el=>el.checked = selected.has(el.dataset.compare));
  const bar = document.querySelector(".tray");
  if (bar) bar.outerHTML = tray();
}
document.addEventListener("change",e => {
  if (e.target.id === "sort") {
    sort = e.target.value;
    const cards = document.querySelector("#cards");
    if (programs.some(matches)) cards.innerHTML = programs.filter(matches).sort(compareOrder).map(card).join("");
    announce("Results sorted by " + e.target.selectedOptions[0].textContent);
  }
  const id = e.target.dataset.compare;
  if (!id) return;
  if (selected.has(id)) selected.delete(id);
  else if (selected.size < 3) selected.add(id);
  else {
    replacing = id;
    e.target.checked = false;
    dialog.innerHTML = '<h2 id="dialog-title">Replace a program?</h2><p>Choose a program to replace with ' + byId(id).name +
      ', or keep your three selections.</p><div class="dialog-actions">' + [...selected].map(old=>action("replace",byId(old).name,"secondary",'data-id="' + old + '"')).join("") +
      action("close","Keep current selection","primary") + '</div>';
    dialog.showModal();
    return;
  }
  syncSelection();
  announce(selected.size + " of 3 selected for comparison.");
});
document.addEventListener("input",e=>{
  const form = e.target.closest("form");
  if (!form) return;
  form.querySelector(".error").textContent = "";
  form.elements.place.removeAttribute("aria-invalid");
  updatePending();
});
document.addEventListener("click",event=>{
  const btn = event.target.closest("[data-action]");
  if (!btn) return;
  const id = btn.dataset.id;
  switch(btn.dataset.action) {
    case "example": applied = {...initial}; sort = "nearest"; go("results"); break;
    case "view": detailFrom = view; go("detail/" + id); break;
    case "save":
      if (saved.has(id)) saved.delete(id); else saved.add(id);
      if (view === "saved" && !saved.has(id)) render();
      else { btn.outerHTML = saveButton(byId(id)); main.querySelector('[data-action="save"][data-id="' + id + '"]').focus({preventScroll:true}); masthead(); }
      announce(byId(id).name + (saved.has(id) ? " saved for this preview." : " removed from saved programs.")); break;
    case "compare": go("compare"); break;
    case "replace":
      selected.delete(id); selected.add(replacing); dialog.close(); syncSelection(); announce("Comparison selection updated."); break;
    case "close": dialog.close(); break;
    case "panel":
      panelOpen = !panelOpen; document.querySelector("#policy").hidden = !panelOpen;
      btn.setAttribute("aria-expanded",String(panelOpen)); btn.textContent = panelOpen ? "Fewer filters" : "More filters"; break;
    case "cancel":
      btn.form.reset(); btn.form.querySelector(".error").textContent = ""; btn.form.elements.place.removeAttribute("aria-invalid");
      panelOpen = false; document.querySelector("#policy").hidden = narrow.matches;
      const toggle = document.querySelector(".panel-toggle"); toggle.setAttribute("aria-expanded","false"); toggle.textContent = "More filters";
      updatePending(); announce("Unapplied changes discarded."); break;
    case "edit": document.querySelector('[name="place"]').focus(); break;
    case "section": document.querySelector("#section-" + btn.dataset.section).focus(); break;
    case "report":
      dialog.innerHTML = '<h2 id="dialog-title">Report information concern</h2><p>In SteadRoute, a designated reviewer would receive a concern about this listing. This visual preview keeps reporting closed.</p>' + action("close","Back to program","primary");
      dialog.showModal(); break;
  }
});
document.addEventListener("click",event=>{
  const back = event.target.closest(".back-row a");
  if (back && view === "detail") returnFocus = '[data-action="view"][data-id="' + location.hash.split("/")[1] + '"]';
  const skip = event.target.closest(".skip");
  if (skip) { event.preventDefault(); main.focus(); }
});
narrow.addEventListener("change",()=>{
  const policy = document.querySelector("#policy");
  if (policy) policy.hidden = narrow.matches && !panelOpen;
});
window.addEventListener("hashchange",()=>render());
render(false);

