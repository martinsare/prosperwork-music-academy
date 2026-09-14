import { ArrowRight, CheckCircle2, HeartHandshake } from 'lucide-react';

import { PageHero } from '@/components/site/page-blocks';
import { getWhatsAppLink } from '@/lib/site-data';

export default function JesusKidsPage() {
  return (
    <>
      <PageHero
        eyebrow="Optional fellowship"
        title="Jesus Kids Fellowship is optional."
        copy="A dedicated, optional department where we share the word of God and pray with interested kids, ensuring they grow not just musically, but spiritually as well."
      />

      <section className="page-section">
        <div className="page-wrap jesus-panel">
          <HeartHandshake size={42} />
          <div>
            <h2>Music and spiritual growth, by choice.</h2>
            <p>
              This department is completely optional for interested families and is never forced.
            </p>
            <div className="check-grid">
              {['Optional for enrolled families', 'Share the word of God', 'Prayer with interested kids'].map((item) => (
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
    </>
  );
}
