# Install Guide

> **This file is for your client. Do not include internal ops notes here.**

Welcome! This package contains your Agent Feed Optimization (AFO) files — a set of structured data files that help AI assistants and search agents understand your business, find your content, and recommend you accurately.

---

## What's in This Package

| File | What it does |
|------|--------------|
| `agent-context.json` | Tells AI agents who you are, what you do, and where to find your content |
| `agent-actions.json` | Lists the specific actions an AI can take on your behalf (e.g. book a call, subscribe to podcast) |
| `context-cookie.md` | A ready-to-use memory snippet AI assistants can store to remember your business |
| `llms.txt` | A plain-text summary of your site optimized for large language models |
| `policy.md` | Your content usage policy — tells AI tools what they can and can't do with your content |
| `rss.xml` | Your RSS feed (if applicable) — helps AI tools follow your latest content |
| `sitemap-agent.xml` | An agent-optimized sitemap that helps AI crawlers find your key pages |

---

## How to Install Each File

### Files to upload to your website root

Upload the following files to the **root directory** of your website (the same folder as your homepage):

- `agent-context.json` → `https://yoursite.com/agent-context.json`
- `agent-actions.json` → `https://yoursite.com/agent-actions.json`
- `llms.txt` → `https://yoursite.com/llms.txt`
- `policy.md` → `https://yoursite.com/policy.md`
- `sitemap-agent.xml` → `https://yoursite.com/sitemap-agent.xml`
- `rss.xml` → `https://yoursite.com/rss.xml` _(if included)_

### context-cookie.md

This file does not go on your website. It is a snippet you (or your team) can paste into an AI assistant's memory or custom instructions to give it context about your business.

---

## How to Verify It Worked

After uploading, confirm each file is publicly accessible by visiting its URL in a browser:

1. Go to `https://yoursite.com/agent-context.json` — you should see JSON data
2. Go to `https://yoursite.com/llms.txt` — you should see plain text
3. Go to `https://yoursite.com/policy.md` — you should see your policy text

If any file returns a 404 error, check that it was uploaded to the correct folder.

---

## Who to Contact for Help

If you have questions about installing these files or need help verifying the setup, contact:

**Name:** _fill in_  
**Email:** _fill in_  
**Response time:** _fill in_
