'use client';

const services = [
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#1a2e1a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8m-4-4v4" />
      </svg>
    ),
    title: 'Backend Development',
    description: 'Building scalable RESTful APIs, microservices, and server-side logic using Node.js and Express.',
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#1a2e1a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      </svg>
    ),
    title: 'Database Design',
    description: 'Designing and optimizing MongoDB, PostgreSQL, and Redis databases for performance and scale.',
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#1a2e1a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
    title: 'Full-Stack Apps',
    description: 'End-to-end web application development with React/Next.js frontend and Node.js backend.',
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#1a2e1a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: 'Auth & Security',
    description: 'Implementing JWT, OAuth2, RBAC, and security hardening for production-grade applications.',
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#1a2e1a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      </svg>
    ),
    title: 'DevOps & Docker',
    description: 'Containerizing apps with Docker, setting up CI/CD pipelines, and deploying to cloud platforms.',
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#1a2e1a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    title: 'API Integrations',
    description: 'Integrating third-party APIs like Stripe, WebSockets, AWS S3, and cloud messaging services.',
  },
];

export default function Skills() {
  return (
    <section id="skills" style={{ background: '#f7f5ee', padding: 'clamp(40px, 8vw, 80px) clamp(16px, 5vw, 32px)' }}>
      <style>{`
        @media (max-width: 768px) {
          .section-header {
            flex-direction: column;
            align-items: center !important;
            text-align: center;
          }
          .section-header > div > div {
            justify-content: center;
          }
        }
      `}</style>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        {/* Header row */}
        <div
          className="section-header"
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
              Services
            </div>
            <h2
              style={{
                fontSize: 'clamp(1.8rem, 4vw, 2.6rem)',
                fontWeight: 900,
                lineHeight: 1.1,
                color: '#1a1a1a',
              }}
            >
              <span style={{ color: '#f5a623', fontStyle: 'italic' }}>Services</span> I Provide
            </h2>
          </div>

          {/* View All button */}
          <a
            href="#contact"
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
              Hire Me
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

        {/* Cards grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
            gap: '20px',
          }}
        >
          {services.map((svc, i) => (
            <div
              key={i}
              style={{
                background: '#fff',
                borderRadius: '16px',
                padding: '28px 24px',
                boxShadow: '0 2px 16px rgba(0,0,0,0.06)',
                transition: 'transform 0.22s, box-shadow 0.22s',
                cursor: 'default',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 8px 32px rgba(26,46,26,0.12)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 2px 16px rgba(0,0,0,0.06)';
              }}
            >
              {/* Icon box */}
              <div
                style={{
                  width: '56px',
                  height: '56px',
                  background: '#f7f5ee',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '20px',
                  border: '2px solid #f5a623',
                }}
              >
                {svc.icon}
              </div>

              <h3
                style={{
                  fontWeight: 800,
                  fontSize: '1.05rem',
                  color: '#1a1a1a',
                  marginBottom: '10px',
                }}
              >
                {svc.title}
              </h3>
              <p
                style={{
                  color: '#666',
                  fontSize: '0.88rem',
                  lineHeight: 1.7,
                  marginBottom: '16px',
                }}
              >
                {svc.description}
              </p>
              <a
                href="#contact"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  color: '#1a2e1a',
                  fontWeight: 700,
                  fontSize: '0.85rem',
                  textDecoration: 'none',
                }}
              >
                Learn more
                <span style={{ color: '#f5a623', fontSize: '1rem' }}>→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}