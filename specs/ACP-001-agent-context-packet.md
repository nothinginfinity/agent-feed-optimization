# ACP-001: Agent Context Packet

**Version:** 0.1  
**Status:** Draft  
**Date:** 2026-05-12

---

## Purpose

The Agent Context Packet defines the structure and content of `/.well-known/agent-context.json` — the primary meaning layer that tells LLMs what a website or feed is, what it is best for, and how to interact with it.

---

## File Location

```
https://example.com/.well-known/agent-context.json
```

Per RFC 8615, files in `/.well-known/` are a standard location for machine-readable site metadata.

---

## Fields

```jsonc
{
  "schema": "ACP-001",              // Required. Schema identifier.
  "version": "0.1",                 // Required. Schema version.
  "generated_at": "2026-05-12",    // Recommended. ISO date.
  
  // Source Identity
  "source_name": "",               // Required. Human-readable name.
  "source_type": "",               // Required. See source types below.
  "canonical_url": "",             // Required. The primary URL for this source.
  "description": "",               // Recommended. Plain text description for LLMs.
  "language": "en",                // Recommended.
  "region": "",                    // Optional. e.g. "US", "global".
  
  // Topics and Use Cases
  "topics": [],                    // Recommended. Array of topic strings.
  "best_for": [],                  // Recommended. What is this source best for?
  "not_for": [],                   // Optional. Explicit non-use cases.
  
  // Feeds
  "rss_feeds": [],                 // Recommended. Array of RSS/Atom feed URLs.
  "json_feed": "",                 // Optional. JSON Feed URL.
  "sitemap": "",                   // Optional. sitemap.xml URL.
  
  // LLM Guidance
  "llms_txt": "",                  // Recommended. URL to /llms.txt.
  "recommended_prompts": [],       // Optional. Array of suggested prompts.
  "llm_instructions": {},          // Optional. Freeform guidance object.
  
  // Related Sources
  "related_sources": [],           // Optional. Array of {label, url, type}.
  
  // Trust and Citation
  "policy_url": "",                // Recommended. URL to agent-policy.json.
  "actions_url": "",               // Optional. URL to agent-actions.json.
  "citation_hint": "",             // Optional. How to cite this source.
  
  // Context Cookie
  "context_cookie": {              // Optional. Hint for context-cookie saves.
    "label": "",
    "url": ""
  }
}
```

---

## Source Types

```
podcast         — Audio podcast
video-channel   — YouTube or video series
blog            — Written blog or newsletter
news            — News publication
ecommerce       — Online store or product catalog
local-business  — Physical/local service business
software        — Software product or SaaS
creator         — Individual creator (multi-format)
dataset         — Structured data source
other           — Anything else
```

---

## Example

See [`examples/podcast/.well-known/agent-context.json`](../examples/podcast/.well-known/agent-context.json) for a full working example.
