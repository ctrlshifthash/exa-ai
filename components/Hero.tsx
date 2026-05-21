import SearchDemo from "./SearchDemo";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 pt-20 pb-16 md:pt-28 md:pb-24">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 text-[12px] tracking-wide uppercase text-[#6b6b6b] mb-7">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#1652f0]" />
            Model Context Protocol · v1.0 stable
          </div>

          <h1 className="font-[family-name:var(--font-serif)] text-[44px] md:text-[68px] lg:text-[80px] leading-[1.02] tracking-tight text-[#0a0a0a]">
            Web search,
            <br />
            native to your agent.
          </h1>

          <p className="mx-auto mt-6 max-w-[640px] text-[16px] md:text-[18px] leading-relaxed text-[#5a5a5a]">
            One MCP server. Plug Exa&rsquo;s neural web search into Claude,
            Cursor, Windsurf, and every MCP-compatible client. No API juggling,
            no orchestration code — just install and search.
          </p>

          <div className="mt-9 flex items-center justify-center gap-3">
            <a
              href="#install"
              className="inline-flex items-center justify-center bg-[#0a0a0a] text-white text-[15px] font-medium px-5 py-3 rounded-md hover:bg-[#1a1a1a] transition-colors"
            >
              Install MCP server
            </a>
            <a
              href="https://github.com/exa-labs/exa-mcp-server"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center text-[15px] font-medium px-5 py-3 rounded-md border border-[#d4d4d4] hover:bg-[#fafafa] transition-colors"
            >
              View on GitHub →
            </a>
          </div>
        </div>

        <div className="mt-16 md:mt-20">
          <SearchDemo />
        </div>
      </div>

      {/* subtle decorative gradient */}
      <div className="pointer-events-none absolute inset-x-0 top-[50%] -z-10 h-[600px] bg-[radial-gradient(60%_50%_at_50%_0%,rgba(22,82,240,0.06),transparent)]" />
    </section>
  );
}
