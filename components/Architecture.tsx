export default function Architecture() {
  return (
    <section id="how" className="py-24 md:py-32 border-t border-[#ececec] bg-[#fafafa]">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-12 lg:gap-20 items-start">
          <div>
            <div className="text-[12px] uppercase tracking-wider text-[#6b6b6b] mb-4 font-[family-name:ui-monospace,SFMono-Regular,monospace]">
              How it works
            </div>
            <h2 className="font-[family-name:var(--font-serif)] text-[32px] md:text-[44px] leading-[1.05] tracking-tight mb-5">
              One protocol, every agent.
            </h2>
            <p className="text-[15px] leading-relaxed text-[#5a5a5a] mb-6">
              The Model Context Protocol is the open standard for connecting AI
              clients to external tools. Exalink is a local MCP server that
              sits in front of Exa&rsquo;s search API — so any agent that
              speaks MCP can search the web with zero glue code.
            </p>
            <a
              href="https://modelcontextprotocol.io"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center text-[14px] font-medium text-[#0a0a0a] border border-[#d4d4d4] px-4 py-2 rounded-md hover:bg-white"
            >
              Read the MCP spec →
            </a>
          </div>

          <div className="relative">
            {/* 3-step flow */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <Step
                num="01"
                label="agent"
                title="Your AI client"
                body="Claude, Cursor, Windsurf, or any MCP-compatible host running on the user's machine."
                detail="role: user · model: claude-opus-4.7"
              />
              <Step
                num="02"
                label="exalink"
                title="exalink-mcp"
                body="Local process. Translates JSON-RPC tool calls into Exa API requests, streams results back."
                detail="transport: stdio · v0.5.1"
                accent
              />
              <Step
                num="03"
                label="exa"
                title="Exa search API"
                body="Neural web search at the edge. 450ms median. Returns ranked results with token-efficient highlights."
                detail="api.exa.ai · /search"
              />
            </div>

            {/* Connecting line between steps on md+ */}
            <div className="hidden md:block pointer-events-none absolute top-[34px] left-[12%] right-[12%] h-px bg-[repeating-linear-gradient(to_right,#d4d4d4_0_4px,transparent_4px_8px)] -z-0" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Step({
  num,
  label,
  title,
  body,
  detail,
  accent,
}: {
  num: string;
  label: string;
  title: string;
  body: string;
  detail: string;
  accent?: boolean;
}) {
  return (
    <div
      className={`relative rounded-xl border bg-white p-5 ${
        accent ? "border-[#0a0a0a] shadow-[0_8px_24px_-12px_rgba(0,0,0,0.15)]" : "border-[#ececec]"
      }`}
    >
      <div className="flex items-center justify-between mb-3">
        <div
          className={`inline-flex h-6 w-6 items-center justify-center rounded-full text-[11px] font-medium ${
            accent
              ? "bg-[#1652f0] text-white"
              : "bg-[#fafafa] text-[#6b6b6b] border border-[#ececec]"
          }`}
        >
          {num}
        </div>
        <div className="text-[10px] uppercase tracking-wider text-[#9a9a9a] font-[family-name:ui-monospace,SFMono-Regular,monospace]">
          {label}
        </div>
      </div>
      <div className="text-[15px] font-medium text-[#0a0a0a] mb-1.5">
        {title}
      </div>
      <p className="text-[13px] leading-relaxed text-[#5a5a5a] mb-4">
        {body}
      </p>
      <div className="text-[11px] text-[#1652f0] font-[family-name:ui-monospace,SFMono-Regular,monospace] border-t border-[#ececec] pt-3">
        {detail}
      </div>
    </div>
  );
}
