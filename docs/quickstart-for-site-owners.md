# Quickstart for Site Owners

You do not need to rebuild your website. You do not need to change your RSS feed. You just need to add a few files.

---

## Steps

1. **Keep your current website.** Nothing changes on the human-facing side.

2. **Keep or create your RSS feed.** Standard RSS 2.0 or Atom 1.0 are both supported. If you do not have one, create `rss.xml` with your latest content.

3. **Add `llms.txt` to your root.** This is a plain Markdown file that tells LLMs what your site is and where the important content is. See `examples/podcast/llms.txt` for a template.

4. **Add `.well-known/agent-context.json`.** This is the core AFO file. It describes your source identity, topics, feeds, what the source is best for, and pointers to policy and actions. See `examples/podcast/.well-known/agent-context.json` or `specs/ACP-001-agent-context-packet.md`.

5. **Add `.well-known/agent-policy.json`.** This tells LLMs what they can and cannot do with your content — citation rules, allowed transformations, transcript policy. See `specs/APOL-001-agent-policy.md`.

6. **Add `.well-known/agent-actions.json`.** List the actions an LLM can surface to users: subscribe, buy, book, contact, compare. See `specs/AAP-001-agent-actions.md`.

7. **Optionally add agent namespace fields to your RSS feed.** See `specs/ARC-001-agent-rss-context.md` and `examples/podcast/agent-rss.xml`. Legacy RSS readers ignore unknown namespace fields — this is safe.

8. **Test in Perplexity, ChatGPT, or Claude.** Paste your `agent-context.json` URL into an LLM conversation and ask: *"What is this source best for?"* Then run the prompts from your `prompts.md` file.

---

## Minimum Viable AFO Setup

If you want to start small, the minimum is:

- `llms.txt` at root
- `.well-known/agent-context.json`

Everything else is additive.
