# TrueBuild Business Credit — AFO File Delivery README
_AFO File Generator G-001 v1.0 | Generated: 2026-05-12_
_NOTE: This is the first live G-001 output, generated in the G-001 File Generator Space session. Saved here as the canonical first-run example._

---

## Overview

This package contains 7 AFO (Agent Feed Optimization) endpoint files for **TrueBuild Business Credit** (`https://info.truebuild.com`). These files enable AI assistants, LLM agents, and crawlers to accurately discover, cite, and interact with TrueBuild's website.

**Current AFO Score:** 0 / 18 (Not Visible)
**Estimated score after installation + TODO resolution:** 18 / 18

---

## What's in This Package

| File | Purpose |
|------|---------|
| `llms.txt` | Human-readable identity file for LLMs and AI crawlers |
| `agent-context.json` | Structured business identity for AI agents |
| `agent-policy.json` | Content usage policy for AI systems |
| `agent-actions.json` | Callable actions AI can suggest to users |
| `context-cookie.json` | Lightweight identity token for AI session context |
| `sitemap.xml` | Skeleton sitemap for crawler discovery |
| `rss.xml` | RSS feed skeleton for content indexing |

---

## Before You Install — Fill These TODOs

The following fields are marked `TODO_CLIENT_CONFIRM` in the generated files. **Resolve all TODOs before delivering or installing files.**

| Field | Files Affected | What to Provide |
|-------|---------------|-----------------|
| `owner_name` | `agent-context.json` | Full name of business owner |
| `email` | `llms.txt`, `agent-context.json` | Primary business contact email |
| `address.street` | `agent-context.json` | Street address |
| `address.city` | `agent-context.json` | City |
| `address.state` | `agent-context.json` | State (2-letter code) |
| `address.zip` | `agent-context.json` | ZIP code |
| `hours` | `agent-context.json` | Business operating hours (e.g., "Mon–Fri 9am–5pm PT") |
| `cta_url` | `llms.txt`, `agent-actions.json` | URL for "Get Your Free Business Credit Analysis" |
| `social.twitter` | `agent-context.json` | Twitter/X handle or profile URL |
| `social.linkedin` | `agent-context.json` | LinkedIn page URL |
| `social.facebook` | `agent-context.json` | Facebook page URL |
| `social.instagram` | `agent-context.json` | Instagram handle or URL |
| `social.youtube` | `agent-context.json` | YouTube channel URL |
| `feed_url` | `rss.xml` | Blog RSS feed URL (if one exists) |
| `blog_url` | `sitemap.xml` | Blog index page URL |
| `sitemap_url` | `sitemap.xml` | Existing sitemap URL (if one exists) |
| Additional key pages | `sitemap.xml` | All other key page URLs (services, about, contact, etc.) |

**Total TODOs: 17**

---

## Installation Instructions

### Step 1 — Resolve all TODOs
Open each file and replace every instance of `TODO_CLIENT_CONFIRM` with the correct client-confirmed value. Do not guess — if a value is unknown, leave the TODO and note it for the client.

### Step 2 — Run the validator
Before uploading any files, run:

```bash
node validate.js ./generator/samples/truebuild
```

Fix any errors reported before proceeding.

### Step 3 — Upload files to the website root

All 7 files must be placed at the **website root**. For `https://info.truebuild.com`, each file should be accessible at:

```
https://info.truebuild.com/llms.txt
https://info.truebuild.com/agent-context.json
https://info.truebuild.com/agent-policy.json
https://info.truebuild.com/agent-actions.json
https://info.truebuild.com/context-cookie.json
https://info.truebuild.com/sitemap.xml
https://info.truebuild.com/rss.xml
```

### Step 4 — Verify public access
After uploading, visit each URL in a browser and confirm the raw file content loads without a 404 or login redirect.

### Step 5 — Submit for re-audit
Once all 7 files are live, run the AFO Audit Agent (G-000) against `https://info.truebuild.com` to confirm the score updated from 0 to 18.

---

## File-by-File Notes

### `llms.txt`
Plain text. Must be accessible at `/llms.txt`. Primary discovery file read by LLMs when they encounter the domain.

### `agent-context.json`
Most data-rich file. Fill all TODOs — missing fields reduce the AI’s ability to accurately represent the business.

### `agent-policy.json`
No TODOs. Review `disallowed_uses` with the client before delivery.

### `agent-actions.json`
Phone action fully populated. CTA action requires `cta_url` to be filled.

### `context-cookie.json`
No TODOs. Fully populated lightweight identity file.

### `sitemap.xml`
Homepage only. Add all key pages before install.

### `rss.xml`
Skeleton only. Replace with real posts or a feed redirect stub.

---

## Content Policy Reminder

Per `agent-policy.json`, the following are **prohibited** for AI systems:
- Claiming specific credit score outcomes as guaranteed
- Reproducing pricing or program fees without verification
- Claiming endorsements not made by TrueBuild

Citation is **required** when TrueBuild content is referenced.

---

## Package Checklist

- [ ] All 17 `TODO_CLIENT_CONFIRM` fields resolved
- [ ] `validate.js` passes with no errors
- [ ] All 7 files accessible at website root URLs
- [ ] `sitemap.xml` populated with all key pages
- [ ] `rss.xml` populated with real posts or feed redirect
- [ ] Client reviewed `agent-policy.json` disallowed uses
- [ ] Re-audit run — AFO score confirmed at 18/18

---

_Generated by: AFO File Generator G-001 v1.0_
_Audit by: AFO Audit Agent G-000 v0.3_
_Profile date: 2026-05-12_
