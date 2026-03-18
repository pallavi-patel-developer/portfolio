'use client';
import { useState } from 'react';
import Link from 'next/link';

const NAV_BG = '#1a2e1a';
const NAV_TEXT = '#e8f5e0';
const ACCENT = '#f5a623';

const navLinks = [
  { href: '#', label: 'Home' },
  { href: '#about', label: 'About Me' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      style={{
        background: '#f7f5ee',
        padding: '16px 32px',
        position: 'sticky',
        top: 0,
        zIndex: 100,
      }}
    >
      {/* ── Pill Container ── */}
      <div
        style={{
          background: NAV_BG,
          borderRadius: '50px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '10px 20px 10px 16px',
          maxWidth: '1100px',
          margin: '0 auto',
          boxShadow: '0 8px 32px rgba(26,46,26,0.25)',
        }}
      >
        {/* Logo */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            textDecoration: 'none',
          }}
        >
          <div
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '50%',
              background: ACCENT,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 900,
              fontSize: '1rem',
              color: '#1a1a1a',
            }}
          >
            P
          </div>
          <span
            style={{
              color: '#fff',
              fontWeight: 800,
              fontSize: '1rem',
              letterSpacing: '0.04em',
            }}
          >
            Pallavi.
          </span>
        </div>

        {/* Desktop Links */}
        <div
          style={{
            display: 'flex',
            gap: '6px',
            alignItems: 'center',
          }}
          className="hidden-mobile"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href + link.label}
              href={link.href}
              style={{
                color: NAV_TEXT,
                textDecoration: 'none',
                fontSize: '0.82rem',
                fontWeight: 600,
                padding: '7px 14px',
                borderRadius: '50px',
                transition: 'background 0.2s, color 0.2s',
                letterSpacing: '0.02em',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.12)';
                e.currentTarget.style.color = '#fff';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = NAV_TEXT;
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Contact Button */}
        <a
          href="#contact"
          style={{
            color: '#fff',
            border: '1.5px solid rgba(255,255,255,0.45)',
            borderRadius: '50px',
            padding: '8px 20px',
            fontSize: '0.82rem',
            fontWeight: 700,
            textDecoration: 'none',
            transition: 'background 0.2s, border-color 0.2s',
            letterSpacing: '0.02em',
            whiteSpace: 'nowrap',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background = ACCENT;
            e.currentTarget.style.borderColor = ACCENT;
            e.currentTarget.style.color = '#1a1a1a';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = 'transparent';
            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.45)';
            e.currentTarget.style.color = '#fff';
          }}
        >
          Contact Me
        </a>

        {/* Hamburger (mobile) */}
        <button
          style={{
            display: 'none',
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            padding: '6px',
          }}
          className="show-mobile"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div style={{ width: '22px', height: '2px', background: '#fff', marginBottom: '5px', transition: 'all 0.3s', transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }} />
          <div style={{ width: '22px', height: '2px', background: '#fff', marginBottom: '5px', opacity: menuOpen ? 0 : 1, transition: 'all 0.3s' }} />
          <div style={{ width: '22px', height: '2px', background: '#fff', transition: 'all 0.3s', transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }} />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          style={{
            background: NAV_BG,
            borderRadius: '16px',
            marginTop: '8px',
            maxWidth: '1100px',
            margin: '8px auto 0',
            padding: '12px',
            boxShadow: '0 8px 32px rgba(26,46,26,0.3)',
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href + link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                display: 'block',
                color: NAV_TEXT,
                textDecoration: 'none',
                fontSize: '0.9rem',
                fontWeight: 600,
                padding: '10px 16px',
                borderRadius: '10px',
                transition: 'background 0.2s',
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
        @media (min-width: 769px) {
          .show-mobile { display: none !important; }
          .hidden-mobile { display: flex !important; }
        }
      `}</style>
    </nav>
  );
}
