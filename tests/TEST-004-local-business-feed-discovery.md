# TEST-004 — Local Business Feed Discovery
_spec: afo | version: 0.2_

---

## Purpose

Test the AFO Sonar Reader against the example local business demo source.

---

## Setup

1. Run inside the **AFO Sonar Reader** Perplexity Space (install `gists/G-000-afo-sonar-reader.md` as Space instructions).
2. Paste the contents of `examples/local-business/.well-known/agent-context.json` directly into the conversation.

> ⚠️ **Note on RSS:** Local business sources (e.g. a roofing company) do not typically publish RSS feeds. The **Feed endpoint discovery** dimension should be scored based on agent-context.json, agent-policy.json, and agent-actions.json discovery only. Mark RSS as N/A — do not penalize for absence of an RSS feed.

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

## Scoring

Score using the canonical rubric in `docs/measurement-rubric.md`.

**0** = not present · **1** = partial · **2** = fully met · **Max: 18**

> ⚠️ Feed endpoint discovery: score based on AFO files found (agent-context, policy, actions). RSS = N/A for this source type.

| Dimension | Score |
|---|---|
| Feed endpoint discovery (AFO files only; RSS = N/A) | /2 |
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
Feeds found: N/A — local business (no RSS); AFO files: [ ] agent-context.json  [ ] agent-policy.json  [ ] agent-actions.json
Pass/fail per checkpoint:
Notes:
```
