# exa·mcp showcase

A landing site for the **Exa MCP server**, styled in the exa.ai design language.
Built with Next.js 15, React 19, TypeScript, and Tailwind CSS v4.

The backend is currently mocked — `/api/search` returns deterministic
Exa-style results with realistic latency. Swap in the real Exa API key
when ready.

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
- `app/api/search/route.ts` — mocked search backend
- `components/` — Navbar, Hero, SearchDemo, Features, Clients, Benchmarks, Install, Footer

## Notes

This site is an unofficial showcase and is not affiliated with Exa Labs.
