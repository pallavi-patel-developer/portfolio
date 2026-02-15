import Link from 'next/link';

export default function About() {
  return (
    <section id="about" className="flex flex-col md:flex-row items-center justify-between px-4 sm:px-8 md:px-12 py-12 sm:py-16 md:py-20 max-w-7xl mx-auto min-h-0 md:min-h-[80vh]">
      <div className="w-full md:w-1/2 relative order-2 md:order-1">
        <div className="w-full h-64 sm:h-80 md:h-96 bg-gray-800/50 rounded-2xl border-2 border-dashed border-gray-700 flex items-center justify-center text-gray-500 relative overflow-hidden">
          <img src="/person2.png" alt="" className="w-full h-full object-cover" />
          <div className="absolute top-1/2 left-10 text-accent opacity-20 text-2xl sm:text-4xl">♪</div>
          <div className="absolute bottom-20 right-20 text-accent opacity-20 text-2xl sm:text-4xl">?</div>
        </div>
      </div>

      <div className="w-full md:w-1/2 space-y-4 sm:space-y-6 order-1 md:order-2 md:pl-12 lg:pl-20 mb-8 md:mb-0">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
          About <span className="text-accent">me</span>
        </h2>
        <p className="text-gray-400 leading-relaxed text-base sm:text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.
        </p>
        <Link href="/read-more" className="text-white font-semibold flex items-center gap-2 hover:text-accent transition-colors">
          Read more
          <span className="text-xl">→</span>
        </Link>

      </div>
    </section>
  );
}
