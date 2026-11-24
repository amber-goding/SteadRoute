# Full scope build plan

The milestones sequence the approved scope. They do not defer features to an unapproved later release. Do not promise a completion date before estimating and checking working progress.

## Approved sequence clarification - November 24, 2026

The owner superseded the earlier design-first prerequisite: complete milestone 1 (foundation), then milestone 2 (tested core research journey with provisional accessible UI), then select a visual direction before expanding across remaining workspaces. All approved features remain in scope. Three interactive previews already exist under docs/design-concepts; preserve them and their recorded checks. After milestone 2, review these with the owner, record selected tokens and component rules, and reconcile the core screens before proceeding to the remaining workspaces. This is a sequence change, not a scope reduction.

## 1 Dedicated project foundation

Create the separate application, verified dependency versions, Express/EJS structure, styles/static assets, configuration validation, Prisma configuration and initial relational foundation. Add the first migration and fictional development seed where a database is available. Keep runtime secrets out of source and logs. Document install, development, start, database and validation commands.

Evidence gate: application starts and serves a real homepage plus health response; unknown routes and server failures behave deliberately; schema/configuration validate; database operations succeed if an authorized development connection is available. Record unverified database behavior honestly if none is configured. No external service provisioning is implied.

## 2 Public housing research and comparison

Implement the approved search-first responsive flow using clearly fictional reviewed catalog fixtures initially. Cover city/ZIP reference points, distance, mandatory weekly cost and all approved policy filters; unknown handling; explicit Apply filters; results, saves where authenticated, full program profiles, internal sources/reports, guided no-results and comparison up to three programs.

Evidence gate: the core search/compare/explain-preference journey works; meaningful filter and conversion checks pass; keyboard and narrow-screen use work. Public listings contain no applicant data. Never treat fixtures as verified real providers or promise real availability.

## 3 Accounts and scoped access

Implement enrollment, agency-scoped DOC sign-in, participant resets/session rules, professional verification/roles/MFA/recovery, current-facility coverage, capability management and shared task queues. Add personal saved programs/workspace. Build reusable authorization services before exposing protected operational routes.

Evidence gate: direct requests cannot cross facility, organization, program or participant boundaries; drafts are not readable merely through staff lookup; suspension and expiry take effect in active sessions; only explicit permissions grant access. Identity corrections retain stable history and block duplicates.

## 4 Provider verification and reviewed catalog operations

Implement invitation/registration, two verification checks and the independent exception route; provider manager/editor/intake groups; colleague suspension/restoration; listing authoring/publication, research provenance, conflicts/unknowns, reports, maintenance ownership, scoped holds and explicit reinstatement. Add controlled form authoring, conditions, sensitive review and versions. Add optional extractor-assisted drafting with evidence and manual entry; keep paid calls separately authorized.

Evidence gate: neither invitations nor AI drafts bypass verification/publication; provider managers do not implicitly receive intake; incomplete facts cannot become confirmed matches. Test every freshness and suspension boundary using explicit clocks.

## 5 Applications assistance documents and exact-version consent

Implement reusable profile, section-based saved applications, common/program-specific questions and required old-form migration. Add assistance approval/expiry/interruption, one editor and reclaim, profile proposals and confirmation. Implement private uploads/type checks/scanning/safe previews and participant attachment review. Create immutable versions, consent, revoke-before-edit, single-use queue entry and duplicate prevention.

Evidence gate: content/file/recipient changes invalidate consent; competing edits and submissions cannot both win; unreadable or unchecked attachments cannot enter approved submissions; the participant controls assistance and data shared. Real document integrations must work or be clearly identified as demonstration-only blockers.

## 6 Reviewed communications and submissions

Implement inquiry topics, fixed message versions, incoming/outgoing review, returns/rejections, approved assisted-review default with configurable independence, different-reviewer reconsideration, follow-up ownership, actual delivery, provider acknowledgment and participant-initiated withdrawal.

Evidence gate: consent, review approval, delivery and acknowledgment remain separate. Failed delivery does not complete a task. Changes require fresh approval. Disablement and overdue/new-submission restrictions preserve permitted existing activity. All reminders use the approved business calendar and actual starting events.

## 7 Offers placement transportation and continuity

Implement versioned provider offers, optional deadlines, Proceed/Decline/Ask responses, coordinated confirmation recording external approvals, independently tracked transportation and ownership takeover. Implement request-and-confirm facility transfer, atomic authority changes, capability re-enablement and handoff queues. Preserve clocks and unchanged approvals within their original boundaries.

Evidence gate: offers and participant acceptance do not independently confirm placement/release; pending transport remains visible; coverage changes and transfers preserve history and deadlines without granting premature access. Withdrawal and material changes never silently reverse coordinated placements.

## 8 Operational completion and demonstration readiness

Connect real nonsensitive notifications, database-backed due jobs/retries, offer reminders, review escalation, listing confirmation/unpublishing, record-specific closure/retention/notices/extensions and deletion handling. Verify logs, controlled administrator recovery and backup/restore behavior against selected services. Finish all workspaces and secondary screen details.

Evidence gate: execute the complete approved fictional end-to-end demonstration and critical negative scenarios. Test the research journey with at least three proxy volunteers, targeting at least two uncoached completions with meaningful trade-offs identified. Label proxy testing and simulated clocks/integrations accurately. Complete a requirements-to-evidence checklist, document remaining external validation and prepare a timed presentation script. Deployment remains separately authorized.

## Outreach alongside every milestone

Outreach is an independent lane, not a prerequisite for any development milestone. The owner approved continued design, coding, testing and fictional end-to-end demonstration even if no stakeholder responds. Follow the PRD and documented owner decisions. Meaningful tests, the visual-selection gate and honest reporting remain in force. Real DOC/device deployment, actual provider enrollment and production data use still need actual authorizations.

The owner can contact stakeholders while the Build chat handles implementation. Record each conversation in `STAKEHOLDER_FEEDBACK.md`. Review findings at milestone boundaries unless a material authority, privacy, consent or feasibility issue directly affects current work; surface those promptly. Update requirements only after the owner's decision. Do not treat silence as approval or a contact listing as a partnership.
