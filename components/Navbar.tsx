export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-[#ececec]">
      <div className="mx-auto max-w-7xl flex items-center justify-between px-6 py-4">
        <a href="/" className="flex items-center gap-2 group">
          <span className="inline-flex h-6 w-6 items-center justify-center bg-[#1652f0] text-white text-[12px] font-semibold tracking-tight rounded-[3px]">
            ✕
          </span>
          <span className="text-[17px] font-medium tracking-tight">
            exa<span className="text-[#6b6b6b]">·mcp</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-[14px] text-[#1a1a1a]">
          <a href="#features" className="hover:text-[#1652f0] transition-colors">Product</a>
          <a href="#clients" className="hover:text-[#1652f0] transition-colors">Clients</a>
          <a href="#benchmarks" className="hover:text-[#1652f0] transition-colors">Benchmarks</a>
          <a href="#install" className="hover:text-[#1652f0] transition-colors">Install</a>
          <a
            href="https://github.com/exa-labs/exa-mcp-server"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#1652f0] transition-colors"
          >
            GitHub
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#install"
            className="hidden sm:inline-flex items-center text-[14px] text-[#1a1a1a] px-3 py-1.5 rounded-md hover:bg-[#fafafa]"
          >
            Docs
          </a>
          <a
            href="#install"
            className="inline-flex items-center text-[14px] font-medium text-white bg-[#0a0a0a] px-3.5 py-2 rounded-md hover:bg-[#1a1a1a] transition-colors"
          >
            Install MCP →
          </a>
        </div>
      </div>
    </header>
  );
}
