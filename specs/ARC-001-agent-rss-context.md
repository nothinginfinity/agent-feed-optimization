# ARC-001: Agent RSS Context

**Version:** 0.1  
**Status:** Draft  
**Date:** 2026-05-12

---

## Purpose

Agent RSS Context (ARC) defines how to extend existing RSS 2.0 feeds with optional `agent:*` namespace fields that provide LLM/agent-readable metadata — while keeping the feed fully compatible with all standard RSS readers.

Legacy RSS readers ignore unknown namespace fields. LLMs and agentic readers use them.

---

## Namespace

```xml
xmlns:agent="https://agentfeed.org/ns/agent-rss/1.0"
```

This namespace URI is the canonical identifier for the ARC-001 extension.

---

## Channel-Level Fields

| Field | Description |
|---|---|
| `agent:contextPacket` | URL to `/.well-known/agent-context.json` |
| `agent:llmsTxt` | URL to `/llms.txt` |
| `agent:policyUrl` | URL to `/.well-known/agent-policy.json` |
| `agent:actionsUrl` | URL to `/.well-known/agent-actions.json` |
| `agent:recommendedPrompt` | A suggested prompt for LLMs interacting with this feed |
| `agent:sourceType` | e.g. `podcast`, `blog`, `ecommerce`, `local-business`, `news` |
| `agent:topics` | Comma-separated list of primary topics |

---

## Item-Level Fields

| Field | Description |
|---|---|
| `agent:topics` | Topics covered in this specific item |
| `agent:summaryUrl` | URL to a plain-text or Markdown summary of this item |
| `agent:transcriptUrl` | URL to a transcript (subject to policy rules) |
| `agent:allowedTransformations` | Comma-separated: `summary,study_guide,briefing,recommendation` |
| `agent:citationRequired` | `true` or `false` |
| `agent:sponsoredDisclosure` | `true` if item is sponsored/affiliate content |
| `agent:contentType` | e.g. `episode`, `product`, `article`, `listing`, `service` |

---

## Example

```xml
<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"
  xmlns:agent="https://agentfeed.org/ns/agent-rss/1.0">

  <channel>
    <title>Example Longform Podcast</title>
    <link>https://example-longform.com</link>
    <description>Long-form interviews about AI, culture, and ideas.</description>
    <language>en-us</language>

    <agent:contextPacket>https://example-longform.com/.well-known/agent-context.json</agent:contextPacket>
    <agent:llmsTxt>https://example-longform.com/llms.txt</agent:llmsTxt>
    <agent:policyUrl>https://example-longform.com/.well-known/agent-policy.json</agent:policyUrl>
    <agent:actionsUrl>https://example-longform.com/.well-known/agent-actions.json</agent:actionsUrl>
    <agent:sourceType>podcast</agent:sourceType>
    <agent:topics>AI, culture, technology, health, long-form interviews</agent:topics>
    <agent:recommendedPrompt>Ask for a personalized episode briefing based on your interests.</agent:recommendedPrompt>

    <item>
      <title>Episode 42: The Future of Intelligent Agents</title>
      <link>https://example-longform.com/episodes/42</link>
      <description>A wide-ranging conversation about where AI agents are heading and what that means for creators, developers, and everyday users.</description>
      <pubDate>Mon, 05 May 2026 09:00:00 +0000</pubDate>
      <guid>https://example-longform.com/episodes/42</guid>

      <agent:topics>AI agents, LLMs, creator economy, developer tools</agent:topics>
      <agent:summaryUrl>https://example-longform.com/episodes/42/summary.md</agent:summaryUrl>
      <agent:transcriptUrl>https://example-longform.com/episodes/42/transcript.md</agent:transcriptUrl>
      <agent:allowedTransformations>summary,study_guide,briefing,recommendation</agent:allowedTransformations>
      <agent:citationRequired>true</agent:citationRequired>
      <agent:sponsoredDisclosure>false</agent:sponsoredDisclosure>
      <agent:contentType>episode</agent:contentType>
    </item>

  </channel>
</rss>
```

---

## Compatibility Notes

- All `agent:*` fields are in a separate namespace and are silently ignored by any RSS reader that does not recognize the namespace.
- The feed above is valid RSS 2.0 and will parse correctly in any standard RSS reader.
- Namespace URI `https://agentfeed.org/ns/agent-rss/1.0` is reserved for this spec. It does not need to resolve to a live URL but SHOULD point to this documentation.

---

## Relationship to Other AFO Files

The `agent:contextPacket` field in the RSS channel is the primary link connecting the feed to the full AFO context layer. LLMs that support feed discovery should:

1. Find the RSS feed.
2. Detect the `agent:contextPacket` URL.
3. Fetch and read the context packet for richer source understanding.
4. Apply policy rules from `agent:policyUrl`.
5. Surface actions from `agent:actionsUrl`.
