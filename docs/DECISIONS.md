# Decisions and later clarifications

## Approved baseline

The full PRD v0.6 and three consolidated review batches are the approved planning baseline. The Google Doc was read on November 24, 2026 and its revision matched the revision imported from the local v0.6 reference:

https://docs.google.com/document/d/12dikmdb5g99__EFmuIsZhWrXC5kCUqMnTXtHHDltuWg/edit

All previously agreed features remain in capstone scope. The owner's instructor approved the build with a stakeholder-outreach contingency. The owner explicitly clarified on November 24, 2026 that development must continue even if stakeholders never respond. Track attempts and findings separately; do not require replies for design, implementation, testing or a fictional capstone demonstration. This does not establish an instructor waiver, external approval, adoption or deployment readiness.

## Conversation clarifications after v0.6

- The participant's intended device experience is a dedicated approved app entry, not finding a public website through Google. The chosen architecture remains a web application demonstrated on a computer. A native package, restricted web view or vendor integration is a future delivery selection requiring validation, not an implemented capability.
- The participant never receives an AI interface. Optional listing extraction assists verified providers and designated reviewers only, with human publication review. Easier onboarding, better maintenance and adoption are hypotheses requiring evidence.
- COIII placement confirmation records coordination and required external approvals; it cannot grant external placement/release authority. The institution's applicable approval route must be validated, not inferred from software roles.
- The core value proof is searching reviewed housing, comparing meaningful cost/policy trade-offs and communicating an informed preference. Demonstrating this journey does not reduce the approved full scope.
- Amber has firsthand experience of restricted research applications and observed housing-information gaps during seven years at Perryville. She did not personally use transitional housing on release. This is a problem-discovery basis, not a completed usability study or evidence that every proposed workflow is permitted.
- At the last explicit outreach-status confirmation, no discussions or partnerships with DOC, providers or tablet vendors had been established. Email drafts, a one-page overview and interview questions were prepared. No sent messages, responses or meetings are documented in this package. Ask for updates or record evidence; do not infer that outreach has happened.

## Technical selections still to make during implementation

Compatible package versions; exact private-storage/scanning/email providers; environment setup; permitted city/ZIP dataset; detailed Prisma types/indexes/migrations and secondary screen layouts. Make routine choices within the approved architecture, document the reason, and surface material cost or behavior changes. Backend adapters do not establish production compatibility.

## External validation still needed

Participant influence and exact placement authority for the intended release pathways; appropriate facility sponsors; provider admission and listing-maintenance burden; DOC and vendor device/network/authentication requirements; privacy/retention obligations and production agreements. Do not represent these as approved or solved by code.

## Owner workflow decisions November 24 2026

- Omit prompt history. Do not create a transcript-style replacement or invoke a prompt-history skill for SteadRoute.
- Earlier order, now superseded by the later November 24 sequence decision below: review three distinct visual concepts before application implementation.
- Recommend tool, model and reasoning/effort level for every task prompt. Retain concise prompts, meaningful tests, evidence-based milestone reports and appropriately timed Git commands/checkpoints.
- Codex and Claude use the same AGENTS.md and project status/decision records. CLAUDE.md imports the shared instructions. The owner can handle stakeholder outreach in parallel with the single active coding lane.
- Extraction and shared instruction setup are authorized. Application implementation, package installation, cloud provisioning, commits, pushes and deployment are not authorized by this setup task.

## Owner clarification on stakeholder nonresponse November 24 2026

- Stakeholder replies, interviews, partnerships and validation are not development dependencies. Keep the complete approved scope moving from the PRD and owner decisions, using explicit assumptions and fictional demonstration records.
- Nonresponse is not approval. Do not fabricate research evidence or imply that instructor, provider or DOC requirements have been waived. Real deployment and actual participation retain their separate authorization requirements.
- The owner created the local project "SteadRoute - Capstone Build" at the correct SteadRoute folder; this was verified through the project list. The Build and Outreach chats had not yet been created according to the owner.
- All previously prepared contacts, inquiry emails, overview and interview questions are consolidated in `STAKEHOLDER_OUTREACH.md`; outreach status and findings stay in `STAKEHOLDER_FEEDBACK.md`.

## Change entry format

Date; source; fact or recommendation; evidence; affected PRD sections; proposed change; owner decision; implementation/test impact. Stakeholder feedback remains a finding until accepted as a product change by the owner.

## Approved revised sequence and tool roles - November 24, 2026

- Source: Amber explicitly accepted the recommended order and requested shared instruction updates and a complete Build & Prompts handoff.
- Supersedes the earlier visual-first gate: foundation first, tested core research journey with provisional accessible UI second, owner review/selection of the existing three concepts third, then expansion across remaining workspaces. Preserve completed previews and their recorded verification. Full approved capstone scope remains unchanged.
- Both project chats are now set up according to Amber. Build & Prompts continues the build journey without requiring a return to setup. BUILD_HANDOFF.md carries the workflow and context.
- Default roles: Codex generates prompts and reviews progress; Amber runs implementation prompts in Claude Code. Either tool may take over either role by explicit handoff for preference or token availability. One active implementation writer, shared AGENTS.md authority and compact status/decision evidence; no prompt history.
- This task authorizes shared documentation/prompt updates only. No application code, staging, commit, push, service provisioning or deployment is authorized by the handoff itself. Inspect actual Git state rather than assuming Amber has committed.
