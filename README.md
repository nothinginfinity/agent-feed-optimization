# Agent Feed Optimization

> RSS and context packets for LLM-readable websites.
> **ASO = SEO for AI agents. AFO = the technical feed/context format that makes it work.**

---

## What is AFO?

Agent Feed Optimization (AFO) is a compatibility-first extension pattern that helps existing websites, RSS feeds, podcasts, products, and businesses become easier for AI assistants to **discover, understand, cite, summarize, recommend, personalize, and act on**.

You do not replace your website. You do not break your RSS feed. You add a thin, optional layer of machine-readable files that LLMs can use — today.

---

## The Layer Model

```
Website              = human layer
RSS/feed             = update layer
agent-context.json   = meaning layer
agent-policy.json    = permission/trust layer
agent-actions.json   = action layer
context-cookie.json  = user-saved source memory
LLM / chat app       = personalized renderer
```

---

## How it works

```
User asks an LLM
   ↓
LLM searches the web
   ↓
Finds RSS + agent-context.json
   ↓
Reads source meaning, policy, actions
   ↓
User approves saving source to context-cookie
   ↓
Future conversations use that source more intelligently
```

---

## Core Files

| File | Purpose |
|---|---|
| `/rss.xml` | Standard RSS feed — unchanged, fully compatible |
| `/llms.txt` | Curated LLM-readable site map |
| `/.well-known/agent-context.json` | Source identity, topics, feeds, best-for guidance |
| `/.well-known/agent-policy.json` | Citation rules, transformation permissions, copyright |
| `/.well-known/agent-actions.json` | Available actions: subscribe, buy, book, compare, contact |
| `context-cookie.json` | User-controlled source memory saved in a gist or app |

---

## Important Principles

- ✅ **Compatible with current RSS** — legacy readers ignore unknown fields
- ✅ **Does not replace normal websites** — the human layer stays as-is
- ✅ **Does not require big platforms to adopt it first** — works today when URLs are given to an LLM
- ✅ **Context cookies are user-visible, user-approved, and removable**
- ✅ **Copyright and licensing must be respected**
- ✅ **Sponsored content must be clearly labeled**
- ✅ **Becomes more powerful as AI browsers and agents adopt feed-aware discovery**

---

## What works today

When a URL is given to or fetched by an LLM (Perplexity, ChatGPT with browsing, Claude project, custom agent), AFO files:
- Help the LLM understand what the source is and what it is best for
- Guide citations and transformation permissions
- Surface available actions
- Let users save the source into a context-cookie for future conversations

---

## Repo Structure

```
agent-feed-optimization/
  README.md
  LICENSE
  specs/           ← Formal spec documents
  examples/        ← Realistic fictional demo sources
  gists/           ← LLM-installable instruction harnesses
  schemas/         ← JSON Schema definitions
  tests/           ← Manual test scripts and rubrics
  docs/            ← Quickstarts, how-tos, terminology, roadmap
```

---

## The one-sentence pitch

> RSS tells agents what changed. Context packets tell agents what it means and how to use it.

---

## Status

This is an experimental open spec and service layer. v0.1 — spec and examples in progress.

See [`docs/roadmap.md`](docs/roadmap.md) for the full roadmap.
