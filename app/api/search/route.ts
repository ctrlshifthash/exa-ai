import { NextRequest, NextResponse } from "next/server";

type SearchResult = {
  title: string;
  url: string;
  source: string;
  snippet: string;
  publishedDate?: string;
};

const MOCK_RESULTS: Record<string, SearchResult[]> = {
  "latest open source llms": [
    {
      title: "zai-org/GLM-5",
      url: "https://github.com/zai-org/GLM-5",
      source: "github.com",
      snippet:
        "GLM-5.1 is our next-generation flagship model for agentic engineering, with significant improvements in reasoning, code, and long context handling.",
      publishedDate: "2026-04-12",
    },
    {
      title: "MoonshotAI/Kimi-K2.5",
      url: "https://github.com/MoonshotAI/Kimi-K2.5",
      source: "github.com",
      snippet:
        "15 trillion mixed visual and text tokens atop Kimi-K2-Base. Seamlessly integrates vision, reasoning, and tool use into a single unified model.",
      publishedDate: "2026-05-02",
    },
    {
      title: "Best Open Source LLMs in 2026: Rankings and Licensing",
      url: "https://onyx.app/blog/open-source-llms-2026",
      source: "onyx.app",
      snippet:
        "This guide covers the top 10 open-source and open-weight LLMs from the Onyx Open Index, with notes on commercial use and deployment.",
      publishedDate: "2026-05-09",
    },
    {
      title: "DeepSeek-V3: The 671B MoE Model You Can Run Locally in 2026",
      url: "https://dev.to/deepseek-v3-2026",
      source: "dev.to",
      snippet:
        "A deep dive into running DeepSeek-V3 on consumer hardware using quantization and offloading techniques.",
      publishedDate: "2026-03-21",
    },
  ],
  default: [
    {
      title: "Exalink — MCP server for Exa web search",
      url: "https://github.com/WilliamBryk/Autoreason",
      source: "github.com",
      snippet:
        "Exalink links Exa's neural web search to any MCP-compatible AI agent — Claude, Cursor, Windsurf, Cline, and the rest. One install, eight tools.",
      publishedDate: "2026-05-22",
    },
    {
      title: "Model Context Protocol — Specification",
      url: "https://modelcontextprotocol.io/spec",
      source: "modelcontextprotocol.io",
      snippet:
        "The open standard for connecting AI assistants to external data sources and tools. MCP is to AI agents what LSP is to code editors.",
      publishedDate: "2026-04-30",
    },
    {
      title: "Connect Claude Desktop to the web with Exalink",
      url: "https://exa.ai/blog/claude-mcp",
      source: "exa.ai",
      snippet:
        "A 30-second walkthrough: install Exalink, drop your Exa API key into Claude's config, and your agent can now search the open web.",
      publishedDate: "2026-04-18",
    },
    {
      title: "Exa vs. Tavily vs. Brave: search APIs for agents compared",
      url: "https://benchmarks.dev/search-apis-2026",
      source: "benchmarks.dev",
      snippet:
        "Head-to-head comparison of semantic search APIs across FRAMES, Tip-of-Tongue, and Seal0 benchmarks. Exa leads on neural relevance and token efficiency.",
      publishedDate: "2026-03-15",
    },
  ],
};

export async function POST(req: NextRequest) {
  const { query, mode } = await req.json().catch(() => ({ query: "" }));

  const normalized = (query ?? "").toLowerCase().trim();
  const results =
    MOCK_RESULTS[normalized] ?? MOCK_RESULTS.default.map((r) => ({
      ...r,
      snippet: r.snippet.replace(/Exa/g, query?.length ? "Exa" : "Exa"),
    }));

  const latency =
    mode === "deep" ? 1800 + Math.random() * 800 : 380 + Math.random() * 140;

  await new Promise((resolve) => setTimeout(resolve, latency));

  return NextResponse.json({
    query,
    mode: mode ?? "fast",
    latencyMs: Math.round(latency),
    results,
  });
}
