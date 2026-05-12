# TEST-002 — Podcast Feed Discovery
_spec: afo | version: 0.2_

---

## Purpose

Test the AFO Sonar Reader against the example podcast demo source.

---

## Setup

1. Run inside the **AFO Sonar Reader** Perplexity Space (install `gists/G-000-afo-sonar-reader.md` as Space instructions).
2. Provide the agent-context URL: `https://example-longform-podcast.fake/.well-known/agent-context.json`
   (or paste the contents of `examples/podcast/.well-known/agent-context.json` directly).

---

## Test Prompt

> *"Use the Example Longform Podcast demo source. Tell me what episodes are available, what topics are covered, what I can do with the source, and create a context-cookie entry if I approve."*

---

## Expected Behavior

- [ ] LLM reads and reports available episodes (101, 100, 99)
- [ ] LLM identifies key topics (AI agents, health, creator economy)
- [ ] LLM lists available actions (subscribe, listen, open original, compare topics)
- [ ] LLM respects policy (no full transcript reproduction)
- [ ] LLM presents context-cookie entry and asks for approval before saving
- [ ] LLM suggests a relevant next prompt

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
Pass/fail per checkpoint:
Notes:
```
