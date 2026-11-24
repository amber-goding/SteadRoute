# SteadRoute starter package

Prepared November 24, 2026 for Amber Goding.

This project carries the approved planning baseline into Amber's dedicated SteadRoute repository. It contains shared instructions, the complete PRD text and screen figures, an implementation sequence and short task prompts. It is not a running application. Desktop-app project registration is a separate setup step.

## Set up the dedicated project

Local file setup was verified on November 24, 2026 at `C:\Users\amber\Desktop\Projects\SteadRoute`. The starter is already extracted there; do not extract the old transport ZIP over these updated instructions. Next, connect this folder as its own desktop-app project and open the two project chats described below. Desktop-app registration has not been verified by this file setup.

Use an empty project folder, suggested location `C:\Users\amber\Desktop\Projects\steadroute`. Add that folder as its own coding project and put this package's contents at the folder root. Do not nest the application inside the portfolio. If a folder already exists, inspect it before copying anything; never overwrite existing work automatically.

Use two focused chats associated with the SteadRoute project:

- **SteadRoute Build and Prompts:** visual concepts, concise task prompts, code, tests and milestone status.
- **SteadRoute Stakeholder Outreach:** email drafts, interview preparation and feedback notes.

Use `docs/BUILD_STATUS.md` to continue development and `docs/STAKEHOLDER_FEEDBACK.md` to hand feedback to the Build chat. Treat this as a coordination process, not an automatic synchronization guarantee.

## Files

- `AGENTS.md`: durable coding instructions and product boundaries.
- `CLAUDE.md`: imports the shared instructions for Claude; explicitly omits prompt-history maintenance.
- `docs/WORKFLOW.md`: prompt format, model/effort recommendations, testing, Git checkpoints and cross-tool handoffs.
- `docs/PRD.md`: searchable export of the full approved PRD v0.6, preserving section order and tables.
- `docs/reference/SteadRoute_PRD_v0_6.docx`: unchanged approved local reference.
- `docs/wireframes/`: fifteen accepted screen figures.
- `docs/DECISIONS.md`: clarifications after v0.6 and unresolved external validation.
- `docs/BUILD_PLAN.md`: full-scope implementation milestones and evidence gates.
- `docs/BUILD_STATUS.md`: current state and next task.
- `docs/STAKEHOLDER_OUTREACH.md`: consolidated contacts, personalized/general email drafts, shareable overview and provider/DOC questions.
- `docs/outreach/SteadRoute_Stakeholder_Overview.pdf`: the prepared one-page email attachment.
- `docs/STAKEHOLDER_FEEDBACK.md`: outreach attempts, interview findings and change-review template.

Stakeholder nonresponse is not a development dependency. Continue the approved build with documented assumptions, meaningful tests and fictional demonstration records; real deployment and claimed validation retain their actual evidence/authorization requirements.
- `prompts/01-foundation.md`: the first bounded implementation prompt.
- `prompts/00-visual-concepts.md`: the next task, before application implementation.
- `prompts/02-stakeholder-outreach.md`: initialize the separate outreach chat.

## Begin coding

Open the dedicated local project, confirm the folder/instruction setup and then use `prompts/00-visual-concepts.md` in the Build and Prompts chat. Review three concepts and record the owner's selection before running `prompts/01-foundation.md`. No service credentials are included. Configure secrets outside chat when required. Hosting provisioning, paid calls, committing and deployment require separate authorization. Do not create prompt history; keep concise current status and decisions instead.
