import { PageHero } from "@/components/site/page-blocks";
import {
  SCHOOL_ADDRESS,
  SCHOOL_EMAIL,
  SCHOOL_NAME,
  SCHOOL_PHONE_DISPLAY,
} from "@/lib/site-data";

export default function PrivacyPage() {
  return (
    <div>
      <PageHero
        eyebrow="Data Protection & Privacy"
        title="Privacy Policy"
        copy="Learn how ProsperWork Music Concepts collects, protects, and handles personal information for students, parents, and prospective learners worldwide."
      />

      <section className="page-wrap content-section">
        <div className="legal-document">
          <div className="legal-block">
            <p className="legal-date">Last Updated: September 2026</p>
            <p>
              At <strong>{SCHOOL_NAME}</strong> ("we," "us," or "our"),
              respecting and safeguarding your privacy is a fundamental
              principle. This Privacy Policy explains our practices regarding
              the collection, storage, and protection of personal data when you
              interact with our website or enroll in our music courses.
            </p>
          </div>

          <div className="legal-block">
            <h2>1. Information We Collect</h2>
            <ul>
              <li>
                <strong>Contact Information:</strong> Full names of students and
                parents/guardians, email addresses, phone numbers, and
                country/city of residence.
              </li>
              <li>
                <strong>Academic & Learning Profiles:</strong> Musical
                background, selected instrument, current proficiency level, age
                bracket, and educational goals (e.g., ABRSM/Trinity exam
                preparation).
              </li>
              <li>
                <strong>Communication Records:</strong> WhatsApp messages, trial
                assessment booking requests, and feedback correspondence with
                our administrative desk.
              </li>
            </ul>
          </div>

          <div className="legal-block">
            <h2>2. Child Privacy & Protection of Minors (COPPA & GDPR)</h2>
            <p>
              Many of our students are children and young learners. We strictly
              comply with applicable child privacy regulations:
            </p>
            <ul>
              <li>
                We require explicit consent from a parent or legal guardian
                prior to scheduling trial assessments or classes for minors
                under 18.
              </li>
              <li>
                We do not sell, rent, or publicly disclose personal information
                of children to third parties.
              </li>
              <li>
                Parents and guardians retain the right to review, update, or
                request the deletion of their child's records at any time.
              </li>
            </ul>
          </div>

          <div className="legal-block">
            <h2>3. How We Use Your Information</h2>
            <ul>
              <li>To schedule and deliver 1-on-1 online music lessons.</li>
              <li>
                To enable our 24/7 admin team to send lesson reminders, progress
                updates, and technical assistance.
              </li>
              <li>
                To prepare customized PDF study materials and guided video
                support drills.
              </li>
              <li>
                To coordinate examination registrations (e.g., Muson College,
                ABRSM, Trinity College London) when requested.
              </li>
            </ul>
          </div>

          <div className="legal-block">
            <h2>4. WhatsApp & Third-Party Platforms</h2>
            <p>
              We utilize WhatsApp for direct communication, scheduling, and
              customer support. When communicating via WhatsApp, interactions
              are also subject to WhatsApp's respective privacy and security
              protocols. We use secure, encrypted video conferencing tools for
              live lessons.
            </p>
          </div>

          <div className="legal-block">
            <h2>5. Data Retention & Security</h2>
            <p>
              We implement industry-standard administrative, physical, and
              technical safeguards to protect student data from unauthorized
              access, loss, or misuse. Information is retained only as long as
              necessary to provide educational services or comply with legal
              requirements.
            </p>
          </div>

          <div className="legal-block">
            <h2>6. Your Privacy Rights</h2>
            <p>
              Depending on your location (including the UK, EU, US, and
              Nigeria), you have the right to access, correct, port, or request
              the erasure of your personal data. To exercise any of these
              rights, please contact our privacy officer:
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
