import { Link } from "wouter";
import { PageHero } from "@/components/site/page-blocks";
import {
  SCHOOL_ADDRESS,
  SCHOOL_EMAIL,
  SCHOOL_NAME,
  SCHOOL_PHONE_DISPLAY,
} from "@/lib/site-data";

export default function CookiesPage() {
  return (
    <div>
      <PageHero
        eyebrow="Privacy & Compliance"
        title="Cookie Policy"
        copy="Learn how this site stores your consent preference and what happens when you open an external service."
      />

      <section className="page-wrap content-section">
        <div className="legal-document">
          <div className="legal-block">
            <p className="legal-date">Last Updated: September 2026</p>
            <p>
              This policy explains how <strong>{SCHOOL_NAME}</strong> ("we,"
              "us," or "our") uses browser storage on this website. We keep
              collection to a minimum: the site stores your cookie-banner
              choice in local storage so it does not need to ask again on every
              visit.
            </p>
          </div>

          <div className="legal-block">
            <h2>1. What Are Cookies?</h2>
            <p>
              Cookies are small text files that websites can save in your
              browser. This site currently uses local storage—not a tracking
              cookie—to remember your choice in the cookie-preference banner.
            </p>
          </div>

          <div className="legal-block">
            <h2>2. Storage used by this site</h2>
            <ul>
              <li>
                <strong>Consent preference:</strong> The site stores the choice
                you make in the banner in your browser’s local storage. It is
                used only to remember that choice.
              </li>
              <li>
                This site does not currently load analytics or advertising
                trackers.
              </li>
            </ul>
          </div>

          <div className="legal-block">
            <h2>3. Third-Party Services</h2>
            <p>
              If you follow a link to a service such as WhatsApp, that service
              may use its own cookies or similar technologies. Its own privacy
              and cookie policies apply once you visit the external service.
            </p>
          </div>

          <div className="legal-block">
            <h2>4. Managing and Disabling Cookies</h2>
            <p>
              The banner records your selected preference in this browser.
              This site currently has no analytics or advertising cookies for
              that choice to enable. You can clear the saved preference by
              clearing this site’s stored data in your browser settings:
            </p>
            <ul>
              <li>
                <strong>Chrome:</strong> Settings &rarr; Privacy and security
                &rarr; Cookies and other site data
              </li>
              <li>
                <strong>Safari:</strong> Preferences &rarr; Privacy &rarr;
                Manage Website Data
              </li>
              <li>
                <strong>Firefox:</strong> Settings &rarr; Privacy & Security
                &rarr; Cookies and Site Data
              </li>
              <li>
                <strong>Edge:</strong> Settings &rarr; Cookies and site
                permissions &rarr; Manage and delete cookies
              </li>
            </ul>
            <p>
              Clearing the preference will cause the banner to appear again on
              a later visit. Blocking cookies does not disable the site’s
              current core features.
            </p>
          </div>

          <div className="legal-block">
            <h2>5. Contact the School for More Details</h2>
            <p>
              If you have any questions or require further information regarding
              our cookie usage, data handling, or privacy standards, please
              contact the school for more details:
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
