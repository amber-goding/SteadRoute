# SteadRoute working workflow

Owner decisions recorded November 24, 2026: omit prompt history; review three visual concepts before implementation; recommend a model and reasoning/effort level for every prompt; preserve concise prompts, meaningful testing, Git checkpoints and shared Codex/Claude handoffs.

## Two project chats

**Build and Prompts:** design review, bounded coding prompts, implementation, test results and Git checkpoints. It may prepare a prompt for the other tool; drafting a prompt does not authorize executing it. Keep one implementation writer active at a time unless the owner explicitly coordinates separate work.

**Stakeholder Outreach:** inquiries, interview preparation and feedback. Its normal write scope is `docs/STAKEHOLDER_FEEDBACK.md` and task-specific outreach documents. It may propose changes, but must not independently change application requirements, shared instructions, source code, tests, dependencies or schema. Do not send emails or make partnership commitments without explicit authorization.

Chats retain separate conversations. Both need explicit access to the same local project folder. A cloud-only chat cannot be assumed to read these files. Tell the Build chat when new feedback is ready, identifying its location. Do not run two coding tools against the same files concurrently.

## Development continues without stakeholder responses

The owner explicitly directs the build to continue even if no stakeholder ever replies. Use approved requirements and documented assumptions; do not wait for interviews, provider interest or DOC feedback before design, code, tests or a fictional capstone demonstration. Keep the instructor's outreach contingency visible without claiming it is waived or fulfilled. Real deployment and actual participation still require real authorization. Nonresponse never becomes endorsement or user-validation evidence. No software permission, consent or publication check is weakened by this planning boundary.

The Outreach chat reads `STAKEHOLDER_OUTREACH.md` first. The packet contains the contacts, drafts, overview and questions already prepared; do not require the owner to recreate them from this long conversation. Record any sent/response status separately from prepared material. New feedback may inform owner-approved changes; its absence is not an implementation blocker. Keep meaningful tests and design approval in the build process.

## Prompt format

Each prompt starts with: Tool; Model; Reasoning or effort; Outcome. Then give a short scope, relevant file/section references, required checks and stop condition. Avoid repasting the complete PRD or chat history. The first project handoff reads the baseline; later prompts load only relevant portions plus current status and decisions.

Current recommendations, not claims about the owner's selected models or account availability:

| Task | Recommended model | Reasoning or effort |
| --- | --- | --- |
| Three visual concepts and difficult UX decisions | Codex GPT-6.2 Astra | High |
| Routine bounded code changes | Codex GPT-6.2 Sol | Medium |
| Permissions, consent, migrations, concurrency and difficult bugs | Codex GPT-6.2 Sol | High; use Astra High if complexity warrants |
| Bounded implementation in Claude Code | Claude Sonnet 5.5, if available | Medium; High for complex logic |
| Independent critical-workflow review in Claude Code | Claude Opus 5.5, if available | High |
| Outreach drafts and feedback summaries | Codex GPT-6.2 Sol | Medium |

Use the model picker and available effort control explicitly; a sentence in a prompt does not switch them. If a named model is unavailable, choose an available alternative transparently before the task. Do not silently spend more by enabling paid modes, creating services or making API calls. Reassess model recommendations as actual results and availability change.

Official references checked November 24, 2026: https://learn.chatgpt.com/docs/model-selection and https://code.claude.com/docs/en/model-config . Recommendations are task-level choices, not provider guarantees of quality.

## Design approval before implementation

Create three genuinely different visual directions using the same search/results and program-detail flows so comparison is fair. Use fictional data and preserve accepted information architecture. Review wide and narrow screens, keyboard focus, readability, touch targets and interaction states. Distinction must include typography, spacing, shape, density and navigation treatment, not only color.

The intended experience is professional, distinctive, clear, respectful and easy to use for participants and busy staff. Avoid incarceration-themed imagery, stigmatizing language, decorative dashboard clutter, mandatory animation and a generic template presented as a final design. Do not silently choose a concept. Record the owner's selected direction, design tokens and component rules before production UI implementation. Concept previews are not permission to implement the application or claim integrations work.

## Verification and evidence

Check behavior at each meaningful milestone. Use focused automated checks for the affected logic and integration boundaries; use broader regression checks when justified by the change. Validate real browser flows, responsive layouts and keyboard use for interface changes. Include loading, empty, validation, permission, expired-session, failed-save and failed-delivery states when relevant. Verify on actual target devices when access is established; desktop emulation is not tablet-vendor approval.

Keep authorization/consent races, version changes, transfer authority and deadline behavior in meaningful test scenarios as implemented. Do not write tests solely to restate the code or inflate a count. Record commands actually run, outcomes and limitations. Resolve known release-blocking defects and explicitly review other known issues before release; never guarantee absence of undiscovered bugs.

## Cross-tool handoff

Before switching from Codex to Claude or back, update `BUILD_STATUS.md` with:

- Current branch and latest verified commit, or no commits yet.
- Milestone outcome and changed/uncommitted paths; flag work to preserve.
- Checks actually run, results and unverified integrations.
- Known failures, decisions needed, next bounded task and actions not authorized.

Keep this as a short current snapshot, not a growing transcript. Put material approved changes and rationale in `DECISIONS.md`, and stakeholder findings in `STAKEHOLDER_FEEDBACK.md`.

The receiving agent reads instructions/status, checks current Git state and affected files, and verifies assumptions before editing. Do not redo unrelated work or rerun every check without a reason. If the summary disagrees with the working tree, reconcile the difference before continuing.

## Git and checkpoints

Provide exact Git commands when appropriate and explain what they accomplish. Never stage, commit, push, merge, reset, discard changes or deploy merely because a prompt template mentions a checkpoint. Commit/push/deploy require explicit authorization. Stage only the intended files when authorized. Recommend a concise commit message after verified milestones. Keep starter ZIPs, real environment values, uploaded documents and generated caches out of commits. Do not copy settings or credentials from another project.

## Simple first handoff prompt

Read AGENTS.md, CLAUDE.md and docs/BUILD_STATUS.md. Confirm this is the SteadRoute folder, inspect Git status, and summarize the current next task and any conflicts. Do not change files or start application implementation.
