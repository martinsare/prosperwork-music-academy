import { type ReactNode, useEffect, useState } from "react";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Music2,
  Phone,
  Shield,
  X,
} from "lucide-react";
import { Link, useLocation } from "wouter";

import {
  courses,
  FACEBOOK_URL,
  getWhatsAppLink,
  INSTAGRAM_URL,
  LINKEDIN_URL,
  navItems,
  SCHOOL_ADDRESS,
  SCHOOL_EMAIL,
  SCHOOL_NAME,
  SCHOOL_PHONE,
  SCHOOL_PHONE_DISPLAY,
} from "@/lib/site-data";

import { CookieBanner } from "@/components/site/cookie-banner";

function Header() {
  const [location] = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location]);

  return (
    <header className="site-header">
      <div className="nav-shell">
        <Link href="/" className="brand" data-testid="link-brand">
          <span className="brand-mark">
            <Music2 size={20} />
          </span>
          <span>
            <strong>ProsperWork</strong>
            <small>Music Concepts</small>
          </span>
        </Link>

        <nav className="desktop-nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={location === item.href ? "active" : ""}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <a
          className="nav-action"
          href={getWhatsAppLink()}
          target="_blank"
          rel="noreferrer"
        >
          <MessageCircle size={16} />
          Trial
        </a>

        <button
          className="menu-button"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {menuOpen && (
        <div className="mobile-panel" id="mobile-navigation">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={location === item.href ? "active" : ""}
            >
              {item.label}
            </Link>
          ))}
          <a href={getWhatsAppLink()} target="_blank" rel="noreferrer">
            Book free trial
          </a>
        </div>
      )}
    </header>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="page-wrap footer-grid">
        <div>
          <Link href="/" className="brand footer-brand">
            <span className="brand-mark">
              <Music2 size={18} />
            </span>
            <span>
              <strong>ProsperWork</strong>
              <small>Music Concepts</small>
            </span>
          </Link>
          <p>
            Private online music lessons with human support, structured
            progress, and 24/7 dedicated admin monitoring for learners
            worldwide.
          </p>
        </div>

        <div>
          <h2>Studio</h2>
          {navItems.slice(1, 6).map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </div>

        <div>
          <h2>Legal & Trust</h2>
          <Link href="/terms">Terms of Service</Link>
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/safeguarding">Child Safeguarding</Link>
          <Link href="/refund-policy">Refund & Cancellation</Link>
          <Link href="/cookies">Cookie Policy</Link>
        </div>

        <div>
          <h2>Contact</h2>
          <a href={`tel:${SCHOOL_PHONE}`}>
            <Phone size={15} />
            {SCHOOL_PHONE_DISPLAY}
          </a>
          <a href={`mailto:${SCHOOL_EMAIL}`}>
            <Mail size={15} />
            {SCHOOL_EMAIL}
          </a>
          <span>
            <MapPin size={15} />
            {SCHOOL_ADDRESS}
          </span>
          <div className="social-row">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <Instagram size={17} />
            </a>
            <a
              href={FACEBOOK_URL}
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
            >
              <Facebook size={17} />
            </a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin size={17} />
            </a>
          </div>
        </div>
      </div>
      <div className="page-wrap footer-bottom">
        <span>
          © {new Date().getFullYear()} {SCHOOL_NAME}. All rights reserved.
        </span>
        <div className="footer-legal-links">
          <Link href="/privacy">Privacy</Link>
          <span>•</span>
          <Link href="/terms">Terms</Link>
          <span>•</span>
          <Link href="/safeguarding">Safeguarding</Link>
          <span>•</span>
          <Link href="/refund-policy">Refund Policy</Link>
          <span>•</span>
          <Link href="/cookies">Cookies</Link>
        </div>
      </div>
    </footer>
  );
}

export function Shell({ children }: { children: ReactNode }) {
  return (
    <div className="app-shell">
      <Header />
      <main>{children}</main>
      <Footer />
      <CookieBanner />
    </div>
  );
}
