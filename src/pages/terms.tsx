import { PageHero } from "@/components/site/page-blocks";
import {
  SCHOOL_ADDRESS,
  SCHOOL_EMAIL,
  SCHOOL_NAME,
  SCHOOL_PHONE_DISPLAY,
} from "@/lib/site-data";

export default function TermsPage() {
  return (
    <div>
      <PageHero
        eyebrow="Legal & Governance"
        title="Terms of Service"
        copy="Please review the terms and conditions governing enrollment, 1-on-1 online music lessons, student conduct, and admin monitoring at ProsperWork Music Concepts."
      />

      <section className="page-wrap content-section">
        <div className="legal-document">
          <div className="legal-block">
            <p className="legal-date">Last Updated: September 2026</p>
            <p>
              Welcome to <strong>{SCHOOL_NAME}</strong> ("we," "our," or "the
              Academy"). By accessing our website, registering for a free trial
              assessment, or enrolling in our private 1-on-1 music lessons, you
              ("Parent," "Guardian," or "Student") agree to be bound by these
              Terms of Service.
            </p>
          </div>

          <div className="legal-block">
            <h2>1. Nature of Services</h2>
            <p>
              {SCHOOL_NAME} provides private, one-on-one online music education
              covering instruments (Piano, Keyboard, Saxophone, Drums, Violin,
              Acoustic Guitar, Bass Guitar), Voice Training, and Music Theory.
              Lessons run between 45 minutes to 1 hour per session and are
              conducted virtually over approved secure video platforms.
            </p>
          </div>

          <div className="legal-block">
            <h2>2. Enrollment & Trial Assessments</h2>
            <p>
              Prospective students may request an initial{" "}
              <strong>FREE one-on-one trial assessment</strong> via WhatsApp or
              our website. During the trial assessment, an instructor will
              evaluate the student's baseline skill and recommend an appropriate
              curriculum pathway. Enrollment is confirmed upon schedule
              agreement and tuition settlement.
            </p>
          </div>

          <div className="legal-block">
            <h2>3. 24/7 Admin Supervision & Quality Assurance</h2>
            <p>
              To maintain our professional teaching standard, our dedicated
              administrative team actively monitors classes, tracks attendance,
              sends lesson reminders, and assists with technical support. By
              enrolling, parents and students consent to administrative
              monitoring of educational sessions.
            </p>
          </div>

          <div className="legal-block">
            <h2>4. Attendance, Rescheduling & Cancellations</h2>
            <ul>
              <li>
                <strong>Punctuality:</strong> Lessons begin promptly at the
                scheduled time. Students should be set up with their instrument
                5 minutes prior to the start time.
              </li>
              <li>
                <strong>Rescheduling:</strong> If a student needs to reschedule
                a lesson, at least <strong>24 hours advance notice</strong> must
                be provided to our admin desk via WhatsApp.
              </li>
              <li>
                <strong>Missed Lessons:</strong> Lessons missed without 24 hours
                prior notice may be forfeited, except in verified emergencies.
              </li>
            </ul>
          </div>

          <div className="legal-block">
            <h2>5. Intellectual Property & Study Materials</h2>
            <p>
              All proprietary guided video drills, custom PDF sheet music,
              homework packets, and curriculum frameworks provided by{" "}
              {SCHOOL_NAME} remain the intellectual property of the Academy.
              These materials are licensed exclusively for personal educational
              use by the enrolled student and may not be redistributed or
              resold.
            </p>
          </div>

          <div className="legal-block">
            <h2>6. Student & Instructor Conduct</h2>
            <p>
              We are committed to maintaining a safe, respectful, and
              encouraging learning environment. Disrespectful, abusive, or
              inappropriate behavior by any party will result in immediate
              termination of lessons without refund.
            </p>
          </div>

          <div className="legal-block">
            <h2>7. Limitation of Liability</h2>
            <p>
              {SCHOOL_NAME} strives to provide the highest quality music
              instruction. However, examination results (e.g., ABRSM, Trinity,
              Muson) and individual progress ultimately depend on the student's
              consistent practice, homework completion, and dedication.
            </p>
          </div>

          <div className="legal-block">
            <h2>8. Additional Inquiries & Contact</h2>
            <p>
              For custom schedules, specific instrument requirements, terms
              clarification, or any details not listed on this page, please{" "}
              <strong>contact the school for more details</strong>:
            </p>
            <p className="contact-summary">
              <strong>{SCHOOL_NAME}</strong>
              <br />
              Address: {SCHOOL_ADDRESS}
              <br />
              Phone / WhatsApp: {SCHOOL_PHONE_DISPLAY}
              <br />
              Email: {SCHOOL_EMAIL}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
