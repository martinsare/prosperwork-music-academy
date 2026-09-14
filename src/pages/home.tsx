import {
  ArrowRight,
  Award,
  BookOpenCheck,
  FileText,
  Globe2,
  HeartHandshake,
  ShieldCheck,
  Target,
  Trophy,
  Users2,
} from 'lucide-react';
import { Link } from 'wouter';

import { ContactMiniForm, SectionIntro } from '@/components/site/page-blocks';
import { courses, getWhatsAppLink, heroImage } from '@/lib/site-data';

export default function HomePage() {
  const featuredCourses = courses.slice(0, 6);

  return (
    <>
      <section className="home-hero">
        <img src={heroImage} alt="Piano keys inside a modern music studio" />
        <div className="home-hero-shade" />
        <div className="page-wrap home-hero-content">
          <span className="hero-kicker">
            <Globe2 size={16} />
            ProsperWork Music Concepts
          </span>
          <h1>
            Fostering musical growth
            <span>and excellence.</span>
          </h1>
          <p>
            ProsperWork Music Concepts is a premier online music academy dedicated to fostering musical growth and excellence.
            We deliver high-quality, structured music education tailored to each student’s goals.
          </p>
          <div className="hero-actions">
            <a className="primary-link" href={getWhatsAppLink()} target="_blank" rel="noreferrer">
              Book a FREE one-on-one trial assessment
              <ArrowRight size={18} />
            </a>
            <Link className="secondary-link" href="/courses">
              Explore programmes
            </Link>
          </div>
        </div>
      </section>

      <section className="page-section journey-section">
        <div className="page-wrap">
          <div className="section-heading-row">
            <SectionIntro
              eyebrow="How it works"
              title="From a free assessment to confident performance."
              copy="The first step is simple. We learn where the student is, match the right instructor, and build from there."
            />
            <Link className="text-link" href="/how-it-works">
              See the full process
              <ArrowRight size={16} />
            </Link>
          </div>
          <div className="journey-grid">
            {[
              ['01', 'Book a FREE trial assessment', 'We understand the learner’s age, goals, current level, and best schedule.', Target],
              ['02', 'Meet your expert instructor', 'The student meets their teacher and starts learning in that same session.', Users2],
              ['03', 'Begin the musical journey', 'Clear targets, guided practice, and steady support turn lessons into momentum.', Trophy],
            ].map(([number, title, copy, Icon]) => (
              <article className="journey-card" key={title as string}>
                <span className="journey-number">{number as string}</span>
                <Icon size={22} />
                <h3>{title as string}</h3>
                <p>{copy as string}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="page-wrap split-layout">
          <SectionIntro
            eyebrow="Why it feels different"
            title="A music school experience designed around actual student momentum."
            copy="Lessons are private, scheduling is flexible, and admin monitoring keeps the whole learning loop tight: reminders, class follow-up, teacher standards, and next steps."
          />
          <div className="feature-list">
            {[
              ['Private by default', 'Every learner gets direct instructor attention and lesson pacing that fits their age and goals.', Users2],
              ['Exam-aware training', 'Students can work toward MUSON Certification (Muson College), ABRSM, and Trinity examinations.', Award],
              ['Real oversight', 'Admin support keeps lessons professional, consistent, and easy for families to manage.', ShieldCheck],
            ].map(([title, copy, Icon]) => (
              <article className="feature-row" key={title as string}>
                <Icon size={22} />
                <div>
                  <h3>{title as string}</h3>
                  <p>{copy as string}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section tinted accountability-section">
        <div className="page-wrap accountability-layout">
          <div>
            <SectionIntro
              eyebrow="Target-driven progression"
              title="Progress should be visible between lessons, not just promised."
              copy="Because progress in music is harder for parents to track than traditional school subjects, we enforce strict performance targets for both the instructor and the student."
            />
            <div className="support-list">
              {[
                ['Guided video support', 'Personalised help when practice happens at home.', BookOpenCheck],
                ['Weekly homework', 'Small, clear assignments that keep the learning loop moving.', Target],
                ['Custom PDF materials', 'Study resources made for the learner’s current level.', FileText],
                ['24/7 admin oversight', 'Reminders, follow-up, and professional class delivery.', ShieldCheck],
              ].map(([title, copy, Icon]) => (
                <div className="support-item" key={title as string}>
                  <Icon size={18} />
                  <span>
                    <strong>{title as string}</strong>
                    <small>{copy as string}</small>
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="learning-path-card">
            <span className="eyebrow">The learning path</span>
            <h3>Foundation first. Confidence next.</h3>
            <ol>
              {[
                ['01', 'Musical alphabet & mechanics'],
                ['02', 'Posture, hand placement & technique'],
                ['03', 'Pieces, chords & contemporary songs'],
                ['04', 'ABRSM & Trinity-ready musicianship'],
              ].map(([number, label]) => (
                <li key={number}>
                  <b>{number}</b>
                  <span>{label}</span>
                </li>
              ))}
            </ol>
            <p>
              From “Twinkle, Twinkle, Little Star” and “Ode to Joy” to “Way Maker” and “What a Beautiful Name,”
              students grow toward mastering chords and eventually playing and singing simultaneously.
            </p>
          </div>
        </div>
      </section>

      <section className="page-section tinted">
        <div className="page-wrap">
          <SectionIntro
            eyebrow="Courses"
            title="Choose the track that matches the learner."
            copy="Every course has a focused pathway, but the instructor adjusts the lesson flow to the student's pace."
          />
          <div className="course-strip">
            {featuredCourses.map((course) => (
              <Link href="/courses" className="course-card" key={course.id}>
                <course.VectorIcon />
                <span>{course.category}</span>
                <h3>{course.name}</h3>
                <p>{course.tagline}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="page-wrap outcomes-grid">
          <article className="outcome-card showcase-card">
            <Trophy size={24} />
            <span className="eyebrow">Student showcases</span>
            <h2>Give the work a stage.</h2>
            <p>We host online showcase events and competitive talent programmes with prizes, giving students a platform to perform, shine, and stay motivated.</p>
            <Link className="text-link" href="/contact">
              Ask about upcoming showcases
              <ArrowRight size={16} />
            </Link>
          </article>
          <article className="outcome-card fellowship-card">
            <HeartHandshake size={24} />
            <span className="eyebrow">Optional fellowship</span>
            <h2>Music, encouragement, and faith.</h2>
            <p>Jesus Kids is an optional department where we share the word of God and pray with interested kids alongside their music lessons.</p>
            <Link className="text-link" href="/jesus-kids">
              Explore Jesus Kids
              <ArrowRight size={16} />
            </Link>
          </article>
        </div>
      </section>

      <section className="page-section">
        <div className="page-wrap enrollment-band">
          <div>
            <span className="eyebrow">Start here</span>
            <h2>Book the free assessment before choosing a plan.</h2>
            <p>The admissions team confirms the student level, schedule preference, and best instructor match through WhatsApp.</p>
          </div>
          <ContactMiniForm compact />
        </div>
      </section>
    </>
  );
}
