import {
  ArrowRight,
  Award,
  BookOpenCheck,
  FileText,
  HeartHandshake,
  ShieldCheck,
  Target,
  Trophy,
  Users2,
} from "lucide-react";
import { Link } from "wouter";

import { ContactMiniForm, SectionIntro } from "@/components/site/page-blocks";
import { HeroSlideshow } from "@/components/site/hero-slideshow";
import { courses, getWhatsAppLink } from "@/lib/site-data";

export default function HomePage() {
  const featuredCourses = courses.slice(0, 6);

  return (
    <>
      <HeroSlideshow />

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
              [
                "01",
                "Book a FREE trial assessment",
                "We understand the learner’s age, goals, current level, and best schedule.",
                Target,
              ],
              [
                "02",
                "Meet your expert instructor",
                "The student meets their teacher and starts learning in that same session.",
                Users2,
              ],
              [
                "03",
                "Begin the musical journey",
                "Clear targets, guided practice, and steady support turn lessons into momentum.",
                Trophy,
              ],
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
              [
                "Private by default",
                "Every learner gets direct instructor attention and lesson pacing that fits their age and goals.",
                Users2,
              ],
              [
                "Exam-aware training",
                "Students can work toward MUSON Certification (Muson College), ABRSM, and Trinity examinations.",
                Award,
              ],
              [
                "Real oversight",
                "Admin support keeps lessons professional, consistent, and easy for families to manage.",
                ShieldCheck,
              ],
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
                [
                  "Guided video support",
                  "Personalised help when practice happens at home.",
                  BookOpenCheck,
                ],
                [
                  "Weekly homework",
                  "Small, clear assignments that keep the learning loop moving.",
                  Target,
                ],
                [
                  "Custom PDF materials",
                  "Study resources made for the learner’s current level.",
                  FileText,
                ],
                [
                  "24/7 admin oversight",
                  "Reminders, follow-up, and professional class delivery.",
                  ShieldCheck,
                ],
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
                ["01", "Musical alphabet & mechanics"],
                ["02", "Posture, hand placement & technique"],
                ["03", "Pieces, chords & contemporary songs"],
                ["04", "ABRSM & Trinity-ready musicianship"],
              ].map(([number, label]) => (
                <li key={number}>
                  <b>{number}</b>
                  <span>{label}</span>
                </li>
              ))}
            </ol>
            <p>
              From “Twinkle, Twinkle, Little Star” and “Ode to Joy” to “Way
              Maker” and “What a Beautiful Name,” students grow toward mastering
              chords and eventually playing and singing simultaneously.
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
        <div className="page-wrap showcase-mosaic-layout">
          <div>
            <SectionIntro
              eyebrow="Live academy moments"
              title="Real instruction, focused practice, and visible progress."
              copy="Whether learning from the UK, US, Denmark, or Nigeria, our students receive structured 1-on-1 guidance from world-class instructors with dedicated administrative oversight."
            />
            <div className="mosaic-bullets">
              <div className="bullet-item">
                <ShieldCheck
                  size={18}
                  className="bullet-icon text-emerald-600"
                />
                <span>Private 45-60 minute personalized sessions</span>
              </div>
              <div className="bullet-item">
                <Award size={18} className="bullet-icon text-emerald-600" />
                <span>MUSON Certification & ABRSM exam preparation</span>
              </div>
              <div className="bullet-item">
                <Trophy size={18} className="bullet-icon text-emerald-600" />
                <span>Annual online student showcase with awards</span>
              </div>
            </div>
            <div className="pt-4">
              <Link className="primary-link" href="/showcase">
                Explore Student Gallery & Recitals
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>

          {/* 3-Photo Structured Mosaic (SFGS Pattern) */}
          <div className="showcase-photo-mosaic">
            <div className="mosaic-main">
              <img
                src="/images/showcase/showcase-piano-lesson.jpg"
                alt="1-on-1 Online Piano lesson in session"
                loading="lazy"
                className="mosaic-img"
              />
              <span className="mosaic-tag">Piano & Keys Studio</span>
            </div>
            <div className="mosaic-sub-grid">
              <div className="mosaic-sub">
                <img
                  src="/images/showcase/showcase-sax-recital.jpg"
                  alt="Saxophone masterclass session"
                  loading="lazy"
                  className="mosaic-img"
                />
                <span className="mosaic-tag">Saxophone</span>
              </div>
              <div className="mosaic-sub">
                <img
                  src="/images/showcase/showcase-drum-lesson.jpg"
                  alt="Drum rhythm instruction"
                  loading="lazy"
                  className="mosaic-img"
                />
                <span className="mosaic-tag">Drums & Rhythm</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Student Recital & Performance Highlights */}
      <section className="page-section tinted">
        <div className="page-wrap">
          <div className="section-heading-row">
            <SectionIntro
              eyebrow="Student recitals"
              title="Hear and watch our learners perform."
              copy="From introductory exercises to full worship pieces and classical standards, see the results of steady practice and 1-on-1 coaching."
            />
            <Link className="text-link" href="/showcase">
              View all video recitals
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="home-recital-grid">
            {[
              {
                title: "Sarah’s Classical Piano Recital: Ode to Joy",
                student: "Sarah (Age 9)",
                instrument: "Piano",
                duration: "2:15",
                img: "/images/showcase/video-thumb-piano-recital.jpg",
              },
              {
                title: "Emmanuel’s Saxophone Melodic Tone & Solo",
                student: "Emmanuel (Intermediate)",
                instrument: "Saxophone",
                duration: "3:40",
                img: "/images/showcase/video-thumb-sax-solo.jpg",
              },
              {
                title: "Jesus Kids Praise & Scripture Recital",
                student: "Children Fellowship",
                instrument: "Choir & Keys",
                duration: "4:10",
                img: "/images/showcase/video-thumb-kids-praise.jpg",
              },
            ].map((recital) => (
              <Link
                href="/showcase"
                key={recital.title}
                className="recital-card"
              >
                <div className="recital-thumb">
                  <img src={recital.img} alt={recital.title} loading="lazy" />
                  <div className="recital-play-badge">
                    <span className="play-circle">
                      <ArrowRight size={18} />
                    </span>
                  </div>
                  <span className="recital-tag">{recital.instrument}</span>
                  <span className="recital-duration">{recital.duration}</span>
                </div>
                <div className="recital-body">
                  <h3>{recital.title}</h3>
                  <span className="recital-performer">{recital.student}</span>
                  <span className="recital-link">
                    Watch Recital <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="page-wrap outcomes-grid">
          <article className="home-outcome-card">
            <Trophy size={24} />
            <span className="eyebrow">Student showcases</span>
            <h2>Give the work a stage.</h2>
            <p>
              We host online showcase events and competitive talent programmes
              with prizes, giving students a platform to perform, shine, and
              stay motivated.
            </p>
            <Link className="text-link" href="/showcase">
              Explore past showcases
              <ArrowRight size={16} />
            </Link>
          </article>
          <article className="home-outcome-card fellowship-card">
            <HeartHandshake size={24} />
            <span className="eyebrow">Optional fellowship</span>
            <h2>Music, encouragement, and faith.</h2>
            <p>
              Jesus Kids is an optional department where we share the word of
              God and pray with interested kids alongside their music lessons.
            </p>
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
            <p>
              The admissions team confirms the student level, schedule
              preference, and best instructor match through WhatsApp.
            </p>
          </div>
          <ContactMiniForm compact />
        </div>
      </section>
    </>
  );
}
