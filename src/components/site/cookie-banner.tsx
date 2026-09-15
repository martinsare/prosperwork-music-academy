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
            <ShieldCheck size={18} className="cookie-banner-icon" />
            <strong>Cookie Preferences & Privacy</strong>
          </div>
          <p>
            We use essential cookies to ensure our website functions securely
            and smoothly. Non-essential cookies help us analyze site traffic.
            You can customize your choice or read our{" "}
            <Link href="/cookies" className="cookie-policy-link">
              Cookie Policy
            </Link>{" "}
            and{" "}
            <Link href="/privacy" className="cookie-policy-link">
              Privacy Policy
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
            aria-label="Close cookie banner"
          >
            <X size={16} />
          </button>
        </div>
      </div>
    </aside>
  );
}
