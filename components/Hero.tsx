import SearchDemo from "./SearchDemo";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 pt-20 pb-16 md:pt-28 md:pb-24">
        <div className="text-center">
          <div className="inline-flex items-center gap-3 mb-7">
            <span className="inline-flex items-center gap-1.5 text-[11px] font-[family-name:ui-monospace,SFMono-Regular,monospace] bg-[#fafafa] border border-[#ececec] px-2.5 py-1 rounded-full text-[#0a0a0a]">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#5dff9c] animate-pulse" />
              mcp · stable
            </span>
            <span className="hidden sm:inline-flex text-[11px] font-[family-name:ui-monospace,SFMono-Regular,monospace] text-[#6b6b6b]">
              $ npx -y exalink-mcp
            </span>
          </div>

          <h1 className="font-[family-name:var(--font-serif)] text-[44px] md:text-[68px] lg:text-[80px] leading-[1.02] tracking-tight text-[#0a0a0a]">
            Web search,
            <br />
            native to your agent.
          </h1>

          <p className="mx-auto mt-6 max-w-[640px] text-[16px] md:text-[18px] leading-relaxed text-[#5a5a5a]">
            Exalink is the MCP server that links Exa&rsquo;s neural web search
            to Claude, Cursor, Windsurf, and every MCP-compatible client. No
            API juggling, no orchestration code — just install and search.
          </p>

          <div className="mt-9 flex items-center justify-center gap-3">
            <a
              href="#install"
              className="inline-flex items-center justify-center bg-[#0a0a0a] text-white text-[15px] font-medium px-5 py-3 rounded-md hover:bg-[#1a1a1a] transition-colors"
            >
              Install Exalink
            </a>
            <a
              href="https://github.com/ctrlshifthash/exa-ai"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center text-[15px] font-medium px-5 py-3 rounded-md border border-[#d4d4d4] hover:bg-[#fafafa] transition-colors"
            >
              View on GitHub →
            </a>
          </div>

          <div className="mt-6 flex items-center justify-center gap-5 text-[12px] text-[#9a9a9a] font-[family-name:ui-monospace,SFMono-Regular,monospace]">
            <span>8 tools</span>
            <span className="text-[#d4d4d4]">·</span>
            <span>450ms median</span>
            <span className="text-[#d4d4d4]">·</span>
            <span>stdio + sse transports</span>
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
