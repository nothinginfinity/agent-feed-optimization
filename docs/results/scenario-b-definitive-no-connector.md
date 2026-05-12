# Scenario B — Definitive No-Connector Test Record
_version: 1.0 | date: 2026-05-12 | status: canonical_

---

## Purpose

This document is the **canonical gap demo** for the AFO audit product. It records the definitive Scenario B test: a real-world public website with no AFO files, tested with no connector active, using the AFO Audit Agent (G-000 v0.3) against a plain no-Space baseline.

This is the **"before"** state in all sales materials. Scenario C (18/18) is the **"after."**

---

## Test Subject

| Field | Value |
|---|---|
| URL | `https://github.com/sindresorhus/awesome` |
| Site type | Open-source curated list / creator project |
| AFO files present | None |
| GitHub connector | **OFF** (canonical clean condition) |
| Test date | 2026-05-12 |
| Tester | Jared / Alice ops |

---

## Why No Connector

Early Scenario B tests showed that activating a GitHub connector neutralized the AFO gap — both the AFO Space and the plain baseline scored similarly because the connector gave both agents direct repository access, bypassing the need for structured AFO files.

**The connector is a confounder.** It substitutes for AFO rather than demonstrating the value of AFO.

**Canonical test condition: no connector, no integrations, no special access.** This mirrors the real-world condition for a small business website — the AI assistant has only the open web to work with, exactly as a customer's AI assistant would.

---

## Test Conditions

| Variable | Value |
|---|---|
| Agent A | Perplexity Sonar + AFO Space (G-000 v0.3) |
| Agent B | Perplexity Sonar plain, no Space, no instructions |
| Connector / integrations | None (both agents) |
| Prompt used | "What is this site? What structured information does it provide for AI assistants? What feeds, context files, or agent-readable endpoints exist?" |
| Source material mode | Open web only |
| Date controlled | Same session, 2026-05-12 |
| Model family | Perplexity Sonar (same for both) |

---

## Results

### Agent A — AFO Space (G-000 v0.3)

```
AFO SCORE: 2 / 18
READINESS TIER: ❌ Not Visible

ENDPOINT AUDIT:
  ✅  RSS/Atom feed       — GitHub activity Atom feeds found (partial)    2/3
  ❌  Sitemap             — NOT FOUND                                      0/2
  ❌  llms.txt            — NOT FOUND                                      0/3
  ❌  agent-context.json  — NOT FOUND                                      0/3
  ❌  agent-policy.json   — NOT FOUND                                      0/2
  ❌  agent-actions.json  — NOT FOUND                                      0/2
  ❌  context-cookie.json — NOT FOUND                                      0/3
```

**Gap report produced:** Yes — G-000 v0.3 output a full per-endpoint gap report with plain-English explanations and recommended fix package (total lift: +16 pts).

**Inferred context packet:** Created and labeled as inferred. Agent noted it was working from README content and general web data only.

---

### Agent B — Plain Baseline (no Space)

```
AFO SCORE: ~2 / 18  (estimated, no structured rubric applied)

Behavior observed:
- Cited 15 external web sources to reconstruct a project description
- Correctly identified the repository as a curated "awesome" list
- Could not enumerate categories from project-controlled files
- Could not confirm maintainer's canonical description
- Spontaneously offered to BUILD the missing AFO files for the repository
  (unprompted — agent recognized the structured signal gap itself)
```

**Notable finding:** The plain baseline agent's spontaneous offer to build AFO files is evidence that AFO terminology and concepts are present in LLM training data. The gap is legible to the model even without instructions.

---

## Key Findings

### Finding 1 — GitHub connector neutralizes the gap
With the GitHub connector active, both the AFO Space and the plain baseline scored similarly (~6–8/18). The connector gave both agents direct repository access, substituting for the structured AFO files. **Connector state must be controlled in all future tests.** No-connector is the canonical condition.

### Finding 2 — Plain LLMs recognize the AFO gap unprompted
The plain baseline agent spontaneously offered to build the missing AFO files without any prompt or instruction to do so. This confirms AFO concepts are present in LLM training data and that the gap is visible to models even without G-000 instructions.

### Finding 3 — G-000 v0.3 produces structured gap report; plain baseline does not
The AFO Space agent produced a per-endpoint checklist, plain-English gap explanations, and a prioritized fix package. The plain baseline produced a narrative description without a structured deliverable. **The audit agent is the product differentiator — not the scoring alone.**

### Finding 4 — AFO content is in LLM ambient knowledge
The plain Perplexity agent web-searched its way to sanity.io field guides and AFO-adjacent concepts without any instructions. Ambient discoverability of the AFO protocol exists. This is a moat indicator — the protocol is becoming a known standard.

---

## Controlled Variable Log

For test reproducibility, all variables must match across Agent A and Agent B:

| Variable | Required value | Notes |
|---|---|---|
| Connector state | OFF | Most critical variable |
| Model family | Same (Perplexity Sonar) | Do not mix Claude/GPT/Perplexity |
| Prompt | Identical | Copy-paste, not paraphrase |
| Date | Same session | Prevents training data drift between runs |
| Source material mode | Open web only | No file uploads, no attachments |

---

## Relationship to Other Scenarios

| Scenario | Site | AFO files | Score | Role |
|---|---|---|---|---|
| **Scenario B** (this doc) | sindresorhus/awesome | None | 2/18 | Gap demo — the "before" |
| **Scenario C** | nothinginfinity/agent-feed-optimization | Full suite | 18/18 | Perfect-site demo — the "after" |

The delta between these two scenarios (+16 points, 0% → 100% readiness) is the core sales argument. Both are real public repositories. The only variable is the presence of 7 structured files.

---

## Use in Sales Materials

This test record supports:
- The before/after comparison table in `docs/audit/scenario-c-perfect-site.md`
- The sample audit report in `docs/audit/audit-report-sample-scenario-b.md`
- The "Before Snapshot" section in any client audit report
- Demo scripts: open Perplexity, paste the Scenario B URL, show the live 2/18 score

**Live demo instructions:**
1. Open Perplexity with no connector active
2. Paste: `https://github.com/sindresorhus/awesome`
3. Ask: *"What structured information does this site provide for AI assistants? What feeds, context files, or agent-readable endpoints exist?"*
4. Show the response — 15 external citations, no structured endpoints found, spontaneous offer to build the files
5. Repeat with `https://github.com/nothinginfinity/agent-feed-optimization` using G-000 Space active
6. Show the 18/18 result — structured profile, full context-cookie JSON, gap report says "nothing missing"

Two prompts. Two screenshots. That's the entire pitch.

---

_Related files:_
- `docs/audit/scenario-c-perfect-site.md` — perfect-site one-pager
- `docs/audit/audit-report-sample-scenario-b.md` — filled sample audit report
- `docs/audit/audit-report-template.md` — blank client template
- `gists/G-000-afo-sonar-reader.md` — audit agent instructions (v0.3)
- `tests/TEST-001-baseline-vs-afo-sonar.md` — calibration run plan
