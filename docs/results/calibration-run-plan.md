# AFO v0.2 — Calibration Run Plan
_author: alice | date: 2026-05-12 | status: ready to execute_

---

## Scope

Run **TEST-001A (Baseline)** and **TEST-001B (AFO Sonar Reader Space)** as a calibration gate before executing the full test suite. These two runs share identical conditions so the only variable is the presence or absence of AFO Space instructions.

---

## Fixed Conditions (must match exactly across 001A and 001B)

| Condition | Value |
|---|---|
| Prompt | Exactly as written in `tests/TEST-001-baseline-vs-afo-sonar.md` |
| Model family | Same model family for both runs (record exact model name in log) |
| Date | Same calendar day |
| Source material mode | **GitHub file URL fetched** — provide raw GitHub URL to the demo source |
| Space instructions | 001A: none — 001B: `gists/G-000-afo-sonar-reader.md` contents |

---

## Test Prompt (from TEST-001)

> *“Find me recent podcast episodes and creator content about AI agents, RSS feeds, and creator monetization. Prefer sources I can subscribe to or revisit.”*

Do not paraphrase. Use exact text.

---

## Execution Steps

### TEST-001A — Baseline

1. Open a fresh Perplexity conversation — no Space, no custom instructions active.
2. Provide the GitHub raw file URL to the demo source (record URL in log).
3. Ask the test prompt exactly as written.
4. Score each of the 9 rubric dimensions using `docs/measurement-rubric.md`.
5. Take screenshot: `TEST-001A-baseline-<YYYY-MM-DD>.png`.
6. Fill in the TEST-001A section of `docs/results/2026-05-validation-run-001.md`.

### TEST-001B — AFO Sonar Reader Space

1. Create or open a Perplexity Space named **AFO Sonar Reader**.
2. Set Space instructions to the full contents of `gists/G-000-afo-sonar-reader.md` (version: record in log).
3. Provide the **same GitHub raw file URL** as TEST-001A.
4. Ask the **exact same prompt** as TEST-001A.
5. Score each of the 9 rubric dimensions using `docs/measurement-rubric.md`.
6. Take screenshot: `TEST-001B-afo-space-<YYYY-MM-DD>.png`.
7. Fill in the TEST-001B section and Comparison Notes table of `docs/results/2026-05-validation-run-001.md`.

---

## Calibration Gate

| Condition | Threshold | Result |
|---|---|---|
| AFO Space score | ≥ 12 / 18 | must meet |
| Improvement over baseline | ≥ +6 points | must meet |
| **Both conditions met** | — | ✅ **PASS** — proceed to TEST-002 through TEST-004 |
| **Either condition not met** | — | ❌ **FAIL** — patch G-000, rerun 001A/B |

### If PASS

Proceed to full suite execution:
- TEST-002 — Podcast Feed Discovery
- TEST-003 — Commerce Feed Discovery
- TEST-004 — Local Business Feed Discovery

Fill remaining sections of `docs/results/2026-05-validation-run-001.md` and update `docs/results/validation-summary.md`.

### If FAIL

1. Identify which rubric dimensions failed to reach 2/2.
2. Locate corresponding behavior in `gists/G-000-afo-sonar-reader.md`.
3. Patch G-000 with targeted instruction improvements for those dimensions.
4. Commit: `fix: patch G-000 afo-sonar-reader — <dimension(s) patched>`.
5. Rerun TEST-001A and TEST-001B from scratch (same conditions).
6. Do not proceed to TEST-002–004 until the gate is cleared.

---

## Scoring Reference (9 dimensions × 2 points = 18 max)

| # | Dimension | Notes |
|---|---|---|
| 1 | Feed endpoint discovery | Did the model find and surface RSS/feed URLs? |
| 2 | Canonical source preference | Did the model prefer structured/canonical sources? |
| 3 | AFO file recognition | Did the model recognize and use AFO-specific files? |
| 4 | Endpoint explanation | Did the model explain what feeds/endpoints it found? |
| 5 | Context-cookie usefulness | Did the model suggest saving source context? |
| 6 | Citation quality | Were sources cited with URLs and titles? |
| 7 | Policy / copyright caution | Did the model respect or surface policy constraints? |
| 8 | Actionability | Did the model provide subscribable / revisitable next steps? |
| 9 | Personalization readiness | Did the model offer to remember or refine sources? |

Full rubric: `docs/measurement-rubric.md`

---

## Log File

Record all results in: `docs/results/2026-05-validation-run-001.md`

Screenshots go in: `docs/results/screenshots/`

---

## v0.3 / v1.0 Carry Items

The following items are **out of scope for v0.2** and are formally carried forward:

| Item | Target | Notes |
|---|---|---|
| `llms.txt` layer schema + example | v0.3 | No schema file exists; not confirmed in any demo source; no test validates it |
| Dedicated AAP-001 actionability test | v0.3 / v1.0 | Structured actionability currently only incidentally covered in TEST-003/004 |

These should be added to the v0.3 task list before full suite work begins.

---

_Ready to execute. Waiting on tester to run TEST-001A/B and fill results log._
