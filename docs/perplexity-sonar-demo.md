# Perplexity Sonar Demo Guide

This guide walks through the full AFO demo using Perplexity Sonar.

---

## Setup

1. Go to [perplexity.ai](https://perplexity.ai) and create a new Space called **AFO Sonar Reader**.
2. Set model to Sonar (or the best available search model).
3. Paste the full contents of `gists/G-000-afo-sonar-reader.md` into the Space instructions.
4. (Optional) Add `gists/G-001-afo-agent-identity.md` as additional context.

---

## Run the Demo

### Step 1 — Baseline Test

First, run TEST-001 **outside** the Space (normal Perplexity). Record the score.

### Step 2 — AFO Space Test

Run TEST-001 **inside** the AFO Sonar Reader Space. Record the score.

### Step 3 — Demo Source Tests

Run TEST-002, TEST-003, and TEST-004 inside the Space, using the example demo sources from `examples/`.

---

## What to Measure

See `docs/measurement-rubric.md` for the full scoring rubric.

Key things to capture:
- Screenshot of baseline results vs. AFO Space results for the same prompt
- Whether the Space found RSS/feed endpoints the baseline missed
- Whether the Space suggested context-cookie entries
- Whether policy was respected (no full transcript reproduction)

---

## The Demo Claim

> AFO-aware instructions make current LLM search agents better at finding and using machine-readable feeds today. AFO-optimized sources make those agents even better.

This is what the demo proves.
