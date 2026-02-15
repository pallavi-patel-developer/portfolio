'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: '#', label: 'Home' },
    { href: '#about', label: 'About Me' },
    { href: '#contact', label: 'Contact' },
    { href: '#experience', label: 'Experience' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
  ];

  return (
    <nav className="relative flex justify-between items-center py-4 sm:py-6 px-4 sm:px-8 md:px-12 max-w-7xl mx-auto">
      {/* Logo */}
      <div className="text-xl sm:text-2xl font-bold tracking-wide flex items-center">
        <img src="logo-symbol.png" className="w-12 h-9 sm:w-17 sm:h-11" alt="Logo" />
        <span className="mt-1 ml-1">PALLAVI PATEL</span>
      </div>

      {/* Desktop nav */}
      <div className="hidden md:flex gap-8 text-sm font-medium">
        {navLinks.map(link => (
          <Link key={link.href + link.label} href={link.href} className="hover:text-accent transition-colors">
            {link.label}
          </Link>
        ))}
      </div>

      {/* Hamburger button (mobile) */}
      <button
        className="md:hidden flex flex-col gap-1.5 p-2 rounded-lg hover:bg-gray-800/50 transition-colors"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
        <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
        <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
      </button>

      {/* Mobile menu */}
      <div className={`md:hidden absolute top-full left-0 right-0 z-50 overflow-hidden transition-all duration-300 ${menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="flex flex-col gap-1 px-4 py-4 mx-4 rounded-2xl bg-gray-900/95 backdrop-blur-md border border-gray-700/50 shadow-2xl">
          {navLinks.map(link => (
            <Link
              key={link.href + link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="px-4 py-3 rounded-xl text-sm font-medium hover:text-accent hover:bg-gray-800/50 transition-all duration-200"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
