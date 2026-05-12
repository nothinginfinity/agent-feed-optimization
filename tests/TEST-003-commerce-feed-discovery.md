# TEST-003 — Commerce Feed Discovery
_spec: afo | version: 0.1_

---

## Purpose

Test the AFO Sonar Reader against the example ecommerce demo source.

---

## Setup

1. Run inside the **AFO Sonar Reader** Perplexity Space.
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

## Log your results here

```
Date:
Pass/fail per checkpoint:
Notes:
```
