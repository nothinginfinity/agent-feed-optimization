# TEST-002 — Podcast Feed Discovery
_spec: afo | version: 0.1_

---

## Purpose

Test the AFO Sonar Reader against the example podcast demo source.

---

## Setup

1. Run inside the **AFO Sonar Reader** Perplexity Space.
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

## Log your results here

```
Date:
Pass/fail per checkpoint:
Notes:
```
