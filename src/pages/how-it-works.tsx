import { MessageCircle, Play, Trophy } from 'lucide-react';

import { PageHero, SectionIntro } from '@/components/site/page-blocks';
import { vocalImage } from '@/lib/site-data';

export default function HowItWorksPage() {
  const steps = [
    ['Book a FREE Trial Assessment', "We evaluate your child's starting point.", MessageCircle],
    ['Meet Your Expert Instructor', 'Your child meets their dedicated teacher and begins learning immediately in that same session.', Play],
    ['Begin Your Musical Journey', 'Watch your child grow into a confident musician.', Trophy],
  ];

  return (
    <>
      <PageHero
        eyebrow="How it works"
        title="Three simple steps to begin learning."
        copy="Book a FREE trial assessment, meet your expert instructor, and begin your musical journey."
        image={vocalImage}
      />

      <section className="page-section">
        <div className="page-wrap timeline">
          {steps.map(([title, copy, Icon], index) => (
            <article key={title as string}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <Icon size={24} />
              <h2>{title as string}</h2>
              <p>{copy as string}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="page-section tinted">
        <div className="page-wrap split-layout">
          <SectionIntro
            eyebrow="Class rhythm"
            title="A lesson flow that fits the content, not a generic template."
            copy="A piano beginner needs a different session shape from a vocalist or drummer. The academy keeps the structure consistent while allowing the instruction to adapt."
          />
          <div className="lesson-flow">
            {[
              ['Warm up', 'Technical prep for the selected course.'],
              ['Core skill', 'Reading, rhythm, tone, chords, posture, or breath.'],
              ['Repertoire', 'Songs, pieces, grooves, or exam material.'],
              ['Assignment', 'Specific practice target before the next lesson.'],
            ].map(([title, copy]) => (
              <div key={title}>
                <h3>{title}</h3>
                <p>{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
