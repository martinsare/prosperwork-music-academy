import { Award, GraduationCap, ShieldCheck } from 'lucide-react';

import { PageHero, SectionIntro } from '@/components/site/page-blocks';
import { stageImage } from '@/lib/site-data';

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Fostering musical growth and excellence."
        copy="ProsperWork Music Concepts is a premier online music academy dedicated to fostering musical growth and excellence. We deliver high-quality, structured music education tailored to each student's goals. We teach students across the UK, US, Denmark, Nigeria, and worldwide."
        image={stageImage}
      />

      <section className="page-section">
        <div className="page-wrap about-layout">
          <div>
            <SectionIntro
              eyebrow="Our standard"
              title="High-quality, structured music education."
              copy="Our remote learning environment is uniquely supported by a dedicated admin team that actively monitors classes to guarantee professional standards, seamless operations, and the achievement of all learning targets."
            />
          </div>

          <div className="proof-panel">
            {[
              ['Instructor preparation', 'Highly trained expert instructors undergo rigorous extra training before being fully enrolled and assigned to students.', GraduationCap],
              ['Private online lessons', 'Premium 1-on-1 sessions run for 45 minutes to 1 hour with flexible scheduling from home.', ShieldCheck],
              ['24/7 admin monitoring', 'Reminders, inquiries, professional class delivery, and active support for every lesson.', ShieldCheck],
              ['MUSON Certification', 'Students can work toward recognized standards, including MUSON Certification (Muson College), ABRSM, and Trinity examinations.', Award],
            ].map(([title, copy, Icon]) => (
              <div key={title as string}>
                <Icon size={22} />
                <h3>{title as string}</h3>
                <p>{copy as string}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
