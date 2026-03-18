'use client';
import { useState } from 'react';

const projects = [
  {
    title: 'E-Commerce API',
    description: 'A scalable RESTful API for e-commerce platforms with authentication, product management, cart system, and payment gateway integration.',
    tech: ['Node.js', 'Express', 'MongoDB'],
    link: 'https://github.com',
    bgColor: '#e8f0e8',
    emoji: '🛒',
  },
  {
    title: 'Real-Time Chat App',
    description: 'Full-stack chat application with WebSocket support, real-time messaging, typing indicators, and online status tracking.',
    tech: ['React', 'Socket.io', 'Redis'],
    link: 'https://github.com',
    bgColor: '#e8eef7',
    emoji: '💬',
  },
  {
    title: 'Task Management System',
    description: 'A project management tool with drag-and-drop boards, team collaboration features, and automated notifications.',
    tech: ['Next.js', 'PostgreSQL', 'Prisma'],
    link: 'https://github.com',
    bgColor: '#f5ece8',
    emoji: '📋',
  },
  {
    title: 'Authentication Microservice',
    description: 'Secure authentication service with JWT tokens, OAuth2 integration, role-based access control, and email verification.',
    tech: ['Node.js', 'JWT', 'Docker'],
    link: 'https://github.com',
    bgColor: '#f0e8f5',
    emoji: '🔐',
  },
  {
    title: 'Blog CMS Platform',
    description: 'Content management system with markdown support, media uploads, SEO optimization, and analytics dashboard.',
    tech: ['React', 'Node.js', 'AWS S3'],
    link: 'https://github.com',
    bgColor: '#e8f3f5',
    emoji: '✍️',
  },
  {
    title: 'DevOps Pipeline Tool',
    description: 'CI/CD pipeline automation tool with GitHub webhooks, automated testing, Docker containerization, and deployment scripts.',
    tech: ['Python', 'Docker', 'GitHub Actions'],
    link: 'https://github.com',
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
                  <a
                    href={proj.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      flexShrink: 0,
                      width: '40px',
                      height: '40px',
                      background: '#1a2e1a',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#fff',
                      fontSize: '1rem',
                      textDecoration: 'none',
                      transition: 'background 0.2s',
                    }}
                    onMouseEnter={e => e.currentTarget.style.background = '#f5a623'}
                    onMouseLeave={e => e.currentTarget.style.background = '#1a2e1a'}
                  >
                    →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}