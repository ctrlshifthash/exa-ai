# Exalink

The MCP server that links Exa's neural web search to any AI agent —
Claude, Cursor, Windsurf, and every MCP-compatible client.

Built with Next.js 15 / React 19 / Tailwind CSS v4.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Wire up the real Exa API

Replace `app/api/search/route.ts` with a call to the Exa API:

```ts
const res = await fetch("https://api.exa.ai/search", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "x-api-key": process.env.EXA_API_KEY!,
  },
  body: JSON.stringify({ query, numResults: 8 }),
});
```

Set `EXA_API_KEY` in `.env.local`.

## Project layout

- `app/page.tsx` — composes the homepage sections
- `app/api/search/route.ts` — search backend
- `components/` — Navbar, Hero, SearchDemo, Features, MCPTools, Architecture, Clients, Install, Footer
