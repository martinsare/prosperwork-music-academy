import {
  ArrowRight,
  Award,
  BookOpenCheck,
  ChevronDown,
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
import { courses, showcaseMedia } from "@/lib/site-data";

export default function HomePage() {
  const featuredCourses = courses.slice(0, 3);
  const featuredRecitals = showcaseMedia
    .filter((item) => item.type === "video" && item.category === "recitals")
    .slice(0, 3);

  return (
    <>
      <HeroSlideshow />

      <section className="page-section tinted" id="courses">
        <div className="page-wrap">
          <div className="section-heading-row">
            <SectionIntro
              eyebrow="Courses"
              title="Choose a course that fits the learner."
              copy="Explore focused learning paths, with private lessons shaped around each student's goals."
            />
            <Link className="text-link" href="/courses">
              <span>Browse all {courses.length} courses</span>
              <ArrowRight size={16} />
            </Link>
          </div>
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

      <section className="page-section journey-section" id="how-it-works">
        <div className="page-wrap">
          <div className="section-heading-row">
            <SectionIntro
              eyebrow="How it works"
              title="Three simple steps to get started."
              copy="Begin with a free assessment, meet the instructor, and agree on a clear learning path."
            />
            <Link className="text-link" href="/how-it-works">
              <span>See the full process</span>
              <ArrowRight size={16} />
            </Link>
          </div>
          <div className="journey-grid">
            {[
              [
                "01",
                "Book a free assessment",
                "We learn the student's age, goals, current level, and preferred schedule.",
                Target,
              ],
              [
                "02",
                "Meet your instructor",
                "The student meets their teacher and gets started with a suitable course.",
                Users2,
              ],
              [
                "03",
                "Start learning",
                "Lessons, practice, and feedback build progress one step at a time.",
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

      <section className="page-section tinted home-support-section" id="learning-support">
        <div className="page-wrap">
          <div className="split-layout home-support-overview">
            <SectionIntro
              eyebrow="The learning experience"
              title="Private teaching with clear next steps."
              copy="Students get individual attention, exam preparation options, and 24/7 live lesson monitoring."
            />
            <div className="feature-list">
              {[
                [
                  "One-to-one lessons",
                  "45–60 minute sessions paced to each learner's age and goals.",
                  Users2,
                ],
                [
                  "Exam preparation",
                  "Students can work toward MUSON, ABRSM, and Trinity qualifications.",
                  Award,
                ],
                [
                  "Live admin oversight",
                  "Every lesson is monitored, with reminders and follow-up for families.",
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

          <details className="home-support-details">
            <summary>
              <span>See practice support and the learning path</span>
              <ChevronDown size={18} aria-hidden="true" />
            </summary>
            <div className="home-support-details-content">
              <section>
                <h3>Support between lessons</h3>
                <div className="support-list">
                  {[
                    [
                      "Guided video support",
                      "Personalised help for practice at home.",
                      BookOpenCheck,
                    ],
                    [
                      "Weekly practice tasks",
                      "Small assignments that keep learning moving.",
                      Target,
                    ],
                    [
                      "Custom PDF materials",
                      "Study resources suited to the learner's current level.",
                      FileText,
                    ],
                    [
                      "Family follow-up",
                      "Reminders and updates from the admin team.",
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
              </section>

              <section className="learning-path-card">
                <span className="eyebrow">The learning path</span>
                <h3>Foundation first. Confidence next.</h3>
                <ol>
                  {[
                    ["01", "Musical basics and technique"],
                    ["02", "Posture, hand placement, and control"],
                    ["03", "Pieces, chords, and songs"],
                    ["04", "Exam preparation and performance"],
                  ].map(([number, label]) => (
                    <li key={number}>
                      <b>{number}</b>
                      <span>{label}</span>
                    </li>
                  ))}
                </ol>
                <p>
                  From “Twinkle, Twinkle, Little Star” and “Ode to Joy” to
                  “Way Maker” and “What a Beautiful Name,” students build
                  toward playing and singing simultaneously.
                </p>
              </section>
            </div>
          </details>
        </div>
      </section>

      <section className="page-section tinted" id="student-showcase">
        <div className="page-wrap">
          <div className="section-heading-row">
            <SectionIntro
              eyebrow="Student showcase"
              title="Hear students at every stage."
              copy="Watch recitals and explore annual online showcases and talent competitions with awards."
            />
            <Link className="text-link" href="/showcase">
              <span>Browse all showcases and media</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="home-recital-grid">
            {featuredRecitals.map((recital) => (
              <Link
                href="/showcase"
                key={recital.id}
                className="recital-card"
              >
                <div className="recital-thumb">
                  <img
                    src={recital.imageSrc}
                    alt={recital.title}
                    loading="lazy"
                  />
                  <div className="recital-play-badge">
                    <span className="play-circle">
                      <ArrowRight size={18} />
                    </span>
                  </div>
                  <span className="recital-tag">{recital.instrument}</span>
                  {recital.videoDuration && (
                    <span className="recital-duration">
                      {recital.videoDuration}
                    </span>
                  )}
                </div>
                <div className="recital-body">
                  <h3>{recital.title}</h3>
                  <span className="recital-performer">
                    {recital.performerOrStudent}
                  </span>
                  <span className="recital-link">
                    View in gallery <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <aside className="home-optional-program">
            <HeartHandshake size={24} />
            <div>
              <strong>Also available: Jesus Kids</strong>
              <p>An optional faith-based fellowship alongside music lessons.</p>
            </div>
            <Link className="text-link" href="/jesus-kids">
              <span>Learn about Jesus Kids</span>
              <ArrowRight size={16} />
            </Link>
          </aside>
        </div>
      </section>

      <section className="page-section">
        <div className="page-wrap enrollment-band">
          <div>
            <span className="eyebrow">Start here</span>
            <h2>Start with a free assessment.</h2>
            <p>
              Share the learner's goals and preferred schedule. Admissions
              will help find a suitable course and instructor.
            </p>
          </div>
          <ContactMiniForm compact />
        </div>
      </section>
    </>
  );
}
