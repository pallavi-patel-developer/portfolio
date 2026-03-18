'use client';
import Link from 'next/link';
import { useEffect, useRef } from 'react';

/* ── Ticker Strip ── */
const skills = [
  'Backend Development',
  'REST APIs',
  'Databases',
  'Node.js',
  'Python',
  'System Design',
  'Cloud & DevOps',
  'Full-Stack',
];

function TickerStrip() {
  return (
    <div
      style={{
        background: 'linear-gradient(90deg, #f5a623 0%, #f0c060 100%)',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        padding: '12px 0',
      }}
    >
      <div
        style={{
          display: 'inline-flex',
          gap: '0',
          animation: 'tickerScroll 28s linear infinite',
        }}
      >
        {[...skills, ...skills].map((s, i) => (
          <span
            key={i}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              fontSize: '0.95rem',
              fontWeight: 700,
              color: '#1a2e1a',
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
              padding: '0 28px',
            }}
          >
            {s}
            <span style={{ fontSize: '1.2rem', color: '#1a2e1a', opacity: 0.6 }}>✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

/* ── Floating Badge ── */
function FloatingBadge({ label, style }) {
  return (
    <div
      style={{
        position: 'absolute',
        background: '#1a2e1a',
        color: '#fff',
        borderRadius: '50px',
        padding: '8px 18px',
        fontSize: '0.78rem',
        fontWeight: 700,
        letterSpacing: '0.03em',
        boxShadow: '0 8px 28px rgba(0,0,0,0.35)',
        whiteSpace: 'nowrap',
        zIndex: 10,
        animation: 'badgeFloat 4s ease-in-out infinite alternate',
        ...style,
      }}
    >
      {label}
    </div>
  );
}

export default function Hero() {
  return (
    <>
      <style>{`
        @keyframes tickerScroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes badgeFloat {
          0%   { transform: translateY(0px); }
          100% { transform: translateY(-10px); }
        }
        @keyframes circlePulse {
          0%   { transform: scale(1); }
          100% { transform: scale(1.04); }
        }
        .hero-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: #1a2e1a;
          color: #fff;
          border: none;
          border-radius: 50px;
          padding: 14px 32px;
          font-size: 0.92rem;
          font-weight: 700;
          cursor: pointer;
          transition: transform 0.2s, box-shadow 0.2s;
          text-decoration: none;
          letter-spacing: 0.02em;
        }
        .hero-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 28px rgba(26,46,26,0.45);
        }
        .hero-btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: transparent;
          color: #1a2e1a;
          border: 2px solid #1a2e1a;
          border-radius: 50px;
          padding: 12px 28px;
          font-size: 0.92rem;
          font-weight: 700;
          cursor: pointer;
          transition: transform 0.2s, background 0.2s, color 0.2s;
          text-decoration: none;
          letter-spacing: 0.02em;
        }
        .hero-btn-secondary:hover {
          background: #1a2e1a;
          color: #fff;
          transform: translateY(-2px);
        }
          .hero-greeting-tag {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            border: 2px dashed #1a2e1a;
            border-radius: 8px;
            padding: 6px 16px;
            font-size: 0.88rem;
            font-weight: 600;
            color: #1a2e1a;
            background: transparent;
            letter-spacing: 0.04em;
            margin-bottom: 16px;
          }
          @media (max-width: 768px) {
            .hero-content {
              text-align: center;
              display: flex;
              flex-direction: column;
              align-items: center;
            }
            .hero-content p {
              margin: 0 auto 36px;
            }
            .hero-cta, .hero-social {
              justify-content: center;
              width: 100%;
            }
          }
        `}</style>

      {/* ── Hero Section (white/cream bg like reference) ── */}
      <section
        style={{
          background: '#f7f5ee',
          minHeight: '90vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: 'clamp(40px, 8vw, 60px) clamp(16px, 5vw, 32px) 40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '48px',
            flexWrap: 'wrap',
          }}
        >
          {/* ── LEFT CONTENT ── */}
          <div className="hero-content" style={{ flex: '1 1 420px', minWidth: 'min(100%, 280px)' }}>
            {/* Greeting tag */}
            <div className="hero-greeting-tag">
              <span style={{ fontSize: '1rem' }}>👋</span>
              Hello There!
            </div>

            {/* Main heading */}
            <h1
              style={{
                fontSize: 'clamp(1.8rem, 10vw, 4rem)',
                fontWeight: 900,
                lineHeight: 1.1,
                color: '#1a1a1a',
                margin: '0 0 20px',
              }}
            >
              I&apos;m{' '}
              <span style={{ color: '#f5a623', fontStyle: 'italic' }}>
                Pallavi Patel,
              </span>
              <br />
              Backend Developer
              <br />
              <span style={{ color: '#1a2e1a' }}>Based in India.</span>
            </h1>

            {/* Description */}
            <p
              style={{
                fontSize: '0.95rem',
                color: '#555',
                lineHeight: 1.7,
                maxWidth: '420px',
                marginBottom: '36px',
              }}
            >
              I&apos;m an experienced Backend Developer specializing in building scalable
              APIs, robust server-side systems, and full-stack web applications.
            </p>

            {/* CTA Buttons */}
            <div className="hero-cta" style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }}>
              <Link href="#projects" className="hero-btn-primary">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
                View My Portfolio
              </Link>
              <Link href="#contact" className="hero-btn-secondary">
                Hire Me
              </Link>
            </div>

            {/* Social Row */}
            <div className="hero-social" style={{ display: 'flex', gap: '14px', marginTop: '32px', alignItems: 'center' }}>
              {/* GitHub */}
              <a
                href="https://github.com/pallavi-patel-developer"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  background: '#1a2e1a',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  boxShadow: '0 4px 14px rgba(26,46,26,0.3)',
                }}
                onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.12)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
              >
                <svg viewBox="0 0 128 128" width="22" height="22"><g fill="#fff"><path fillRule="evenodd" clipRule="evenodd" d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z" /></g></svg>
              </a>
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/pallavi-patel-48443a2b3"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  background: '#0A66C2',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  boxShadow: '0 4px 14px rgba(10,102,194,0.3)',
                }}
                onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.12)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#fff"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
              </a>
              {/* Download CV */}
              <Link
                href="/cv.pdf"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: '#f5a623',
                  color: '#1a1a1a',
                  borderRadius: '50px',
                  padding: '10px 22px',
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  textDecoration: 'none',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  boxShadow: '0 4px 14px rgba(245,166,35,0.4)',
                  letterSpacing: '0.02em',
                }}
                onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" x2="12" y1="15" y2="3" /></svg>
                Download CV
              </Link>
            </div>
          </div>

          {/* ── RIGHT PHOTO ── */}
          <div
            style={{
              flex: '0 0 auto',
              position: 'relative',
              width: 'clamp(280px, 40vw, 440px)',
              height: 'clamp(280px, 40vw, 440px)',
            }}
          >
            {/* Decorative yellow circle */}
            <div
              style={{
                position: 'absolute',
                width: '85%',
                height: '85%',
                background: '#f5a623',
                borderRadius: '50%',
                bottom: '0',
                right: '0',
                animation: 'circlePulse 4s ease-in-out infinite alternate',
                zIndex: 1,
              }}
            />

            {/* Photo */}
            <img
              src="/person.png"
              alt="Pallavi Patel"
              style={{
                position: 'absolute',
                bottom: '0',
                left: '50%',
                transform: 'translateX(-50%)',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'top center',
                borderRadius: '50% 50% 0 0',
                zIndex: 2,
                filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.15))',
              }}
            />

            {/* Floating badges */}
            <FloatingBadge
              label="⚡ Backend Developer"
              style={{ bottom: '16%', left: '-18%', animationDelay: '0s' }}
            />
            <FloatingBadge
              label="🚀 Full-Stack"
              style={{ top: '18%', right: '-12%', animationDelay: '1.5s', background: '#f5a623', color: '#1a1a1a' }}
            />

            {/* Circular rotating text badge (top right) */}
            <div
              style={{
                position: 'absolute',
                top: '4%',
                right: '2%',
                width: '88px',
                height: '88px',
                borderRadius: '50%',
                background: '#1a2e1a',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 5,
                boxShadow: '0 8px 24px rgba(0,0,0,0.3)',
                animation: 'badgeFloat 3s ease-in-out infinite alternate',
                animationDelay: '0.8s',
              }}
            >
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '1.5rem' }}>➜</div>
                <div style={{ fontSize: '0.5rem', color: '#f5a623', fontWeight: 800, letterSpacing: '0.05em', lineHeight: 1.2, marginTop: '2px' }}>HIRE&nbsp;ME<br />NOW</div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Bottom Ticker ── */}
        <TickerStrip />
      </section>
    </>
  );
}
