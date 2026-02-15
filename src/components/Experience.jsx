'use client';

const experiences = [
  {
    year: 'Sep 2025 - Present',
    role: 'Backend Developer',
    company: 'Vedseem Technologies',
    description: [
      'Designing and developing scalable backend architectures and RESTful APIs using Node.js, Express, and MongoDB.',
      'Building and maintaining microservices for high-traffic production applications.',
      'Collaborating with cross-functional teams to deliver end-to-end features on schedule.',
      'Implementing authentication, authorization, and security best practices across services.',
    ],
    tech: ['Node.js', 'Express', 'MongoDB', 'REST APIs', 'Git'],
    image: '/Screenshot 2026-02-14 020043.png',
  },
  {
    year: 'Aug 2025 - Sep 2025',
    role: 'Backend Developer Intern',
    company: 'Vedseem Technologies',
    description: [
      'Designing and developing scalable backend architectures and RESTful APIs using Node.js, Express, and MongoDB.',
      'Building and maintaining microservices for high-traffic production applications.',
      'Collaborating with cross-functional teams to deliver end-to-end features on schedule.',
      'Implementing authentication, authorization, and security best practices across services.',
    ],
    tech: ['Node.js', 'Express', 'MongoDB', 'REST APIs', 'Git'],
    image: '/Screenshot 2026-02-14 020019.png',
  }
];

const floatingIcons = [
  { src: '/api-icon-nobg.png', top: '5%', left: '3%', size: 55, delay: 0, rotate: -12 },
  { src: '/cloud-icon-nobg.png', top: '12%', right: '5%', size: 60, delay: 1.2, rotate: 8 },
  { src: '/database-icon-nobg.png', top: '45%', left: '1%', size: 50, delay: 0.6, rotate: 15 },
  { src: '/lock-icon-nobg.png', top: '70%', right: '2%', size: 48, delay: 1.8, rotate: -10 },
  { src: '/settings-icon-nobg.png', top: '85%', left: '6%', size: 52, delay: 2.4, rotate: 20 },
  { src: '/terminal-icon-nobg.png', top: '35%', right: '3%', size: 55, delay: 0.3, rotate: -5 },
];

export default function Experience() {
  return (
    <section id="experience" className="relative px-4 sm:px-6 md:px-12 py-16 sm:py-20 md:py-24 max-w-7xl mx-auto overflow-hidden">

      {/* Floating background icons */}
      {floatingIcons.map((icon, i) => (
        <img
          key={i}
          src={icon.src}
          alt=""
          aria-hidden="true"
          className="absolute pointer-events-none select-none hidden md:block"
          style={{
            top: icon.top,
            left: icon.left,
            right: icon.right,
            width: icon.size,
            height: icon.size,
            opacity: 0.12,
            transform: `rotate(${icon.rotate}deg)`,
            animation: `floatIcon 3s ease-in-out ${icon.delay}s infinite alternate`,
            zIndex: 0,
          }}
        />
      ))}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4">
        My <span className="text-accent">Experience</span>
      </h2>
      <p className="text-gray-400 text-center mb-10 sm:mb-16 max-w-2xl mx-auto text-sm sm:text-base">
        A journey through my professional career and the milestones I have achieved.
      </p>

      <div className="flex flex-col gap-8 sm:gap-10 max-w-5xl mx-auto">
        {experiences.map((exp, idx) => (
          <div
            key={idx}
            className="relative group"
          >


            {/* Card */}
            <div
              className="md:ml-6 border-dashed border-1 border-accent rounded-2xl overflow-hidden transition-all duration-300"
              style={{
                background: 'linear-gradient(135deg, rgba(30,32,41,0.95) 0%, rgba(40,44,60,0.9) 100%)',
                boxShadow: '0 8px 32px rgba(0,191,165,0.08), 0 2px 8px rgba(0,0,0,0.3)',
              }}
            >
              {/* Top section — image + details side by side */}
              <div className="flex flex-col md:flex-row">
                {/* Image */}
                {exp.image && (
                  <div className="md:w-[340px] flex-shrink-0 overflow-hidden p-3 sm:p-5">
                    <img
                      src={exp.image}
                      alt={`${exp.company} work`}
                      className="w-full h-auto sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-2xl sm:rounded-4xl object-cover mx-auto"
                    />
                  </div>
                )}

                {/* Details */}
                <div className="flex-1 p-4 sm:p-6 md:p-3">

                  <span
                    className="inline-block text-xs font-semibold tracking-wider uppercase px-3 py-1 rounded-full mb-4"
                    style={{
                      background: 'rgba(0,191,165,0.15)',
                      color: '#00bfa5',
                      border: '1px solid rgba(0,191,165,0.25)',
                    }}
                  >
                    {exp.year}
                  </span>

                  {/* Role & Company */}
                  <h3 className="text-2xl font-bold text-white mb-1">{exp.role}</h3>
                  <p className="text-accent font-medium text-lg mb-5">{exp.company}</p>

                  {/* Description bullets */}
                  <ul className="space-y-2 mb-6">
                    {exp.description.map((point, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-300 text-sm leading-relaxed">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t, i) => (
                      <span
                        key={i}
                        className="text-xs font-medium px-3 py-1.5 rounded-lg transition-colors duration-200"
                        style={{
                          background: 'rgba(255,255,255,0.06)',
                          color: '#a0aec0',
                          border: '1px solid rgba(255,255,255,0.08)',
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}