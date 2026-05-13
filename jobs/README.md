# G-001 Job Folder

This directory contains one folder per G-001 generator job. Each folder holds all output files for a single client engagement, plus the job status file and review/install docs.

---

## Folder Naming Convention

```
jobs/YYYY-MM-DD-{client-slug}/
```

| Part | Description |
|------|-------------|
| `YYYY-MM-DD` | Date the job was initiated |
| `{client-slug}` | Lowercase hyphenated client identifier (e.g. `acme-roofing`, `true-build-podcast`) |

**Example:** `jobs/2026-05-12-true-build-podcast/`

---

## Job Lifecycle

Every job moves through four states:

```
draft → review → approved → delivered
```

| State | Meaning | Who acts |
|-------|---------|----------|
| `draft` | G-001 agent has generated output files; job folder created | Agent (automated) |
| `review` | Files are ready for human inspection; review gate open | Agent signals; Jared reviews |
| `approved` | Jared has reviewed and signed off; files cleared for delivery | Jared only |
| `delivered` | Files have been sent/deployed to client | Jared only |

> **Policy:** Only Jared may promote a job from `review` to `approved`, or from `approved` to `delivered`. The agent writes `draft` only.

---

## Regeneration Guard

> **G-001 must read `job.json` before writing any files.** If `status === "delivered"`, the generator must abort and log a warning to the outbox. A delivered job must never be overwritten.

---

## Files in Each Job Folder

### Client ZIP (10 files delivered to client)

| File | Description |
|------|-------------|
| `agent-context.json` | AFO agent context layer |
| `agent-actions.json` | AFO agent actions layer |
| `agent-policy.json` | AFO content policy (machine-readable, installs to `/.well-known/`) |
| `policy.md` | Plain-English content policy companion — **for client reference only, not installed** |
| `context-cookie.json` | AFO context-cookie (machine-readable, installs to `/.well-known/`) |
| `context-cookie.md` | Plain-English context-cookie explanation — **for client reference only, not installed** |
| `llms.txt` | LLM-readable site summary |
| `rss.xml` | RSS feed (if `has_rss: true`; otherwise marked N/A in `job.json`) |
| `sitemap-agent.xml` | Agent-optimized sitemap |
| `README-install.md` | Client-facing install instructions |

> **Note:** `context-cookie.schema.json` is a spec/validation schema — it is **never** included in the client ZIP and never installed on a client site.

### Internal job folder only (not in client ZIP)

| File | Description |
|------|-------------|
| `job.json` | Job status file (draft → delivered lifecycle) |
| `README-review.md` | Internal ops review checklist — do not share with client |

---

## Template

The `_template/` folder contains blank starter files for new jobs:

- `job.json` — copy and fill in for each new job
- `README-review.md` — copy and complete before promoting to `review`
- `README-install.md` — copy and customize for the client before `delivered`

---

## Outbox

When G-001 completes a job, it appends an entry to `spaces/generator/outbox.md` in `nothinginfinity/repo-copilot`. This signals to Jared that a job is ready for review.

---

## Repo Split Note

Job folders currently live in `agent-feed-optimization/jobs/` for development and live testing. Once first live client tests pass, real client job folders will move to a separate private `afo-client-jobs` repo. This repo will remain for demo and test jobs.
