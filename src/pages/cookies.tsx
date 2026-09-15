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
        copy="Learn how ProsperWork Music Concepts uses cookies and local storage to provide a seamless, secure browsing experience."
      />

      <section className="page-wrap content-section">
        <div className="legal-document">
          <div className="legal-block">
            <p className="legal-date">Last Updated: September 2026</p>
            <p>
              This Cookie Policy explains how <strong>{SCHOOL_NAME}</strong>{" "}
              ("we," "us," or "our") uses cookies and similar technologies when
              you visit our website. We believe in total transparency and
              keeping data collection to the absolute minimum necessary to
              deliver high-quality music education.
            </p>
          </div>

          <div className="legal-block">
            <h2>1. What Are Cookies?</h2>
            <p>
              Cookies are small text files placed on your computer, tablet, or
              mobile device by websites you visit. They are widely used to
              ensure websites function properly, remember user preferences, and
              provide basic analytics.
            </p>
          </div>

          <div className="legal-block">
            <h2>2. Types of Cookies We Use</h2>
            <ul>
              <li>
                <strong>Strictly Necessary Cookies:</strong> Essential for core
                website operations, page routing, and security. Without these,
                basic features of the website cannot function properly.
              </li>
              <li>
                <strong>Preference Cookies:</strong> Used to remember choices
                you make (such as cookie consent preferences) to deliver a
                consistent experience across visits.
              </li>
              <li>
                <strong>Anonymous Analytics:</strong> We may use basic,
                anonymized metrics to understand site traffic patterns and
                improve our course catalog and navigation. We do not sell or
                monetize your browsing information.
              </li>
            </ul>
          </div>

          <div className="legal-block">
            <h2>3. Third-Party Services</h2>
            <p>
              When you interact with integrated external features (such as
              WhatsApp for booking trial assessments, or external video lesson
              platforms), those third-party services may place their own cookies
              subject to their respective policies.
            </p>
          </div>

          <div className="legal-block">
            <h2>4. Managing and Disabling Cookies</h2>
            <p>
              You can choose to accept or decline non-essential cookies via our
              on-site cookie banner. You can also configure your web browser
              settings to block or delete cookies at any time:
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
              Please note that disabling necessary cookies may affect the visual
              display and functionality of certain website elements.
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
