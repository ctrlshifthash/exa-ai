import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Clients from "@/components/Clients";
import Benchmarks from "@/components/Benchmarks";
import Install from "@/components/Install";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <Clients />
      <Benchmarks />
      <Install />
      <Footer />
    </main>
  );
}
