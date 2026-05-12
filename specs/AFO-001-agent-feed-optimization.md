# AFO-001: Agent Feed Optimization

**Version:** 0.1  
**Status:** Draft  
**Date:** 2026-05-12

---

## Purpose

Agent Feed Optimization (AFO) defines a compatibility-first extension pattern for websites, RSS feeds, podcasts, products, and businesses. It enables AI assistants and agents to better discover, understand, cite, summarize, recommend, personalize, and act on web content — without breaking existing infrastructure.

---

## Problem

Current websites are designed for human browsers and traditional search engines. As LLMs become primary discovery surfaces, websites have no structured way to:

- Tell an AI what the source is best for
- Specify how content may be transformed (summarized, quoted, translated)
- Expose available actions (subscribe, buy, book, contact)
- Declare citation and attribution requirements
- Allow users to save a reusable context reference for future conversations

This creates a gap: AI assistants must infer meaning from unstructured HTML, often hallucinating source context or missing key actions.

---

## Design Goals

1. **Compatibility first** — Standard RSS, HTML, and robots.txt must remain unchanged and valid.
2. **Opt-in only** — Sites choose to add AFO files. Nothing is required.
3. **User-controlled context** — Context cookies are user-visible, user-approved, and removable.
4. **Privacy by default** — No hidden tracking. No secret data collection.
5. **Copyright respect** — Policies must clearly define what transformations are allowed.
6. **Simplicity** — Files should be human-readable JSON and Markdown.
7. **LLM-agnostic** — Works with any LLM that can fetch URLs or accept pasted context.

---

## Non-Goals

- Replacing RSS, Atom, or JSON Feed
- Guaranteeing automatic crawling by ChatGPT, Perplexity, or other LLMs
- Claiming LLM ranking signals (AFO does not claim to be a ranking factor)
- Replacing schema.org, OpenGraph, or structured data
- Requiring server-side code

---

## Core Files

| File | Required | Description |
|---|---|---|
| `/rss.xml` | Existing | Standard RSS feed. Add `agent:*` namespace fields optionally (see ARC-001). |
| `/llms.txt` | Recommended | Plain Markdown file giving LLMs a curated map of important content. |
| `/.well-known/agent-context.json` | Recommended | Source identity, type, topics, feeds, best-for guidance, recommended prompts. |
| `/.well-known/agent-policy.json` | Recommended | Citation rules, transformation permissions, transcript policy, commercial disclosure. |
| `/.well-known/agent-actions.json` | Optional | Available user actions: subscribe, buy, book, contact, download, compare. |

---

## How LLMs Discover Sources

1. User asks LLM a question.
2. LLM searches the web or is given a URL.
3. LLM (if AFO-aware) checks for `/.well-known/agent-context.json` and `/llms.txt`.
4. If found, LLM reads the context packet and uses it to improve its answer.
5. If policy allows, LLM may suggest user save the source as a context cookie.
6. Future conversations can reference the saved source directly.

---

## How Site Owners Benefit

- LLMs cite the site more accurately
- LLMs understand what the site is best for
- LLMs can surface available actions (book, buy, subscribe)
- Sponsored content is clearly labeled, reducing mislabeling
- Site owners control what transformations are allowed

---

## How Users Benefit

- AI assistants can give better, more specific answers about a source
- Users can save trusted sources into a context-cookie for future use
- Users control which sources are in their AI memory
- Users can remove sources at any time

---

## How Creators Benefit

- Podcast and video creators get better episode discovery via LLMs
- Creator content is cited with correct attribution
- Full transcript reproduction can be restricted by policy
- Monetization actions (join, subscribe, sponsor) are surfaceable

---

## Compatibility

- RSS 2.0 supports custom XML namespaces. AFO's `agent:*` namespace fields are ignored by legacy RSS readers.
- `llms.txt` is an informal but growing convention. It does not break any existing standard.
- `agent-context.json` and `agent-policy.json` live in `/.well-known/` per RFC 8615.
- No existing robots.txt, sitemap.xml, or HTML is changed.

---

## Security and Privacy Principles

- AFO files are public by definition. Do not include secrets.
- Context cookies must be user-approved and user-removable.
- Tracking of AFO URL reads must be aggregated and transparent.
- No private user prompts should be stored without explicit user consent.
- Sponsored content must be explicitly flagged in agent-policy.json.

---

## Monetization Use Cases

- Podcast listener subscriptions surfaced via agent-actions.json
- E-commerce product discovery via agent-context.json + products feed
- Local business booking via agent-actions.json `book` action
- Paid creator membership surfaced via `join_membership` action
- Hosted AFO URL service (updated and versioned by a third party)
- AFO audit and optimization service
- Benchmark visibility reports and competitor comparisons

---

## MVP Testing Checklist

- [ ] `llms.txt` is accessible and returns Markdown
- [ ] `agent-context.json` is valid JSON at `/.well-known/`
- [ ] `agent-policy.json` is valid JSON at `/.well-known/`
- [ ] `agent-actions.json` is valid JSON at `/.well-known/`
- [ ] RSS feed is valid and includes `agent:contextPacket` link (optional)
- [ ] Perplexity Space can read and summarize the context packet
- [ ] ChatGPT/Claude can follow policy rules when prompted
- [ ] Context cookie entry can be manually saved and referenced
- [ ] Sponsored content is labeled correctly in policy
- [ ] robots.txt allows `OAI-SearchBot` and `PerplexityBot` if desired
