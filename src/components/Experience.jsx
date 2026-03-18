'use client';

const education = [
  {
    period: '2022 - 2025',
    institution: 'Parul University',
    degree: 'B.Tech in Computer Science',
  },
  {
    period: '2020 - 2022',
    institution: 'Higher Secondary School',
    degree: 'Science Stream (PCM)',
  },
  {
    period: '2016 - 2020',
    institution: 'Secondary School',
    degree: 'General Studies',
  },
];

const workExperience = [
  {
    period: 'Sep 2025 - Present',
    institution: 'Vedseem Technologies',
    degree: 'Backend Developer',
  },
  {
    period: 'Aug 2025 - Sep 2025',
    institution: 'Vedseem Technologies',
    degree: 'Backend Developer Intern',
  },
];

function Column({ title, items }) {
  return (
    <div
      style={{
        flex: '1 1 300px',
        background: '#fff',
        borderRadius: '20px',
        padding: '28px',
        boxShadow: '0 2px 16px rgba(0,0,0,0.06)',
      }}
    >
      {/* Column header */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '14px',
          marginBottom: '28px',
        }}
      >
        <div
          style={{
            width: '48px',
            height: '48px',
            background: '#f5a623',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.4rem',
          }}
        >
          🎓
        </div>
        <h3
          style={{
            fontWeight: 800,
            fontSize: '1.15rem',
            color: '#1a1a1a',
          }}
        >
          {title}
        </h3>
      </div>

      {/* Timeline items */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
        {items.map((item, i) => (
          <div
            key={i}
            style={{
              borderTop: i > 0 ? '1px solid #eee' : 'none',
              paddingTop: i > 0 ? '16px' : '0',
              paddingBottom: i < items.length - 1 ? '16px' : '0',
            }}
          >
            <div
              style={{
                fontSize: '0.78rem',
                color: '#999',
                fontWeight: 600,
                marginBottom: '4px',
                letterSpacing: '0.03em',
              }}
            >
              {item.period}
            </div>
            <div
              style={{
                fontWeight: 800,
                fontSize: '1.05rem',
                color: '#1a1a1a',
                marginBottom: '2px',
              }}
            >
              {item.institution}
            </div>
            <div style={{ color: '#777', fontSize: '0.85rem' }}>{item.degree}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" style={{ background: '#f7f5ee', padding: '80px 32px' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        {/* Section label */}
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
          Education &amp; Work
        </div>

        <h2
          style={{
            textAlign: 'center',
            fontSize: 'clamp(1.8rem, 4vw, 2.6rem)',
            fontWeight: 900,
            lineHeight: 1.2,
            color: '#1a1a1a',
            marginBottom: '48px',
          }}
        >
          My{' '}
          <span style={{ color: '#f5a623', fontStyle: 'italic' }}>Academic and</span>
          <br />
          <span style={{ color: '#f5a623', fontStyle: 'italic' }}>Professional</span> Journey
        </h2>

        {/* Two column layout */}
        <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
          <Column title="Education" items={education} />
          <Column title="Work Experience" items={workExperience} />
        </div>
      </div>
    </section>
  );
}