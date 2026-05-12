# ACC-001: Agent Context Cookies

**Version:** 0.1  
**Status:** Draft  
**Date:** 2026-05-12

---

## Purpose

Agent Context Cookies define a user-controlled format for saving source context references that LLMs can use in future conversations. They are the memory layer of the AFO stack.

> A context cookie is **not** a hidden tracking cookie. It is a visible, user-approved source memory object.

---

## The Analogy

Traditional web cookies say to a browser:
```
Here is data so I can remember your visit.
```

AFO context cookies say to an LLM:
```
Here is a source link so you can understand me better next time.
```

Unlike web cookies, AFO context cookies must always be:
- **User-visible** — the user can see all saved sources
- **User-approved** — the LLM asks before saving
- **User-removable** — the user can delete any source at any time
- **Source-labeled** — each entry clearly identifies where it came from
- **Permission-scoped** — each entry defines what the LLM is allowed to do with it

---

## Storage

Context cookies can be stored in:
- A GitHub Gist (`context-cookies.json`)
- A local file
- An app's user profile
- A Perplexity Space or ChatGPT Project instruction

---

## Entry Schema

```jsonc
{
  "id": "",                      // Required. Unique identifier for this entry.
  "label": "",                   // Required. Human-readable source name.
  "source_type": "",             // Required. e.g. podcast, ecommerce, local-business.
  "canonical_url": "",           // Recommended. Primary URL of the source.
  "rss_url": "",                 // Optional. RSS/Atom feed URL.
  "context_packet_url": "",      // Recommended. URL to agent-context.json.
  "policy_url": "",              // Optional. URL to agent-policy.json.
  "actions_url": "",             // Optional. URL to agent-actions.json.
  "added_at": "",                // Required. ISO date when added.
  "added_by": "",                // Optional. User or agent that added it.
  "user_reason": "",             // Optional. Why the user saved this source.
  "allowed_uses": [],            // Recommended. e.g. ["summarize", "recommend", "link_to_original"].
  "citation_required": true,     // Recommended.
  "trust_level": "user-approved",// Required. Must be "user-approved" for saved entries.
  "tags": [],                    // Optional. User-defined tags.
  "notes": "",                   // Optional. User notes about this source.
  "expires_at": null             // Optional. ISO date when this entry should expire.
}
```

---

## Full File Example

See [`examples/podcast/context-cookie.example.json`](../examples/podcast/context-cookie.example.json).

---

## LLM Behavior Guidance

When an LLM is given a context-cookies file, it SHOULD:

1. Read all entries and understand each source.
2. Use context packet URLs for richer source understanding.
3. Respect policy rules from `policy_url`.
4. Only use sources for `allowed_uses` listed in the entry.
5. Always cite the original source.
6. **Never add a new source without explicit user approval.**
7. Respond to user requests like:
   - "What sources are in my context cookies?"
   - "Remove Example Podcast."
   - "Why was Acme Roofing added?"
   - "Only use official RSS feeds."

---

## Privacy Principles

- Context cookies store **links**, not copyrighted full content.
- No user behavioral data should be embedded in the cookie.
- Sponsors or affiliate sources must be labeled.
- Cookies must not be shared between users without consent.
- The user should be able to audit and remove all entries at any time.
