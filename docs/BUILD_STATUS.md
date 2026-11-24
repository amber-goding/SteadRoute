# Build status

Updated November 24, 2026.

## Current handoff

Owner-approved next task: Codex prepares the bounded Claude Code foundation prompt; no visual-selection prerequisite. Then build the tested core research journey with provisional accessible UI and review the existing concepts before expanding the remaining workspaces. See BUILD_HANDOFF.md for the continuing workflow. Both project chats are set up. Starter checkpoint now exists: 3d467f9 (Add SteadRoute planning baseline and shared instructions). Local main and origin/main match (not freshly fetched). The instruction/handoff updates remain uncommitted; the index is empty. Inspect actual Git at the next handoff.

Existing milestone 0 previews are preserved for later selection. Open [the local review page](design-concepts/index.html). Desert Almanac, Wayfinder and Courtyard use the same fictional search, result cards, comparisons and seven-section profiles. ZIP 86442 within 10 miles reproduces the three wireframe programs. A fourth fictional program at 16 illustrative miles exercises unknown costs and comparison replacement. Saves and selections are held in memory for one preview.

The Build & Prompts chat confirmed the repository at `C:\Users\amber\Desktop\Projects\SteadRoute`. The earlier preview milestone began before the first commit; that checkpoint now exists as recorded above. The planning packet, shared instructions, prompts, 15 accepted wireframes and docs/design-concepts remain in place. Preserve them and the uncommitted instruction/handoff updates at the next Codex–Claude handoff.

## Verification

- Ran `Get-Location`, `git status --short --branch`, `rg --files`, `node --check docs/design-concepts/catalog.js`, `node --check docs/design-concepts/preview.js` and `git diff --cached --name-only`. Both preview scripts passed syntax checking.
- Ran temporary browser checks with `node $taskFile`, using installed Chrome and bundled Playwright to open the local HTML files directly. All three directions passed layout and interaction checks at 1440×900, 768×1024, 390×844 and 320×740. The inspected search, results, comparison, detail, saved, empty and replacement states had no horizontal overflow. No external resource requests or page errors were observed in the tested flows.
- Exercised pending/apply/cancel, invalid destinations, strict budgets, explicit inclusion of unknowns, two- and three-program comparisons, fourth-choice cancellation/replacement, cost sorting, return navigation, temporary saves, source expansion and closed inquiry/application controls. Checked Tab, Enter, Space and Escape, skip navigation, visible focus and focus after closing a dialog. Sampled search text/background pairs met 4.5:1 and measured search/navigation controls were at least 44 CSS pixels high on desktop and phone.
- Visually inspected rendered desktop and phone captures of search, results, comparison and detail for all three directions. At phone widths the extra filter panel collapses and comparisons stack by topic. These are browser-emulation and design checks. Volunteer usability, assistive-technology testing, physical tablets, server permissions and integrations remain unverified.

## Next task (supersedes the earlier visual-first order)

In Build & Prompts, Codex prepares prompts and Amber runs them in Claude Code by default. Prepare the foundation prompt from prompts/01-foundation.md, using Claude Sonnet 5.5 High if available. Codex fallback implementation is GPT-6.2 Sol High after an explicit handoff. This instruction update authorizes planning/document changes, not implementation. After the foundation and tested core research journey, Amber selects a direction and the selected design is applied before expanding the remaining workspaces. No need to recreate the existing previews. The receiving tool reads `AGENTS.md`, `docs/WORKFLOW.md`, decisions and this status, and checks Git before editing. Keep one active implementation writer. Suggested checkpoint if authorized separately: `Add SteadRoute planning baseline and three visual concepts`.

This milestone covers local design previews only. No application implementation, dependency installation, staging, commit, push or deployment occurred. Outreach remains independent in `STAKEHOLDER_FEEDBACK.md`. Replies are not a prerequisite for the build.
