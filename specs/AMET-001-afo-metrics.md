# AMET-001: AFO Metrics

**Version:** 0.1  
**Status:** Draft  
**Date:** 2026-05-12

---

## Purpose

AFO Metrics defines how to track, aggregate, and report the AI search visibility of an AFO-enabled source. It is the proof layer of the AFO service.

---

## What We Can Measure

| Metric | How |
|---|---|
| AFO URL reads | Server-side logs on hosted AFO files |
| Likely AI-crawler reads | User-agent classification |
| Tracked action clicks | Redirect tracking on `agent-actions.json` URLs |
| Context-cookie saves | App-side events when user approves a save |
| Benchmark appearances | Controlled test prompts run by an AFO-aware agent |
| Benchmark visibility rate | appearances / total prompts run |
| AFO score | Composite score across crawler access, files present, content quality, and benchmark performance |

---

## What We Cannot Honestly Measure

- Private ChatGPT, Perplexity, or Claude conversation appearances (unless inside our own app)
- Ranking signals inside closed LLM systems
- User intent or prompt content from third-party LLM sessions

> Always use honest language: "Your AFO URL was read 312 times, including 47 likely AI-agent reads." Not: "You appeared in 312 ChatGPT answers."

---

## Event Types

```
afo_url_read
agent_context_read
agent_policy_read
agent_actions_read
enhanced_rss_read
likely_ai_crawler_read
tracked_action_click
context_cookie_added
context_cookie_removed
benchmark_prompt_run
benchmark_source_appearance
benchmark_competitor_appearance
afo_file_updated
recommendation_generated
```

---

## Customer-Facing Metrics

- AFO URL reads (total and likely AI reads)
- Tracked action clicks
- Context-cookie saves/removes
- Benchmark appearances and visibility rate
- AFO score (0-100)
- Competitor visibility comparison
- Recommended fixes
- Before/after improvement delta

---

## Privacy Principles

- All event data is aggregated before customer-facing reporting.
- No private user prompts are stored.
- User-agent classification is coarse ("likely AI agent") not fingerprinting.
- Customers can request full data deletion.
- All tracking is disclosed in the service terms.

---

## Data Retention

- Raw events: 90 days
- Daily rollups: 2 years
- Benchmark history: indefinite (versioned)
- Customer reports: indefinite (customer-owned)

---

## AFO Score Components

| Category | Weight | Signals |
|---|---|---|
| Crawler access | 20% | OAI-SearchBot allowed, PerplexityBot allowed, sitemap present |
| Machine readability | 30% | llms.txt, agent-context.json, agent-policy.json, agent-actions.json, RSS present, feed freshness |
| Content usefulness | 25% | Summaries, product/service metadata, canonical URLs, topics, recommended prompts |
| Policy/trust | 15% | Citation rules, transformation permissions, sponsor disclosures, author identity |
| LLM benchmark | 10% | Benchmark visibility rate in controlled test prompts |
