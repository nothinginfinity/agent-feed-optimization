# AFO Terminology

---

**Agent Feed Optimization (AFO)**  
A compatibility-first extension pattern for existing websites, RSS feeds, podcasts, products, and businesses. AFO adds optional LLM-readable files alongside existing content so AI assistants can better discover, understand, cite, summarize, recommend, and interact with the source.

**Agentic Search Optimization (ASO)**  
The broader service category. ASO is to AI agents what SEO is to search engines — the practice of making websites more discoverable and usable by LLMs, AI browsers, and agentic search systems.

**Agent RSS Context (ARC)**  
The practice of extending RSS feeds using an optional agent XML namespace. Legacy RSS readers ignore unknown namespace fields. LLMs and AFO-aware readers use them for richer interaction.

**Agent Context Packet (ACP)**  
A `.well-known/agent-context.json` file that describes a source's identity, topics, feeds, best-for guidance, recommended prompts, and pointers to policy and actions.

**Context Cookie**  
A user-controlled, user-approved source memory object. Not a tracking cookie. A context cookie stores a link and metadata about a source the user wants their LLM to use intelligently in future conversations. Stored in a user-controlled gist or application.

**LLM-readable website**  
A website that exposes one or more AFO layers: `llms.txt`, `agent-context.json`, `agent-policy.json`, `agent-actions.json`, and/or an agent-extended RSS feed.

**Living Context URL**  
A stable, hosted URL for a source's AFO context packet — maintained and versioned by the site owner or a service provider. When the LLM fetches this URL, it always gets the current state of the source.

**Parallel website**  
The AFO-optimized version of a site, running alongside (not replacing) the human-facing version. Same content, different surface: machine-readable metadata, structured context, declared permissions, and actionable endpoints.

**Inferred context packet**  
When no `agent-context.json` exists, an AFO-aware LLM may synthesize a temporary context packet from available public metadata (RSS items, `llms.txt`, schema.org data). Must always be labeled as inferred — not official.
