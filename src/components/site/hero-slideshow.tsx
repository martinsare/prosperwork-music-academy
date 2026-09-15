import { useEffect, useState, useRef, useCallback } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, Globe2, Music2, ShieldCheck, Sparkles } from 'lucide-react';
import { Link } from 'wouter';
import { getWhatsAppLink } from '@/lib/site-data';

export interface HeroSlide {
  id: string;
  instrument: string;
  eyebrow: string;
  titlePrimary: string;
  titleSecondary: string;
  description: string;
  image: string;
  imageAlt: string;
  badge: string;
  trialActionText: string;
  whatsappMessage: string;
}

export const heroSlides: HeroSlide[] = [
  {
    id: 'piano',
    instrument: 'Piano & Keyboard',
    eyebrow: 'Private 1-on-1 Piano & Keyboard Studies',
    titlePrimary: 'Fostering musical growth',
    titleSecondary: 'on Piano & Keys.',
    description:
      'Master touch, two-hand coordination, sight-reading, worship chords, and performance confidence with dedicated 1-on-1 instruction tailored to your child’s pace.',
    image: 'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?auto=format&fit=crop&w=1800&q=85',
    imageAlt: 'Student practicing keys in music studio',
    badge: 'Beginner to Grade 5 • 45m–1hr',
    trialActionText: 'Book FREE Piano Trial',
    whatsappMessage: 'Hello ProsperWork Music Concepts, I would like to book a FREE trial assessment for Piano.',
  },
  {
    id: 'saxophone',
    instrument: 'Saxophone',
    eyebrow: 'Alto & Tenor Saxophone Academy',
    titlePrimary: 'Master rich tone, embouchure,',
    titleSecondary: 'and melodic expression.',
    description:
      'Develop warm tone extraction, breath support, phrasing, scale language, and confident improvisation for church worship, classical, and contemporary playing.',
    image: 'https://images.unsplash.com/photo-1525994886773-080587e161c2?auto=format&fit=crop&w=1800&q=85',
    imageAlt: 'Saxophone student in warm studio lighting',
    badge: 'Alto & Tenor • Graded Curriculum',
    trialActionText: 'Book FREE Saxophone Trial',
    whatsappMessage: 'Hello ProsperWork Music Concepts, I would like to book a FREE trial assessment for Saxophone.',
  },
  {
    id: 'voice',
    instrument: 'Voice Training',
    eyebrow: 'Private Vocal Coaching & Performance',
    titlePrimary: 'Unlock vocal range, pitch accuracy,',
    titleSecondary: 'and singing confidence.',
    description:
      'Healthy vocal technique through guided breath warmups, pitch accuracy, vowel placement, diction, and expressive delivery across all musical genres.',
    image: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1800&q=85',
    imageAlt: 'Vocalist performing with studio microphone',
    badge: 'All Ages • Solo & Worship',
    trialActionText: 'Book FREE Vocal Trial',
    whatsappMessage: 'Hello ProsperWork Music Concepts, I would like to book a FREE trial assessment for Voice Training.',
  },
  {
    id: 'drums',
    instrument: 'Drums & Rhythm',
    eyebrow: 'Drums & Percussion Mastery',
    titlePrimary: 'Build metronome timing, limb independence,',
    titleSecondary: 'and dynamic groove.',
    description:
      'Solid rhythmic discipline with metronome practice, four-way limb independence, essential rudiments, fills, and vibrant Afro-gospel groove vocabulary.',
    image: 'https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?auto=format&fit=crop&w=1800&q=85',
    imageAlt: 'Drummer playing acoustic drum kit',
    badge: 'Rudiments & Timing • Live Grooves',
    trialActionText: 'Book FREE Drumming Trial',
    whatsappMessage: 'Hello ProsperWork Music Concepts, I would like to book a FREE trial assessment for Drums.',
  },
  {
    id: 'violin',
    instrument: 'Violin',
    eyebrow: 'Classical & Contemporary Strings',
    titlePrimary: 'Pure intonation, clean posture,',
    titleSecondary: 'and expressive bowing.',
    description:
      'From instrument setup and bow grip to Suzuki methods, classical repertoire, and graded Muson / ABRSM exam preparation under expert guidance.',
    image: 'https://images.unsplash.com/photo-1612225330812-01a9c6b355ec?auto=format&fit=crop&w=1800&q=85',
    imageAlt: 'Violinist performing classical piece',
    badge: 'Acoustic Violin • Grade 1–5 Prep',
    trialActionText: 'Book FREE Violin Trial',
    whatsappMessage: 'Hello ProsperWork Music Concepts, I would like to book a FREE trial assessment for Violin.',
  },
  {
    id: 'guitar',
    instrument: 'Acoustic & Bass Guitar',
    eyebrow: 'Guitar & Bass Studio',
    titlePrimary: 'From first chords and walking basslines',
    titleSecondary: 'to band-ready groove.',
    description:
      'Learn fingerpicking, rhythm strumming, walking bass, and harmonic awareness with clear weekly practice targets and 24/7 admin monitoring.',
    image: 'https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=1800&q=85',
    imageAlt: 'Guitarist playing acoustic guitar',
    badge: 'Acoustic & Bass • Band Ready',
    trialActionText: 'Book FREE Guitar Trial',
    whatsappMessage: 'Hello ProsperWork Music Concepts, I would like to book a FREE trial assessment for Guitar.',
  },
];

export function HeroSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const total = heroSlides.length;
  const current = heroSlides[currentIndex];

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % total);
  }, [total]);

  const goToPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Auto-advance timer (6.5 seconds)
  useEffect(() => {
    if (isPaused) return;

    timerRef.current = setInterval(() => {
      goToNext();
    }, 6500);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, goToNext]);

  // Preload images
  useEffect(() => {
    heroSlides.forEach((slide) => {
      const img = new Image();
      img.src = slide.image;
    });
  }, []);

  return (
    <section
      className="home-hero hero-slideshow"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="Academy programmes slideshow"
    >
      {/* Background Image Layers with Smooth Cross-fade */}
      <div className="hero-slide-images" aria-hidden="true">
        {heroSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`hero-slide-bg ${index === currentIndex ? 'active' : ''}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          />
        ))}
      </div>

      <div className="home-hero-shade" />

      {/* Hero Content */}
      <div className="page-wrap home-hero-content">
        <div className="hero-content-inner">
          <div className="hero-badge-row">
            <span className="hero-kicker">
              <Globe2 size={16} />
              {current.eyebrow}
            </span>
            <span className="hero-pill">
              <ShieldCheck size={14} />
              {current.badge}
            </span>
          </div>

          <h1 key={`title-${current.id}`} className="hero-slide-title">
            {current.titlePrimary}{' '}
            <span>{current.titleSecondary}</span>
          </h1>

          <p key={`desc-${current.id}`} className="hero-slide-desc">
            {current.description}
          </p>

          <div className="hero-actions">
            <a
              className="primary-link"
              href={getWhatsAppLink(current.whatsappMessage)}
              target="_blank"
              rel="noreferrer"
            >
              {current.trialActionText}
              <ArrowRight size={18} />
            </a>
            <Link className="secondary-link" href="/courses">
              Explore all courses
            </Link>
          </div>

          {/* Quick Metrics */}
          <div className="hero-metrics">
            <span>
              <strong>1-on-1</strong>
              Personalized Private Pace
            </span>
            <span>
              <strong>24/7</strong>
              Admin Monitored Classes
            </span>
            <span>
              <strong>Worldwide</strong>
              UK • US • Denmark • Nigeria
            </span>
          </div>
        </div>

        {/* Slide Controls & Thumbnails */}
        <div className="hero-controls-bar">
          <div className="hero-nav-buttons">
            <button
              type="button"
              className="hero-arrow-btn"
              onClick={goToPrev}
              aria-label="Previous slide"
            >
              <ChevronLeft size={20} />
            </button>
            <span className="hero-slide-counter">
              <strong>{String(currentIndex + 1).padStart(2, '0')}</strong> / {String(total).padStart(2, '0')}
            </span>
            <button
              type="button"
              className="hero-arrow-btn"
              onClick={goToNext}
              aria-label="Next slide"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Instrument Dots / Selectors */}
          <div className="hero-slide-indicators" role="tablist" aria-label="Choose instrument slide">
            {heroSlides.map((slide, index) => (
              <button
                key={slide.id}
                type="button"
                role="tab"
                aria-selected={index === currentIndex}
                aria-label={`Show ${slide.instrument} slide`}
                className={`hero-dot-btn ${index === currentIndex ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
              >
                <span className="hero-dot-label">{slide.instrument}</span>
                <span className="hero-dot-bar" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

