import { PageHero } from "@/components/site/page-blocks";
import {
  SCHOOL_ADDRESS,
  SCHOOL_EMAIL,
  SCHOOL_NAME,
  SCHOOL_PHONE_DISPLAY,
} from "@/lib/site-data";

export default function RefundPolicyPage() {
  return (
    <div>
      <PageHero
        eyebrow="Admissions & Billing Policy"
        title="Refund & Cancellation Policy"
        copy="Clear, transparent terms regarding trial assessments, lesson rescheduling, tuition payments, and cancellations."
      />

      <section className="page-wrap content-section">
        <div className="legal-document">
          <div className="legal-block">
            <p className="legal-date">Last Updated: September 2026</p>
            <p>
              At <strong>{SCHOOL_NAME}</strong>, we believe in transparent,
              family-friendly policies that accommodate real households while
              respecting our instructors' scheduled preparation time.
            </p>
          </div>

          <div className="legal-block">
            <h2>1. Free Trial Assessment</h2>
            <p>
              The initial one-on-one trial assessment is provided completely{" "}
              <strong>FREE of charge</strong> with no obligation to enroll. This
              allows families to evaluate our teaching method and meet an
              instructor before making any financial commitment.
            </p>
          </div>

          <div className="legal-block">
            <h2>2. Rescheduling Policy (24-Hour Notice)</h2>
            <p>
              We understand that family schedules can change. To reschedule a
              scheduled private lesson:
            </p>
            <ul>
              <li>
                You must notify our admin desk at least{" "}
                <strong>24 hours prior</strong> to the scheduled class time via
                WhatsApp.
              </li>
              <li>
                Classes rescheduled with adequate notice will be reassigned to a
                convenient makeup slot within the billing cycle.
              </li>
              <li>
                Cancellations made with less than 24 hours notice or unannounced
                no-shows cannot be refunded or rescheduled, as our instructor
                has reserved that time exclusively for your child.
              </li>
            </ul>
          </div>

          <div className="legal-block">
            <h2>3. Instructor Absence or Technical Disruption</h2>
            <p>
              In the rare event that an instructor is unable to attend a class
              or if a verified technical outage disrupts a lesson from our end,
              the class will be rescheduled promptly at a mutually convenient
              time, or a full credit will be applied.
            </p>
          </div>

          <div className="legal-block">
            <h2>4. Tuition & Subscription Cancellation</h2>
            <ul>
              <li>Tuition is billed on a monthly cycle.</li>
              <li>
                You may pause or cancel your ongoing monthly enrollment at any
                time by notifying our administrative desk before your next
                billing cycle begins.
              </li>
              <li>
                Completed lesson sessions are non-refundable. Pre-paid future
                lessons beyond the current billing period may be refunded upon
                written request.
              </li>
            </ul>
          </div>

          <div className="legal-block">
            <h2>5. Questions & Custom Requests</h2>
            <p>
              For customized billing schedules, multiple-sibling arrangements,
              or any specific billing inquiries not listed here, please{" "}
              <strong>contact the school for more details</strong>:
            </p>
            <p className="contact-summary">
              <strong>{SCHOOL_NAME} - Accounts Desk</strong>
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
