import React from "react";

type Feature = {
  tag: string;
  title: string;
  body: string;
  badge?: string;
  badgeBody?: string;
  gradient: string;
  topLabel: string;
  bottomLabel: string;
  visual: React.ReactNode;
};

// ----- Card visuals (one per feature) -----

function ConfigVisual() {
  return (
    <div className="absolute left-6 right-6 top-1/2 -translate-y-1/2 rounded-xl bg-white/95 backdrop-blur-sm shadow-[0_20px_50px_-20px_rgba(0,0,0,0.35)] border border-white/40 overflow-hidden">
      <div className="flex items-center justify-between px-3 py-2 bg-[#fafafa] border-b border-[#ececec]">
        <div className="flex items-center gap-1.5">
          <span className="inline-block h-2 w-2 rounded-full bg-[#ff5f57]" />
          <span className="inline-block h-2 w-2 rounded-full bg-[#febc2e]" />
          <span className="inline-block h-2 w-2 rounded-full bg-[#28c840]" />
        </div>
        <div className="text-[10px] text-[#6b6b6b] font-[family-name:ui-monospace,SFMono-Regular,monospace]">
          ~/.cursor/mcp.json
        </div>
        <div className="w-8" />
      </div>
      <pre className="px-4 py-3 text-[10px] leading-snug text-[#0a0a0a] font-[family-name:ui-monospace,SFMono-Regular,monospace]">{`{
  "mcpServers": {
    "exalink": {
      "command": "npx",
      "args": ["-y", "exalink-mcp"],
      "env": {
        "EXA_API_KEY": "ex_…"
      }
    }
  }
}`}</pre>
    </div>
  );
}

function HighlightsVisual() {
  return (
    <div className="absolute left-6 right-6 top-1/2 -translate-y-1/2 rounded-xl bg-white/95 backdrop-blur-sm shadow-[0_20px_50px_-20px_rgba(0,0,0,0.35)] border border-white/40 overflow-hidden">
      <div className="px-4 py-4">
        <div className="flex items-center justify-between mb-1.5">
          <div className="text-[9px] uppercase tracking-wider text-[#6b6b6b] font-[family-name:ui-monospace,SFMono-Regular,monospace]">
            raw html
          </div>
          <div className="text-[10px] font-[family-name:ui-monospace,SFMono-Regular,monospace] text-[#0a0a0a]">
            23,400 tok
          </div>
        </div>
        <div className="h-3 rounded-full bg-[#0a0a0a]/8 overflow-hidden">
          <div className="h-full rounded-full bg-[#0a0a0a]/35" style={{ width: "100%" }} />
        </div>

        <div className="flex items-center justify-between mt-4 mb-1.5">
          <div className="text-[9px] uppercase tracking-wider text-[#1652f0] font-[family-name:ui-monospace,SFMono-Regular,monospace]">
            exalink highlights
          </div>
          <div className="text-[10px] font-[family-name:ui-monospace,SFMono-Regular,monospace] text-[#1652f0]">
            4,720 tok
          </div>
        </div>
        <div className="h-3 rounded-full bg-[#1652f0]/10 overflow-hidden">
          <div
            className="h-full rounded-full bg-gradient-to-r from-[#8a63ff] to-[#1652f0]"
            style={{ width: "20%" }}
          />
        </div>

        <div className="mt-4 pt-3 border-t border-[#ececec] flex items-center justify-between text-[10px] font-[family-name:ui-monospace,SFMono-Regular,monospace]">
          <span className="text-[#6b6b6b]">cost delta</span>
          <span className="text-[#1652f0] font-medium">−80% tokens</span>
        </div>
      </div>
    </div>
  );
}

function LatencyVisual() {
  const tiers = [
    { name: "fast", time: "450ms", width: "8%" },
    { name: "auto", time: "1.0s", width: "18%" },
    { name: "deep", time: "10s", width: "85%" },
  ];
  return (
    <div className="absolute left-6 right-6 top-1/2 -translate-y-1/2 rounded-xl bg-white/95 backdrop-blur-sm shadow-[0_20px_50px_-20px_rgba(0,0,0,0.35)] border border-white/40 overflow-hidden">
      <div className="px-4 py-4">
        <div className="flex items-center justify-between mb-3">
          <div className="text-[9px] uppercase tracking-wider text-[#6b6b6b] font-[family-name:ui-monospace,SFMono-Regular,monospace]">
            latency tiers
          </div>
          <div className="text-[10px] font-[family-name:ui-monospace,SFMono-Regular,monospace] text-[#0a8a4d]">
            ● live
          </div>
        </div>
        <div className="space-y-2.5">
          {tiers.map((t) => (
            <div key={t.name} className="flex items-center gap-3">
              <div className="text-[10px] font-[family-name:ui-monospace,SFMono-Regular,monospace] text-[#0a0a0a] w-9 uppercase">
                {t.name}
              </div>
              <div className="flex-1 h-2 rounded-full bg-[#0a0a0a]/10 overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-[#1cbf6f] to-[#0a8a4d]"
                  style={{ width: t.width }}
                />
              </div>
              <div className="text-[10px] font-[family-name:ui-monospace,SFMono-Regular,monospace] text-[#0a0a0a] w-10 text-right">
                {t.time}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 pt-3 border-t border-[#ececec] flex items-center justify-between text-[10px] font-[family-name:ui-monospace,SFMono-Regular,monospace]">
          <span className="text-[#6b6b6b]">p50 · last 7d</span>
          <span className="text-[#0a8a4d]">443ms median</span>
        </div>
      </div>
    </div>
  );
}

// ----- Feature config -----

const features: Feature[] = [
  {
    tag: "Native integration",
    title: "Drop-in for every MCP client your agent uses.",
    body: "Configure once in your client of choice — Claude Desktop, Cursor, Windsurf, Cline, Continue — and every agent session inherits live web search.",
    badge: "CURSOR",
    badgeBody:
      "Powers their coding agents with smart token-efficient search across docs and repos.",
    gradient:
      "linear-gradient(135deg,#dff3ff 0%,#9ec5ff 35%,#5482ff 70%,#1652f0 100%)",
    topLabel: "MCP CONFIG",
    bottomLabel: "stdio",
    visual: <ConfigVisual />,
  },
  {
    tag: "Token-efficient",
    title: "Highlights, not haystacks.",
    body: "Exa's Contents API returns only the relevant excerpts from each page. Cut up to 80% of the tokens your agent would otherwise burn parsing full HTML.",
    badge: "CLAUDE",
    badgeBody:
      "Drop Exalink into Claude Desktop's mcpServers config — neural search becomes a built-in tool.",
    gradient:
      "linear-gradient(135deg,#f3ecff 0%,#cab4ff 40%,#8a63ff 100%)",
    topLabel: "TOKEN STREAM",
    bottomLabel: "−80%",
    visual: <HighlightsVisual />,
  },
  {
    tag: "Sub-second",
    title: "450ms search. 10s deep research.",
    body: "Pick the latency you need on every call. Fast mode for snappy autocomplete, Deep mode for multi-step research that mirrors how a human would investigate.",
    badge: "WINDSURF",
    badgeBody: "Adds Exalink as a first-class context source in the Cascade agent.",
    gradient:
      "linear-gradient(135deg,#e6fff1 0%,#9bf0c0 45%,#1cbf6f 100%)",
    topLabel: "LATENCY",
    bottomLabel: "p50 · 443ms",
    visual: <LatencyVisual />,
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 md:py-32 border-t border-[#ececec]">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="font-[family-name:var(--font-serif)] text-[36px] md:text-[52px] leading-[1.05] tracking-tight">
            Designed to make your Agent smarter
          </h2>
        </div>

        <div className="space-y-20 md:space-y-28">
          {features.map((f, i) => (
            <div
              key={f.title}
              className={`grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center ${
                i % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""
              }`}
            >
              <div className="relative aspect-[5/4] rounded-2xl overflow-hidden">
                <div className="absolute inset-0" style={{ background: f.gradient }} />
                {/* Dot scatter pattern */}
                <div
                  className="absolute inset-0 opacity-50 mix-blend-screen"
                  style={{
                    backgroundImage:
                      "radial-gradient(white 1px, transparent 1px), radial-gradient(white 1px, transparent 1px)",
                    backgroundSize: "16px 16px, 32px 32px",
                    backgroundPosition: "0 0, 8px 8px",
                  }}
                />

                {/* Corner labels */}
                <div className="absolute top-5 left-5 inline-flex items-center bg-[#0a0a0a] text-white text-[10px] tracking-wide px-2 py-1 rounded-sm z-10">
                  {f.topLabel}
                </div>
                <div className="absolute bottom-5 right-5 inline-flex items-center bg-[#0a0a0a] text-white text-[10px] tracking-wide px-2 py-1 rounded-sm z-10">
                  {f.bottomLabel}
                </div>

                {/* The actual content card */}
                {f.visual}
              </div>

              <div>
                <div className="text-[12px] uppercase tracking-wider text-[#6b6b6b] mb-4">
                  {f.tag}
                </div>
                <h3 className="font-[family-name:var(--font-serif)] text-[28px] md:text-[36px] leading-[1.1] tracking-tight mb-4">
                  {f.title}
                </h3>
                <p className="text-[16px] leading-relaxed text-[#5a5a5a] mb-6 max-w-[460px]">
                  {f.body}
                </p>
                <a
                  href="#install"
                  className="inline-flex items-center text-[14px] font-medium text-[#0a0a0a] border border-[#d4d4d4] px-4 py-2 rounded-md hover:bg-[#fafafa]"
                >
                  Use Exalink →
                </a>

                {f.badge && (
                  <div className="mt-8 max-w-[460px] rounded-lg bg-[#f5f5f5] border border-[#ececec] p-4">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="inline-block h-3 w-3 rounded-sm bg-[#0a0a0a]" />
                      <span className="text-[12px] font-semibold tracking-wide">
                        {f.badge}
                      </span>
                    </div>
                    <div className="text-[13px] text-[#5a5a5a] leading-relaxed">
                      {f.badgeBody}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
