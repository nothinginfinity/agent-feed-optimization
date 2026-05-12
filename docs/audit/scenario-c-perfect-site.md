# What a Fully Optimized Site Looks Like
_Scenario C · Perfect-site demo · AFO score: 18/18_

---

## The Short Version

This is what it looks like when a website gives AI assistants everything they need.

When we ran our AI visibility audit on the **agent-feed-optimization** demo repository, it scored **18 out of 18**. That means every AI assistant — ChatGPT, Perplexity, Claude, Gemini — can find this site, understand exactly what it does, cite it accurately, and recommend it with confidence.

Most websites score between 0 and 4. This is what the other end of that spectrum looks like.

---

## The Audit Results

**Site audited:** `https://github.com/nothinginfinity/agent-feed-optimization`
**Audit date:** 2026-05-12

```
AFO SCORE: 18 / 18
READINESS TIER: ✅ AI-Ready
```

| File | Status | Points |
|---|---|---|
| RSS / News Feed | ✅ Found | 3 / 3 |
| Sitemap | ✅ Found | 2 / 2 |
| llms.txt | ✅ Found | 3 / 3 |
| Agent Context File | ✅ Found | 3 / 3 |
| Agent Policy File | ✅ Found | 2 / 2 |
| Agent Actions File | ✅ Found | 2 / 2 |
| Context Memory File | ✅ Found | 3 / 3 |
| **Total** | | **18 / 18** |

---

## What Each File Does — In Plain English

### ✅ RSS / News Feed
This file lets AI assistants subscribe to the site's latest content. When the site publishes something new — a new product, a new post, a new update — AI assistants that check feeds will surface it automatically.

**Real-world effect:** When someone asks an AI assistant about this topic, the most recent content from this site is already in the AI's awareness, not just older cached data.

---

### ✅ Sitemap
This file is a complete map of every page on the site. AI assistants (and search engines) use it to make sure they haven't missed anything important.

**Real-world effect:** Nothing gets overlooked. Every product page, every service description, every article is confirmed as existing.

---

### ✅ llms.txt
This is the most important file for AI readability. It's a plain-text document written directly for AI systems — describing who the site owner is, what the site does, and how the AI should describe and cite it.

**Real-world effect:** When someone asks an AI assistant "what is this?" or "tell me about [business name]," the AI reads this file and gives an accurate, owner-controlled answer instead of guessing from scattered web data.

---

### ✅ Agent Context File (agent-context.json)
A structured data file with the site's exact details: name, description, owner, services, topics, contact information, and how to refer to the business. Written in a format AI agents can read and use directly.

**Real-world effect:** AI assistants can answer specific questions — "what services do they offer," "where are they located," "how do I contact them" — accurately, from a source the owner controls.

---

### ✅ Agent Policy File (agent-policy.json)
This file tells AI systems the rules: what they're allowed to quote, how to attribute content, and what they should not reproduce or claim.

**Real-world effect:** The site owner has machine-readable protection against misuse. AI systems that respect policy files will honor these rules automatically.

---

### ✅ Agent Actions File (agent-actions.json)
This file tells AI assistants what actions they can take on behalf of the user — book an appointment, request a quote, search inventory, sign up for a list.

**Real-world effect:** Instead of just describing the business and stopping, an AI assistant can say "I can book that appointment for you right now" and follow through — keeping the customer in the conversation instead of sending them away to find a form.

---

### ✅ Context Memory File (context-cookie.json)
A persistent identity packet. When an AI assistant encounters this file, it can remember who the site owner is across sessions and conversations — consistently describing and recommending the business the same way every time.

**Real-world effect:** Brand consistency across every AI platform, every user, every conversation — without any ongoing effort from the site owner.

---

## The Before / After Comparison

To show what this actually means in practice, we ran the same test on two sites:

| | Scenario C (this site) | Scenario B (unoptimized site) |
|---|---|---|
| **AFO Score** | 18 / 18 | 2 / 18 |
| **Readiness Tier** | ✅ AI-Ready | ❌ Not Visible |
| **AI test (no connector)** | Found all 7 endpoints, output full structured context | Cited 15 external sources to reconstruct a description |
| **AI spontaneous behavior** | Immediately described and cited the site accurately | Offered to *build* the missing files — it could tell they weren't there |
| **Owner-controlled description** | Yes — AI reads llms.txt and agent-context.json | No — AI guesses from general web data |
| **Actionable next step** | Yes — agent-actions.json enables direct interaction | No — user must leave the AI to take any action |

The gap between these two sites is not a difference in quality, content, or effort. The Scenario B site is well-maintained and has thousands of users. The only difference is that one site has 7 small structured files and the other doesn't.

---

## What It Takes to Get Here

Getting from 0/18 to 18/18 means creating 7 files. Most of them are small — under 50 lines. None of them require changing your website design, your CMS, or how you write content.

| File | Typical size | Effort |
|---|---|---|
| llms.txt | 20–40 lines | Low — plain text, written once |
| agent-context.json | 30–60 lines | Low — structured business details |
| sitemap.xml | Varies | Often auto-generated by your CMS |
| agent-policy.json | 20–30 lines | Low — rules and attribution preferences |
| context-cookie.json | 30–50 lines | Low — persistent identity packet |
| RSS feed | Varies | Often already exists or auto-generated |
| agent-actions.json | 40–80 lines | Medium — depends on what actions you want to enable |

Total time to implement with expert help: **2–4 hours.**
Total time to implement yourself with guidance: **a weekend afternoon.**

---

## The Bottom Line

AI assistants are already answering questions about your industry, your location, and your competitors. The question is whether your website gives them enough to find you and recommend you — or whether they have to guess, and guess wrong.

This demo shows what it looks like when the answer is yes.

> *"We help make your website easier for AI assistants to find, understand, cite, and recommend."*

---

_This one-pager is part of the AFO (Agent Feed Optimization) demo suite._
_Scenario C: perfect-site demo · Scenario B: gap demo · Full audit template: `docs/audit/audit-report-template.md`_
