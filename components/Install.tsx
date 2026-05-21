"use client";

import { useState } from "react";

type Tab = "claude" | "cursor" | "npm";

const snippets: Record<Tab, string> = {
  claude: `{
  "mcpServers": {
    "exa": {
      "command": "npx",
      "args": ["-y", "exa-mcp-server"],
      "env": { "EXA_API_KEY": "your_exa_api_key" }
    }
  }
}`,
  cursor: `// .cursor/mcp.json
{
  "mcpServers": {
    "exa": {
      "command": "npx",
      "args": ["-y", "exa-mcp-server"],
      "env": { "EXA_API_KEY": "your_exa_api_key" }
    }
  }
}`,
  npm: `# install globally
npm install -g exa-mcp-server

# or run on-demand
npx -y exa-mcp-server

# requires an Exa API key
export EXA_API_KEY="your_exa_api_key"`,
};

const tabs: { id: Tab; label: string }[] = [
  { id: "claude", label: "Claude Desktop" },
  { id: "cursor", label: "Cursor" },
  { id: "npm", label: "npm / CLI" },
];

export default function Install() {
  const [tab, setTab] = useState<Tab>("claude");
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(snippets[tab]);
      setCopied(true);
      setTimeout(() => setCopied(false), 1400);
    } catch {
      /* noop */
    }
  }

  return (
    <section
      id="install"
      className="py-24 md:py-32 border-t border-[#ececec] bg-[#0a0a0a] text-white"
    >
      <div className="mx-auto max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div>
          <div className="text-[12px] uppercase tracking-wider text-white/50 mb-4">
            Install
          </div>
          <h2 className="font-[family-name:var(--font-serif)] text-[36px] md:text-[56px] leading-[1.05] tracking-tight mb-6">
            Two lines of JSON.
            <br />
            Your agent goes online.
          </h2>
          <p className="text-[16px] leading-relaxed text-white/60 max-w-[440px] mb-8">
            Drop the snippet into your MCP-compatible client&rsquo;s config,
            restart, and Exa search becomes a first-class tool your agent can
            call.
          </p>
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/exa-labs/exa-mcp-server"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center bg-white text-[#0a0a0a] text-[15px] font-medium px-5 py-3 rounded-md hover:bg-white/90"
            >
              GitHub repo →
            </a>
            <a
              href="https://exa.ai"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center text-[15px] font-medium text-white/80 px-5 py-3 rounded-md border border-white/20 hover:bg-white/5"
            >
              Get an Exa API key
            </a>
          </div>
        </div>

        <div className="rounded-xl border border-white/10 bg-[#111] overflow-hidden">
          <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
            <div className="flex items-center gap-1.5">
              {tabs.map((t) => (
                <button
                  key={t.id}
                  onClick={() => setTab(t.id)}
                  className={`text-[12px] px-2.5 py-1.5 rounded-md transition-colors ${
                    tab === t.id
                      ? "bg-white/10 text-white"
                      : "text-white/50 hover:text-white"
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>
            <button
              onClick={copy}
              className="text-[12px] text-white/60 hover:text-white px-2 py-1 rounded-md hover:bg-white/5"
            >
              {copied ? "Copied" : "Copy"}
            </button>
          </div>
          <pre className="px-5 py-5 text-[13px] leading-relaxed text-white/85 overflow-x-auto">
            <code>{snippets[tab]}</code>
          </pre>
        </div>
      </div>
    </section>
  );
}
