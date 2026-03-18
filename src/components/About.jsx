import Link from 'next/link';

const skillTags = [
  'Node.js', 'REST APIs', 'MongoDB', 'Express',
  'PostgreSQL', 'Docker', 'Git', 'Next.js',
];

export default function About() {
  return (
    <section
      id="about"
      style={{
        background: '#1a2e1a',
        padding: 'clamp(40px, 8vw, 80px) clamp(16px, 5vw, 32px)',
      }}
    >
      <style>{`
        @media (max-width: 768px) {
          .about-content {
            text-align: center;
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .about-content p { margin-left: auto; margin-right: auto; }
          .about-stats, .about-cv { justify-content: center; width: 100%; }
        }
      `}</style>
      <div
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          gap: '60px',
          flexWrap: 'wrap',
        }}
      >
        {/* ── LEFT: Photo + tags ── */}
        <div
          style={{
            flex: '0 0 auto',
            position: 'relative',
            width: 'clamp(min(100%, 200px), 35vw, 360px)',
          }}
        >
          {/* Yellow circle bg */}
          <div
            style={{
              width: '80%',
              aspectRatio: '1',
              background: '#f5a623',
              borderRadius: '50%',
              margin: '0 auto',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <img
              src="/person2.png"
              alt="Pallavi Patel"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'top center',
                borderRadius: '50%',
              }}
            />
          </div>

          {/* Floating skill tags */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '8px',
              marginTop: '20px',
              justifyContent: 'center',
            }}
          >
            {skillTags.map((tag, i) => (
              <span
                key={i}
                style={{
                  background: i % 2 === 0 ? '#f5a623' : 'rgba(255,255,255,0.1)',
                  color: i % 2 === 0 ? '#1a1a1a' : '#e8f5e0',
                  borderRadius: '50px',
                  padding: '5px 14px',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  whiteSpace: 'nowrap',
                  border: i % 2 === 0 ? 'none' : '1px solid rgba(255,255,255,0.15)',
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* ── RIGHT: Text ── */}
        <div className="about-content" style={{ flex: '1 1 min(100%, 320px)', color: '#fff' }}>
          {/* Sub-label */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              color: '#f5a623',
              fontSize: '0.88rem',
              fontWeight: 600,
              marginBottom: '12px',
            }}
          >
            <span style={{ display: 'block', width: '28px', height: '2px', background: '#f5a623' }} />
            About Me
          </div>

          <h2
            style={{
              fontSize: 'clamp(1.5rem, 8vw, 3rem)',
              fontWeight: 900,
              lineHeight: 1.1,
              marginBottom: '20px',
            }}
          >
            Who is{' '}
            <span style={{ color: '#f5a623', fontStyle: 'italic' }}>
              Pallavi Patel?
            </span>
          </h2>

          <p
            style={{
              color: 'rgba(255,255,255,0.7)',
              lineHeight: 1.8,
              marginBottom: '32px',
              fontSize: '0.95rem',
            }}
          >
            I&apos;m an experienced Backend Developer specializing in building scalable APIs,
            robust server-side systems, and full-stack web applications. I love solving
            complex problems and turning ideas into production-ready systems.
          </p>

          {/* Stats */}
          <div
            className="about-stats"
            style={{
              display: 'flex',
              gap: '40px',
              marginBottom: '36px',
              flexWrap: 'wrap',
            }}
          >
            {[
              { num: '10+', label: 'Projects Completed' },
              { num: '2+', label: 'Years Experience' },
              { num: '5+', label: 'Tech Stacks' },
            ].map((stat, i) => (
              <div key={i}>
                <div
                  style={{
                    fontSize: '2rem',
                    fontWeight: 900,
                    color: '#f5a623',
                    lineHeight: 1,
                  }}
                >
                  {stat.num}
                </div>
                <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.82rem', marginTop: '4px' }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Download CV button */}
          <div className="about-cv" style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <Link
              href="/cv.pdf"
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
                  border: '2px solid rgba(255,255,255,0.3)',
                  borderRadius: '50px 0 0 50px',
                  padding: '12px 22px',
                  fontWeight: 700,
                  fontSize: '0.88rem',
                  letterSpacing: '0.02em',
                  whiteSpace: 'nowrap',
                }}
              >
                Download CV
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
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
