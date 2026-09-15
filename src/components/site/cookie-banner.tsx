import { useState, useEffect } from "react";
import { Link } from "wouter";
import { ShieldCheck, X } from "lucide-react";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const consent = localStorage.getItem("pw_cookie_consent");
      if (!consent) {
        // Small delay to prevent layout pop
        const timer = setTimeout(() => setVisible(true), 800);
        return () => clearTimeout(timer);
      }
    } catch {
      // Storage unavailable fallback
    }
  }, []);

  const handleAccept = (type: "all" | "essential") => {
    try {
      localStorage.setItem("pw_cookie_consent", type);
    } catch {
      // ignore
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <aside
      className="cookie-banner"
      aria-label="Cookie consent banner"
      role="region"
    >
      <div className="page-wrap cookie-banner-content">
        <div className="cookie-banner-text">
          <div className="cookie-banner-header">
            <ShieldCheck
              size={16}
              className="cookie-banner-icon text-emerald-400"
            />
            <span className="cookie-banner-title">Cookie Preferences</span>
          </div>
          <p className="cookie-banner-desc">
            We use cookies to secure and enhance your learning experience. Read
            our{" "}
            <Link href="/cookies" className="cookie-policy-link">
              Cookie Policy
            </Link>{" "}
            and{" "}
            <Link href="/privacy" className="cookie-policy-link">
              Privacy
            </Link>
            .
          </p>
        </div>

        <div className="cookie-banner-actions">
          <button
            type="button"
            className="cookie-btn cookie-btn-essential"
            onClick={() => handleAccept("essential")}
          >
            Essential Only
          </button>
          <button
            type="button"
            className="cookie-btn cookie-btn-accept"
            onClick={() => handleAccept("all")}
          >
            Accept All
          </button>
          <button
            type="button"
            className="cookie-btn-close"
            onClick={() => handleAccept("essential")}
            aria-label="Dismiss cookie notice"
          >
            <X size={15} />
          </button>
        </div>
      </div>
    </aside>
  );
}
