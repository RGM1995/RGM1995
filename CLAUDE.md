# CLAUDE.md

This file provides guidance for AI assistants (Claude Code and others) working in this repository.

## Repository Overview

**Repository**: `rgm1995/rgm1995`
**Purpose**: Adyen payment integration example — a minimal Node.js HTTP server paired with a static HTML front end that demonstrates the Adyen Drop-in checkout flow.

The `main` branch currently holds only the CI scaffold. Actual application code lives on feature branches and is being merged incrementally.

## Repository Structure

```
RGM1995/
├── .github/
│   └── workflows/
│       └── main.yml      # CI/CD pipeline (currently empty — to be defined)
├── index.html             # Adyen Drop-in UI (loads Adyen SDK from CDN)
├── server.js              # Minimal Node.js HTTP server (no framework)
├── package.json           # Node.js project manifest (CommonJS, no deps yet)
├── merchant_account.txt   # Example Adyen payment receipt / merchant account data
├── README.md              # Setup instructions
└── CLAUDE.md              # This file
```

> Files above `main.yml` and `CLAUDE.md` currently live on feature branches. Update this section as they land on `main`.

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Runtime | Node.js (CommonJS) |
| Server | Plain `http` module — no Express or other framework |
| Frontend | Vanilla HTML/JS with Adyen Drop-in SDK (loaded from CDN) |
| Payment provider | [Adyen](https://www.adyen.com/) — Drop-in integration |
| Package manager | npm |
| Tests | None yet |
| Linter/Formatter | None yet |

## Key Files

### `server.js`
Minimal HTTP server on port `3000` (configurable via `PORT` env var). Serves `index.html` on `GET /` and stubs out two Adyen API routes:
- `GET /api/paymentMethods` — should call the Adyen `/paymentMethods` endpoint
- `POST /api/makePayment` — should call the Adyen `/payments` endpoint

Both routes are **TODO stubs** that return empty/mock responses.

### `index.html`
Loads the Adyen Checkout SDK v5.47.0 from the CDN. Calls `/api/paymentMethods` on init, mounts the Drop-in component, and submits via `/api/makePayment`. The `clientKey` is a placeholder (`YOUR_ADYEN_CLIENT_KEY`) that must be replaced.

### `package.json`
Name `rgm1995`, version `1.0.0`, CommonJS. No production dependencies. The `test` script is a placeholder.

## Development Setup

```bash
# Install dependencies (none yet, but keeps node_modules ready for future deps)
npm install

# Start the server
node server.js
# → http://localhost:3000
```

Before the server is useful, replace placeholders:
1. Set `clientKey` in `index.html` to your Adyen client key.
2. Implement the Adyen API calls in `server.js` (add your Adyen API key and merchant account).

## CI/CD

`.github/workflows/main.yml` is currently empty. When implemented, define steps for:
- **Install** — `npm install`
- **Lint** — add a linter (e.g., ESLint) and run it
- **Test** — add a test framework (e.g., Jest) and run tests
- **Deploy** — deploy to a hosting environment if applicable

## Git Conventions

### Branches

- `main` — stable, protected. **Never push directly to `main`.**
- `claude/<description>-<id>` — AI-driven branches created by Claude Code (e.g., `claude/claude-md-docs-gd7mm`).
- `codex/<description>` — branches used for Codex-driven changes (e.g., `codex/create-site-to-connect-adyen-account`).
- Use short, hyphenated slugs that describe the change (e.g., `feat/adyen-payments-api`, `fix/payment-error-handling`).

### Commits

- Write commit messages in the imperative mood: `Add X`, `Fix Y`, `Update Z`.
- Keep the subject line under 72 characters.
- One logical change per commit.

### Pull Requests

- All changes go through a PR — no direct commits to `main`.
- Draft PRs are acceptable for work in progress.
- Merge or squash before closing to keep history clean.

## AI Assistant Guidelines

When working in this repository as an AI assistant:

1. **Branch**: Always develop on the designated branch — never commit to `main`.
2. **Commits**: Write clear, descriptive commit messages. One logical change per commit.
3. **Push**: After completing work, push with `git push -u origin <branch>`.
4. **PR**: After pushing, create a draft PR against `main` if one does not already exist.
5. **Scope**: Make only the changes requested. Do not refactor unrelated code or add unrequested features.
6. **Secrets**: Never commit credentials, API keys, `.env` files, or real payment data. The `merchant_account.txt` in this repo is example/anonymised data only.
7. **Adyen placeholders**: When implementing API calls in `server.js`, expect credentials to be supplied via environment variables (`ADYEN_API_KEY`, `ADYEN_MERCHANT_ACCOUNT`), not hardcoded.

## Contributing Workflow

```bash
git checkout -b <branch-name>
# make changes
git add <files>
git commit -m "Descriptive message"
git push -u origin <branch-name>
# open a PR against main
```
