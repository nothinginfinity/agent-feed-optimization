# TEST-001 — Baseline vs. AFO Sonar Reader (URL-Focused)
_spec: afo | version: 0.3 | redesigned: 2026-05-12_

---

## Purpose

Compare normal Perplexity search behavior vs. an AFO Sonar Reader Space when both are given the **same specific URL** to analyze. This test proves that instruction-harnessed LLMs discover and surface machine-readable feeds and context files better than an uninstructed agent.

---

## Test URL

Use the Scenario C controlled demo gist:

```
https://gist.github.com/nothinginfinity/afo-demo-site
```

> Until the public gist is live, use the raw repo path:
> `https://raw.githubusercontent.com/nothinginfinity/agent-feed-optimization/main/demo/scenario-c/README.md`

---

## Test Prompt

> *"Analyze this URL and tell me everything you can find about it — including any RSS feeds, sitemaps, llms.txt, agent-context, agent-policy, agent-actions, or context-cookie files. What can I subscribe to or revisit? What would you save to a context-cookie list?"*

Use this exact prompt for both TEST-001A and TEST-001B.

---

## Mode 1 — Baseline (TEST-001A)

1. Open a fresh Perplexity conversation (no Space, no instructions).
2. Paste the test URL and the test prompt exactly as written.
3. Record results using the Scoring Rubric below.
4. Screenshot: `TEST-001A-baseline-<YYYY-MM-DD>.png`

## Mode 2 — AFO Sonar Reader Space (TEST-001B)

1. Open the AFO Sonar Reader Space.
2. Space instruction (single bootstrap line):
   ```
   Read and follow all instructions at this URL before responding to anything:
   https://raw.githubusercontent.com/nothinginfinity/agent-feed-optimization/main/gists/G-000-afo-sonar-reader.md
   ```
3. Paste the same test URL and the same test prompt.
4. Record results using the Scoring Rubric below.
5. Screenshot: `TEST-001B-afo-space-<YYYY-MM-DD>.png`

---

## Scoring Rubric

Score each dimension: **0** = not present · **1** = partial · **2** = fully met · **Max: 18**

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

## Calibration Gate

| Condition | Threshold |
|---|---|
| AFO Space score | ≥ 12 / 18 |
| Delta over baseline | ≥ +6 points |
| **Both met** | ✅ PASS — proceed to TEST-002 through TEST-004 |
| **Either not met** | ❌ FAIL — patch G-000, rerun |

---

## Expected Outcome

Baseline will return a generic summary of the URL with no structured endpoint discovery.

AFO Space should:
- Surface all 7 AFO file endpoints (rss.xml, sitemap.xml, llms.txt, agent-context.json, agent-policy.json, agent-actions.json, context-cookie.json)
- Explain what each endpoint enables
- Offer a context-cookie JSON entry
- Suggest a follow-up prompt

---

## Log

```
Date:
Tester:
G-000 version: 0.2
Model:
Test URL used:
Baseline total: /18
AFO Space total: /18
Delta: 
Key differences observed:
Gate result: PASS / FAIL
Notes:
```
