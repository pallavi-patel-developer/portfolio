import Navbar from "@/components/Navbar";
import ReadMore from "@/components/readMore";

export default function ReadMorePage() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-accent/5 blur-[120px] -z-10"></div>
      <Navbar />
      <ReadMore />
    </main>
  );
}
