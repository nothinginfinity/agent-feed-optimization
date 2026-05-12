# TEST-001 — Baseline vs. AFO Sonar Reader
_spec: afo | version: 0.1_

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

Score each dimension: **0** (not present), **1** (partially), **2** (fully)

| Dimension | Baseline score | AFO Space score |
|---|---|---|
| Found RSS or feed endpoints | /2 | /2 |
| Found official/canonical sources | /2 | /2 |
| Explained how to reuse sources | /2 | /2 |
| Suggested source memory / context-cookie | /2 | /2 |
| Cited sources clearly | /2 | /2 |
| Avoided overclaiming | /2 | /2 |
| Produced actionable next steps | /2 | /2 |
| **Total** | **/14** | **/14** |

---

## Expected Outcome

The AFO Sonar Reader Space should score meaningfully higher than the baseline, particularly on:
- Feed endpoint discovery
- Source reuse guidance
- Context-cookie suggestion

---

## Log your results here

```
Date:
Baseline total: /14
AFO Space total: /14
Key differences observed:
Notes:
```
