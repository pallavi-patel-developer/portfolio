'use client';
import { useState } from 'react';

const faqs = [
  {
    q: 'What industries have you worked in as a developer?',
    a: 'I have worked across e-commerce, SaaS, and tech startups — building backend systems, APIs, and full-stack applications for diverse business domains.',
  },
  {
    q: 'Can I download your resume/CV for information?',
    a: "Certainly! You can download my resume/CV directly from my website. It provides a comprehensive overview of my education, work experience, and technical achievements.",
  },
  {
    q: 'Are you available for freelance development work?',
    a: 'Yes! I am open to freelance and contract opportunities. Feel free to reach out through the contact form and I will get back to you within 24 hours.',
  },
  {
    q: 'What tools and technologies do you use for your work?',
    a: 'I primarily use Node.js, Express, MongoDB, PostgreSQL, Docker, React, and Next.js. I also work with cloud platforms like AWS and tools like Git and GitHub Actions.',
  },
  {
    q: 'How do I navigate through your portfolio projects?',
    a: 'You can scroll down to the Projects section where all my latest work is showcased with descriptions, tech stacks used, and links to the GitHub repositories.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(1); // second item open by default

  return (
    <section id="faq" style={{ background: '#1a2e1a', padding: '80px 32px' }}>
      <div style={{ maxWidth: '700px', margin: '0 auto' }}>
        {/* Header */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            color: '#f5a623',
            fontSize: '0.88rem',
            fontWeight: 600,
            marginBottom: '12px',
          }}
        >
          <span style={{ display: 'block', width: '28px', height: '2px', background: '#f5a623' }} />
          FAQs
        </div>

        <h2
          style={{
            textAlign: 'center',
            fontSize: 'clamp(1.8rem, 4vw, 2.4rem)',
            fontWeight: 900,
            color: '#fff',
            marginBottom: '40px',
            lineHeight: 1.2,
          }}
        >
          Questions?{' '}
          <span style={{ color: '#f5a623', fontStyle: 'italic', fontWeight: 900 }}>
            Look here.
          </span>
        </h2>

        {/* Accordion */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                style={{
                  background: isOpen ? '#f5a623' : 'rgba(255,255,255,0.06)',
                  borderRadius: '14px',
                  overflow: 'hidden',
                  transition: 'background 0.25s',
                  cursor: 'pointer',
                }}
                onClick={() => setOpenIndex(isOpen ? null : i)}
              >
                {/* Question row */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '18px 22px',
                    gap: '16px',
                  }}
                >
                  <span
                    style={{
                      fontWeight: 700,
                      fontSize: '0.95rem',
                      color: isOpen ? '#1a1a1a' : '#fff',
                      lineHeight: 1.4,
                    }}
                  >
                    {faq.q}
                  </span>
                  <span
                    style={{
                      flexShrink: 0,
                      width: '28px',
                      height: '28px',
                      borderRadius: '50%',
                      background: isOpen ? '#1a2e1a' : 'rgba(255,255,255,0.12)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: isOpen ? '#f5a623' : '#fff',
                      fontSize: '1.2rem',
                      fontWeight: 700,
                      lineHeight: 1,
                      transition: 'all 0.25s',
                    }}
                  >
                    {isOpen ? '−' : '+'}
                  </span>
                </div>

                {/* Answer */}
                {isOpen && (
                  <div
                    style={{
                      padding: '0 22px 18px',
                      color: '#1a1a1a',
                      fontSize: '0.88rem',
                      lineHeight: 1.7,
                    }}
                  >
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
