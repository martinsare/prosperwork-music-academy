import { PageHero } from "@/components/site/page-blocks";
import {
  SCHOOL_ADDRESS,
  SCHOOL_EMAIL,
  SCHOOL_NAME,
  SCHOOL_PHONE_DISPLAY,
} from "@/lib/site-data";

export default function SafeguardingPage() {
  return (
    <div>
      <PageHero
        eyebrow="Student Safety & Trust"
        title="Child Safeguarding Policy"
        copy="Our protocols, teacher vetting standards, and 24/7 admin monitoring systems designed to protect minors in virtual music lessons."
      />

      <section className="page-wrap content-section">
        <div className="legal-document">
          <div className="legal-block">
            <p className="legal-date">Last Updated: September 2026</p>
            <p>
              At <strong>{SCHOOL_NAME}</strong>, the safety, well-being, and
              protection of every student—especially children and young
              learners—is our highest institutional priority. This policy
              outlines our multi-layered safeguarding measures for online 1-on-1
              music education.
            </p>
          </div>

          <div className="legal-block">
            <h2>1. Rigorous Teacher Vetting & Training</h2>
            <p>
              Every instructor who teaches at {SCHOOL_NAME} undergoes stringent
              screening, background verification, and mandatory additional
              pedagogical training before being permitted to work with students.
            </p>
          </div>

          <div className="legal-block">
            <h2>2. Active 24/7 Admin Class Monitoring</h2>
            <p>
              Unlike unmonitored tutoring services, our dedicated administrative
              team actively supervises and monitors virtual classrooms to ensure
              that:
            </p>
            <ul>
              <li>
                Lessons remain strictly focused on musical education and
                positive encouragement.
              </li>
              <li>
                Professional communication standards are maintained at all
                times.
              </li>
              <li>Punctuality and curriculum milestones are adhered to.</li>
            </ul>
          </div>

          <div className="legal-block">
            <h2>3. Parental Access & Room Environment</h2>
            <ul>
              <li>
                Parents and guardians are always welcome and encouraged to be
                present in the room or observe virtual lessons.
              </li>
              <li>
                Lessons must take place in an appropriate, open living or study
                space rather than private, closed bedrooms.
              </li>
              <li>
                Both instructor and student must maintain professional dress and
                conduct during video calls.
              </li>
            </ul>
          </div>

          <div className="legal-block">
            <h2>4. Reporting Concerns & Policy Details</h2>
            <p>
              If a parent, guardian, or student has any concerns regarding
              conduct or safety, or requires further verification details,
              please <strong>contact the school for more details</strong>{" "}
              immediately:
            </p>
            <p className="contact-summary">
              <strong>{SCHOOL_NAME} - Safeguarding Desk</strong>
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
