# AI Visibility Audit Report — Sample
_template version: 1.0 | produced by: AFO Audit Agent (G-000 v0.3) | scenario: B gap demo_

---

**Website audited:** `https://github.com/sindresorhus/awesome`
**Business name:** sindresorhus/awesome (open-source curated list)
**Business type:** Creator / open-source project
**Audit date:** 2026-05-12
**Prepared for:** Sample — gap demo

> ⚠️ **Note:** This is a Scenario B gap demo using a real public repository with no AFO files. It demonstrates what an audit report looks like for a typical unoptimized site. This is the “before” state. Scenario C (agent-feed-optimization repo) is the “after” / perfect-site demo.

---

## What This Report Is

This is your **AI Visibility Audit** — a check-up on how easy it is for AI assistants like ChatGPT, Perplexity, Claude, and Google’s AI tools to find your website, understand what you do, and recommend you to potential customers.

AI assistants are now answering millions of questions every day. When someone asks an AI assistant about your topic or niche, your website needs to give that AI enough structured information to find you, describe you accurately, and point people your way. Right now, most websites — even popular and well-maintained ones — are invisible to AI assistants because they weren’t built with AI readability in mind.

---

## Your Score

```
AFO SCORE: 2 / 18
READINESS TIER: ❌ Not Visible
```

| Score | What it means |
|---|---|
| 16–18 | ✅ **AI-Ready** — AI assistants can find, understand, cite, and recommend your site |
| 10–15 | ⚠️ **Partial** — Some signals present, significant gaps remain |
| 5–9 | 🔶 **Minimal** — AI assistants can find your site but struggle to describe or recommend it |
| **0–4** | **❌ Not Visible — AI assistants have almost no structured information to work with** |

---

## What We Checked

| File | Status | Points |
|---|---|---|
| RSS / News Feed | ✅ Found (GitHub Atom feeds exist) | 2 / 3 |
| Sitemap | ❌ Missing | 0 / 2 |
| llms.txt | ❌ Missing | 0 / 3 |
| Agent Context File | ❌ Missing | 0 / 3 |
| Agent Policy File | ❌ Missing | 0 / 2 |
| Agent Actions File | ❌ Missing | 0 / 2 |
| Context Memory File | ❌ Missing | 0 / 3 |
| **Total** | | **2 / 18** |

> **Note on RSS:** GitHub provides Atom feeds for repository activity (`/commits/main.atom`, `/releases.atom`) but not a content-level feed describing the project itself. Partial credit awarded.

---

## What’s Missing — And What Each Gap Is Costing You

---

### ❌ Sitemap

**What it does:** Tells AI assistants (and search engines) exactly which pages exist on your site, so nothing gets missed.

**What you’re missing:** AI assistants have to guess what content exists here. On a project with hundreds of linked resources, that means important sections are regularly overlooked or omitted from AI answers.

**Score lift if added:** +2 points

---

### ❌ llms.txt

**What it does:** A plain-text file written specifically for AI systems, describing who you are, what you do, and how you want to be cited.

**What you’re missing:** AI assistants have to infer the project’s identity and purpose from README text and general web data. This leads to vague or inconsistent descriptions when someone asks “what is the sindresorhus/awesome list?”

**Score lift if added:** +3 points

---

### ❌ Agent Context File (agent-context.json)

**What it does:** A structured data file that gives AI agents your exact details — project name, description, maintainer, topics covered, how to cite you, and what kind of content you contain.

**What you’re missing:** When an AI assistant is asked to recommend curated resource lists, it has no structured signal confirming this project’s authority, scope, or categories. It may cite you inconsistently or prefer sources that do have this file.

**Score lift if added:** +3 points

---

### ❌ Agent Policy File (agent-policy.json)

**What it does:** Tells AI systems your rules — what they can quote, how to attribute you, what not to reproduce wholesale.

**What you’re missing:** There’s no machine-readable signal protecting your content from misuse or misattribution. AI assistants default to their own judgment on citation and reproduction.

**Score lift if added:** +2 points

---

### ❌ Agent Actions File (agent-actions.json)

**What it does:** Lets AI assistants take actions on your behalf — for a curated list, this could mean searching the list, filtering by category, or submitting a new entry.

**What you’re missing:** AI assistants can describe this project but can’t help a user interact with it. The next step is always “go to the GitHub page yourself” — friction that reduces engagement.

**Score lift if added:** +2 points

---

### ❌ Context Memory File (context-cookie.json)

**What it does:** A persistent identity packet that lets AI assistants remember who you are across sessions and surface your brand consistently over time.

**What you’re missing:** Every new AI conversation starts from zero. There’s no persistent signal that reinforces this project’s identity, authority, or preferred description across sessions and models.

**Score lift if added:** +3 points

---

## Your Recommended Fix Package

| Priority | Fix | Points gained | Why this one first |
|---|---|---|---|
| 1 | llms.txt | +3 | Direct AI identity signal — lowest effort, highest per-point return |
| 2 | agent-context.json | +3 | Enables accurate structured answers about what this project is and covers |
| 3 | context-cookie.json | +3 | Adds persistence — AI assistants remember and consistently cite the project |
| 4 | sitemap.xml | +2 | Structural completeness — ensures no content is missed |
| 5 | agent-policy.json | +2 | Protection and attribution rules for AI use |
| 6 | agent-actions.json | +2 | Enables interactive next steps (search, filter, submit) |
| 7 | RSS feed (upgrade) | +1 | Upgrade from activity-only Atom to content-level feed |

**Estimated score after all fixes: 18 / 18**
**Current score: 2 / 18**
**Total lift available: +16 points**

---

## Before Snapshot

**Test prompt used:**
> “What is the sindresorhus/awesome GitHub repository and what does it contain?”

**AI assistant tested:** Perplexity Sonar (no connector, no integrations)
**Test date:** 2026-05-12
**Connector / integrations active:** None (canonical clean test)

**Result:**
> AI assistant cited 15 external web sources to reconstruct a description of the project. It correctly identified the repository as a curated list of “awesome” resources but could not enumerate categories, confirm the maintainer’s canonical description, or provide a structured summary drawn from project-controlled files. The AI spontaneously offered to build missing AFO files for the repository — an unprompted acknowledgment that the structured signal was absent.

---

## What Happens Next

**Option A — Fix Package** _(one-time)_
We build every missing file for your website. You receive the files and simple instructions for where to place them.

**Option B — Fix + Monitor** _(recommended)_
We build the files, install them, and re-run your audit every month. You’ll receive a monthly before/after proof showing whether your project is appearing in AI answers.

**Option C — Audit Only**
You received this report. Share it with your developer or handle the fixes yourself.

---

## About This Audit

This audit was produced using the **AFO (Agent Feed Optimization) protocol** — an open standard for making websites readable by AI assistants. The scoring methodology is based on 7 structured endpoint types that AI agents use to discover, understand, and cite web content.

_AI discoverability standards are evolving. We recommend re-auditing every 90 days._
