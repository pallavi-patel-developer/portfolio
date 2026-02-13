import Link from 'next/link';

export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-12 py-20 max-w-7xl mx-auto min-h-[80vh]">
      <div className="md:w-1/2 space-y-6">
        <h1 className="text-6xl md:text-7xl font-bold leading-tight">
          CREATIVE UI <br />
          <span className="text-accent">DESIGNER</span>
        </h1>
        <div className="flex gap-4">
          <Link href="#contact" className="bg-accent text-white px-8 py-3 rounded-full font-medium shadow-lg hover:bg-opacity-90 transition-all">
            Hire me
          </Link>
          <Link href="/cv.pdf" className="bg-gray-800 text-white px-8 py-3 rounded-full font-medium border border-gray-700 hover:bg-gray-700 transition-all flex items-center gap-2">
            Download CV
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" x2="12" y1="15" y2="3" /></svg>
          </Link>
        </div>
        <div className="absolute left-10 bottom-20 opacity-20">
          {/* Decorative element implementation later */}
        </div>
      </div>

      <div className="md:w-1/2 mt-12 md:mt-0 relative">
        {/* Placeholder for Hero Illustration */}
        <div className="w-full h-96 bg-gray-800/50 rounded-2xl border-2 border-dashed border-gray-700 flex items-center justify-center text-gray-500 relative overflow-hidden">
          Illustration Placeholder (Hero)
          {/* Doodles can be added as absolute positioned SVGs here later */}
          <div className="absolute top-10 right-10 text-accent opacity-20 transform rotate-12">HTML</div>
          <div className="absolute bottom-10 left-10 text-accent opacity-20 transform -rotate-12">CSS</div>
        </div>
      </div>
    </section>
  );
}
