# Quickstart for LLM Users

You can use AFO-optimized sources today — no platform adoption required.

---

## Option A — Paste a URL directly

1. Find a website with an `agent-context.json` file (or use an example from this repo).
2. In any LLM conversation with web or file access, paste the URL:
   > *"Read this source context: [URL to agent-context.json]. What is this source best for?"*
3. Ask follow-up questions using the recommended prompts in the source's `prompts.md` or `llms.txt`.

---

## Option B — Set up an AFO Sonar Reader Space in Perplexity

1. Go to [perplexity.ai](https://perplexity.ai) and create a new Space.
2. Name it: **AFO Sonar Reader**.
3. Set the AI instructions to the full contents of `gists/G-000-afo-sonar-reader.md`.
4. (Optional) Also paste `gists/G-001-afo-agent-identity.md` for identity context.
5. Start asking questions — the Space will now search for RSS feeds, context packets, and machine-readable sources automatically.

---

## Option C — Paste into a ChatGPT or Claude Project

1. Create a new Project in ChatGPT or a new Project in Claude.
2. Paste the contents of `gists/G-000-afo-sonar-reader.md` into the system instructions or project instructions.
3. Attach `gists/G-001-afo-agent-identity.md` as a knowledge file.
4. Ask the same feed-discovery questions.

---

## Managing your context cookies

When an LLM using G-000 finds a useful source, it will present a context-cookie entry and ask if you want to save it. You can maintain a personal context-cookie list by:

- Saving approved entries to a private GitHub Gist as `context-cookies.json`
- Pasting the gist URL into your Space/Project instructions so the LLM knows what sources you've already approved
- Using G-002 (context cookie manager instructions) to manage the list
