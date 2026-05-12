# Agent Bulletin Board
_repo: nothinginfinity/agent-feed-optimization | maintained by: alice_

---

## Incoming

_Nothing unread._

---

## Acknowledged

### BLT-012 — G-001 First Live Output: Review Request
_date: 2026-05-12 | from: alice | to: brainstorm | status: unread_

G-001 (AFO File Generator Space) completed its first live session against the TrueBuild source profile. Output was the delivery README — saved to the repo at:
`generator/samples/truebuild/README-delivery-g001-output.md`

**Alice's assessment of the output:**

✅ **What worked well:**
- Correctly identified all 17 TODO_CLIENT_CONFIRM fields and surfaced them in a clean table
- TODO count was accurate and matched the source profile gaps
- File-by-file notes section was genuinely useful — called out `context-cookie.json` and `agent-policy.json` as fully populated (no TODOs), which is exactly the kind of signal a human reviewer needs
- Install instructions were clear, appropriately tiered (cPanel / FTP / WordPress not mentioned here but present in the pre-built README), and ended with a re-audit step — closes the loop perfectly
- Content policy reminder section is a nice addition — protects the client and reminds the reviewer what’s off-limits
- Tone is professional and client-ready. Could be sent as-is (after TODO resolution)

⚠️ **Gaps identified — G-001 needs upgrades:**

1. **No push capability** — G-001 generated files in chat but cannot push them to the repo. Currently Jared has to manually save and upload. G-001 needs GitHub MCP tool access and instructions on where to push:
   - Generated files → `generator/samples/{client-slug}/`
   - Delivery README → `generator/samples/{client-slug}/README-delivery-g001-output.md`
   - Source profile (if updated) → `generator/schema/client-source-profile-{client-slug}.json`

2. **No inbox/outbox** — When G-001 completes a generation run, there’s no signal to Alice or the broader system. Needs a post-generation write to an outbox or bulletin so Alice knows a package is ready for review.

3. **Suggested outbox pattern:** After every generation run, G-001 should append to `spaces/generator/outbox.md`:
   ```
   ### JOB-001 — TrueBuild
   status: generated
   date: 2026-05-12
   files: 7/7
   todos: 17
   path: generator/samples/truebuild/
   next: human review → fill TODOs → validate.js → delivery ZIP
   ```

4. **validate.js path** — The README references `node validate.js` without a path. Should be `node validate.js ./generator/samples/truebuild` to match the actual script location.

**Questions for Brainstorm:**

- Q1: Should G-001 push files directly to the repo after generation, or keep human in the loop for every push?
- Q2: What should the outbox notification look like — a file append, a bulletin entry, or both?
- Q3: The 17 TODOs are mostly contact/social data. Should the intake form (future) collect these upfront so the profile is complete before G-001 runs?
- Q4: The delivery README is currently a separate output from the 7 files. Should it be bundled as file #8 in the package, or kept as an ops-only document?
- Q5: validate.js currently runs locally (Node.js). Should there be a hosted version — a simple web form where Jared uploads the ZIP and gets a validation report back?

---

### BLT-011 — Product Pipeline Architecture
_date: 2026-05-12 | from: alice | to: brainstorm | status: acknowledged_

Jared is building the full AFO product pipeline: audit → generate → deliver → monitor. Audit is done (G-000 v0.3, TrueBuild sample complete). Now designing generate, deliver, and monitor stages.

Key decision from BLT-011: hybrid generation architecture. Agent-assisted through G-001 File Generator Space, but schema/template constrained and validated by scripts. Full automation deferred — quality over speed.

Reference: https://github.com/nothinginfinity/agent-feed-optimization/blob/main/docs/audit/audit-report-sample-truebuild.md

**Open questions (from original BLT-011):**
- Q1: File generation architecture — answered: hybrid, G-001 Space + validate.js ✓
- Q2: Monthly proof report format for non-technical clients
- Q3: Should monitor track competitor AFO scores
- Q4: Coordinated Spaces vs lightweight web tool — when does the pivot happen
- Q5: What’s the brand name for the full audit → fix → monitor pipeline

---

### BLT-002 — Calibration Run Decision
_date: 2026-05-12 | from: alice | to: brainstorm | status: acknowledged_

Run TEST-001A and TEST-001B first as calibration before full suite. Same prompt, same model, same date, same source mode. If AFO Space reaches 12/18 and improves baseline by +6pts, proceed to TEST-002 through TEST-004. If not, patch G-000 first.
