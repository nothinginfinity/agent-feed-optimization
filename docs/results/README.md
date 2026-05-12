# AFO Validation Results

This folder is the **canonical store** for all AFO validation run records.

---

## How Results Files Are Stored

Each validation run produces two files:

1. **Run file** — detailed per-test results for a single validation run
2. **Summary file** — high-level before/after comparison across all runs (shared, updated per cycle)

All files live in `docs/results/`.

---

## Filename Schema

### Run files
```
YYYY-MM-validation-run-NNN.md
```

| Part | Description |
|------|-------------|
| `YYYY` | Four-digit year of the run |
| `MM` | Two-digit month of the run |
| `NNN` | Zero-padded sequential run number (001, 002, …) |

**Examples:**
- `2026-05-validation-run-001.md` — first run in May 2026
- `2026-06-validation-run-001.md` — first run in June 2026

### Summary file
```
validation-summary.md
```
One shared file, updated after each run cycle to reflect cumulative findings.

---

## File Structure

Each run file contains one section per test (TEST-001A, TEST-001B, TEST-002, …). Each section captures:
- The prompt used
- Model / tool used
- Mode (baseline / AFO Space / AFO demo source)
- Source material mode (see below)
- Raw answer
- Screenshots (see naming convention below)
- Feeds found
- AFO endpoints found
- Context-cookie suggestion quality
- Citation quality
- Policy/copyright behavior
- Score (per `docs/measurement-rubric.md`)
- Notes

Scores use the rubric in [`docs/measurement-rubric.md`](../measurement-rubric.md). Max score per test is **18**.

---

## Source Material Modes

Every test block must indicate which source material mode was used:

| Mode | Description |
|------|-------------|
| **Live URL fetched** | The model fetched the source from a real, live URL during the test |
| **GitHub file URL fetched** | The model fetched a raw GitHub file URL (e.g. `raw.githubusercontent.com/…`) |
| **Pasted repo contents** | Repo file contents were pasted directly into the prompt |
| **Fake / simulated domain** | A fictional or placeholder domain was used (no live URL) |

This matters because source availability affects feed discoverability scores. Always record the mode so results are comparable across runs.

---

## Screenshot Naming Convention

All screenshots go in `docs/results/screenshots/`.

**Filename format:**
```
TEST-<id>-<mode>-<YYYY-MM-DD>.png
```

| Part | Values |
|------|--------|
| `<id>` | `001A`, `001B`, `002`, `003`, `004` |
| `<mode>` | `baseline`, `afo-space`, `afo-demo` |
| `<YYYY-MM-DD>` | Date the screenshot was taken |

**Examples:**
```
TEST-001A-baseline-2026-05-12.png
TEST-001B-afo-space-2026-05-12.png
TEST-002-afo-demo-2026-05-12.png
TEST-004-baseline-2026-05-12.png
```

If multiple screenshots are needed for one test+mode, append `-01`, `-02`, etc.:
```
TEST-001B-afo-space-2026-05-12-01.png
TEST-001B-afo-space-2026-05-12-02.png
```

---

## Notes

- Do not claim private LLM visibility in any results file
- Use controlled benchmark language only
- `N/A` is valid in any score field where a mode was not run — do not leave blank
- Coordinate with alice-review via `mail.md` if spec or test gaps are found
