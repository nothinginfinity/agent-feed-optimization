# AFO Measurement Rubric

Use this rubric to score any LLM response against AFO quality dimensions.

Score each dimension: **0** (not present), **1** (partial), **2** (fully met)

---

| Dimension | 0 | 1 | 2 |
|---|---|---|---|
| **Feed endpoint discovery** | No feeds found | Partial (e.g. only main RSS) | All relevant feeds identified (RSS, agent-context, agent-actions, llms.txt) |
| **Canonical source preference** | Used aggregator or mirror | Used a mix | Used official/canonical source only |
| **AFO file recognition** | Did not read AFO files | Partially used AFO data | Fully used agent-context, policy, and actions |
| **Endpoint explanation** | No explanation | Brief mention | Clearly explained what each endpoint enables |
| **Context-cookie usefulness** | No suggestion | Mentioned but incomplete | Full context-cookie entry presented, approval requested |
| **Citation quality** | No citations | Partial citations | All claims linked to original sources |
| **Policy / copyright caution** | Reproduced full content | Partially respected policy | Fully respected policy and labeled permissions correctly |
| **Actionability** | No next steps | Vague suggestions | Clear, specific next steps (subscribe, book, compare) |
| **Personalization readiness** | Generic answer | Slightly personalized | Used user context + source context to tailor response |

**Max score: 18**

---

## Interpretation

| Score | Rating |
|---|---|
| 15–18 | ✅ Excellent — AFO-aware behavior fully demonstrated |
| 10–14 | 🟡 Good — most dimensions working, some gaps |
| 5–9 | 🟠 Partial — instruction harness helping but not fully effective |
| 0–4 | 🔴 Baseline — no meaningful feed or context-aware behavior |
