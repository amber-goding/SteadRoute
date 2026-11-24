# SteadRoute PRD v0.6

Approved local baseline: November 20, 2026. Exported for coding context November 24, 2026.

Google Doc: https://docs.google.com/document/d/12dikmdb5g99__EFmuIsZhWrXC5kCUqMnTXtHHDltuWg/edit

Read `DECISIONS.md` for later conversation clarifications. This export retains the source section order, paragraphs, tables and fifteen figures. It is a searchable implementation reference, not a record of implemented behavior.

# SteadRoute Product Requirements

Approved planning baseline and implementation requirements

Product owner Amber Goding | Version 0.6 | November 20 2026

SteadRoute helps people preparing for release research transitional housing, understand trade-offs, and participate in placement planning. Verified providers maintain reviewed listings. Authorized correctional staff support controlled inquiries, applications, and placement coordination.

This PRD defines the approved product requirements, nine fictional user personas, value-oriented stories, working data structure, technical direction, and screen layouts for SteadRoute. The three consolidated review batches were approved on November 20, 2026. Exact package versions and service integrations remain implementation selections. Requirements and wireframes describe intended behavior; they do not establish a working application or approval for deployment.

The complete workflow remains in capstone scope. A future production deployment requires separate partner validation. SteadRoute is a working name, not a claim of trademark clearance.

## Document guide

| Sections | Contents |
| --- | --- |
| 1 to 3 | Problem, scope, users, and permission boundaries |
| 4 to 7 | Accounts, staff coverage, transfers, assistance, and profile editing |
| 8 to 10 | Provider verification, catalog maintenance, research, and comparison |
| 11 to 14 | Forms, consent, review, communications, offers, and placement |
| 15 to 17 | Notifications, retention, and the working data structure |
| 18 to 21 | Verification scenarios, remaining deliverables, findings, and decisions |
| 22 to 26 | Approved technical defaults, lifecycle details, verification goals and wireframe appendix |

## 1 Problem and product purpose

### Finalized problem statement

People preparing for release from incarceration who need transitional housing face barriers to understanding and comparing programs before placement. Information about eligibility, costs, daily rules, restrictions, and support services is often fragmented, incomplete, or difficult to access from inside correctional facilities. This limits their ability to assess available options and communicate informed preferences during placement planning.

A housing placement can provide a place to live while creating barriers to the life a person is trying to build. Program rules, costs, or gaps in support may make it harder to maintain employment, access care, meet family responsibilities, or save for independent housing. Without an opportunity to understand these trade-offs and have their priorities considered, individuals have less influence over a decision that shapes both their daily lives and their ability to move forward after release.

How might we make transitional housing information accessible and understandable before release, so individuals can compare options and meaningfully participate in housing decisions that reflect their needs and goals?

### Product purpose

Provide detailed, comparable housing information and a controlled path from research to inquiry, application, offer, and placement coordination. Participant preferences remain visible throughout that process. Research results support informed decisions; they do not guarantee eligibility, vacancies, admission, funding, or program quality.

## 2 Scope and intended users

The initial catalog covers Arizona reentry-focused transitional housing and sober living programs that accept people returning from incarceration. The data structure remains expandable to other states. Emergency shelters, ordinary rentals, and residential behavioral treatment are outside the initial catalog categories.

The participant experience supports restricted tablets and shared library computers. Public research does not require an account. Personal saving, drafts, communication, and applications use individual participant credentials. Program participation and facility authorization determine whether transactions are available.

| User group | Goals and needs | Constraints |
| --- | --- | --- |
| Participant | Compare housing against current needs and goals; save work; understand and approve what is shared. | Restricted browsing, shared devices, limited documents, changing release plans. |
| COIII | Assist participants; review authorized work; coordinate submissions and follow-up. | Facility scope, coverage needs, participant consent, competing duties. |
| Facility supervisor | Authorize staff, monitor queues, confirm transfers, resolve coverage. | Administrative authority does not grant blanket access to sensitive content. |
| Provider staff | Maintain accurate listings and forms; answer inquiries; evaluate applications and issue offers. | Verified authority, program scope, separate listing and intake permissions. |
| SteadRoute reviewer | Verify providers, review publications and forms, assess reports and reinstatements. | Explicit review permissions; sensitive questions need additional authorization. |
| SteadRoute administrator | Manage controlled professional enrollment, security recovery, and configuration. | Administrative access is not routine permission to read applicant content. |

### User personas and approval status

These nine fictional design personas illustrate the intended user range; five have names and ages. Jordan and Renee were approved on November 19, 2026, and the seven professional personas on November 20, 2026. Names, ages, and circumstances are planning assumptions, not interview findings or additional permissions. Section 3 determines access. Later validation with prospective users remains outstanding.

#### Jordan Ellis age 29 participant

Jordan is preparing for release, uses a facility tablet, and wants to return near a possible job. Housing cost and the ability to start work matter to the search.

Goal and needs: compare confirmed recurring costs, work restrictions, location, and intake requirements; save options and approve a complete application.

Constraints and value: restricted browsing and uncertain release timing make fragmented research difficult. SteadRoute lets Jordan identify trade-offs and communicate an informed preference.

#### Renee Carter age 46 participant

Renee uses shared library computers and is researching housing that supports recovery, continued care, and family contact. She needs to return to saved work between sessions.

Goal and needs: distinguish family accommodation from visitation, compare support and activity restrictions, and obtain help reviewing documents.

Constraints and value: short sessions, incomplete information, and unavailable documents can interrupt planning. Explicit unknowns, saved drafts, and participant-controlled assistance preserve her choices.

#### Morgan Lee age 38 COIII

Morgan supports release planning for several participants and also covers colleagues during absences. Work may begin with someone else and need a clear handoff.

Goal and needs: find in-facility work, assist with permission, identify the approved version, and track provider follow-up.

Constraints and value: limited time and overlapping responsibilities create continuity risks. Shared queues and attributable actions support coverage without shared passwords or repeated preparation.

#### Devon Ruiz age 49 facility supervisor

Devon oversees staff authorization, queue escalation, and receiving-facility transfer confirmation.

Goal and needs: identify unclaimed or overdue work, authorize appropriate coverage, and correct official identity errors through a documented process.

Constraints and value: administrative responsibilities do not justify blanket access to applications. Scoped permissions and handoff records support oversight while limiting unnecessary disclosure.

#### Casey Brooks age 44 provider manager

Casey coordinates a housing program and assigns listing and intake responsibilities to colleagues.

Goal and needs: establish representative authority, maintain current program information, and manage colleague access with clear participation status.

Constraints and value: verification and ongoing updates take effort; management permission does not automatically permit applicant access. Structured onboarding and confirmation reminders make responsibilities explicit.

#### Listing editor generic persona

A provider employee maintains assigned program information and drafts controlled application questions. They do not need to read applicant records.

Goal and needs: enter policies manually or draft from selected public sources, resolve discrepancies, and submit changes for review.

Constraints and value: conflicting or incomplete source information must not become a confident claim. Evidence-linked drafting and explicit unknowns support accurate maintenance.

#### Intake staff generic persona

An authorized provider employee handles program inquiries, applications, and offers for assigned programs.

Goal and needs: see delivered information, answer questions, identify missing requirements, and communicate versioned offers and next steps.

Constraints and value: other programs and a participant's other applications are outside scope. A structured intake workspace keeps the authorized decision and follow-up history together.

#### SteadRoute reviewer generic persona

A designated reviewer handles assigned verification, listing, form, or report cases according to explicit permissions.

Goal and needs: inspect evidence and differences, approve or return with reasons, and assess reinstatement or substantive concerns.

Constraints and value: sensitive-question approval requires extra authority and self-authored forms cannot be self-approved. Review history makes publication decisions explainable.

#### SteadRoute administrator generic persona

An administrator manages controlled role appointments, account recovery, security actions, and configuration.

Goal and needs: manage scoped access, respond to compromise, and maintain versioned operational settings.

Constraints and value: technical responsibility does not imply routine access to applicant content. Administrative controls support operations without making broad content access the default.

### Capstone demonstration boundaries

Use reviewed real research listings alongside clearly fictional provider programs, accounts, applications, attachments, and transactions. Do not send real provider inquiries or applications. Use controlled test inboxes and clearly labeled simulated or shortened reminder clocks. Keep fictional and real records distinguishable. Actual DOC or tablet-provider deployment is a later milestone.

Continued public research after release fits the search model. Transitioning a personal participant account after release, removing DOC access, and routing independent submissions remain open decisions.

## 3 Roles and permission boundaries

| Role or permission | Scope and allowed work | Boundary |
| --- | --- | --- |
| Participant | Own research, profile, drafts, consent, conversations, responses, and withdrawal. | Cannot publish listings or activate submission capabilities. |
| Authorized COIII | Facility coverage; item-approved assistance; permitted review and submission handling; follow-up and placement coordination. | Task ownership alone does not grant sensitive-record access. |
| Supervisor | Staff authorization, capability-management delegation, coverage, transfers, identity corrections, and in-scope recovery. | Rank alone does not grant every application or attachment. |
| Provider manager | Manage authorized program colleagues and organizational responsibilities. | Applicant access requires intake permission separately. |
| Listing editor | Draft and maintain assigned listings and forms. | No applicant access and no bypass of publication review. |
| Intake staff | Handle permitted program inquiries, submitted applications, and offers. | No unrelated programs or other applications by that participant. |
| Designated reviewer | Assigned verification, publication, forms, reports, reinstatement, or other explicitly authorized reviews. | Sensitive-question approval is a separate permission. |
| Administrator | Controlled role authorization, recovery, security action, and configuration. | No automatic routine applicant-content access. |

One person may hold multiple roles using one account. Access assignments specify the permission and its facility, organization, program, or platform scope. All record requests, including direct links and attachments, require server-side authorization.

Supervisors authorize designated COIIIs to enable inquiries and applications independently for participants at their facility. Primary COIII assignment supports continuity; any appropriately authorized facility COIII can help without reassignment.

## 4 Participant enrollment and sign in

Staff assist enrollment and facility identity verification. Participants choose their own password. Accounts do not require a personal email address, phone, or access to external websites. The staff enrollment process must not create shared credentials.

| Setting | Approved requirement |
| --- | --- |
| Username | DOC number stored as text, preserving leading zeros and letters. Pair it with issuing agency internally; use a separate permanent account ID. |
| Password | 8 to 64 characters; allow spaces and passphrases, block common or compromised values, limit guessing, and avoid routine forced rotation. |
| Activation | Single-use activation code valid for 24 hours. |
| Password reset | Staff-assisted after facility identity verification. Single-use reset code valid for 15 minutes. |
| Code replacement | Invalidate previous code. Five incorrect code attempts invalidate that code rather than automatically disabling the account. |
| Reset identity evidence | Do not use a DOB-and-tablet-PIN self-service reset. Do not collect the tablet PIN. |
| Participant session | 5-minute inactivity limit; 60-second warning; 2-hour absolute limit; no remember-me option. |
| Session behavior | Meaningful activity can reset idle time; background saving cannot. Enforce expiration on the server and preserve confirmed draft saves. |

The 8-character minimum is an explicitly approved usability choice. It does not establish that future deployment partners will accept the policy. Use facility-specific sign-in links that establish the issuing agency; implement the sign-in screen against this rule.

## 5 Professional enrollment authentication and recovery

| Professional user | Account and role route |
| --- | --- |
| COIII and other DOC staff | Invitation by an authorized facility supervisor; verified organizational email and facility-scoped permission assignment. |
| Facility supervisor | Verification and appointment by a designated SteadRoute administrator, including additional supervisors. |
| Provider representative | Invitation or registration request; identical organization-legitimacy and individual-authority verification. |
| SteadRoute reviewer | Administrator invitation and explicit reviewer assignment; separate sensitive-question authority. |

Account creation, email verification, and accepting an invitation do not themselves grant operational access. Pending users can complete enrollment and verification only. An invitation cannot bypass verification, exceed the inviter's authority, or restore suspended access.

### Authentication and recovery

Every professional account requires a 12-to-64-character password plus an authenticator-app code. Allow spaces and passphrases, block common passwords, and avoid mandatory character combinations or routine rotation. Confirm authenticator setup before operational access. Protect secrets server-side and limit invalid attempts. Participant passwords remain 8 to 64 characters.

Provide single-use recovery codes during setup. A code replaces the authenticator factor for one sign-in, not the password. Store protected representations, and invalidate old codes when replacements are generated. Do not log readable codes, passwords, or authenticator secrets.

Email password-reset links expire after 15 minutes, are single-use, and are replaced by newer links. A successful password reset ends existing sessions. Requests return the same response for existing and nonexistent addresses, with attempt limits. A password reset cannot remove the authenticator requirement.

Lost-email or lost-authenticator recovery requires independent re-verification. Facility supervisors authorize COIII recovery; designated administrators authorize supervisor and reviewer recovery; authorized provider verifiers re-establish provider authority. Verify a replacement email before use. Lost-authenticator recovery invalidates the old authenticator, recovery codes, and sessions, then requires fresh authenticator setup. Recovery never removes suspensions or grants new roles. Administrator recovery requires a separately verified operator; the account holder cannot approve their own recovery. See Section 22.

### Professional sessions

Use a 15-minute inactivity timeout with a 60-second warning and an 8-hour absolute session limit. Full password and authenticator sign-in is required after the absolute limit. No persistent sign-in or trusted-device bypass in the initial build. Background activity does not extend sessions. Display failed saves honestly and recheck permissions after sign-in.

Authorized administrators can configure timeouts for testing and future facility requirements. Record who changed a setting, its scope, reason, and effective time. Keep test and production configuration separate. A facility-specific policy applies to its DOC workspace; users cannot change their own policy.

## 6 Staff access coverage and facility transfers

### Suspension leave and reassignment

A facility supervisor can suspend a COIII assignment immediately and explicitly restore it after checking current authority and recording a reason. A designated administrator suspends or restores supervisor assignments and can suspend an entire account for suspected compromise. Assignment suspension preserves unrelated roles; account suspension blocks all access and invalidates sessions.

Affected outstanding responsibilities enter shared coverage with supervisor notification. Restoration does not automatically reclaim handed-off tasks. Leave can trigger task handoff without suspension. Reassignment ends the old facility assignment and requires separate authorization for the new one. Preserve historical attribution.

### Facility transfer

An authorized current-facility COIII requests a transfer. A receiving-facility supervisor can see only the identifying information needed to assess it and confirms arrival. The originating facility retains responsibility until confirmation; pending requests do not expose applications, messages, or files to the receiving facility.

Only one transfer request may be pending. Originating authorized staff may cancel; the receiving supervisor may return or reject with a reason. A completed transfer requires a supervisor correction with a recorded reason rather than rewriting history.

Confirmation changes the current facility, ends previous-facility routine coverage and the primary COIII assignment, disables new inquiries and applications, and routes outstanding work to the receiving facility's handoff queue together. If these changes fail, the transfer remains pending. Preserve the account, saved programs, drafts, applications, consent, and history. A receiving-facility authorized COIII must re-enable each new-submission capability. Do not restart deadlines.

An unchanged approval awaiting queue submission retains only its remaining original 24-hour window. Staff at the receiving facility can submit after capability re-enablement. Materially changed content requires fresh consent. An unchanged item already submitted into review keeps its authorization and original review clock and moves to the receiving queue. Existing responses and withdrawal remain available under established review rules.

### Shared work queues

Each task has one owner or is explicitly unassigned. Authorized facility COIIIs can claim or take over work with a brief reason; notify the previous owner and preserve the handoff history. Colleagues can help without ownership changes. Supervisors may reassign. Concurrent claims allow only one winner. Ownership never changes deadlines, permissions, consent, or review-independence rules.

Routine participant lookup shows name, DOC number, primary COIII, and account status within the authorized facility. Queue previews show participant identifier, task type, owner, deadline, status, and urgency. Relevant submitted applications and messages can be opened through an authorized task or review workflow, with access logged. Task ownership alone grants no permission. Personal drafts still require participant-approved assistance.

Sensitive-record access logs require separate oversight permission. Authorized facility supervisors may inspect logs within their facility; designated SteadRoute oversight reviewers may inspect assigned investigations. Supervisor or technical administrator status alone grants neither log access nor the underlying content. Log actor, record, time, action and permission context without copying content or secrets.

## 7 Assistance profile control and identity corrections

### Participant approved assistance

A COIII requests help access to a specific item with a stated purpose. The participant sees the staff member, item, and access requested, then approves or declines from their own session. Pending requests grant nothing. Use the established witnessed-consent exception where applicable.

An approved assistance session lasts 30 minutes with a five-minute warning. Extension requires fresh approval. Either person can end it. Transfer, suspension, or loss of staff authority ends access immediately. Duration is configurable after testing. Staff work under their own account, with attributable actions.

Assistance does not authorize submission or saving staff changes to the reusable profile. It permits only approved item-specific work, including authorized draft edits and document uploads.

### Assistance interruptions and sign out

Intentional sign-out by either person ends assistance and requires fresh participant approval to begin again. Automatic expiration of a required login session pauses assistance access rather than renewing or canceling its original approval. The affected person must sign back in before resumption; recheck the same account, current permissions, item scope, and remaining approval time. No assisted access or editing is allowed while required authentication is missing.

Temporary connection loss preserves confirmed saves. Before resuming, recheck authentication, permissions, editing control, current draft revision, and the remaining approval window. An interruption never restarts or extends the original 30-minute deadline. Expiration of that deadline ends assistance and requires fresh approval.

Transfer, suspension, or loss of staff authorization ends assistance immediately; signing back in cannot restore the ended grant. Record pauses, resumptions, and endings with reason and time. The witnessed-assistance route retains its separately authorized record without introducing a participant-login requirement that the exception was intended to accommodate. Staff authentication remains required.

### One active draft editor

Participant and assisting COIII may view the draft, but only one may edit. The participant initially retains editing control, explicitly hands it over, and can reclaim it at any time. Identify the editor in both views. Ending assistance stops staff editing. Check editor authority and content revision at every save, reject outdated saves, and distinguish confirmed from unsaved work. Reconnection requires a fresh check. Unresolved save conflicts block final approval.

### Reusable profile editing

Participants can update personal planning information. Staff may propose changes during approved assistance, but the saved profile remains unchanged until participant confirmation. Show current and proposed values and allow individual acceptance or decline. Use digital confirmation or the established witnessed route. If underlying values change first, require review of the refreshed proposal. Record proposer and confirmer.

Application-specific edits remain in that draft. Profile changes do not update existing drafts or submitted records automatically; copying refreshed values into a draft is explicit and reviewed. Research preferences remain temporary unless saved or shared intentionally.

### Official identity corrections

Participants or COIIIs can flag errors. An authorized current-facility supervisor verifies and applies official identity corrections, recording the method and reason. Check the corrected agency-and-DOC-number combination for another account. A conflict blocks correction pending investigation; never automatically merge accounts.

Keep the permanent account ID and history. A changed sign-in identifier ends existing sessions; staff explain the new identifier. Keep the password unless separately reset. Preserve historical submitted versions and coordinate corrections affecting active applications, offers, or placements. Current facility and primary COIII changes use their approved workflows.

## 8 Provider verification and publication control

Support both provider-managed listings and reviewed research listings. Label their provenance. Only participating verified providers with approved configuration receive inquiries or applications. Research listings can support comparison before provider participation; source evidence is not a claim of direct provider confirmation.

Require two checks: organization or program legitimacy, and the applicant's authority to represent it. An EIN or identifier supports the first check but does not establish the second. Confirm authority through independently established organizational contacts. When standard evidence is unavailable, a different second reviewer must authorize the exception; neither check is waived. Record legitimacy evidence, the independently established authority contact, reviewer, date, and any second-reviewer exception; see Section 22.

Managers, listing editors, and intake staff are separate permission groups and can be combined explicitly. Program managers can immediately suspend colleagues within their scope; reviewer approval is required to restore provider access. Invitations cannot circumvent suspension.

If no active verified representative remains, keep otherwise eligible fresh program information searchable while pausing provider interactions and new submissions. Hold undelivered transactions and notify responsible reviewers and staff. Preserve existing records. This participation pause does not itself certify or discredit housing quality; substantive safety concerns use the separate hold workflow.

### Listing requirements and conflicts

Incomplete listings may publish after review when minimum identity, Arizona location, category, reentry acceptance, and legitimate contact or source details are confirmed. Mark missing fields as Not yet confirmed. Unknown values never become zero cost, unrestricted access, or a confirmed filter match.

Verified providers resolve their own policy conflicts with attributable explanations, subject to publication review. Research listings require supporting evidence or clarification; unresolved facts remain unknown. Preserve source and field history.

### Optional AI assisted drafting

Verified program managers and designated reviewers may draft listings from up to five explicitly selected public pages per session. The limit is provisional after testing. Retain manual entry and human publication review. No automatic crawling or live publication overwrite.

Validate URLs and redirects, block private or internal destinations, and clearly report partial retrieval failures. Preserve the original suggestion, reviewed value, source excerpt, URL, retrieval date, and reviewer decision. Matching an excerpt does not prove interpretation. Missing information stays unknown. Do not send applications or applicant documents to the listing-drafting AI.

## 9 Listing maintenance and review holds

| Event | Approved behavior |
| --- | --- |
| Valid provider confirmation | Start the freshness clock from the last valid confirmation of currently published information. |
| Day 30 | Request a review or explicit confirmation. |
| Days 37 44 51 and 58 | Send weekly overdue reminders until valid confirmation or unpublishing. |
| Day 60 | Temporarily unpublish if no valid confirmation has occurred. |
| Research listing | Use the same 30-day request and 60-day unpublishing schedule from a completed human review. Publishing reviewer is initial maintenance owner; shared takeover is available. |
| Reinstatement | Always requires explicit reviewer action, even when removal was solely overdue confirmation. |

Email opening, sign-in, draft edits, AI extraction, and incomplete checks do not count as confirmation. Pending changes do not refresh an outdated published version. Preserve field-level dates. Restoration cannot use an already-expired confirmation or leave substantive concerns unresolved; the clock follows valid review or confirmation, not the restore click.

Overdue information blocks new submissions and holds undelivered queued items. Existing delivered activity continues. Authorized COIIIs may report substantive concerns; designated SteadRoute reviewers place scoped substantive holds and explicitly clear them after assessment. Account-security suspension remains a designated administrator function. Preserve records, notify responsible staff, and do not automatically cancel placements.

Users report issues internally using the affected field, reason, and optional explanation without uploading attachments or unnecessary personal information. Reporting does not depend on inquiry activation. Reviewer assessment precedes publication or access changes. Track receipt, assessment, and resolution; do not automatically disclose reporter identity to the provider.

Material changes to eligibility, costs, rules, or services notify affected active applicants and staff. Preserve original records. Offers and placements require coordination rather than automatic cancellation or silent substitution of new terms.

## 10 Research search comparison and program profiles

### Search and navigation

Use a search-first homepage with role-based workspaces after sign-in. Support responsive layouts, role switching for authorized accounts, and server-side access checks. On wide screens, place filters beside result cards. On small screens, keep city or ZIP and radius prominent with a filter panel. Apply filters explicitly; distinguish pending from applied choices, preserve state on failure, and discard unapplied changes on cancel.

Search by city or ZIP within 5, 10, 25, or 50 miles. Explain that distance is approximate straight-line distance from the selected city or ZIP representative point, not its boundary or a driving route. Use stored public or appropriately generalized coordinates. Do not request tablet GPS or silently use the correctional facility as the destination. Unknown distance cannot satisfy a radius filter. Initial results remain Arizona-only.

Sort nearest first when a destination is supplied; otherwise alphabetically. Offer program name, cost, and review-recency alternatives. Do not introduce paid ranking or an unexplained best-match score. Use clear labels for nearest, program name, weekly cost, and most recently reviewed. Break equal values by program name and then stable program-location ID. Keep unknown cost or review dates after known values in the applicable alternative sort; unknown distance cannot satisfy a radius filter.

### Costs and filters

| Filter area | Required interpretation |
| --- | --- |
| Weekly budget | Compare mandatory recurring housing costs. Daily × 7; every two weeks ÷ 2; every four weeks ÷ 4; calendar month × 12 ÷ 52. Show original billing, upfront deposits, and additional charges separately. |
| Variable or incomplete prices | Use a confirmed applicable range upper bound. Missing mandatory charges or an unconfirmed income-based quote cannot match a strict budget. Do not subtract uncertain aid. Preserve per-person versus household basis. |
| Restrictions | Use activity-specific restrictions and maximum acceptable waiting periods for employment, outings, visitors, and phone use. Zero means confirmed unrestricted; conditional or indefinite periods need clear treatment. |
| Family | Distinguish household accommodation from visitation. Support participant alone, children, partner, or other household needs, with relevant counts or age bands rather than names or birth dates. Show childcare, parenting, and reunification support distinctly. |
| Employment | Distinguish a job required before entry, permitted start timing, evening/overnight/weekend/variable shifts, and assistance or training. Show limitations and exceptions. |
| Transportation | Distinguish work rides, appointment rides, transit passes, and nearby public transit. Show costs, destinations, and restrictions; do not promise route suitability. |
| Accessibility | Filter individual confirmed features such as step-free entry, ground-floor access, elevator, bathroom features, and communication accommodations. Do not infer broad compliance or diagnoses. |
| Financial assistance | Distinguish housing-cost grants or assistance, payment arrangements, and insurance for specific services. A documented housing-assistance option does not guarantee individual funding or reduce the budget automatically. |
| Intake status | Accepting applications, waitlist only, not accepting, or unknown. The accepting-applications filter excludes the other three; acceptance does not establish a vacancy. |

Household, employment, and accessibility research details remain temporary unless explicitly saved or shared. Applying a search preference does not transmit it to a provider. Eligibility and service facts needed for confirmed matching must remain distinguishable from unknown values.

### Results comparison and detail

Cards show program name, category, city, approximate distance, recurring and upfront cost, relevant restrictions and services, listing type and review date, and View, Save, and Compare actions. Inquiries and applications begin inside the full program profile.

Compare up to three programs. Use side-by-side columns on wider screens and topic-by-topic stacking on smaller screens. Explain conditions, missing values, and sources. Adding a fourth prompts replacement; preserve search selections and explain unavailable listings.

Use one program-profile page with section navigation: overview; eligibility; costs; daily rules; services and accessibility; questions and applications; sources and reporting. Restricted participant views show non-clickable external references and source evidence inside SteadRoute, without a browser-navigation bypass.

No-results screens preserve criteria and offer explicit user-selected broadening. Do not silently relax filters or count unpublished programs. Explain that no published programs match all selected criteria; allow intentional inclusion of unknown information without treating it as confirmed.

## 11 Application profiles forms and attachments

### Reusable common core

Use a reusable profile with common information and program-specific questions. Official enrollment identity is staff-controlled. Common planning fields include preferred name, release-date estimate or confirmation, destination, employment plans, transportation, general ability to pay, and optional postrelease contact or language needs. Do not collect SSNs, detailed clinical history, or DOB by default merely to populate a common profile.

Copy selected values into each application draft with participant review. A provider sees only the reviewed and submitted version, never the live reusable profile. Profile changes do not rewrite prior drafts or submissions.

### Controlled form builder

Allow short and long text, single and multiple choice, yes/no/unsure, dates or ranges, numbers and currency, address or location fields, controlled document requests, and versioned acknowledgments. Support simple conditional questions, with every branch reviewed. Do not allow arbitrary HTML, scripts, embedded external forms, or provider-defined executable calculations.

A designated SteadRoute reviewer approves forms before publication; sensitive questions require a separate permission, documented housing-related purpose, and minimum necessary information. Provider verification alone does not authorize collection. An author cannot approve their own form. Every published change creates a reviewed version.

Preserve unfinished drafts on their original form version while that version remains accepted. If the old version is no longer accepted, explain the change and require guided migration. Carry compatible answers forward for participant review, identify new or changed questions, and preserve prior records. Changed submission content requires fresh consent. Do not silently map incompatible answers or overwrite submitted versions.

### Application experience

Use sections for requirements, common-core review, program questions, staff-supported documents, and a dedicated final review. Save incomplete drafts and preserve entered answers. Identify missing or blocked sections without misleading completion percentages.

Allow multiple concurrent applications but only one active application per participant, program, and location, including waitlisted applications. Resume the existing record and prevent concurrent duplicate creation. Do not reveal other applications to providers or automatically withdraw them after an offer.

### Staff assisted uploads

Initial uploads are staff-assisted within approved assistance. Use private storage with PDF, JPEG, or PNG files, initially up to five files per application and 10 MB per file. Validate actual type, malware scan, and safely preview before participant approval; pending or failed checks block submission. Limits are configurable for reviewed program requirements. Participants review actual attachment content before approval; filenames alone are insufficient. Unreadable or unavailable content remains pending. Use digital or applicable witnessed confirmation. Files are application-specific rather than a reusable document vault. Do not feed files into listing AI or expose arbitrary external file links.

## 12 Consent locked versions and submission review

### Exact version approval

Final review creates a fixed version identifying the recipient, answers, form version, and attachment versions. Participant consent authorizes that exact content. A digital confirmation is preferred. Any authorized COIII at the current facility may submit that unchanged version within 24 hours after approval, subject to all current capability and provider checks.

The 24-hour limit is the window to enter the item into facility review. If submitted in time, unchanged consent remains valid through review and delivery delays. Approval is single-use and cannot authorize altered content or a different recipient.

### Locked approved version

Lock approved content. Selecting Make changes revokes unused approval and opens an editable draft with the approved content. Require a new final review and fresh consent for the revised version. Only one version can be authorized for submission at a time. Block attempts to submit a revoked version.

Resolve simultaneous editing and submission so only the first completed action succeeds, and explain the result. Once queued, changes follow cancellation or return-and-resubmit rules. Unresolved save conflicts block approval. The approved snapshot must reflect confirmed saves.

### Witnessed exception

When the participant can make an informed choice but cannot reasonably confirm digitally, an independent different authorized staff member directly witnesses approval after the exact content is shown or read. Record the method, reason, witness, and version. Absence, refusal, inability to understand, or staffing shortage do not substitute for consent. A forgotten password normally follows reset.

### Submission gates

New submission requires an active authorized account, facility capability, participant capability, eligible participating provider, valid form where applicable, unchanged consent, and applicable review. Capability changes do not erase drafts or automatically stop permitted existing-activity responses. Safety or security holds can restrict affected exchanges.

### Review independence

By default, an authorized COIII with the required review permission may review an unchanged submission they helped prepare after the participant has separately approved the exact version. Assistance alone does not grant review permission. The review is not exclusively reserved for the assisting COIII; another authorized facility reviewer can take over without restarting the deadline.

Facilities may require an independent reviewer through controlled policy configuration. Enforce the current facility policy when assigning and completing a review. If independent review is required and no eligible different reviewer is available, keep the item pending and use the existing supervisor escalation route; do not bypass the requirement.

Witnessed consent still requires a separate authorized staff member; the assisting COIII cannot witness their own assistance. Reconsideration requires a different authorized reviewer. A complaint involving the assisting or reviewing staff member routes to a different authorized reviewer or supervisor. Form authors cannot approve their own forms.

If correction is needed, return the item rather than editing and sending it under existing consent. Changed content requires fresh participant approval. Record the assisting staff, participant approval, any witness, and reviewer separately, and make any assistance-and-review overlap visible in restricted review history.

## 13 Inquiries reviews withdrawal and reconsideration

Inquiries use a topic-and-question form. Reviewed follow-ups stay in the same conversation. Distinguish drafting, consent, review, delivery, provider receipt, and response rather than implying immediate communication. Incoming and outgoing communications follow the authorized review route.

Review checks authority, consent, configured communication rules, disclosure, and completeness. Outcomes are approve, return for correction, or reject, each with clear reasons. Reviewers do not silently rewrite participant statements or veto housing preferences. Reports of abuse must not automatically be treated as abusive messages.

| Clock or action | Approved behavior |
| --- | --- |
| Facility review | Target two business days. Reminder after one business day; supervisor escalation after two. Values adjustable after testing. |
| Review clock | Starts at queue entry. Claiming or opening does not restart it. Track correction waits separately; resubmission starts a new interval with history retained. Holds do not erase elapsed time or cause auto-approval. |
| Provider acknowledgment | Reminder after five business days from actual delivery. |
| Provider follow-up | At ten business days without meaningful progress, create or escalate staff follow-up. Continue weekly unresolved follow-up; track provider next-action dates. |
| Follow-up owner | Primary COIII initially; authorized facility colleagues can take over. Missing eligible owner routes to an unassigned queue and supervisor. |
| Reconsideration | One open request per decision, evaluated by a different authorized reviewer. Preserve the original decision, reason, outcome, and any current hold. |

Participant or provider reconsideration uses an internal route independent of new-submission activation. If no different reviewer is available, coordinate through supervision; do not automatically overturn a decision. Business-day clocks use Monday through Friday, excluding configured holidays, in the responsible facility time zone, initially America/Phoenix. Treat receipt or actual delivery date as day zero; the due time is 5 PM on the relevant later business day. Transfers preserve existing deadlines. The elapsed 24-hour consent window and provider-specified offer deadlines are unchanged.

### Participant initiated withdrawal

A participant may initiate withdrawal without COIII permission, including when new submissions are disabled. Before delivery, cancel or revoke and prevent transmission, including concurrent delivery attempts. After delivery, record the request immediately and route the provider-facing structured notification through review. An optional reason is not required for withdrawal.

Distinguish requested, delivered, and acknowledged withdrawal. Do not promise recall of delivered records. Withdrawal does not automatically reverse a confirmed placement; coordination remains necessary.

## 14 Offers placement and transportation

Authorized provider intake staff issue versioned offers with terms, conditions, arrival information, and an optional deadline and time zone. Participants can Proceed, Decline, or Ask a question. Proceed is not placement confirmation. Record a decline immediately and review its provider-facing notification. Existing-offer responses remain available when new applications are disabled unless an applicable hold intervenes.

Record participant response time, review time, and delivery time separately. Optional deadlines produce reminders and overdue flags; a passed deadline requires provider confirmation of availability, not automatic withdrawal or assumed acceptance. Providers explicitly extend, revise, or withdraw offers. Material revisions require renewed coordination. Send reminders 48 and 24 hours before future deadlines, skip passed reminder times, and flag once when overdue.

An authorized COIII confirms placement after coordinating with participant and provider and completing applicable external authorization steps. SteadRoute does not replace DOC release or placement authority. Do not automatically withdraw other applications after an offer.

Placement can be confirmed while transportation is pending. Show the unresolved task prominently. Transportation has Pending, Arranged, and Completed states; identify costs, coordination requirements, and conflicts with arrival needs. Pending transport does not automatically cancel a placement.

The confirming COIII initially owns placement tasks. Another authorized facility COIII can take over with history. Primary COIII assignment is not changed merely by task takeover. When an owner loses authority, route work to shared coverage and supervision.

## 15 Notifications and retention

### Notifications

DOC staff receive in-app notifications and organizational email alerts. Email contains no participant name, DOC number, answers, document content, or sensitive details. Links require sign-in and a fresh permission check. Opening an email does not complete a task. Stop reminders when the triggering obligation is resolved or no longer applicable. Use controlled inboxes for demonstrations. Participants receive in-app notices; verified professional contacts receive in-app notices and nonsensitive email alerts.

### Retention clocks

| Record category | Approved period and starting event |
| --- | --- |
| Reusable participant profile | 90 days after explicit account closure; release or transfer alone does not close it. |
| Unsubmitted draft | 90 days after the last deliberate edit. |
| Canceled never-submitted draft | 30 days after cancellation. |
| Submitted attachments | 90 days after formal application closure. |
| Submitted application content | 12 months after formal application closure. |
| Minimal consent and action history | 24 months after formal application closure. |

Formal closure records a final outcome with no unresolved follow-up. A placement with pending transportation is not closed. After 180 days of inactivity, create a review task rather than deleting or closing automatically. Give advance notices 14 and 3 days before scheduled deletion, using participant in-app notices and nonsensitive staff email.

Allow authorized, reasoned retention extensions with a new deadline. Delete associated previews and temporary copies. Inquiry and message content is retained for 12 months after explicit conversation closure; minimal consent and review history for 24 months after the related case closes; verification evidence for 24 months after the provider relationship or rejected request closes. Apply established advance notices and reasoned extensions. Production obligations and backup operations require separate validation. Do not promise deletion of copies already held by providers.

A participant or provider may request reopening; an authorized facility COIII approves with a reason. Preserve the prior closure. Do not restore deleted files or reuse consent. A materially different request requires a new application. A later formal closure starts applicable new clocks; a message alone cannot reset retention.

## 16 Working relational table map

The approved map is a working logical structure, not a finalized migration plan. The original 33 tables remain, with Facility transfers and Identity correction requests added through subsequent approved workflows. Authentication, saved programs, draft proposals, and ownership history need supporting records. Those additions are not silently treated as already-designed tables.

Accounts connect to permissions and participant profiles. Organizations operate programs at locations. Listings and forms have versions. Participants create drafts; fixed submission versions connect to consent, attachments, and review. Delivered activity connects to conversations, offers, placements, tasks, and notifications. Internal IDs connect records; DOC numbers do not serve as foreign keys.

| Table | Essential content and connections |
| --- | --- |
| 1 Accounts | Person identity, credentials reference, category, status. Connects to access assignments and participant profile. |
| 2 Facilities | Agency, facility identity, location, status, enabled features. Connects to staff scope and participants. |
| 3 Organizations | Provider identity, established contacts, supporting identifiers, status. Parent of programs and verification cases. |
| 4 Access assignments | Account, permission, valid scope, status, authority, dates. Controls all role-based actions. |
| 5 Participant profiles | Account, current facility, primary COIII, confirmed reusable planning information. |
| 6 Participant capabilities | Participant and facility, inquiry/application flags, authorizing actor and reason. |
| 7 Programs | Organization, name, category. Connects to program locations and provider scope. |
| 8 Locations | Physical location and permitted public address or coordinates; protect confidential details. |
| 9 Program locations | Program-location link, participation and interaction configuration. Target for matching and duplicate prevention. |
| 10 Listing versions | Structured published facts, known/unknown state, publication and freshness dates, program-location link. |
| 11 Source evidence | Listing field, source URL/excerpt, confirmation or retrieval date and actor; separates original and reviewed values. |
| 12 Provider verification cases | Applicant, organization and program scope, legitimacy and authority evidence, exception review and decision. |
| 13 Form versions | Program configuration, questions, conditions, sensitive approvals and publication version. |
| 14 Applications | Participant, program-location target, lifecycle, responsible facility, closure and current version references. |
| 15 Application drafts | Editable answers, form version, save revision, current editor, deliberate-edit date. |
| 16 Application versions | Fixed answers, recipient, form/listing references, snapshot creation and submission times. |
| 17 Files | Protected file/version reference, uploader, type, checks, deletion schedule and status. |
| 18 Version attachments | Exact application version to exact file version; preserves what was approved. |
| 19 Consent records | Exact item/version and recipient, participant, method, witness, approval/expiration, revocation and use. |
| 20 Review cases | Reviewed item, queue, facility, owner, status, clock, hold and reconsideration relationship. |
| 21 Review decisions | Case, reviewer, fixed item version, outcome, reason and timestamp. |
| 22 Offers | Application, provider, fixed terms/version, conditions, arrival and optional deadline. |
| 23 Offer responses | Exact offer version, participant response, actor, coordination and time. |
| 24 Placements | Application/offer, confirming COIII, coordination, arrival and placement status. |
| 25 Conversations | Participant, program, topic, related application/offer, status. |
| 26 Messages | Conversation, author, lifecycle and current version reference. |
| 27 Message versions | Fixed message content, consent/review and delivery references. Editable message drafts and fixed delivered versions are separated as specified in Section 23. |
| 28 Assistance sessions | Participant, COIII, selected item, purpose, approval, expiry, status and ending reason. |
| 29 Tasks | Related item, responsible facility, one owner, deadline, status and ownership history connection. |
| 30 Notifications | Recipient, event, channel, related record, send status and deduplication reference. |
| 31 Listing reports | Reporter, affected listing/field, reason, assessment and resolution. |
| 32 Action history | Actor, minimal action/record identifiers, time and workflow context; no copied secrets or content. |
| 33 Policy settings | Rule, scope, version, effective time, administrator and reason. |
| 34 Facility transfers | Participant, origin/destination, request, arrival confirmation, state, actor/time and correction reference. |
| 35 Identity correction requests | Participant, affected values, proposer, supervisor, verification method, outcome and timestamps. |

Additional supporting structures are needed for invitations, activation/reset tokens, sessions, authenticator recovery, saved programs, pending profile changes, and task ownership history. Their final table boundaries remain design work. Searchable listing facts need explicit queryable fields; flexible form questions and answers may use structured content. PostgreSQL on Neon and Prisma are approved. Section 23 defines supporting records and integrity requirements; final indexes and migrations are implementation detail.

## 17 Essential people and permissions fields

All six core tables have an internal ID and creation/update timestamps. Store credentials and authentication support data with appropriate separation and protection. The following fields are approved working requirements, not final database types.

| Table | Essential fields | Relationships and constraints |
| --- | --- | --- |
| Accounts | Account ID; display name; participant/professional category; issuing agency and DOC number; organizational email and verification; password hash; status; activation and closure dates. | Agency + DOC number unique when present. One account may have many assignments; a participant account has one profile. Keep activation/reset/session support out of the profile. |
| Facilities | Facility ID; agency identifier; facility name/code; city/state; status; facility inquiry and application settings. | One facility has many current participants and staff assignments. Facility settings do not replace individual capability checks. |
| Organizations | Organization ID; legal/public name; organization type; website; independently established contacts; EIN when applicable; status. | One organization has many programs and verification cases. No requirement for an active representative before a reviewed research listing exists. |
| Access assignments | Assignment ID; account; permission group; scope type and ID; status; effective dates; granting actor/time; suspension/revocation actor, reason and time; verification reference. | Role and scope combination must be valid. Multiple roles are explicit. Provider-manager authority does not imply intake access. |
| Participant profiles | Profile/account IDs; current facility; primary COIII; preferred name; release date and certainty; optional destination; confirmed common planning fields; last updating actor. | Primary COIII must have current facility authority or be unassigned. Profile is not provider-visible. Temporary searches are not automatically stored. |
| Participant capabilities | Capability ID; participant; facility; inquiry flag; application flag; changing actor/time; reason. | One current record per participant/current facility, with historical changes preserved. Transfer requires re-enablement; enabling is not consent. |

### Additional workflow fields

Facility transfers record request and resolution actors/times, arrival confirmation, statuses Pending, Confirmed, Canceled, Returned, or Rejected, and correction references. Identity requests preserve restricted proposed values and verification reasons. Assistance records preserve item scope and approval. Drafts carry editor authority and content revisions. Task ownership changes preserve previous owner, new owner, acting staff member, reason, and time.

Pending staff profile proposals must not overwrite confirmed profile values. Store reviewed revisions, proposed values and participant decisions as specified in Section 23. A current-facility change must update access, capabilities, and handoff responsibilities together.

## 18 User stories and verification scenarios

These scenarios translate approved behavior into observable checks. They are intended acceptance criteria, not completed tests. Use the screen layouts and supplemental stories in Sections 24 and 26 to derive detailed implementation test cases.

### AC01 Participant research

As a participant, I want to compare programs against my needs before deciding where to apply.

Acceptance: Apply city/ZIP, radius, budget, and policy filters. Only confirmed matching facts satisfy strict filters; unknowns remain visible as unknown. Compare two or three programs and preserve the search when returning.

### AC02 Participant privacy

As a participant, I want research preferences kept separate from information I share.

Acceptance: Changing a temporary family, work, or accessibility preference does not update a profile or application. Saving or copying requires an explicit action. A provider cannot read the reusable profile.

### AC03 Enrollment and reset

As a participant, I want individual credentials without needing personal email.

Acceptance: Staff-assisted activation creates individual access. Expired/replaced codes fail. Reset does not request the tablet PIN. Corrected sign-in IDs preserve history and invalidate sessions.

### AC04 Assistance and editing

As a participant, I want control over staff help.

Acceptance: Pending assistance grants no access. Approved help expires after 30 minutes. Intentional sign-out ends it; automatic login expiry pauses access until required sign-in and authorization checks succeed within the original window. Connection loss preserves confirmed saves and requires fresh editing/revision checks. Transfer or lost authority ends the grant. Participant handoff and reclaim change editing authority; old saves are rejected. Staff profile proposals remain pending until confirmed.

### AC05 Consent and changes

As a participant, I want only my approved version sent.

Acceptance: Approval fixes answers, recipient, and attachments. Make changes revokes unused approval. A late, changed, revoked, or previously used approval cannot authorize a new queue submission.

### AC06 Facility submission

As an authorized COIII, I want to submit approved work for participants at my facility.

Acceptance: Check role, current facility, provider participation, capability, exact version, and consent on submission. Another authorized facility COIII can submit unchanged approved work without reassignment.

### AC07 Transfer

As a receiving supervisor, I want confirmed arrival to transfer responsibility safely.

Acceptance: Pending transfers expose limited identity only. Confirmation changes coverage, disables new submissions, and creates handoffs together. Existing deadlines and unchanged consent remain; old facility routine access ends.

### AC08 Shared coverage

As a COIII, I want to take over work without losing its history.

Acceptance: Only one concurrent claim succeeds. Takeover records a reason and notifies the previous owner. Ownership does not change deadline, consent, or sensitive access rights.

### AC09 Professional security

As an authorized professional, I want protected access and recoverable credentials.

Acceptance: Require password and authenticator before operational use. Recovery codes are single-use; password resets do not remove the second factor. Expiration, suspension, and revocation are enforced during active sessions.

### AC10 Provider verification

As a legitimate provider, I want to manage my assigned programs.

Acceptance: Invitation and registration use the same legitimacy/authority checks. A listing editor cannot read applications. Suspension blocks the affected assignment immediately; restoration requires reviewer approval.

### AC11 Listing publication

As a reviewer, I want evidence and clear missing information before publication.

Acceptance: Retain original AI suggestions and sources without auto-publication. Limit public-page drafting to five. Unknown facts cannot produce a strict match. Test overdue removal and explicit reviewed reinstatement.

### AC12 Form review

As a provider editor, I want to collect program-specific answers safely.

Acceptance: All conditions and question types are controlled. Authors cannot approve their own form; sensitive questions require separate permission. Existing submissions retain their form version after updates.

### AC13 Communications review

As an authorized reviewer, I want clear review reasons and deadlines.

Acceptance: Approve, return, or reject with attribution. An assisting COIII with review permission may review unchanged participant-approved content unless facility policy requires independence. Enforce that policy during assignment and completion; unavailable reviewers do not create a bypass. Incoming/outgoing exchanges remain undelivered until required approval. Preserve review clocks, separate witnesses, different-reviewer reconsideration, and independent handling of complaints about involved staff. Corrections require fresh consent; log assistance/review overlap.

### AC14 Withdrawal

As a participant, I want to stop an application without staff permission.

Acceptance: Presubmission cancellation blocks delivery. Delivered withdrawal records immediately and its notice enters review. New-submission disablement does not prevent withdrawal; confirmed placement is not silently reversed.

### AC15 Offers and placement

As intake staff and a coordinating COIII, we want a clear distinction between an offer and placement.

Acceptance: Participant Proceed does not confirm placement. Deadlines flag rather than auto-reject. COIII confirmation records coordination. Pending transport remains a visible task with an owner.

### AC16 Notifications and retention

As a participant and staff user, I want reliable follow-up and predictable deletion.

Acceptance: Email omits sensitive details and links require authorization. Test 14/3-day notices, closure-based deletion, reasoned extension, and reopening without restoring deleted files or old consent.

## 19 Screens dependencies and demonstration planning

### Instructor minimum deliverables

The PRD must communicate the owner's product vision to a coding agent and meet the instructor's minimum deliverables. Detailed operational requirements support these artifacts but do not replace personas, user-value stories, or wireframes.

| Required artifact | Current coverage | Remaining work |
| --- | --- | --- |
| Problem statement | Finalized statement in Section 1. | Preserve approved wording. |
| User personas | Nine accepted fictional personas; five have names and ages. | Validate planning assumptions with intended users when feasible; no interview validation claimed. |
| User stories | Sixteen core scenarios plus supplemental role stories and verification goals. | Review consolidated coverage against the build. |
| Wireframes | Fifteen accepted screen figures in Appendix 26. | Implement responsive behavior and secondary screens against the requirements. |
| Build context | Approved scope, permissions, lifecycle, working schema, architecture and defaults. | Select compatible packages and providers; verify integrations before deployment. |

The complete approved workflow remains in capstone scope. No MVP or phase split that removes approved demonstration features has been authorized. Production deployment and the unresolved postrelease account model are separate future work. Any later phase plan must explicitly identify what is included and obtain owner agreement before changing scope.

### Screen inventory

The participant research flow, workspace, application overview, application editing, attachment review, final consent, and locked-version layouts are accepted. The COIII, provider, supervisor, and catalog-review layouts are also accepted. All use fictional accounts and transactions. Appendix 26 contains fifteen figures; companion previews retain local interactions. Implement secondary screens and responsive details against the requirements.

| Workspace | Screens to design |
| --- | --- |
| Participant | Activation/sign-in/reset help; search/results/compare/program; saved programs; profile and proposed changes; applications; consent; assistance approval; conversations; offers; withdrawal and reports. |
| DOC | Facility lookup; shared queue; task details; assistance request/editor; review and reconsideration; capabilities; uploads; offer/placement coordination; transfer and handoff. |
| Supervisor | Staff authorization/suspension; coverage; transfer confirmation; identity correction; assisted recovery; escalation. |
| Provider | Onboarding/verification; program colleagues; listing/manual or AI drafting; form builder; intake; conversations; offer management. |
| Reviewer and administrator | Verification, publication, form/sensitive review, report/hold/reinstatement queues; configuration; security recovery; restricted oversight. |

### Dependencies to select and justify

Approved technical direction: a separate Node.js/Express application with EJS, CSS, and JavaScript; Prisma for models, queries, and migrations; Neon-hosted PostgreSQL; and Railway for application hosting. Role workspaces share data with server-enforced permissions. Architecture approval does not authorize paid services, provisioning, or deployment. Section 22 justifies dependencies and defines the approved operational defaults.

Technical design must cover accessible keyboard and touch use, secure sessions, restricted network access, repeat-safe jobs and submissions, protected documents, realistic save failures, recovery, backups, and operational logging. Exact service levels and verification targets require a separate specification.

### Demonstration journey to assemble

A proposed demonstration sequence is: reviewed catalog research and comparison; provider verification and listing/form approval; staff-enabled participant application; assisted edit/upload and participant consent; reviewed delivery and provider response; offer and placement with pending transportation; facility-transfer handoff; and maintenance/retention examples using labeled test clocks. This sequence covers the approved features but is not yet a timed presentation script or build estimate.

## 20 Updated cohesion and gap review

The requirements review checks all approved decisions against the workflows and implementation defaults. It does not establish implementation, production security, provider adoption, DOC approval, or usability with incarcerated participants. Local wireframe checks exercise fictional interface states only.

| Finding | Assessment and required follow-up |
| --- | --- |
| Review independence | RESOLVED. Assisted review allowed with review permission unless facility policy requires independence. Witnesses, reconsideration and self-authored forms retain their separation rules. |
| Submitted record access | RESOLVED. Relevant submitted applications/messages open through authorized workflows with logging; drafts need participant-approved assistance. Transfer changes current facility authority without rewriting history. |
| Sensitive questions and migration | RESOLVED. Document purpose, minimize collection and require explicit sensitive approval. Preserve drafts; guide migration only when the old form is no longer accepted. |
| Assistance and consent | RESOLVED. Manual sign-out ends assistance; automatic login expiry pauses access within the original 30 minutes. Approval locks content; changed content needs fresh consent. Timely queue entry preserves unchanged consent. |
| Review holds and oversight | RESOLVED. Reviewers place/clear scoped substantive holds; administrators handle account-security suspension. Oversight logs need separate scoped permission. |
| Retention and clocks | RESOLVED POLICY. Inquiry content 12 months after conversation closure; minimal history and verification evidence 24 months after their approved closure event. Facility business calendars govern business-day targets. |
| Implementation defaults | APPROVED. Upload limits, private storage approach, backups, security-log retention, scheduler behavior, administrator setup/recovery and supporting constraints. Exact integrations and their capabilities require verification. |
| Screen and persona review | COMPLETE. All nine fictional personas and fifteen screen layouts are accepted. Secondary interface detail follows the documented requirements during implementation. |
| Build feasibility and production | UNVERIFIED. Full approved scope remains. Estimate against implementation progress; no demonstrated three-week delivery guarantee or DOC/device approval. |

### Consistent rules to preserve

The catalog, review, and transaction rules align when implemented with distinct states: searchable does not imply interactive; enabled does not imply consent; consent does not imply review approval; delivery does not imply acknowledgment; an offer does not imply placement; placement does not imply transport completion. Access must follow current role and facility authority, while historical actions retain original attribution.

## 21 Completion and review checklist

The policy and consolidated review batches are complete. The product owner has accepted the personas, application and professional screen layouts, architecture, operational defaults, and verification plan. Implementation details must preserve these requirements; material product changes require owner review.

| Order | Decision batch | Outcome needed |
| --- | --- | --- |
| Done | Batches 1 and 2 | Six policy choices accepted and integrated into the relevant requirements. |
| Done | Batch 3 policy choices | Professional passwords and business-day calendar accepted and integrated. |
| Done | Technical plan and defaults | Familiar stack, operational defaults and supporting rules accepted in the consolidated review. |
| Done | Personas and new wireframes | All personas and participant/professional screen layouts accepted. |
| Build | Implementation and verification | Create the separate SteadRoute project after planning review. Implement all approved flows in vertical slices. |
| Later | Production and postrelease model | Validate partners, production obligations and postrelease account transition without blocking the capstone planning draft. |

Next step: plan and implement the approved scope in a separate SteadRoute project. Keep the completed portfolio unchanged. Select compatible package versions and integration providers, implement in stages, and verify each stage against this PRD. No additional policy-question batch is required by the current review.

### PRD completion checks

- Every approved workflow has a user story, screen path, data relationships, access rule, error state, and observable acceptance criteria.

- Every time limit has a starting event, stopping event, responsible owner, calendar, and testable boundary.

- Every sensitive data category has a purpose, authorized audience, retention rule, and deletion behavior.

- Approved requirements remain distinguishable from implementation evidence. No planned control or demonstration establishes production or partner approval.

- The three review batches are recorded as approved. The wireframe appendix and dependency justifications are included. Exact integration selections and implementation verification are the next work.

### Reference resources

P2P slides: https://docs.google.com/presentation/d/1RWDb6z4LufcSs9hRYf1E4I33glTQ3oHRo5bmvpDc4l0

Writing PRDs and Product Requirements: https://carlinyuen.medium.com/writing-prds-and-product-requirements-2effdb9c6def

## 22 Approved technical plan and operational defaults

The architecture and operational defaults in this section were accepted in the three consolidated review batches on November 20, 2026. They support the full approved workflow. No resources have been provisioned and no application implementation is claimed. Exact package versions will be pinned and checked together when the project is initialized; service capabilities must be verified before deployment.

| Component | Approved direction and reason |
| --- | --- |
| Application and pages | One separate Node.js/Express project with EJS, CSS and focused JavaScript. Role-scoped routes and workspaces share services and data; every server action checks current authority. |
| Prisma | Define relational models, migrations and data access in one maintained schema. Use database constraints and transactions for competing claims, consent consumption, duplicates and transfers. |
| Neon PostgreSQL | Host the relational data. Keep one authoritative database and separate development/demo data from any future production data. Do not create a second Railway database by accident. |
| Railway | Approved application host, with a separate worker or scheduled process for due work. Deployment, account changes and charges require explicit authorization. |
| Private documents | Use a protected storage adapter outside public web assets. Use an S3-compatible private object store for deployment and a private local adapter for development. Select the provider before deployment; never expose object credentials to browsers. |
| Upload checks | Allow PDF, JPEG and PNG, 10 MB per file and five files per application, configurable for reviewed program requirements. Validate actual type, scan, and safely preview before participant review. Failed/pending checks cannot enter an approved submission. |
| Email | Use a server-side email adapter, with Resend as a familiar candidate. Development uses controlled test recipients. Delivery acceptance, bounce/failure handling and actual inbox receipt are different states. |
| Listing AI | Adapt the existing extractor workflow behind the drafting interface. Preserve source evidence, manual entry and reviewer publication; use only selected public pages. Configure the model/provider and budget before paid calls. |
| Authentication | Use maintained password-hashing, session and TOTP components with database-backed sessions and single-use tokens. This is not a proposal to hand-roll cryptography. Choose compatible packages during initialization. |
| Location data | Store a licensed or otherwise permitted city/ZIP reference dataset and permitted program coordinates. Calculate straight-line distance server-side. A local catalog enables search without participant external navigation. |

### Operational requirements for the coding agent

| Area | Approved default |
| --- | --- |
| Jobs and retries | Keep due work in the database. Run a scheduler sweep every 15 minutes; claim jobs once and use repeat-safe delivery keys. Save attempts and retry failures with backoff. Background jobs never auto-approve a review or restore a listing. |
| Hard deadlines | Enforce consent/session expiration and permissions on each action; do not wait for a periodic job. Store timestamps consistently and display the applicable time zone. |
| Failed notifications | A failed email does not complete a task, reset a freshness clock or change consent. Preserve the in-app alert; surface persistent delivery failures to the responsible shared queue. |
| Administrator setup | Provision the first administrator through a controlled server-side setup command. Public registration cannot assign administrator/reviewer roles. Administrator recovery requires a separately verified operator; no user can approve their own recovery. |
| Record deletion | After content is deleted, retain only the permitted minimal IDs, version/digest references, decisions and purge events. Do not retain full answers or document text in consent/action history to defeat shorter content retention. |
| Backups and security logs | Use a maximum 30-day rotating backup window, with deletion markers reapplied after restore. Retain security/access logs for 90 days unless an authorized, reasoned investigation extension applies. Validate actual provider capabilities before a retention promise. |
| Explicit closure | Authorized staff close an application or conversation after documenting an outcome and resolving follow-up. Provider-relationship and rejected-verification closure are reviewer actions. A new message alone does not silently reset a retention clock. |
| Absent provider representative | Pause provider transactions and preserve offers/records; route time-sensitive coordination to staff. Account reinstatement does not automatically clear a separate substantive hold or listing publication restriction. |
| Saved state and failures | Implement the approved automatic saving of permitted drafts with server-confirmed saved/unsaved/failed states and an explicit Save action. Background saving does not extend login idle time. Do not show success for a failed or unconfirmed save. |
| Protection of locations | Use only an authorized public/generalized location for restricted research. Keep confidential address fields separate and prevent accidental exposure through distance displays or source excerpts. |

Defaults may be revised with documented testing evidence and owner review when behavior changes. Do not label a simulated scanner, email, consent record, or task timer as a working integration. Clearly mark any demonstration-only clock, data source, fixture, or adapter.

Additional approved defaults: issue offer reminders 48 and 24 hours before a future deadline, skip already-passed reminder times, and flag once when overdue. Participants receive in-app notices; verified professional contacts receive nonsensitive in-app/email alerts. Use facility-specific participant sign-in links that establish the issuing agency. Keep inquiry exchanges text-only; staff-supported attachments belong to individual applications. The listing AI remains limited to verified program managers and designated reviewers.

For verification, record the organization evidence and independently sourced contact used to establish representative authority, including the reviewer and date. An EIN alone is insufficient. Keep the different second-reviewer exception. For witnessed consent, each authorized staff member confirms their own action under their own account against the exact version. These records implement the established verification and consent requirements.

## 23 Data constraints and lifecycle specification

The 35-table working map remains the approved starting point. The supporting records below implement the accepted data approach. Prisma models must preserve these relationships and constraints even if small support records are combined. Final field names, indexes, migrations, and compatible package versions are implementation details.

| Supporting records | Essential fields and connections |
| --- | --- |
| Invitations and verification | Invitation ID, recipient, inviter, proposed role/scope, hashed token, expiration, accepted/revoked status; verification case references. Acceptance does not grant the role. |
| Authentication support | Session ID/account/idle and absolute expiration; activation/reset token hash, purpose, attempts, expiry and consumption; protected authenticator enrollment and hashed recovery codes. |
| Saved programs | Participant ID, program-location ID and saved time, with a unique participant/target pair. Unpublishing preserves history but blocks new interactions. |
| Profile change proposals | Participant, assisting staff, assistance session, original revision, proposed values, participant decision/time. Apply only confirmed fields against the reviewed revision. |
| Ownership history | Task, previous/new owner, acting account, reason and time. Current owner lives on the task; handoff history is append-only during retention. |
| Editable messages | Conversation/item draft, author, revision and save state; fixed message versions reference consent and review separately. Do not mutate delivered messages. |
| Sensitive approval records | Form version/question, documented purpose, minimization explanation, author, authorized reviewer, decision/reason/time. Preserve all conditional branches. |
| Holds and clearance | Affected scope/item, substantive reason, placing reviewer/time, restrictions, clearing reviewer/time and assessment. Keep account suspension and automatic overdue visibility separate. |
| Retention and jobs | Record category, closure event, deletion due time, notices, extension actor/reason/deadline, purge outcome; job type/target/due/claim/attempt/result/deduplication key. |

### Database integrity requirements

- Use stable internal IDs. Enforce uniqueness of agency plus DOC number and one participant profile per account. Nullable identifiers must not prevent legitimate professional accounts.

- Use valid role/scope combinations and real relationships rather than accepting an arbitrary scope ID. An organization management role must not silently imply intake access.

- Prevent simultaneous active duplicate applications for the same participant and program-location. Define active statuses consistently; the approved default keeps a delivered withdrawal pending until coordinated closure before reapplication.

- Keep mutable drafts separate from fixed submission, form, listing, offer and attachment versions. Consent points to the exact recipient and versions; it is consumed once at queue entry.

- Perform editor checks, revision checks, consent consumption, transfer updates and queue claims as atomic operations. Recheck authority when work is completed, not only when a screen opens.

- Do not retain a snapshot of sensitive content beyond its shorter retention merely because a longer-lived action history references its former version.

| Lifecycle | Required transitions and boundaries |
| --- | --- |
| Application preparation | Draft may be incomplete. Final review requires confirmed saves, required answers, reviewed attachment versions and current provider/facility gates. |
| Participant approval | Draft becomes a fixed approved version. Making changes revokes unused approval before editing. Fresh consent is explicit; approval alone does not enter review. |
| Review and delivery | Timely queue entry consumes consent once. Review may approve, return or reject. Approval for delivery and successful delivery are separate states; failures remain actionable. |
| Existing provider activity | Delivered records support acknowledgment, follow-up, waitlist and offers. New-submission disablement does not erase activity or block approved existing-response routes. |
| Withdrawal | Cancel undelivered work before any transmission. Delivered withdrawal is recorded immediately; provider-facing notice is reviewed and its delivery/acknowledgment tracked separately. |
| Offer and placement | Provider issues a versioned offer; participant proceeds, declines or asks. COIII coordination confirms placement. Transportation remains an independently tracked task. |
| Closure and reopening | Explicit closure starts retention after unresolved work is addressed. Reopening preserves the previous closure, cannot restore purged data, and cannot reuse prior consent. |

## 24 Supplemental stories and measurable verification goals

These stories supplement Section 18 and tie the remaining professional responsibilities to observable behavior. They do not claim that tests or user studies have occurred.

| User story and value | Acceptance criteria |
| --- | --- |
| As a supervisor, I want scoped staff authorization so participants receive coverage without shared credentials. | Invitations, scoped grants, capability-management authority, suspension and restoration are attributable. Direct access outside the scope fails; routine rank grants no sensitive records. |
| As a COIII, I want a permitted path to open submitted records so I can act on follow-up promptly. | Open the relevant item through an authorized task/review workflow. Log access. A queue claim does not expose unrelated drafts, profiles, programs or other facilities. |
| As a listing editor, I want source-linked drafting so incomplete public pages do not become invented program facts. | Manual entry remains possible. The selected-page limit, missing fields, conflicts, source evidence and reviewer changes are visible. No AI suggestion publishes itself. |
| As intake staff, I want to distinguish delivery from staff review so I know which applications I can evaluate. | Only permitted delivered content is visible. Acknowledgment and response dates are recorded. Other applications and the live reusable profile remain inaccessible. |
| As a reviewer, I want clear purpose for sensitive questions so forms collect only information justified by housing needs. | Require documented purpose, controlled collection, separate sensitive permission, all-branch review and an author-independent decision before publication. |
| As a participant, I want form changes explained so saved work is not lost or submitted under unexpected questions. | Preserve accepted old drafts; require guided migration only when necessary. Reuse compatible answers for review, flag new items and require fresh consent for changed content. |
| As an oversight reviewer, I want scoped access history so concerns can be investigated without broad applicant browsing. | Require an explicit oversight assignment and investigation/facility scope. Logs contain identifiers and action context, not duplicate document content. |
| As a provider manager, I want safe colleague offboarding so compromised access can end immediately. | In-scope suspension ends that permission, preserves unrelated assignments and history, and requires reviewer restoration. No representative remaining pauses transactions. |

### Approved verification goals

- Research usability: in an initial proxy test with at least three volunteers, at least two can find and compare two programs and identify a cost and policy trade-off without coaching. Record task completion and observed confusion. Proxy testing does not establish usability for incarcerated participants.

- Consent correctness: every defined test for changed content, expired/revoked approval, duplicate consumption, unreadable attachments and unauthorized staff access must block the prohibited action. No scenario may label approval as delivered.

- Workflow continuity: the scripted transfer, leave coverage, review escalation, provider nonresponse and pending-transport scenarios retain their original deadlines and reach an authorized owner or shared queue with visible next steps.

### Implementation sequence within the full scope

Build vertical slices: accounts and scoped access; catalog and research; provider verification and publication; forms/drafts/assistance/documents/consent; review and communications; offers/placement/tasks/transfers; scheduled maintenance/retention/notifications; and complete demonstration verification. These are implementation stages, not feature deferrals. Estimate each slice before committing to a calendar. Revisit feasibility using working evidence without silently dropping approved functionality.

## 25 Consolidated review result

The eight earlier policy-batch choices and nine consolidated-review choices are integrated into this revision. All nine fictional personas, the participant application flow, five professional workspace layouts, familiar technology stack, operational defaults, supporting implementation rules, and verification plan are approved. Publication, consent, review, delivery, and placement remain distinct states.

The review found no unresolved product-policy conflict in the documented workflow. Searchable, interactive, enabled, approved, queued, delivered, offered, and placed remain distinct states. The requirements preserve participant control, current-facility coverage, version-specific consent, and attributable staff actions. Implementation and integration testing must verify that the built behavior matches these requirements.

Outstanding before production: authorize service provisioning, validate private storage/scanning/email/background execution and backup behavior, confirm partner device/network policies, review retention obligations, test with intended users where appropriate, and decide postrelease account transitions. None of those is represented as already approved or verified by this capstone plan.

## 26 Wireframe appendix

These are accepted low-fidelity screen layouts with fictional people, providers, and transactions. They describe intended layout and interactions, not live application screenshots. The figures retain original draft labels inside the pictured previews; the approval captions in this document are authoritative. Long screen figures can be enlarged in the document viewer. Secondary dialogs and operational detail must follow the corresponding requirements during implementation.

### Participant search

Approved flow · Fictional demonstration

Destination, radius and weekly budget begin research without device location.

![participant search](wireframes/01-participant-search.png)

### Participant results

Approved flow · Fictional demonstration

Apply filters explicitly; save choices and select up to three for comparison.

![participant results](wireframes/02-participant-results.png)

### Program comparison

Approved flow · Fictional demonstration

Compare policy topics across programs. Narrow screens stack by topic.

![program comparison](wireframes/03-program-comparison.png)

### Program details

Approved flow · Fictional demonstration

Single page with section links, explicit unknowns, and gated inquiry/application actions.

![program details](wireframes/04-program-details.png)

### Participant workspace

Approved layout · Fictional demonstration

Needs attention first, followed by application/inquiry activity, offers and saved programs.

![participant workspace](wireframes/05-participant-workspace.png)

### Application overview

Approved layout · Fictional demonstration

Section status, missing requirements, assistance and submission access remain distinct.

![application overview](wireframes/06-application-overview.png)

### Application editing

Approved layout · Fictional demonstration

Application-only edits and confirmed saves precede final consent.

![application editing](wireframes/07-application-editing.png)

### Attachment review

Approved layout · Fictional demonstration

Review actual file content and all pages; concerns remain pending for staff.

![attachment review](wireframes/08-attachment-review.png)

### Final participant consent

Approved layout · Fictional demonstration

Recipient, answers and exact attachment are visible before explicit consent.

![final participant consent](wireframes/09-final-participant-consent.png)

### Locked approved version

Approved layout · Fictional demonstration

Approval is not delivery; show the original window and revoke-before-edit route.

![locked approved version](wireframes/10-locked-approved-version.png)

### COIII shared queue

Approved layout · Fictional demonstration

Claim or take over with current authority; previews exclude sensitive content.

![coiii shared queue](wireframes/11-coiii-shared-queue.png)

### COIII submission review

Approved layout · Fictional demonstration

Review approved content and consent; record approval, return or rejection separately from delivery.

![coiii submission review](wireframes/12-coiii-submission-review.png)

### Provider workspace

Approved layout · Fictional demonstration

Listing drafts, form maintenance and authorized intake are separate responsibilities.

![provider workspace](wireframes/13-provider-workspace.png)

### Supervisor coverage

Approved layout · Fictional demonstration

Manage coverage and permissions; confirm arrival before access transfers.

![supervisor coverage](wireframes/14-supervisor-coverage.png)

### Catalog reviewer workspace

Approved layout · Fictional demonstration

Review evidence and sensitive-question purpose; scoped holds and explicit reinstatement remain controlled.

![catalog reviewer workspace](wireframes/15-catalog-reviewer-workspace.png)
