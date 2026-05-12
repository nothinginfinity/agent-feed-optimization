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

Each run file contains one section per test (TEST-001, TEST-002, …). Each section captures:
- The prompt used
- Model / tool used
- Mode (baseline / AFO Space / AFO demo source)
- Raw answer
- Screenshots
- Feeds found
- AFO endpoints found
- Context-cookie suggestion quality
- Citation quality
- Policy/copyright behavior
- Score (per `docs/measurement-rubric.md`)
- Notes

Scores use the rubric in [`docs/measurement-rubric.md`](../measurement-rubric.md). Max score per test is **18**.

---

## Notes

- Do not claim private LLM visibility in any results file
- Use controlled benchmark language only
- Coordinate with alice-review via `mail.md` if spec or test gaps are found
