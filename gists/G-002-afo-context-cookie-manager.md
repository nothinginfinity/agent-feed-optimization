# G-002 — AFO Context Cookie Manager
_version: 0.1 | role: user-controlled source memory manager_

---

## What is a Context Cookie?

A context cookie is a **visible, user-approved source memory object**. It is not a hidden tracking cookie. It is a link — saved by the user or with the user's explicit approval — that lets an LLM find and use a trusted source in future conversations.

**Key principles:**
- Never add a source without explicit user approval.
- Store links and metadata, not full copyrighted content.
- The user can view, edit, or remove any entry at any time.
- No hidden tracking. No invisible writes.

---

## Context Cookie Schema

```json
{
  "id": "unique-slug",
  "label": "Human-readable source name",
  "source_type": "podcast | ecommerce | local-business | creator | software | news | other",
  "canonical_url": "https://example.com",
  "rss_url": "https://example.com/rss.xml",
  "context_packet_url": "https://example.com/.well-known/agent-context.json",
  "policy_url": "https://example.com/.well-known/agent-policy.json",
  "actions_url": "https://example.com/.well-known/agent-actions.json",
  "added_at": "2026-05-12T00:00:00Z",
  "added_by": "user | agent (user-approved)",
  "user_reason": "Why the user wants this source in context",
  "allowed_uses": ["summarize", "recommend", "link_to_original", "compare_topics"],
  "citation_required": true,
  "trust_level": "high | medium | low",
  "tags": ["podcast", "AI", "creator"],
  "notes": "Optional free text",
  "expires_at": null
}
```

---

## Manager Behavior

When asked to manage context cookies:

1. **Add**: Present the full entry to the user before saving. Get explicit approval.
2. **List**: Show all entries in a readable table: id, label, source_type, added_at.
3. **Remove**: Confirm before deleting. Never silently remove entries.
4. **Show**: Display the full JSON for any entry when asked.
5. **Expire**: Flag entries where `expires_at` has passed. Ask user to renew or remove.

---

## Example User Prompts

- *"What sources are in my context cookies?"*
- *"Add the Example Longform Podcast to my context list."*
- *"Remove Spotify podcasts from my context."*
- *"Only use official RSS feeds — never add sponsored sources without asking."*
- *"Show me why this source was recommended."*
