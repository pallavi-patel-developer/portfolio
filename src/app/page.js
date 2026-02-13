import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-accent/5 blur-[120px] -z-10"></div>

      <Navbar />
      <Hero />
      <About />
    </main>
  );
}
