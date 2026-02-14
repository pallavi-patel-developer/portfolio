'use client';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [focused, setFocused] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="px-6 md:px-12 py-24 max-w-7xl mx-auto">
      <h2 className="text-5xl font-bold text-center mb-4">
        Contact <span className="text-accent">Me</span>
      </h2>
      <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
        Have a project in mind? Let&apos;s work together to make it happen.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
            <p className="text-gray-400 leading-relaxed mb-8">
              I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
          </div>

          {/* Info cards */}
          {[
            {
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
              ),
              label: 'Email',
              value: 'pallavipatel8080@gmail.com',
              href: 'mailto:pallavipatel8080@gmail.com',
            },
            {
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
              ),
              label: 'Location',
              value: 'India',
              href: null,
            },
            {
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="2" x2="22" y1="12" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
              ),
              label: 'Website',
              value: 'pallavipatel.dev',
              href: '#',
            },
          ].map((item, index) => (
            <a
              key={index}
              href={item.href || undefined}
              className="group flex items-center gap-5 p-4 rounded-2xl border border-gray-700/40 bg-gray-800/20 transition-all duration-500 hover:border-accent/30 hover:bg-gray-800/50 hover:-translate-y-1 hover:shadow-[0_4px_20px_rgba(0,191,165,0.1)] cursor-pointer"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent transition-all duration-300 group-hover:bg-accent group-hover:text-white group-hover:shadow-[0_0_15px_rgba(0,191,165,0.4)]">
                {item.icon}
              </div>
              <div>
                <p className="text-gray-500 text-sm">{item.label}</p>
                <p className="text-white font-medium group-hover:text-accent transition-colors duration-300">{item.value}</p>
              </div>
            </a>
          ))}

          {/* Social links */}
          <div className="pt-4">
            <p className="text-gray-500 text-sm mb-4">Find me on</p>
            <div className="flex gap-4">
              {[
                {
                  label: 'GitHub', href: 'https://github.com', color: 'hover:bg-[#333]', icon: (
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" /></svg>
                  )
                },
                {
                  label: 'LinkedIn', href: 'https://www.linkedin.com/in/pallavi-patel-48443a2b3?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', color: 'hover:bg-[#0A66C2]', icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                  )
                },
                {
                  label: 'Twitter', href: 'https://twitter.com', color: 'hover:bg-[#1DA1F2]', icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                  )
                },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-11 h-11 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center text-gray-400 transition-all duration-300 hover:text-white hover:border-transparent hover:scale-110 hover:shadow-lg ${social.color}`}
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {['name', 'email'].map(field => (
              <div key={field} className="relative">
                <input
                  type={field === 'email' ? 'email' : 'text'}
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  onFocus={() => setFocused(field)}
                  onBlur={() => setFocused(null)}
                  required
                  placeholder={field === 'name' ? 'Your Name' : 'Your Email'}
                  className={`w-full px-5 py-4 rounded-xl bg-gray-800/40 border text-white placeholder-gray-500 outline-none transition-all duration-300 ${focused === field ? 'border-accent shadow-[0_0_15px_rgba(0,191,165,0.15)]' : 'border-gray-700/50 hover:border-gray-600'}`}
                />
              </div>
            ))}
          </div>

          <div className="relative">
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              onFocus={() => setFocused('subject')}
              onBlur={() => setFocused(null)}
              required
              placeholder="Subject"
              className={`w-full px-5 py-4 rounded-xl bg-gray-800/40 border text-white placeholder-gray-500 outline-none transition-all duration-300 ${focused === 'subject' ? 'border-accent shadow-[0_0_15px_rgba(0,191,165,0.15)]' : 'border-gray-700/50 hover:border-gray-600'}`}
            />
          </div>

          <div className="relative">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              onFocus={() => setFocused('message')}
              onBlur={() => setFocused(null)}
              required
              rows={6}
              placeholder="Your Message"
              className={`w-full px-5 py-4 rounded-xl bg-gray-800/40 border text-white placeholder-gray-500 outline-none transition-all duration-300 resize-none ${focused === 'message' ? 'border-accent shadow-[0_0_15px_rgba(0,191,165,0.15)]' : 'border-gray-700/50 hover:border-gray-600'}`}
            />
          </div>

          <button
            type="submit"
            className={`group relative w-full py-4 rounded-xl font-semibold text-white overflow-hidden transition-all duration-500 ${submitted ? 'bg-green-500 shadow-[0_0_25px_rgba(34,197,94,0.4)]' : 'bg-accent shadow-[0_0_20px_rgba(0,191,165,0.2)] hover:shadow-[0_0_30px_rgba(0,191,165,0.4)] hover:scale-[1.02]'}`}
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              {submitted ? (
                <>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                  Message Sent!
                </>
              ) : (
                <>
                  Send Message
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:translate-x-1"><line x1="22" x2="11" y1="2" y2="13" /><polygon points="22 2 15 22 11 13 2 9" /></svg>
                </>
              )}
            </span>
          </button>
        </form>
      </div>
    </section>
  );
}