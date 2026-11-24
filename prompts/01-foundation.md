# First coding prompt

Tool: Claude Code (default implementer)
Model: Claude Sonnet 5.5, if available
Reasoning/effort: High, if supported by the selected model
Fallback implementer: Codex, GPT-6.2 Sol, High; explicitly hand over before switching.
Outcome: verified project foundation only. Owner-approved order: foundation, core research journey, then visual selection. No design-selection prerequisite applies to this milestone. Read docs/BUILD_HANDOFF.md.

Build SteadRoute milestone 1 in this dedicated project. Read AGENTS.md, docs/DECISIONS.md, docs/PRD.md, docs/BUILD_PLAN.md and docs/BUILD_STATUS.md first. Inspect the project path, existing files, applicable instructions and Git status. If this is the professional portfolio or a different existing app, stop before editing it and explain the mismatch. Preserve existing work.

Use the approved architecture: one Node.js/Express application with EJS, CSS and focused JavaScript; Prisma and PostgreSQL; Neon and Railway as the eventual hosted directions. Check official compatibility documentation when choosing versions and pin dependencies. Do not switch the frontend or database architecture.

Complete the bounded foundation milestone:

1. Create a maintainable application structure with environment validation, server startup, error handling, static assets, accessible responsive base layout and a truthful initial homepage. Identify test/demo data clearly. Do not invent a finished design or claim workflow completion from a homepage.
2. Add Prisma configuration and the first relational foundation for people/access and the catalog, consistent with the full PRD table map. Record deliberate schema choices and required later extensions. Add a versioned migration and a repeatable fictional development seed when feasible. Do not import real participant records, generate privileged production accounts or drop/reset an existing database.
3. Add a health route that reports only checks actually performed and a normal 404 path. Keep any protected operational areas unavailable until their real permission enforcement is implemented. Do not use unrestricted role switching or client-side-only access gates as authentication.
4. Configure install/start/development/check scripts, .gitignore, placeholder-only .env.example and setup documentation. Keep private documents outside public assets from the outset. No secrets in chat, tracked files, browser output or logs.
5. Run appropriate smoke/configuration/schema checks and validate the available database path. If no authorized development DATABASE_URL exists, prepare and validate what can be checked without a database; report the exact unverified integration and safe local configuration step. Do not invent a URL, request secrets in chat, provision Neon/Railway/storage/email resources or install a database service by implication.
6. Update docs/BUILD_STATUS.md with actual outcomes, checks run, limitations, changed files and the next milestone. Recommend a Git checkpoint and message; do not commit, push or deploy.

Work through routine implementation choices autonomously within these instructions. Ask only for missing information that materially changes requirements or blocks dependent work. Keep progress explanations brief and understandable. End with the milestone outcome and the concrete next task. Do not claim the remaining workflows are implemented, and do not remove them from scope.
