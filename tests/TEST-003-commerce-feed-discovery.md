# TEST-003 — Commerce Feed Discovery
_spec: afo | version: 0.2_

---

## Purpose

Test the AFO Sonar Reader against the example ecommerce demo source.

---

## Setup

1. Run inside the **AFO Sonar Reader** Perplexity Space (install `gists/G-000-afo-sonar-reader.md` as Space instructions).
2. Provide the agent-context URL: `https://example-shirt-shop.fake/.well-known/agent-context.json`
   (or paste the contents of `examples/ecommerce/.well-known/agent-context.json` directly).

---

## Test Prompt

> *"Use the Example Shirt Shop demo source. Find products that match a user who likes simple, dark clothing under $50. Explain which feed or context endpoints you used."*

---

## Expected Behavior

- [ ] LLM reads agent-context.json and identifies the store's focus (dark basics, minimal)
- [ ] LLM finds relevant products (Midnight Crew Tee matches dark + under $50)
- [ ] LLM identifies which endpoints were used (RSS, products.json, agent-context.json)
- [ ] LLM links to official product pages (not hallucinated URLs)
- [ ] LLM respects policy (does not misrepresent prices or availability)
- [ ] LLM presents context-cookie entry and asks for approval before saving

---

## Scoring

Score using the canonical rubric in `docs/measurement-rubric.md`.

**0** = not present · **1** = partial · **2** = fully met · **Max: 18**

| Dimension | Score |
|---|---|
| Feed endpoint discovery | /2 |
| Canonical source preference | /2 |
| AFO file recognition | /2 |
| Endpoint explanation | /2 |
| Context-cookie usefulness | /2 |
| Citation quality | /2 |
| Policy / copyright caution | /2 |
| Actionability | /2 |
| Personalization readiness | /2 |
| **Total** | **/18** |

---

## Log your results here

```
Date:
Tester:
Space instructions version (G-000):
Model:
Score: /18
Endpoints found (check all that apply): [ ] RSS  [ ] agent-context.json  [ ] agent-policy.json  [ ] agent-actions.json  [ ] products.json
Pass/fail per checkpoint:
Notes:
```
