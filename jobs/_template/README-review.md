# Job Review Checklist

> **Internal ops use only.** Complete this checklist before promoting a job from `review` to `approved`.
> Do not share this file with the client.

**Job ID:** _fill in_  
**Client slug:** _fill in_  
**Review date:** _fill in_  
**Reviewer:** Jared

---

## 1. File Completeness

Confirm all required AFO output files are present in the job folder:

- [ ] `agent-context.json`
- [ ] `agent-actions.json`
- [ ] `context-cookie.md`
- [ ] `llms.txt`
- [ ] `policy.md`
- [ ] `rss.xml` _(or marked N/A in job.json if not applicable)_
- [ ] `sitemap-agent.xml`
- [ ] `job.json` (status: review)
- [ ] `README-install.md` (client-facing, reviewed below)

---

## 2. Data Accuracy Spot-Check

- [ ] `client_url` in `job.json` is correct and resolves
- [ ] `agent-context.json` reflects the correct site name, description, and feed URLs
- [ ] `agent-actions.json` actions are accurate for this client
- [ ] `policy.md` content policy matches client's stated preferences
- [ ] `llms.txt` summary is accurate and non-hallucinated
- [ ] RSS feed URL (if present) is live and returns valid XML

---

## 3. Install Instructions Review

- [ ] `README-install.md` is written in plain English (non-technical tone)
- [ ] All file names referenced in the install guide match actual files in the folder
- [ ] No internal ops notes left in the client-facing doc
- [ ] Contact/help section is filled in

---

## 4. Client URL Confirmed

- [ ] Client URL verified against intake form
- [ ] URL resolves and returns a valid page

---

## 5. Sign-Off

> I have reviewed the above checklist and confirm this job is ready to promote to `approved`.

**Signed:** _______________  
**Date:** _______________

_After sign-off, update `job.json` → `status: approved` and `approved_at` timestamp._
