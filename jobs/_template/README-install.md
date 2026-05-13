# Install Guide

> **This file is for your client. Do not include internal ops notes here.**

Welcome! This package contains your Agent Feed Optimization (AFO) files — a set of structured data files that help AI assistants and search agents understand your business, find your content, and recommend you accurately.

---

## What's in This Package

| File | What it does |
|------|--------------|
| `llms.txt` | A plain-text summary of your site optimized for large language models |
| `agent-context.json` | Tells AI agents who you are, what you do, and where to find your content |
| `agent-actions.json` | Lists the specific actions an AI can suggest on your behalf (e.g. book a call, subscribe) |
| `agent-policy.json` | Installs to `/.well-known/agent-policy.json` — tells AI systems your content rules in machine-readable format |
| `policy.md` | A plain-English summary of your content policy — for your reference, does not need to be installed |
| `context-cookie.json` | Installs to `/.well-known/context-cookie.json` — gives AI systems a structured snapshot of your business identity |
| `context-cookie.md` | A plain-English explanation of what the context cookie does — for your reference, does not need to be installed |
| `rss.xml` | Your RSS feed — helps AI tools follow your latest content (included only if applicable) |
| `sitemap-agent.xml` | An agent-optimized sitemap that helps AI crawlers find your key pages |
| `README-install.md` | This file |

> **Note:** Files ending in `.md` are plain-English companions for your reference. Only the `.json` and `.xml` files need to be installed on your website.

---

## How to Install Each File

### Files to upload to your `/.well-known/` directory

Create a folder called `.well-known` in the root of your website and upload:

- `agent-context.json` → `https://yoursite.com/.well-known/agent-context.json`
- `agent-actions.json` → `https://yoursite.com/.well-known/agent-actions.json`
- `agent-policy.json` → `https://yoursite.com/.well-known/agent-policy.json`
- `context-cookie.json` → `https://yoursite.com/.well-known/context-cookie.json`

### Files to upload to your website root

- `llms.txt` → `https://yoursite.com/llms.txt`
- `sitemap-agent.xml` → `https://yoursite.com/sitemap-agent.xml`
- `rss.xml` → `https://yoursite.com/rss.xml` _(if included in your package)_

### Files that do not need to be installed

- `policy.md` — for your reference only
- `context-cookie.md` — for your reference only
- `README-install.md` — this guide

---

## How to Verify It Worked

After uploading, confirm each file is publicly accessible by visiting its URL in a browser:

1. `https://yoursite.com/.well-known/agent-context.json` — you should see JSON data
2. `https://yoursite.com/.well-known/agent-policy.json` — you should see JSON data
3. `https://yoursite.com/llms.txt` — you should see plain text
4. `https://yoursite.com/sitemap-agent.xml` — you should see XML data

If any file returns a 404 error, check that it was uploaded to the correct folder.

---

## Who to Contact for Help

If you have questions about installing these files or need help verifying the setup, contact:

**Name:** {contact_name}  
**Email:** {contact_email}  
**Response time:** Within 1 business day
