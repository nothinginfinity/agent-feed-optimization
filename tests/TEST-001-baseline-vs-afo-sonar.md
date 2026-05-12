# TEST-001 — Baseline vs. AFO Sonar Reader
_spec: afo | version: 0.2_

---

## Purpose

Compare normal Perplexity search behavior vs. an AFO Sonar Reader Space on the same prompt. This test proves that **instruction-harnessed LLMs discover and use machine-readable feeds better**.

---

## Test Prompt

> *"Find me recent podcast episodes and creator content about AI agents, RSS feeds, and creator monetization. Prefer sources I can subscribe to or revisit."*

---

## Mode 1 — Baseline (Normal Perplexity)

1. Open a fresh Perplexity conversation (no Space, no instructions).
2. Ask the test prompt exactly as written above.
3. Record results using the Scoring Rubric below.

## Mode 2 — AFO Sonar Reader Space

1. Create a new Perplexity Space called **AFO Sonar Reader**.
2. Set the AI instructions to the contents of `gists/G-000-afo-sonar-reader.md`.
3. Ask the same test prompt.
4. Record results using the Scoring Rubric below.

---

## Scoring Rubric

Score each dimension using the canonical rubric in `docs/measurement-rubric.md`.

**0** = not present · **1** = partial · **2** = fully met · **Max: 18**

| Dimension | Baseline score | AFO Space score |
|---|---|---|
| Feed endpoint discovery | /2 | /2 |
| Canonical source preference | /2 | /2 |
| AFO file recognition | /2 | /2 |
| Endpoint explanation | /2 | /2 |
| Context-cookie usefulness | /2 | /2 |
| Citation quality | /2 | /2 |
| Policy / copyright caution | /2 | /2 |
| Actionability | /2 | /2 |
| Personalization readiness | /2 | /2 |
| **Total** | **/18** | **/18** |

---

## Expected Outcome

The AFO Sonar Reader Space should score meaningfully higher than the baseline, particularly on:
- Feed endpoint discovery
- AFO file recognition
- Context-cookie usefulness
- Source reuse / actionability

---

## Log your results here

```
Date:
Tester:
Space instructions version (G-000):
Model:
Baseline total: /18
AFO Space total: /18
Key differences observed:
Notes:
```
