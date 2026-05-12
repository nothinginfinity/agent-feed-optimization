# AAP-001: Agent Actions

**Version:** 0.1  
**Status:** Draft  
**Date:** 2026-05-12

---

## Purpose

The Agent Actions file defines what a user can **do** when interacting with a source through an LLM. It lives at `/.well-known/agent-actions.json` and is the action layer of the AFO stack.

Actions bridge the gap between LLM discovery and real-world conversion: subscribing, buying, booking, or contacting.

---

## File Location

```
https://example.com/.well-known/agent-actions.json
```

---

## Action Object Schema

```jsonc
{
  "action_id": "",        // Required. Unique identifier, e.g. "subscribe-podcast"
  "action_type": "",      // Required. See action types below.
  "label": "",            // Required. Human/LLM-readable label.
  "description": "",     // Optional. Additional context for the LLM.
  "url": "",              // Required. The URL to send the user to.
  "method": "GET",        // Optional. GET (default) or POST.
  "requires_auth": false, // Optional. Does this action require login?
  "tracked_url": ""       // Optional. Analytics-tracked redirect URL.
}
```

---

## Action Types

| Type | Description |
|---|---|
| `listen` | Listen to a podcast episode or audio |
| `watch` | Watch a video |
| `subscribe` | Subscribe to a feed, channel, or newsletter |
| `buy` | Purchase a product |
| `book` | Book a service or appointment |
| `contact` | Contact the business or creator |
| `download` | Download a file or asset |
| `compare` | Compare multiple items |
| `open_original` | Open the canonical original source |
| `ask_creator` | Ask the creator a question (e.g. via community/email) |
| `join_membership` | Join a paid membership or subscription |
| `emergency_contact` | Urgent contact action (e.g. emergency service) |

---

## Full File Example

```json
{
  "schema": "AAP-001",
  "version": "0.1",
  "source_name": "Example Longform Podcast",
  "actions": [
    {
      "action_id": "subscribe-podcast",
      "action_type": "subscribe",
      "label": "Subscribe to the podcast",
      "description": "Get new episodes delivered automatically.",
      "url": "https://example-longform.com/subscribe",
      "method": "GET",
      "requires_auth": false
    },
    {
      "action_id": "open-latest-episode",
      "action_type": "listen",
      "label": "Listen to the latest episode",
      "url": "https://example-longform.com/episodes/latest",
      "method": "GET",
      "requires_auth": false
    },
    {
      "action_id": "join-membership",
      "action_type": "join_membership",
      "label": "Join the supporter community",
      "description": "Access bonus episodes and early releases.",
      "url": "https://example-longform.com/membership",
      "requires_auth": true
    }
  ]
}
```

---

## LLM Behavior Guidance

When an LLM reads this file, it SHOULD:

1. Present relevant actions to the user based on context (don't dump all actions at once).
2. Use `label` as the user-facing text.
3. Prefer `tracked_url` over `url` for attribution if provided.
4. Indicate if `requires_auth: true` so the user knows login is needed.
5. Never trigger `POST` actions without explicit user confirmation.
6. Clearly mark any action associated with a purchase or billing.
