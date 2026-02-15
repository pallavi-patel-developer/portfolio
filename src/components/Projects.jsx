'use client';
import { useState } from 'react';

const projects = [
  {
    title: 'E-Commerce API',
    description: 'A scalable RESTful API for e-commerce platforms with authentication, product management, cart system, and payment gateway integration.',
    tech: ['Node.js', 'Express', 'MongoDB', 'Stripe'],
    category: 'Backend',
    image: '/projects/ecommerce.png',
    gradient: 'from-emerald-500/20 via-teal-500/10 to-cyan-500/20',
    icon: '🛒',
    github: 'https://github.com',
    live: '#',
  },
  {
    title: 'Real-Time Chat App',
    description: 'Full-stack chat application with WebSocket support, real-time messaging, typing indicators, and online status tracking.',
    tech: ['React', 'Socket.io', 'Node.js', 'Redis'],
    category: 'Full Stack',
    image: '/projects/chatapp.png',
    gradient: 'from-blue-500/20 via-indigo-500/10 to-violet-500/20',
    icon: '💬',
    github: 'https://github.com',
    live: '#',
  },
  {
    title: 'Task Management System',
    description: 'A project management tool with drag-and-drop boards, team collaboration features, and automated notifications.',
    tech: ['Next.js', 'PostgreSQL', 'Prisma', 'Tailwind'],
    category: 'Full Stack',
    image: '/projects/taskboard.png',
    gradient: 'from-purple-500/20 via-pink-500/10 to-rose-500/20',
    icon: '📋',
    github: 'https://github.com',
    live: '#',
  },
  {
    title: 'Authentication Microservice',
    description: 'Secure authentication service with JWT tokens, OAuth2 integration, role-based access control, and email verification.',
    tech: ['Node.js', 'JWT', 'Docker', 'MongoDB'],
    category: 'Backend',
    image: '/projects/auth.png',
    gradient: 'from-amber-500/20 via-orange-500/10 to-red-500/20',
    icon: '🔐',
    github: 'https://github.com',
    live: '#',
  },
  {
    title: 'Blog CMS Platform',
    description: 'Content management system with markdown support, media uploads, SEO optimization, and analytics dashboard.',
    tech: ['React', 'Node.js', 'MongoDB', 'AWS S3'],
    category: 'Full Stack',
    image: '/projects/blogcms.png',
    gradient: 'from-sky-500/20 via-blue-500/10 to-indigo-500/20',
    icon: '✍️',
    github: 'https://github.com',
    live: '#',
  },
  {
    title: 'DevOps Pipeline Tool',
    description: 'CI/CD pipeline automation tool with GitHub webhooks, automated testing, Docker containerization, and deployment scripts.',
    tech: ['Python', 'Docker', 'GitHub Actions', 'AWS'],
    category: 'DevOps',
    image: '/projects/devops.png',
    gradient: 'from-green-500/20 via-emerald-500/10 to-teal-500/20',
    icon: '⚙️',
    github: 'https://github.com',
    live: '#',
  },
];

const categories = ['All', 'Backend', 'Full Stack', 'DevOps'];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const filtered = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="px-4 sm:px-6 md:px-12 py-16 sm:py-20 md:py-24 max-w-7xl mx-auto">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4">
        My <span className="text-accent">Projects</span>
      </h2>
      <p className="text-gray-400 text-center mb-8 sm:mb-10 max-w-2xl mx-auto text-sm sm:text-base">
        A selection of projects that showcase my skills and passion for building.
      </p>

      {/* Category filter */}
      <div className="flex justify-center gap-2 sm:gap-3 mb-10 sm:mb-14 flex-wrap">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === cat ? 'bg-accent text-white shadow-[0_0_20px_rgba(0,191,165,0.3)]' : 'bg-gray-800/50 text-gray-400 border border-gray-700 hover:border-accent/50 hover:text-white'}`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Project grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((project, index) => (
          <div
            key={project.title}
            className={`group relative rounded-2xl border overflow-hidden transition-all duration-500 ${hoveredIndex === index ? 'border-accent/40 shadow-[0_8px_40px_rgba(0,191,165,0.12)] -translate-y-2 scale-[1.02]' : 'border-gray-700/40 bg-gray-800/20'}`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {/* ── Project Image / Preview ── */}
            <div className={`relative h-48 overflow-hidden bg-gradient-to-br ${project.gradient}`}>
              {/* Gradient background with icon fallback */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-6xl opacity-20 group-hover:opacity-30 group-hover:scale-110 transition-all duration-700">{project.icon}</span>
              </div>

              {/* Actual image — shows on top of gradient when available */}
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                onError={(e) => { e.target.style.display = 'none'; }}
              />

              {/* Grid pattern overlay */}
              <div className="absolute inset-0 opacity-10" style={{
                backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)',
                backgroundSize: '20px 20px',
              }}></div>

              {/* Hover overlay with action buttons */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-accent hover:border-accent transition-all duration-300 hover:scale-110"
                  >
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                  <a
                    href={project.live}
                    className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-accent hover:border-accent transition-all duration-300 hover:scale-110"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" x2="21" y1="14" y2="3" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Category badge on image */}
              <span className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm transition-all duration-300 ${hoveredIndex === index ? 'bg-accent/90 text-white' : 'bg-black/40 text-gray-300 border border-white/10'}`}>
                {project.category}
              </span>
            </div>

            {/* ── Project Info ── */}
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-accent transition-colors duration-300">{project.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-5">{project.description}</p>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className={`px-2.5 py-1 rounded-md text-xs font-medium transition-all duration-300 ${hoveredIndex === index ? 'bg-accent/10 text-accent border border-accent/20' : 'bg-gray-700/30 text-gray-500 border border-transparent'}`}
                    style={{ transitionDelay: `${i * 40}ms` }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}