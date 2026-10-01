import { ArrowRight, CheckCircle2, HeartHandshake, Sparkles, Music, BookOpen } from 'lucide-react';

import { PageHero } from '@/components/site/page-blocks';
import { getWhatsAppLink } from '@/lib/site-data';

export default function JesusKidsPage() {
  return (
    <>
      <PageHero
        eyebrow="Optional fellowship"
        title="Jesus Kids Fellowship is optional."
        copy="A dedicated, optional department where we share the word of God and pray with interested kids, ensuring they grow not just musically, but spiritually as well."
        image="/images/showcase/mother-child-piano-coaching.jpg"
      />

      <section className="page-section">
        <div className="page-wrap jesus-panel">
          <HeartHandshake size={42} />
          <div>
            <h2>Music and spiritual growth, by choice.</h2>
            <p>
              This department is completely optional for interested families and is never forced. We provide a warm, encouraging atmosphere where young learners develop both character and musicianship.
            </p>
            <div className="check-grid">
              {['Optional for enrolled families', 'Share the word of God', 'Prayer with interested kids', 'Uplifting praise songs and hymns'].map((item) => (
                <span key={item}>
                  <CheckCircle2 size={16} />
                  {item}
                </span>
              ))}
            </div>
            <a href={getWhatsAppLink('Hello ProsperWork, I would like to inquire about Jesus Kids Fellowship.')} target="_blank" rel="noreferrer" className="primary-link dark">
              Ask about Jesus Kids
              <ArrowRight size={17} />
            </a>
          </div>
        </div>
      </section>

      <section className="page-section tinted">
        <div className="page-wrap split-layout">
          <div>
            <span className="eyebrow">Foundation & Faith</span>
            <h2 className="section-title">Nurturing sound character alongside artistic excellence.</h2>
            <p className="section-subtitle">
              We believe music is a gift that builds discipline, patience, and confidence. For families who desire spiritual enrichment, our teachers provide supportive prayer and wholesome musical repertoire.
            </p>
            <div className="feature-list" style={{ marginTop: '1.5rem' }}>
              <div className="feature-row">
                <Music size={20} />
                <div>
                  <h3>Christian Hymns & Worship Songs</h3>
                  <p>Students learn to accompany classic hymns and contemporary praise melodies on keyboard, guitar, and violin.</p>
                </div>
              </div>
              <div className="feature-row">
                <BookOpen size={20} />
                <div>
                  <h3>Scripture Memory & Confidence</h3>
                  <p>Encouraging positive values, respect, diligence, and stage confidence through faith-inspired recitals.</p>
                </div>
              </div>
              <div className="feature-row">
                <Sparkles size={20} />
                <div>
                  <h3>Early Discovery from Age 5</h3>
                  <p>Gentle, patient teaching methods designed to help young minds fall in love with playing and learning.</p>
                </div>
              </div>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', justifyContent: 'center' }}>
            <div style={{ borderRadius: '16px', overflow: 'hidden', border: '1px solid var(--line)', boxShadow: '0 12px 32px rgba(0,0,0,0.08)' }}>
              <img
                src="/images/showcase/toddler-piano-discovery.png"
                alt="Toddler discovering piano keys"
                style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
