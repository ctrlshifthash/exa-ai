"use client";

import { useState } from "react";

type SearchResult = {
  title: string;
  url: string;
  source: string;
  snippet: string;
  publishedDate?: string;
};

type Mode = "fast" | "auto" | "deep";

export default function SearchDemo() {
  const [query, setQuery] = useState("Latest open source LLMs");
  const [mode, setMode] = useState<Mode>("auto");
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<SearchResult[] | null>(null);
  const [latency, setLatency] = useState<number | null>(null);

  async function runSearch(e?: React.FormEvent) {
    e?.preventDefault();
    if (!query.trim()) return;
    setLoading(true);
    setResults(null);
    setLatency(null);
    try {
      const res = await fetch("/api/search", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query, mode }),
      });
      const data = await res.json();
      setResults(data.results);
      setLatency(data.latencyMs);
    } catch {
      setResults([]);
    } finally {
      setLoading(false);
    }
  }

  const toolCall = JSON.stringify(
    {
      tool: "exa.web_search",
      arguments: { query, num_results: 4, latency: mode },
    },
    null,
    2
  );

  return (
    <div className="mx-auto max-w-[920px] rounded-2xl border border-[#ececec] bg-white shadow-[0_30px_60px_-30px_rgba(0,0,0,0.12)] overflow-hidden">
      {/* MCP tool-call header — distinguishes from generic exa.ai search bar */}
      <div className="flex items-center justify-between border-b border-[#ececec] bg-[#fafafa] px-5 py-3">
        <div className="flex items-center gap-2 text-[12px]">
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#0a0a0a] text-white font-medium">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#5dff9c]" />
            mcp · live
          </span>
          <span className="font-[family-name:ui-monospace,SFMono-Regular,monospace] text-[#6b6b6b]">
            claude → exa.web_search
          </span>
        </div>
        <div className="text-[11px] text-[#9a9a9a] font-[family-name:ui-monospace,SFMono-Regular,monospace]">
          v0.5.1
        </div>
      </div>

      <form onSubmit={runSearch} className="px-5 pt-5">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="What is your agent looking for…"
          className="w-full text-[18px] md:text-[20px] outline-none placeholder:text-[#9a9a9a] py-1.5"
        />

        <div className="mt-4 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <button
              type="button"
              className="inline-flex items-center gap-1.5 text-[13px] font-medium text-[#0a0a0a] bg-[#fafafa] border border-[#ececec] px-3 py-1.5 rounded-md hover:bg-[#f0f0f0]"
            >
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#1652f0]" />
              Search
            </button>
            <button
              type="button"
              className="inline-flex items-center gap-1.5 text-[13px] text-[#6b6b6b] hover:text-[#0a0a0a] px-3 py-1.5 rounded-md hover:bg-[#fafafa]"
            >
              Agent
            </button>
          </div>
          <button
            type="submit"
            disabled={loading}
            className="inline-flex items-center justify-center h-9 w-9 rounded-md bg-[#1652f0] text-white hover:bg-[#0e3fc4] transition-colors disabled:opacity-60"
            aria-label="Run search"
          >
            {loading ? (
              <span className="h-3.5 w-3.5 rounded-full border-2 border-white/40 border-t-white animate-spin" />
            ) : (
              <span className="text-lg leading-none">↑</span>
            )}
          </button>
        </div>
      </form>

      <div className="mt-5 grid grid-cols-1 md:grid-cols-[220px_1fr] border-t border-[#ececec]">
        {/* Tool-call inspector — distinct from exa.ai */}
        <div className="p-5 border-b md:border-b-0 md:border-r border-[#ececec] bg-[#fafafa] font-[family-name:ui-monospace,SFMono-Regular,monospace]">
          <div className="text-[10px] uppercase tracking-wider text-[#6b6b6b] mb-2">
            tool_call.json
          </div>
          <pre className="text-[11px] leading-relaxed text-[#0a0a0a] whitespace-pre-wrap break-all">
            {toolCall}
          </pre>

          <div className="text-[10px] uppercase tracking-wider text-[#6b6b6b] mt-5 mb-2">
            latency
          </div>
          <div className="flex flex-wrap gap-1">
            {(["fast", "auto", "deep"] as Mode[]).map((m) => (
              <button
                key={m}
                onClick={() => setMode(m)}
                className={`text-[11px] px-2 py-1 rounded transition-colors ${
                  mode === m
                    ? "bg-[#0a0a0a] text-white"
                    : "bg-white text-[#1a1a1a] border border-[#ececec] hover:bg-[#f0f0f0]"
                }`}
              >
                {m}
              </button>
            ))}
          </div>
        </div>

        {/* Tool response — results */}
        <div className="p-5 min-h-[300px]">
          <div className="flex items-center justify-between text-[11px] mb-3">
            <div className="flex items-center gap-2 font-[family-name:ui-monospace,SFMono-Regular,monospace] text-[#6b6b6b]">
              <span className="text-[#0a0a0a] font-medium">tool_response</span>
              {latency !== null && (
                <span className="text-[#1652f0]">{latency}ms · -80% tokens</span>
              )}
            </div>
            <div className="text-[11px] text-[#9a9a9a]">
              {results ? `${results.length} results` : "—"}
            </div>
          </div>

          {!results && !loading && (
            <div className="text-[14px] text-[#9a9a9a] py-12 text-center">
              Press the blue arrow to simulate an MCP tool call.
            </div>
          )}

          {loading && (
            <div className="space-y-3">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="h-14 rounded-md bg-[#fafafa] animate-pulse"
                />
              ))}
            </div>
          )}

          {results && (
            <ul className="space-y-3.5">
              {results.map((r, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 group cursor-pointer p-2 -m-2 rounded-md hover:bg-[#fafafa] transition-colors"
                >
                  <div className="mt-0.5 h-4 w-4 rounded-sm bg-[#0a0a0a]/5 flex items-center justify-center text-[10px] text-[#6b6b6b] shrink-0">
                    {r.source[0].toUpperCase()}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-3">
                      <div className="text-[14px] font-medium text-[#0a0a0a] truncate group-hover:text-[#1652f0]">
                        {r.title}
                      </div>
                      <div className="text-[11px] text-[#9a9a9a] shrink-0">
                        {r.source}
                      </div>
                    </div>
                    <div className="text-[13px] text-[#6b6b6b] line-clamp-2 mt-0.5">
                      {r.snippet}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
