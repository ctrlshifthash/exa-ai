export default function Footer() {
  return (
    <footer className="border-t border-[#ececec] py-14">
      <div className="mx-auto max-w-7xl px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-[14px]">
        <div className="col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-flex h-6 w-6 items-center justify-center bg-[#1652f0] text-white text-[12px] font-semibold rounded-[3px]">
              ✕
            </span>
            <span className="text-[16px] font-medium">
              exa<span className="text-[#6b6b6b]">·link</span>
            </span>
          </div>
          <p className="text-[#6b6b6b] max-w-[320px] leading-relaxed">
            The MCP server that links Exa&rsquo;s neural web search to any
            AI agent — Claude, Cursor, Windsurf, and the rest.
          </p>
        </div>

        <div>
          <div className="text-[#0a0a0a] font-medium mb-3">Product</div>
          <ul className="space-y-2 text-[#6b6b6b]">
            <li><a href="#features" className="hover:text-[#0a0a0a]">Features</a></li>
            <li><a href="#tools" className="hover:text-[#0a0a0a]">Tools</a></li>
            <li><a href="#how" className="hover:text-[#0a0a0a]">How it works</a></li>
            <li><a href="#clients" className="hover:text-[#0a0a0a]">Clients</a></li>
            <li><a href="#install" className="hover:text-[#0a0a0a]">Install</a></li>
          </ul>
        </div>

        <div>
          <div className="text-[#0a0a0a] font-medium mb-3">Resources</div>
          <ul className="space-y-2 text-[#6b6b6b]">
            <li>
              <a
                href="https://github.com/ctrlshifthash/exa-ai"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#0a0a0a]"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://exa.ai"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#0a0a0a]"
              >
                Exa API
              </a>
            </li>
            <li>
              <a
                href="https://modelcontextprotocol.io"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#0a0a0a]"
              >
                MCP spec
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 mt-10 pt-6 border-t border-[#ececec] text-[12px] text-[#9a9a9a]">
        © {new Date().getFullYear()} · exa·link
      </div>
    </footer>
  );
}
