const clients = [
  { name: "Claude", glyph: "✦" },
  { name: "Cursor", glyph: "▣" },
  { name: "Windsurf", glyph: "≋" },
  { name: "Cline", glyph: "◐" },
  { name: "Continue", glyph: "▶" },
  { name: "Zed", glyph: "Z" },
  { name: "Goose", glyph: "◇" },
  { name: "Roo Code", glyph: "▲" },
];

export default function Clients() {
  return (
    <section id="clients" className="py-24 md:py-32 border-t border-[#ececec] bg-[#fafafa]">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-12 md:mb-16">
          <div className="text-[12px] uppercase tracking-wider text-[#6b6b6b] mb-3">
            Compatible clients
          </div>
          <h2 className="font-[family-name:var(--font-serif)] text-[32px] md:text-[44px] leading-[1.05] tracking-tight max-w-[640px] mx-auto">
            Works wherever your agent already lives.
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4">
          {clients.map((c) => (
            <div
              key={c.name}
              className="flex items-center gap-3 px-5 py-5 bg-white border border-[#ececec] rounded-xl hover:border-[#0a0a0a] transition-colors"
            >
              <div className="h-9 w-9 rounded-md bg-[#0a0a0a] text-white flex items-center justify-center text-[16px]">
                {c.glyph}
              </div>
              <div className="text-[15px] font-medium">{c.name}</div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center text-[13px] text-[#6b6b6b]">
          Plus any client that speaks the{" "}
          <a
            href="https://modelcontextprotocol.io"
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-2 hover:text-[#0a0a0a]"
          >
            Model Context Protocol
          </a>
          .
        </div>
      </div>
    </section>
  );
}
