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
  title: "Exalink — Exa's web search, linked to your agent",
  description:
    "Exalink is the MCP server that connects Claude, Cursor, Windsurf, and every MCP-compatible client to Exa's neural web search. One install, eight tools.",
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
