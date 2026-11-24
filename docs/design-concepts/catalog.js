// Shared fictional facts from the accepted research wireframes. Distances are illustrative.
const unknown = "Not yet confirmed";
const reviewed = "Nov 19, 2026";
const programs = [
  {
    id: "canyon", name: "Canyon Path Residence", category: "Transitional housing",
    miles: 2, cityMiles: 3, weekly: 175, upfront: "$150 deposit", provider: true,
    work: "May begin immediately", immediate: true, intake: "Accepting applications",
    visits: "Visits after 7 days", household: "No family housing", outings: "Personal outings after 7 days",
    services: "Recovery groups and appointment rides by arrangement", stepFree: true,
    access: "Step-free entry confirmed. Bathroom features are unconfirmed.",
    aid: "Insurance does not pay for housing. Coverage for services is unconfirmed.",
    extra: unknown, overview: "A shared residence for people returning to the Bullhead City area. Work may begin on arrival. Family visits and personal outings begin after the first week."
  },
  {
    id: "river", name: "Riverbend Transition House", category: "Transitional housing",
    miles: 4, cityMiles: 5, weekly: 150, upfront: "$100 entry fee", provider: false,
    work: "May begin after 14 days", immediate: false, intake: unknown,
    visits: "Visits after 14 days", household: unknown, outings: "Personal outings after 14 days",
    services: "Employment referrals and nearby public transit", stepFree: null,
    access: "Accessibility features are unconfirmed.", aid: unknown,
    extra: unknown, overview: "A shared residence with employment referrals and public transit nearby. Work, personal outings and family visits can begin after 14 days."
  },
  {
    id: "desert", name: "Desert Crossing Living", category: "Sober living",
    miles: 8, cityMiles: 7, weekly: 210, upfront: "Deposit unconfirmed", provider: true,
    work: "May begin immediately. Overnight shifts need approval.", immediate: true, intake: "Waitlist only",
    visits: "Family visits by arrangement", household: unknown, outings: "Personal outings by arrangement",
    services: "Recovery groups and work rides for an additional charge", stepFree: null,
    access: "Ground-floor room confirmed. Other access features are unconfirmed.",
    aid: "Insurance does not pay for rent. Counseling coverage needs confirmation.",
    extra: "Optional work rides cost extra. Amount unconfirmed.",
    overview: "A shared sober living program with recovery groups. Work may begin on arrival. Overnight shifts and off-site plans require coordination."
  },
  {
    id: "mesa", name: "Mesa Grove House", category: "Transitional housing",
    miles: 16, cityMiles: 15, weekly: null, upfront: unknown, provider: false,
    work: unknown, immediate: null, intake: unknown,
    visits: unknown, household: unknown, outings: unknown, services: "Employment referrals", stepFree: null,
    access: unknown, aid: unknown, extra: unknown,
    overview: "A transitional residence with employment referrals. Recurring costs and intake status still need confirmation."
  }
];
const listingType = p => p.provider ? "Provider-managed" : "Reviewed research listing";
const weeklyCost = p => p.weekly === null ? unknown : "$" + p.weekly + "/week";
const sourceLabel = p => (p.provider ? "Provider confirmed" : "Source reviewed") + " · " + reviewed;
// Only explicitly documented yes/no facts satisfy or exclude a preference.
// An omitted program ID is unconfirmed for that preference.
const morePreferences = [
  {key:"visits", label:"Family visits within 7 days", known:{canyon:true,river:false}},
  {key:"family", label:"Housing for a participant with children", known:{canyon:false}},
  {key:"outings", label:"Personal outings within 7 days", known:{canyon:true,river:false}},
  {key:"recovery", label:"Recovery groups", known:{canyon:true,desert:true}},
  {key:"transit", label:"Nearby public transit", known:{river:true}},
  {key:"assistance", label:"Documented housing-cost assistance", known:{}}
];
const facts = [
  ["Mandatory recurring cost", p => p.weekly === null ? unknown : "$" + p.weekly + " per person, billed weekly"],
  ["Upfront charges", p => p.upfront],
  ["Employment", p => p.work], ["Family visits", p => p.visits], ["Family housing", p => p.household],
  ["Personal outings", p => p.outings], ["Services and transportation", p => p.services],
  ["Additional charges", p => p.extra], ["Accessibility", p => p.access],
  ["Insurance", p => p.aid], ["Housing-cost assistance", () => unknown],
  ["Intake", p => p.intake], ["Information source", p => listingType(p) + " · " + sourceLabel(p)]
];
