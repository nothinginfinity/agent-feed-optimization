# AFO v0.2 Review Memo
_author: alice-review | date: 2026-05-12 | version: 0.2_

---

## 1. Test Readiness Assessment (REV-001)

All four tests were read and mapped against `docs/measurement-rubric.md`.

### TEST-001 — Baseline vs. AFO Sonar Reader
- **Purpose:** Prove that instruction-harnessed LLMs discover and use machine-readable feeds better than baseline.
- **Runnable as-is:** ✅ Yes — most complete and self-contained test.
- **Gaps:**
  - Rubric embedded in TEST-001 uses **7 dimensions / 14 points**. `docs/measurement-rubric.md` uses **9 dimensions / 18 points**. These are inconsistent — scores will not be comparable unless aligned.
  - No field for tester name, Space instructions version, or model version in the log template.
- **Confidence:** 🟡 Medium — the rubric mismatch is a meaningful gap.

### TEST-002 — Podcast Feed Discovery
- **Purpose:** Test AFO Sonar Reader against podcast demo source.
- **Runnable as-is:** ⚠️ Partially — depends on `gists/G-000-afo-sonar-reader.md` being installed in a live Perplexity Space.
- **Gaps:**
  - No reference to `docs/measurement-rubric.md` — uses pass/fail checklist only.
  - No numeric scoring; results cannot be compared to TEST-001.
  - Log template is minimal; no field for which endpoints were actually resolved.
- **Confidence:** 🟡 Medium.

### TEST-003 — Commerce Feed Discovery
- **Purpose:** Test AFO Sonar Reader against ecommerce demo source.
- **Runnable as-is:** ⚠️ Partially — same Space dependency as TEST-002.
- **Gaps:**
  - No rubric reference; pass/fail only.
  - No field to record which endpoints (RSS, products.json, agent-context.json) were actually used by the LLM.
  - Policy compliance check is implicit, not scored.
- **Confidence:** 🟡 Medium.

### TEST-004 — Local Business Feed Discovery
- **Purpose:** Test AFO Sonar Reader against local business demo source.
- **Runnable as-is:** ⚠️ Partially — relies on manually pasting `agent-context.json` contents; no live URL available.
- **Gaps:**
  - Most fragile test: manual paste is not reproducible across testers.
  - No rubric, no numeric scoring.
  - Log template is the barest of the four tests.
- **Confidence:** 🔴 Low — manual paste context is fragile and non-standard.

---

## 2. Spec Gap List (REV-002)

Roadmap v0.2 requires proof of: feed discoverability, source interpretability, structured actionability, and benchmark visibility.

| Capability | Spec Coverage | Test Coverage | Gap |
|---|---|---|---|
| Feed discoverability | ✅ AFO-001, ARC-001, ACP-001 | TEST-001, TEST-002 | ⚠️ TEST-001 rubric mismatch reduces proof quality |
| Source interpretability | ✅ ACP-001, ACC-001 | TEST-002/003/004 | ⚠️ No numeric score — hard to quantify |
| Structured actionability | ✅ AAP-001 | TEST-003/004 (incidental) | ⚠️ No dedicated actionability test exists |
| Benchmark visibility | ✅ ABENCH-001, AMET-001 | ❌ None | 🔴 **No test exercises benchmark schemas** |
| `llms.txt` layer | ✅ Mentioned in AFO-001 | ❌ None | 🔴 **No test validates llms.txt presence or content** |
| `agent-policy.json` compliance | ✅ APOL-001 | Partial (TEST-002 transcript rule) | ⚠️ Policy compliance not systematically tested |

**Top unverifiable claims:**
1. Benchmark visibility is fully specified (ABENCH-001, AMET-001, schemas present) but **no test runs or validates it**.
2. `llms.txt` is listed as a recommended layer in AFO-001 but has **no schema and no test**.
3. Structured actionability is exercised only incidentally in TEST-003/004 — no dedicated test isolates it.

---

## 3. Layer Coverage Table (REV-003)

Layer model under review:
```
Website → RSS/feed → agent-context.json → agent-policy.json → agent-actions.json → context-cookie.json → LLM renderer
```

| Layer | Schema file | Podcast example | Ecommerce example | Local-biz example | Status |
|---|---|---|---|---|---|
| Website / `llms.txt` | ❌ None | ❓ Not confirmed | ❓ Not confirmed | ❓ Not confirmed | 🔴 Missing schema; examples unverified |
| RSS / `agent:*` namespace | ❌ None (ARC-001 is spec-only) | ✅ Likely present | ✅ Likely present | ⚠️ Uncertain | ⚠️ No schema file for RSS layer |
| `agent-context.json` | ✅ `agent-context.schema.json` | ✅ Referenced in TEST-002 | ✅ Referenced in TEST-003 | ✅ Referenced in TEST-004 | ✅ Full coverage |
| `agent-policy.json` | ✅ `agent-policy.schema.json` | ✅ Likely present | ✅ Likely present | ✅ Likely present | ✅ Full coverage |
| `agent-actions.json` | ✅ `agent-actions.schema.json` | ✅ Likely present | ✅ Likely present | ✅ Likely present | ✅ Full coverage |
| `context-cookie.json` | ✅ `context-cookie.schema.json` | n/a (user-generated) | n/a | n/a | ✅ Schema exists |
| LLM renderer (gist harness) | n/a | `G-000` required | `G-000` required | `G-000` required | ⚠️ G-000 gist not verified present in `gists/` dir |

**Summary:** The middle layers (agent-context, policy, actions, context-cookie) are well-covered. The outer layers — `llms.txt`/website and RSS schema — have gaps. The LLM renderer (G-000 gist) needs verification.

---

## 4. Top 3 Recommended Fixes Before Running Tests

### Fix 1 — Align TEST-001 rubric with `measurement-rubric.md` (BLOCKING)
TEST-001 embeds a 7-dimension /14 rubric that conflicts with the 9-dimension /18 rubric in `docs/measurement-rubric.md`. The test file should be updated to reference the canonical rubric document and remove the inline table, or the canonical rubric should be explicitly scoped to TEST-001 only. Without this fix, v0.2 results will be ambiguous.

### Fix 2 — Add rubric scoring to TEST-002, TEST-003, TEST-004 (BLOCKING)
All three demo source tests use pass/fail checklists with no numeric score. They should reference `docs/measurement-rubric.md` and include a score row in the log template. This enables cross-test comparison and satisfies the v0.2 "publish scored rubric results" requirement.

### Fix 3 — Add `llms.txt` example to at least one demo source (HIGH)
`llms.txt` is described as a recommended AFO layer in AFO-001 and listed in the benchmark spec, but no test validates it and no example file has been confirmed present. At minimum, the podcast demo should include an `llms.txt` so the layer can be exercised in TEST-002.

---

## 5. Items Flagged for alice-ops

- **Validation run template fields:** The log templates in TEST-002/003/004 are missing a `Score (/18)` field. If alice-ops's `2026-05-validation-run-001.md` template includes score fields, alice-review recommends aligning the test log templates to match — or vice versa.
- **G-000 gist verification:** The `gists/` directory should contain `G-000-afo-sonar-reader.md`. If this file is missing or placeholder, TEST-002/003/004 cannot be run. Please confirm presence and content.
- **Local business RSS:** TEST-004's local business demo may not have an RSS feed (a roofing company wouldn't typically have one). The RSS layer assumption in the layer model may not apply to all three demo types — worth flagging in the validation run template.

---

_alice-review | REV-001 through REV-004 complete | 2026-05-12_
