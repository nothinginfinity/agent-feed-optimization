# APOL-001: Agent Policy

**Version:** 0.1  
**Status:** Draft  
**Date:** 2026-05-12

---

## Purpose

The Agent Policy file defines how LLMs and agents may use the content from a source. It lives at `/.well-known/agent-policy.json` and is the trust and permissions layer of the AFO stack.

---

## File Location

```
https://example.com/.well-known/agent-policy.json
```

---

## Fields

```jsonc
{
  "schema": "APOL-001",
  "version": "0.1",
  "source_name": "",
  "canonical_url": "",
  "updated_at": "",

  // Citation
  "citation_required": true,          // Must LLMs cite this source?
  "citation_format": "",              // Optional. e.g. "Podcast Name, Episode Title, URL"
  "attribution_required": true,        // Must the author/source be credited?

  // Allowed Transformations
  "allowed_transformations": [],       // e.g. ["summary", "study_guide", "briefing", "recommendation"]
  "disallowed_transformations": [],    // e.g. ["full_reproduction", "reposting", "commercial_reuse"]

  // Transcript Policy
  "full_transcript_allowed": false,    // May LLMs reproduce full transcripts?
  "summary_max_length": 500,           // Recommended max summary length in words.
  "excerpt_max_length": 150,           // Recommended max quote/excerpt length in words.

  // Commercial and Sponsored Content
  "contains_sponsored_content": false, // Does the feed include sponsored items?
  "sponsored_items_labeled": true,     // Are sponsored items labeled in the feed?
  "commercial_use_allowed": false,     // May content be used in commercial products?
  "affiliate_disclosure_required": false,

  // Freshness
  "freshness_hours": 24,               // How often should cached content be refreshed?
  "expires_at": null,                  // Optional hard expiry for this policy file.

  // Additional Notes
  "notes": ""
}
```

---

## Allowed Transformation Values

| Value | Description |
|---|---|
| `summary` | Short summary of content |
| `study_guide` | Educational breakdown |
| `briefing` | Personalized news/update briefing |
| `recommendation` | Recommendation based on user preferences |
| `comparison` | Side-by-side comparison with other sources |
| `translation` | Translation into another language |
| `full_reproduction` | Full text/transcript reproduction |
| `reposting` | Re-publishing content elsewhere |
| `commercial_reuse` | Use in paid/commercial products |

---

## LLM Behavior Guidance

When an LLM reads this file, it SHOULD:

1. Respect `allowed_transformations` and not produce disallowed forms.
2. Always include a citation if `citation_required: true`.
3. Limit summaries to `summary_max_length`.
4. Clearly label any sponsored items if `sponsored_items_labeled: true`.
5. Not reproduce full transcripts if `full_transcript_allowed: false`.
6. Refresh cached content if older than `freshness_hours`.
