# Continuing Build & Prompts handoff

Owner-approved November 24, 2026. This file lets the Build & Prompts chat continue without returning to the setup conversation.

## Context and source of truth

Owner: Amber Goding. Dedicated repository: C:\Users\amber\Desktop\Projects\SteadRoute. Do not work in professional-portfolio. Both Build & Prompts and Stakeholder Outreach chats are set up. Read AGENTS.md, CLAUDE.md, WORKFLOW.md, DECISIONS.md, BUILD_PLAN.md and BUILD_STATUS.md at initial handoff, then the full PRD baseline and affected wireframes before planning implementation. Later load only relevant requirements and current status. Full approved scope stays in capstone; do not replace it with a reduced MVP.

The complete requirements are in PRD.md, with the unchanged v0.6 DOCX under reference and fifteen accepted screen figures under wireframes. Subsequent owner clarifications in DECISIONS.md and AGENTS.md take precedence where explicitly stated. Ask Amber only about genuinely missing material decisions; do not invent absent policy, declare unverified integrations working, or make her reconstruct prior planning.

## Tool roles and normal cycle

Default: Codex generates prompts and reviews progress in Build & Prompts; Amber executes implementation prompts in Claude Code. Codex must not execute its newly drafted coding prompt unless asked to implement. Claude and Codex may exchange roles at Amber's request or for token availability. Shared instructions apply equally; model names in prompts do not change settings automatically. Never allow two implementation writers against the same files.

1. Inspect actual repository/status and current milestone. Summarize the next bounded outcome in plain language.
2. Give one concise, copy-ready implementation prompt with tool, available recommended model, reasoning/effort, scope, relevant references, meaningful checks, boundaries and stop condition.
3. Amber runs it in the implementer and returns the completion summary, or asks the planning tool to inspect the shared changed files. Do not assume the other chat is visible.
4. Review actual diffs and evidence when available. Use a bounded repair prompt for failures. Distinguish reported checks from independently verified checks; no repeated full test suite without a reason.
5. The implementer updates BUILD_STATUS.md with changed paths, actual checks/results, limitations and next task. Record approved decisions in DECISIONS.md. Recommend exact Git checkpoint commands and a concise message when warranted, without executing Git mutations absent authorization.
6. Continue with the next prompt in Build & Prompts. No return to setup chat is required.

If switching tools mid-task, stop the old writer, preserve uncommitted work and record active role, branch/commit, changed files, failing/passing checks and next bounded action. The receiving tool inspects actual files and reconciles discrepancies before editing. Never reset or overwrite work to simplify a handoff.

## Approved build order

1. Foundation: bounded prompts/01-foundation.md; no final visual selection required.
2. Core research: search, results, program details and comparison up to three programs, initially fictional records, with tested filtering/unknown/cost/distance rules and accessible responsive provisional UI. Break into manageable implementation prompts; a preview alone is not the working application.
3. Review existing Desert Almanac, Wayfinder and Courtyard concepts under design-concepts. Record Amber's selection and tokens, reconcile core styling, then extend the remaining role workspaces.
4. Continue BUILD_PLAN.md milestones 3-8 for the complete approved permissions, provider/catalog/form workflows, consent/documents/submissions, offers/placements/transfers and operations. No implied feature cuts.

The design previews are already created. BUILD_STATUS.md records the originating chat's checks; the receiving agent must not imply it independently ran them. Preserve previews and accepted wireframes. There is no need to redo concepts or re-plan the PRD before foundation coding.

## Quality and boundaries

Aim for distinctive professional UX, streamlined flows, meaningful security/behavior tests and responsive/keyboard review. Resolve known blocking defects; never promise zero undiscovered bugs. No prompt history or transcript substitute. Use compact current status and decisions.

Approved stack: Node.js/Express, EJS, CSS/focused JavaScript, Prisma, Neon PostgreSQL direction, Railway direction. Check official version compatibility at implementation. Do not provision services, incur charges, deploy, send real mail or run paid AI without authorization. Configure secrets outside chat. If no development database is available, report what can be validated locally and the exact remaining integration step; do not claim a migrated database or fabricate a connection.

Stakeholder nonresponse does not block code, testing or fictional demonstrations. Contacts, draft emails, overview PDF and interview questions live in STAKEHOLDER_OUTREACH.md; attempts/findings in STAKEHOLDER_FEEDBACK.md. Do not load the full outreach packet during routine coding. No confirmed partnership or DOC/tablet authorization is established by those materials.

## Recommendations

Codex prompt planning and ordinary review: GPT-6.2 Sol, High for foundation/schema/security decisions; Medium for routine bounded follow-ups. Complex design/architecture escalation: GPT-6.2 Astra, High. Default Claude implementation: Sonnet 5.5 if available, High for foundation and complex logic, Medium for routine changes. Independent difficult review: Opus 5.5 if available, High. If unavailable, state an available alternative and supported effort; never imply the model was selected automatically.
