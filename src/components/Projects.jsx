'use client';
import { useState } from 'react';

const projects = [
  {
    title: 'E-Commerce API',
    description: 'A scalable RESTful API for e-commerce platforms with authentication, product management, cart system, and payment gateway integration.',
    tech: ['Node.js', 'Express', 'MongoDB'],
    github: 'https://github.com',
    live: '#',
    bgColor: '#e8f0e8',
    emoji: '🛒',
  },
  {
    title: 'Real-Time Chat App',
    description: 'Full-stack chat application with WebSocket support, real-time messaging, typing indicators, and online status tracking.',
    tech: ['React', 'Socket.io', 'Redis'],
    github: 'https://github.com',
    live: '#',
    bgColor: '#e8eef7',
    emoji: '💬',
  },
  {
    title: 'Task Management System',
    description: 'A project management tool with drag-and-drop boards, team collaboration features, and automated notifications.',
    tech: ['Next.js', 'PostgreSQL', 'Prisma'],
    github: 'https://github.com',
    live: '#',
    bgColor: '#f5ece8',
    emoji: '📋',
  },
  {
    title: 'Authentication Microservice',
    description: 'Secure authentication service with JWT tokens, OAuth2 integration, role-based access control, and email verification.',
    tech: ['Node.js', 'JWT', 'Docker'],
    github: 'https://github.com',
    live: '#',
    bgColor: '#f0e8f5',
    emoji: '🔐',
  },
  {
    title: 'Blog CMS Platform',
    description: 'Content management system with markdown support, media uploads, SEO optimization, and analytics dashboard.',
    tech: ['React', 'Node.js', 'AWS S3'],
    github: 'https://github.com',
    live: '#',
    bgColor: '#e8f3f5',
    emoji: '✍️',
  },
  {
    title: 'DevOps Pipeline Tool',
    description: 'CI/CD pipeline automation tool with GitHub webhooks, automated testing, Docker containerization, and deployment scripts.',
    tech: ['Python', 'Docker', 'GitHub Actions'],
    github: 'https://github.com',
    live: '#',
    bgColor: '#f5f0e8',
    emoji: '⚙️',
  },
];

export default function Projects() {
  const [hovered, setHovered] = useState(null);

  return (
    <section id="projects" style={{ background: '#f7f5ee', padding: '80px 32px' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        {/* Header */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            flexWrap: 'wrap',
            gap: '20px',
            marginBottom: '48px',
          }}
        >
          <div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                color: '#f5a623',
                fontSize: '0.88rem',
                fontWeight: 600,
                marginBottom: '8px',
              }}
            >
              <span style={{ display: 'block', width: '28px', height: '2px', background: '#f5a623' }} />
              My Portfolio
            </div>
            <h2
              style={{
                fontSize: 'clamp(1.8rem, 4vw, 2.6rem)',
                fontWeight: 900,
                lineHeight: 1.1,
                color: '#1a1a1a',
              }}
            >
              My Latest{' '}
              <span style={{ color: '#f5a623', fontStyle: 'italic' }}>Projects</span>
            </h2>
          </div>

          {/* View All button */}
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0',
              textDecoration: 'none',
            }}
          >
            <span
              style={{
                background: '#1a2e1a',
                color: '#fff',
                borderRadius: '50px 0 0 50px',
                padding: '12px 22px',
                fontWeight: 700,
                fontSize: '0.85rem',
                letterSpacing: '0.02em',
                whiteSpace: 'nowrap',
              }}
            >
              View All Projects
            </span>
            <span
              style={{
                background: '#f5a623',
                color: '#1a1a1a',
                borderRadius: '50%',
                width: '46px',
                height: '46px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 900,
                fontSize: '1.1rem',
              }}
            >
              →
            </span>
          </a>
        </div>

        {/* 2-column grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(480px, 1fr))',
            gap: '24px',
          }}
        >
          {projects.map((proj, i) => (
            <div
              key={i}
              style={{
                background: '#fff',
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: hovered === i
                  ? '0 12px 40px rgba(26,46,26,0.15)'
                  : '0 2px 16px rgba(0,0,0,0.06)',
                transform: hovered === i ? 'translateY(-4px)' : 'none',
                transition: 'transform 0.22s, box-shadow 0.22s',
                cursor: 'pointer',
              }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Preview area */}
              <div
                style={{
                  background: proj.bgColor,
                  height: '220px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <span style={{ fontSize: '5rem', opacity: 0.4 }}>{proj.emoji}</span>
                {/* Decorative dots */}
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(26,46,26,0.08) 2px, transparent 0)',
                  backgroundSize: '24px 24px',
                }} />
              </div>

              {/* Info area */}
              <div style={{ padding: '24px' }}>
                {/* Tech tags */}
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '12px' }}>
                  {proj.tech.map((t, j) => (
                    <span
                      key={j}
                      style={{
                        background: '#f5a623',
                        color: '#1a1a1a',
                        borderRadius: '50px',
                        padding: '3px 12px',
                        fontSize: '0.74rem',
                        fontWeight: 700,
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '12px' }}>
                  <div>
                    <h3 style={{ fontWeight: 800, fontSize: '1.05rem', color: '#1a1a1a', marginBottom: '6px' }}>
                      {proj.title}
                    </h3>
                    <p style={{ color: '#666', fontSize: '0.85rem', lineHeight: 1.6 }}>
                      {proj.description}
                    </p>
                  </div>
                  <div style={{ display: 'flex', gap: '8px', flexShrink: 0 }}>
                    {proj.github && (
                      <a
                        href={proj.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          width: '40px',
                          height: '40px',
                          background: '#1a2e1a',
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: '#fff',
                          textDecoration: 'none',
                          transition: 'background 0.2s',
                        }}
                        onMouseEnter={e => e.currentTarget.style.background = '#f5a623'}
                        onMouseLeave={e => e.currentTarget.style.background = '#1a2e1a'}
                        title="View GitHub Repository"
                      >
                        <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                          <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                        </svg>
                      </a>
                    )}
                    {proj.live && (
                      <a
                        href={proj.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          width: '40px',
                          height: '40px',
                          background: '#1a2e1a',
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: '#fff',
                          textDecoration: 'none',
                          transition: 'background 0.2s',
                        }}
                        onMouseEnter={e => e.currentTarget.style.background = '#f5a623'}
                        onMouseLeave={e => e.currentTarget.style.background = '#1a2e1a'}
                        title="View Live App"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                          <polyline points="15 3 21 3 21 9" />
                          <line x1="10" x2="21" y1="14" y2="3" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}