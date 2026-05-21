import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Exa MCP — The web search MCP for AI agents",
  description:
    "One MCP server. Plug Exa's neural web search into Claude, Cursor, Windsurf, and any MCP-compatible client.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${instrumentSerif.variable}`}>
      <body className="font-[family-name:var(--font-sans)] bg-white text-[#0a0a0a]">
        {children}
      </body>
    </html>
  );
}
