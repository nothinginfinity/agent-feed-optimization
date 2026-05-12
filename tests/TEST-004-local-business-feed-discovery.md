# TEST-004 — Local Business Feed Discovery
_spec: afo | version: 0.1_

---

## Purpose

Test the AFO Sonar Reader against the example local business demo source.

---

## Setup

1. Run inside the **AFO Sonar Reader** Perplexity Space.
2. Paste the contents of `examples/local-business/.well-known/agent-context.json` directly into the conversation.

---

## Test Prompt

> *"Use the Example Roofing Co. demo source. Explain what services are offered, what actions are available, and how an LLM could help a customer choose a service."*

---

## Expected Behavior

- [ ] LLM reads agent-context.json and correctly identifies the business type and service area
- [ ] LLM lists available services (repair, replacement, gutters, storm damage)
- [ ] LLM lists available actions (book inspection, get quote, contact, view services)
- [ ] LLM explains how it could help a customer: ask questions, compare options, book directly
- [ ] LLM links to official pages for booking/quote
- [ ] LLM suggests a context-cookie entry if user wants to revisit this contractor

---

## Log your results here

```
Date:
Pass/fail per checkpoint:
Notes:
```
