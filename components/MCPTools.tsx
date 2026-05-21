type Tool = {
  name: string;
  description: string;
  args: string;
};

const tools: Tool[] = [
  {
    name: "web_search_exa",
    description: "Neural web search over the open internet, returns ranked results with token-efficient highlights.",
    args: "query · num_results · livecrawl",
  },
  {
    name: "research_paper_search",
    description: "Search across arXiv, biorxiv, and peer-reviewed corpora. Built for citation-grade research agents.",
    args: "query · num_results",
  },
  {
    name: "company_research",
    description: "Deep dive on any company — founding info, leadership, recent news, financials, hiring signals.",
    args: "company_name · sections",
  },
  {
    name: "crawling",
    description: "Fetch and parse a specific URL. Returns clean markdown content, ready for the model to consume.",
    args: "url · max_tokens",
  },
  {
    name: "twitter_search",
    description: "Search X/Twitter posts and threads. Useful for sentiment, breaking news, and dev signal.",
    args: "query · num_results",
  },
  {
    name: "linkedin_search",
    description: "Search LinkedIn profiles and company pages for GTM, recruiting, and research agents.",
    args: "query · num_results",
  },
  {
    name: "find_similar",
    description: "Given a URL, return semantically similar pages. The agent's version of \"more like this\".",
    args: "url · num_results",
  },
  {
    name: "github_search",
    description: "Search GitHub repos, issues, PRs, and code. Lets coding agents pull live context from the open ecosystem.",
    args: "query · type",
  },
];

export default function MCPTools() {
  return (
    <section id="tools" className="py-24 md:py-32 border-t border-[#ececec]">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 text-[12px] uppercase tracking-wider text-[#6b6b6b] mb-4 font-[family-name:ui-monospace,SFMono-Regular,monospace]">
            <span className="inline-block h-1 w-1 rounded-full bg-[#1652f0]" />
            tools/list
          </div>
          <h2 className="font-[family-name:var(--font-serif)] text-[36px] md:text-[52px] leading-[1.05] tracking-tight">
            Eight tools your agent inherits.
          </h2>
          <p className="mt-5 max-w-[560px] mx-auto text-[16px] leading-relaxed text-[#5a5a5a]">
            Every MCP-compatible client gets the same tool surface. Install
            once, and your agent can pick the right tool for the question.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          {tools.map((t) => (
            <div
              key={t.name}
              className="group relative p-5 rounded-xl border border-[#ececec] bg-white hover:border-[#0a0a0a] transition-colors"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="inline-flex items-center gap-1.5 text-[12px] font-[family-name:ui-monospace,SFMono-Regular,monospace] text-[#0a0a0a] bg-[#fafafa] border border-[#ececec] px-2 py-1 rounded">
                  <span className="text-[#1652f0]">⌘</span>
                  {t.name}
                </div>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity text-[11px] text-[#9a9a9a]">
                  →
                </div>
              </div>
              <p className="text-[13px] leading-relaxed text-[#5a5a5a] mb-3">
                {t.description}
              </p>
              <div className="text-[10px] uppercase tracking-wider text-[#9a9a9a] font-[family-name:ui-monospace,SFMono-Regular,monospace]">
                {t.args}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center text-[13px] text-[#6b6b6b] font-[family-name:ui-monospace,SFMono-Regular,monospace]">
          <span className="text-[#0a0a0a]">$</span> npx exa-mcp-server --list-tools
        </div>
      </div>
    </section>
  );
}
