'use client';
import { useState } from 'react';

const experiences = [
  {
    year: '2024 - Present',
    role: 'Senior Backend Developer',
    company: 'Tech Corp',
    description: 'Leading backend architecture and microservices development using Node.js, Express, and MongoDB. Designing scalable APIs serving 100K+ daily requests.',
    tech: ['Node.js', 'MongoDB', 'Docker', 'AWS'],
  },
  {
    year: '2023 - 2024',
    role: 'Full Stack Developer',
    company: 'Digital Solutions',
    description: 'Built and maintained full-stack applications with React and Node.js. Implemented CI/CD pipelines and improved deployment efficiency by 40%.',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Git'],
  },
  {
    year: '2022 - 2023',
    role: 'Backend Developer',
    company: 'StartUp Inc.',
    description: 'Developed RESTful APIs and database schemas. Integrated third-party services and payment gateways for e-commerce platform.',
    tech: ['Express', 'MySQL', 'Redis', 'Stripe'],
  },
  {
    year: '2021 - 2022',
    role: 'Junior Developer',
    company: 'WebDev Agency',
    description: 'Started career building responsive websites and learning backend development. Contributed to 10+ client projects.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Python'],
  },
];

export default function Experience() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section id="experience" className="px-6 md:px-12 py-24 max-w-7xl mx-auto">
      <h2 className="text-5xl font-bold text-center mb-4">
        My <span className="text-accent">Experience</span>
      </h2>
      <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
        A journey through my professional career and the milestones I have achieved.
      </p>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-accent/50 to-transparent md:-translate-x-1/2"></div>

        {experiences.map((exp, index) => (
          <div
            key={index}
            className={`relative flex flex-col md:flex-row items-start mb-12 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {/* Timeline dot */}
            <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 -translate-x-1/2 z-10">
              <div className={`w-4 h-4 rounded-full border-2 transition-all duration-500 ${hoveredIndex === index ? 'bg-accent border-accent shadow-[0_0_15px_rgba(0,191,165,0.6)] scale-150' : 'bg-gray-900 border-accent/50'}`}></div>
            </div>

            {/* Year badge */}
            <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12 md:text-right'} pl-8`}>
              <span className={`inline-block px-4 py-1.5 rounded-full text-sm font-semibold transition-all duration-500 ${hoveredIndex === index ? 'bg-accent text-white shadow-[0_0_20px_rgba(0,191,165,0.3)]' : 'bg-accent/10 text-accent'}`}>
                {exp.year}
              </span>
            </div>

            {/* Content card */}
            <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'} pl-8 mt-4 md:mt-0`}>
              <div className={`p-6 rounded-2xl border transition-all duration-500 cursor-default ${hoveredIndex === index ? 'bg-gray-800/80 border-accent/40 shadow-[0_8px_32px_rgba(0,191,165,0.15)] -translate-y-1' : 'bg-gray-800/30 border-gray-700/50'}`}>
                <h3 className="text-xl font-bold text-white mb-1">{exp.role}</h3>
                <p className="text-accent font-medium mb-3">{exp.company}</p>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">{exp.description}</p>
                <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                  {exp.tech.map((t, i) => (
                    <span
                      key={i}
                      className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 ${hoveredIndex === index ? 'bg-accent/20 text-accent' : 'bg-gray-700/50 text-gray-400'}`}
                      style={{ transitionDelay: `${i * 50}ms` }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}