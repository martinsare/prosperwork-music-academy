import { useState } from 'react';
import { ArrowRight, ChevronDown, Sparkles } from 'lucide-react';

import { PageHero } from '@/components/site/page-blocks';
import { faqsList, getWhatsAppLink } from '@/lib/site-data';

function HelpCard() {
  return (
    <div>
      <Sparkles size={28} />
      <h2>Still deciding?</h2>
      <p>Send admissions the learner age and course interest. They will help you choose the right starting point.</p>
      <a href={getWhatsAppLink()} target="_blank" rel="noreferrer">
        Message admissions
        <ArrowRight size={16} />
      </a>
    </div>
  );
}

export default function FaqsPage() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <>
      <PageHero
        eyebrow="FAQs"
        title="Frequently asked questions."
        copy="Find clear answers about enrollment, lesson length, private classes, instructors, online quality, and the instruments we teach."
      />

      <section className="page-section">
        <div className="page-wrap faq-layout">
          <div className="faq-list">
            {faqsList.map((faq, index) => (
              <article className={openIndex === index ? 'open' : ''} key={faq.q}>
                <button
                  type="button"
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-answer-${index}`}
                  onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                >
                  <span>{faq.q}</span>
                  <ChevronDown size={19} />
                </button>
                {openIndex === index && <p id={`faq-answer-${index}`}>{faq.a}</p>}
              </article>
            ))}
          </div>

          <aside className="faq-aside">
            <HelpCard />
          </aside>
        </div>
      </section>
    </>
  );
}
