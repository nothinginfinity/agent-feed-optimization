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

> **Policy:** Only Jared may promote a job from `approved` to `delivered`, or from `review` to `approved`. The agent writes `draft` only.

---

## Files in Each Job Folder

Every completed job folder contains:

| File | Description |
|------|-------------|
| `agent-context.json` | AFO agent context layer |
| `agent-actions.json` | AFO agent actions layer |
| `context-cookie.md` | AFO context-cookie entry |
| `llms.txt` | LLM-readable site summary |
| `policy.md` | AFO content policy |
| `rss.xml` | RSS feed (if applicable) |
| `sitemap-agent.xml` | Agent-optimized sitemap |
| `job.json` | Job status file (see schema below) |
| `README-review.md` | Internal ops review checklist |
| `README-install.md` | Client-facing install instructions |

> **Note:** RSS (`rss.xml`) is optional for non-content businesses (e.g. local service companies with no feed). Mark as N/A in `job.json` if not applicable.

---

## Template

The `_template/` folder contains blank starter files for new jobs:

- `job.json` — copy and fill in for each new job
- `README-review.md` — copy and complete before promoting to `review`
- `README-install.md` — copy and customize for the client before `delivered`

---

## Outbox

When G-001 completes a job, it appends an entry to `spaces/generator/outbox.md` in `nothinginfinity/repo-copilot`. This signals to Jared that a job is ready for review.
