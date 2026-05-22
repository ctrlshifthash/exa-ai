import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import MCPTools from "@/components/MCPTools";
import Architecture from "@/components/Architecture";
import Clients from "@/components/Clients";
import Install from "@/components/Install";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main id="top" className="min-h-screen scroll-smooth">
      <Navbar />
      <Hero />
      <Features />
      <MCPTools />
      <Architecture />
      <Clients />
      <Install />
      <Footer />
    </main>
  );
}
