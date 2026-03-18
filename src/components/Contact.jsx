'use client';
import { useState } from 'react';

const ACCENT = '#f5a623';
const GREEN = '#1a2e1a';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: '',
    message: '',
  });
  const [focused, setFocused] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_PAP;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          name: formData.name,
          email: formData.email,
          subject: `PALLAVI GOT PROJECT ON: ${formData.interest}`,
          message: `Phone: ${formData.phone}\n\n${formData.message}`,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setSubmitted(true);
        setFormData({ name: '', email: '', phone: '', interest: '', message: '' });
        setTimeout(() => setSubmitted(false), 4000);
      } else {
        setError('Something went wrong. Please try again.');
        setTimeout(() => setError(''), 4000);
      }
    } catch {
      setError('Network error. Please check your connection.');
      setTimeout(() => setError(''), 4000);
    } finally {
      setLoading(false);
    }
  };

  const inputStyle = (field) => ({
    width: '100%',
    padding: '13px 16px',
    borderRadius: '10px',
    border: `1.5px solid ${focused === field ? GREEN : '#e0e0e0'}`,
    background: '#f7f5ee',
    fontSize: '0.9rem',
    color: '#1a1a1a',
    outline: 'none',
    transition: 'border-color 0.2s',
    boxSizing: 'border-box',
    fontFamily: 'inherit',
  });

  return (
    <section id="contact" style={{ background: '#fff', padding: '80px 32px' }}>
      <div
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          display: 'flex',
          gap: '60px',
          flexWrap: 'wrap',
          alignItems: 'flex-start',
        }}
      >
        {/* ── LEFT: Info ── */}
        <div style={{ flex: '0 1 320px', minWidth: '260px' }}>
          {/* Label */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              color: ACCENT,
              fontSize: '0.88rem',
              fontWeight: 600,
              marginBottom: '12px',
            }}
          >
            <span style={{ display: 'block', width: '28px', height: '2px', background: ACCENT }} />
            Contact Us
          </div>

          <h2
            style={{
              fontSize: 'clamp(1.6rem, 3.5vw, 2.2rem)',
              fontWeight: 900,
              lineHeight: 1.2,
              color: '#1a1a1a',
              marginBottom: '16px',
            }}
          >
            Let&apos;s Talk for{' '}
            <span style={{ color: ACCENT, fontStyle: 'italic' }}>Your</span>
            <br />
            <span style={{ color: ACCENT, fontStyle: 'italic' }}>Next Project</span>
          </h2>

          <p style={{ color: '#777', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '32px' }}>
            I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>

          {/* Contact items */}
          {[
            {
              emoji: '📞',
              text: '+91 (800) 000-0000',
            },
            {
              emoji: '📧',
              text: 'pallavipatel8080@gmail.com',
            },
            {
              emoji: '🌐',
              text: 'pallavipatel.dev',
            },
            {
              emoji: '📍',
              text: 'India',
            },
          ].map((item, i) => (
            <div
              key={i}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
                marginBottom: '16px',
              }}
            >
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  background: ACCENT,
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.1rem',
                  flexShrink: 0,
                }}
              >
                {item.emoji}
              </div>
              <span style={{ color: '#333', fontSize: '0.9rem', fontWeight: 500 }}>
                {item.text}
              </span>
            </div>
          ))}
        </div>

        {/* ── RIGHT: Form ── */}
        <form onSubmit={handleSubmit} style={{ flex: '1 1 380px', minWidth: '280px' }}>
          {/* Row 1: name + email */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginBottom: '14px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: '#444', marginBottom: '6px' }}>
                Your Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                onFocus={() => setFocused('name')}
                onBlur={() => setFocused(null)}
                required
                placeholder="Ex. John Doe"
                style={inputStyle('name')}
              />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: '#444', marginBottom: '6px' }}>
                Email *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onFocus={() => setFocused('email')}
                onBlur={() => setFocused(null)}
                required
                placeholder="example@gmail.com"
                style={inputStyle('email')}
              />
            </div>
          </div>

          {/* Row 2: phone + interest */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginBottom: '14px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: '#444', marginBottom: '6px' }}>
                Phone *
              </label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                onFocus={() => setFocused('phone')}
                onBlur={() => setFocused(null)}
                placeholder="Enter Phone Number"
                style={inputStyle('phone')}
              />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: '#444', marginBottom: '6px' }}>
                I&apos;m Interested in *
              </label>
              <select
                name="interest"
                value={formData.interest}
                onChange={handleChange}
                onFocus={() => setFocused('interest')}
                onBlur={() => setFocused(null)}
                style={{ ...inputStyle('interest'), cursor: 'pointer' }}
              >
                <option value="">Select</option>
                <option value="Backend Development">Backend Development</option>
                <option value="Full-Stack App">Full-Stack App</option>
                <option value="API Integration">API Integration</option>
                <option value="DevOps">DevOps</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>

          {/* Message */}
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: '#444', marginBottom: '6px' }}>
              Your Message *
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              onFocus={() => setFocused('message')}
              onBlur={() => setFocused(null)}
              required
              rows={5}
              placeholder="Enter here..."
              style={{ ...inputStyle('message'), resize: 'none' }}
            />
          </div>

          {/* Error */}
          {error && (
            <div style={{ color: '#e53e3e', fontSize: '0.85rem', marginBottom: '12px' }}>{error}</div>
          )}

          {/* Submit button — pill style */}
          <button
            type="submit"
            disabled={loading}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0',
              background: 'transparent',
              border: 'none',
              cursor: loading ? 'not-allowed' : 'pointer',
              padding: 0,
            }}
          >
            <span
              style={{
                background: submitted ? '#38a169' : GREEN,
                color: '#fff',
                borderRadius: '50px 0 0 50px',
                padding: '13px 26px',
                fontWeight: 700,
                fontSize: '0.9rem',
                letterSpacing: '0.02em',
                transition: 'background 0.3s',
              }}
            >
              {loading ? 'Sending...' : submitted ? 'Sent! ✓' : 'Submit'}
            </span>
            <span
              style={{
                background: ACCENT,
                color: '#1a1a1a',
                borderRadius: '50%',
                width: '48px',
                height: '48px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 900,
                fontSize: '1.1rem',
              }}
            >
              →
            </span>
          </button>
        </form>
      </div>
    </section>
  );
}