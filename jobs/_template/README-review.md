# Job Review Checklist

> **Internal ops use only.** Complete this checklist before promoting a job from `review` to `approved`.
> Do not share this file with the client.

**Job ID:** _fill in_  
**Client slug:** _fill in_  
**Review date:** _fill in_  
**Reviewer:** Jared

---

## 1. File Completeness

Confirm all 10 client ZIP files are present in the job folder:

- [ ] `llms.txt`
- [ ] `agent-context.json`
- [ ] `agent-actions.json`
- [ ] `agent-policy.json` _(machine-readable policy, installs to `/.well-known/`)_
- [ ] `policy.md` _(plain-English companion — for client reference, not installed)_
- [ ] `context-cookie.json` _(machine-readable, installs to `/.well-known/`)_
- [ ] `context-cookie.md` _(plain-English companion — for client reference, not installed)_
- [ ] `rss.xml` _(or confirmed N/A in `job.json` → `rss_status: not-applicable`)_
- [ ] `sitemap-agent.xml`
- [ ] `README-install.md` _(reviewed in section 3 below)_

Internal files (confirm present, confirm NOT in client ZIP):
- [ ] `job.json` (status: review)
- [ ] `README-review.md` (this file)

> `context-cookie.schema.json` is a spec/schema reference — it should **not** be in this job folder and **must not** be in the client ZIP.

---

## 2. Data Accuracy Spot-Check

- [ ] `client_url` in `job.json` is correct and resolves
- [ ] `agent-context.json` reflects the correct site name, description, and feed URLs
- [ ] `agent-actions.json` actions are accurate for this client
- [ ] `agent-policy.json` content policy matches client's stated preferences
- [ ] `llms.txt` summary is accurate and non-hallucinated
- [ ] RSS feed URL (if present) is live and returns valid XML
- [ ] `intake_data` in `job.json` matches what the client provided

---

## 3. Install Instructions Review

- [ ] `README-install.md` is written in plain English (non-technical tone)
- [ ] All file names referenced in the install guide match actual files in the folder
- [ ] No internal ops notes left in the client-facing doc
- [ ] "Who to Contact" section is populated from intake (`contact_email`, `contact_name`) — no `_fill in_` placeholders remain

---

## 4. Client URL Confirmed

- [ ] Client URL verified against intake data in `job.json`
- [ ] URL resolves and returns a valid page

---

## 5. Sign-Off

> I have reviewed the above checklist and confirm this job is ready to approve.

**Signed:** _______________  
**Date:** _______________

When all checks above are complete, update `job.json`:
- `reviewed_at`: set to current timestamp
- `status`: change from `review` to `approved`
- `approved_at`: set to current timestamp

Then notify Jared that the job is ready for final approval and delivery.
