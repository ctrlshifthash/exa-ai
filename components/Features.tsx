type Feature = {
  tag: string;
  title: string;
  body: string;
  badge?: string;
  badgeBody?: string;
  gradient: string;
};

const features: Feature[] = [
  {
    tag: "Native integration",
    title: "Drop-in for every MCP client your agent uses.",
    body: "Configure once in your client of choice — Claude Desktop, Cursor, Windsurf, Cline, Continue — and every agent session inherits live web search.",
    badge: "CURSOR",
    badgeBody: "Powers their coding agents with smart token-efficient search across docs and repos.",
    gradient:
      "linear-gradient(135deg,#dff3ff 0%,#9ec5ff 35%,#5482ff 70%,#1652f0 100%)",
  },
  {
    tag: "Token-efficient",
    title: "Highlights, not haystacks.",
    body: "Exa's Contents API returns only the relevant excerpts from each page. Cut up to 80% of the tokens your agent would otherwise burn parsing full HTML.",
    badge: "CLAUDE",
    badgeBody: "Drop Exalink into Claude Desktop's mcpServers config — neural search becomes a built-in tool.",
    gradient:
      "linear-gradient(135deg,#f3ecff 0%,#cab4ff 40%,#8a63ff 100%)",
  },
  {
    tag: "Sub-second",
    title: "450ms search. 10s deep research.",
    body: "Pick the latency you need on every call. Fast mode for snappy autocomplete, Deep mode for multi-step research that mirrors how a human would investigate.",
    badge: "WINDSURF",
    badgeBody: "Adds Exalink as a first-class context source in the Cascade agent.",
    gradient:
      "linear-gradient(135deg,#e6fff1 0%,#9bf0c0 45%,#1cbf6f 100%)",
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
                <div
                  className="absolute inset-0"
                  style={{ background: f.gradient }}
                />
                {/* Scatter pattern overlay */}
                <div
                  className="absolute inset-0 opacity-50 mix-blend-screen"
                  style={{
                    backgroundImage:
                      "radial-gradient(white 1px, transparent 1px), radial-gradient(white 1px, transparent 1px)",
                    backgroundSize: "16px 16px, 32px 32px",
                    backgroundPosition: "0 0, 8px 8px",
                  }}
                />
                <div className="absolute top-6 left-6 inline-flex items-center bg-[#0a0a0a] text-white text-[10px] tracking-wide px-2 py-1 rounded-sm">
                  FINANCIAL DATA
                </div>
                <div className="absolute bottom-6 right-6 inline-flex items-center bg-[#0a0a0a] text-white text-[10px] tracking-wide px-2 py-1 rounded-sm">
                  C#R
                </div>
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
                  Use our MCP →
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
