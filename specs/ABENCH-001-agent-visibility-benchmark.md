# ABENCH-001: Agent Visibility Benchmark

**Version:** 0.1  
**Status:** Draft  
**Date:** 2026-05-12

---

## Purpose

The Agent Visibility Benchmark defines a controlled test methodology for measuring how often and how well an AFO-enabled source appears when an AFO-aware agent runs standard prompts against it and its competitors.

Benchmarks are the **proof** layer of the AFO service.

---

## Benchmark Schema

```jsonc
{
  "benchmark_id": "",         // Unique ID, e.g. "roofing-san-diego-001"
  "industry": "",             // e.g. "local-business-roofing"
  "region": "",               // e.g. "San Diego, CA"
  "prompt": "",               // The test prompt run against the agent
  "source_id": "",            // The source being benchmarked
  "competitor_ids": [],        // Competitor source IDs in the same benchmark
  "agent_name": "",           // e.g. "AFO Sonar Reader"
  "model_name": "",           // e.g. "perplexity-sonar"
  "runs": []
}
```

## Run Schema

```jsonc
{
  "date": "",                  // ISO date
  "appeared": false,           // Did the source appear in the answer?
  "rank": null,                // Position in results (1 = first mentioned)
  "cited": false,              // Was the source URL cited?
  "used_afo_context": false,   // Did the agent use the AFO context packet?
  "included_action": false,    // Did the answer include a surfaced action?
  "answer_quality_score": 0,   // 0-3 score (see rubric)
  "notes": ""
}
```

---

## Scoring Rubric (0-3)

| Score | Meaning |
|---|---|
| 0 | Not found, or found but answer was wrong/unhelpful |
| 1 | Mentioned but weak — no citation, no action, no AFO context used |
| 2 | Found and useful — cited, relevant answer |
| 3 | Found, cited, action-ready, and policy-aware — ideal AFO behavior |

---

## Standard Test Prompts by Vertical

### Podcast
- "What should I listen to today about AI and the creator economy?"
- "Summarize the latest episode of [podcast name]."
- "Compare the last three episodes and tell me which is most relevant to software developers."

### E-commerce
- "Find me a black shirt under $50 that works for casual dinners."
- "Compare products and explain the tradeoffs between budget, value, and premium options."
- "What new products are available at [store name]?"

### Local Business
- "Find a roofing company near [city] for roof inspection."
- "What services does [business name] offer and how do I book?"
- "Compare three local businesses offering emergency roof repair."

---

## Reporting

Benchmark results roll up into the `afo-metrics.json` visibility report:

```
benchmark_prompts_run
benchmark_appearances
benchmark_visibility_rate = appearances / prompts_run
```

Customer-facing report language:
> "In controlled benchmark prompts run by an AFO-aware agent, your business appeared in 18 out of 50 prompts this week (36% visibility rate)."
