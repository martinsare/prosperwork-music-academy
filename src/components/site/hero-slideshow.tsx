import { useEffect, useState, useRef, useCallback } from "react";
import { ArrowRight, ChevronLeft, ChevronRight, Globe2 } from "lucide-react";
import { Link } from "wouter";
import { getWhatsAppLink } from "@/lib/site-data";

export interface HeroSlide {
  id: string;
  instrument: string;
  eyebrow: string;
  title: string;
  description: string;
  desktopImage: string;
  mobileImage: string;
  positionDesktop?: string;
  positionMobile?: string;
  imageAlt: string;
  trialActionText: string;
  whatsappMessage: string;
}

export const heroSlides: HeroSlide[] = [
  {
    id: "piano",
    instrument: "Piano & Keyboard",
    eyebrow: "ProsperWork Music Concepts • Piano & Keys",
    title: "Fostering musical growth and excellence on Piano.",
    description:
      "Master touch, posture, two-hand coordination, sight-reading, worship voicings, and performance confidence with personalized 1-on-1 guidance.",
    desktopImage:
      "https://images.unsplash.com/photo-1552422535-c45813c61732?auto=format&fit=crop&w=2000&q=85",
    mobileImage:
      "https://images.unsplash.com/photo-1520523839898-50712825d3a3?auto=format&fit=crop&w=1080&q=85",
    positionDesktop: "center 40%",
    positionMobile: "center center",
    imageAlt: "Piano and keyboard instruction at ProsperWork",
    trialActionText: "Book a FREE Trial Assessment",
    whatsappMessage:
      "Hello ProsperWork Music Concepts, I would like to book a FREE one-on-one trial assessment for Piano & Keyboard.",
  },
  {
    id: "saxophone",
    instrument: "Saxophone",
    eyebrow: "ProsperWork Music Concepts • Saxophone Academy",
    title: "Master rich tone, embouchure, and saxophone expression.",
    description:
      "Train embouchure, tone control, articulation, melodic phrasing, and scale language for church worship, jazz, and contemporary playing.",
    desktopImage:
      "https://images.unsplash.com/photo-1525994886773-080587e161c2?auto=format&fit=crop&w=2000&q=85",
    mobileImage:
      "https://images.unsplash.com/photo-1573871669414-010dbf73ca84?auto=format&fit=crop&w=1080&q=85",
    positionDesktop: "right center",
    positionMobile: "center center",
    imageAlt: "Saxophone musician performing",
    trialActionText: "Book a FREE Trial Assessment",
    whatsappMessage:
      "Hello ProsperWork Music Concepts, I would like to book a FREE one-on-one trial assessment for Saxophone.",
  },
  {
    id: "voice",
    instrument: "Voice Training",
    eyebrow: "ProsperWork Music Concepts • Vocal Studies",
    title: "Unlock pitch accuracy, breath support, and vocal range.",
    description:
      "Develop a healthy singing voice through guided breath warmups, pitch accuracy, range extension, vowel placement, and confident delivery.",
    desktopImage:
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=2000&q=85",
    mobileImage:
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1080&q=85",
    positionDesktop: "right center",
    positionMobile: "center center",
    imageAlt: "Voice training and vocal masterclasses at ProsperWork",
    trialActionText: "Book a FREE Trial Assessment",
    whatsappMessage:
      "Hello ProsperWork Music Concepts, I would like to book a FREE one-on-one trial assessment for Voice Training.",
  },
  {
    id: "drums",
    instrument: "Drums",
    eyebrow: "ProsperWork Music Concepts • Drums & Rhythm",
    title: "Build metronome timing, independence, and dynamic groove.",
    description:
      "Build a strong rhythmic foundation with metronome discipline, four-way independence, rudiments, fills, and practical Afro-gospel groove vocabulary.",
    desktopImage:
      "https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?auto=format&fit=crop&w=2000&q=85",
    mobileImage:
      "https://images.unsplash.com/photo-1543443374-b6fe10a6ab7b?auto=format&fit=crop&w=1080&q=85",
    positionDesktop: "right center",
    positionMobile: "center center",
    imageAlt: "Drumming instruction at ProsperWork",
    trialActionText: "Book a FREE Trial Assessment",
    whatsappMessage:
      "Hello ProsperWork Music Concepts, I would like to book a FREE one-on-one trial assessment for Drums.",
  },
  {
    id: "violin",
    instrument: "Violin",
    eyebrow: "ProsperWork Music Concepts • Strings Department",
    title: "Pure intonation, clean posture, and expressive bowing.",
    description:
      "Learn clean posture, bow grip, tone production, fingerboard accuracy, and expressive playing through a structured string pathway.",
    desktopImage:
      "https://images.unsplash.com/photo-1612225330812-01a9c6b355ec?auto=format&fit=crop&w=2000&q=85",
    mobileImage:
      "https://images.unsplash.com/photo-1612225330812-01a9c6b355ec?auto=format&fit=crop&w=1080&q=85",
    positionDesktop: "right center",
    positionMobile: "center center",
    imageAlt: "Violin instruction at ProsperWork",
    trialActionText: "Book a FREE Trial Assessment",
    whatsappMessage:
      "Hello ProsperWork Music Concepts, I would like to book a FREE one-on-one trial assessment for Violin.",
  },
  {
    id: "guitar",
    instrument: "Acoustic & Bass Guitar",
    eyebrow: "ProsperWork Music Concepts • Guitar Studio",
    title: "From first chords and walking lines to band-ready groove.",
    description:
      "Move from first chords to full songs with strong rhythm, clean transitions, fingerpicking patterns, and solid bassline anchoring.",
    desktopImage:
      "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=2000&q=85",
    mobileImage:
      "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=1080&q=85",
    positionDesktop: "right center",
    positionMobile: "center center",
    imageAlt: "Guitar lessons at ProsperWork",
    trialActionText: "Book a FREE Trial Assessment",
    whatsappMessage:
      "Hello ProsperWork Music Concepts, I would like to book a FREE one-on-one trial assessment for Guitar.",
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

  // Auto-advance timer (6 seconds)
  useEffect(() => {
    if (isPaused) return;

    timerRef.current = setInterval(() => {
      goToNext();
    }, 6000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, goToNext]);

  // Preload images (both desktop and mobile)
  useEffect(() => {
    heroSlides.forEach((slide) => {
      const imgDesktop = new Image();
      imgDesktop.src = slide.desktopImage;
      const imgMobile = new Image();
      imgMobile.src = slide.mobileImage;
    });
  }, []);

  return (
    <section
      className="hero-slideshow-container"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="ProsperWork Music Academy Showcase"
    >
      {/* Background Image Layers with Smooth Cross-fade and Responsive Sources */}
      <div className="hero-slide-images" aria-hidden="true">
        {heroSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`hero-slide-bg ${
              index === currentIndex ? "active" : ""
            }`}
          >
            <picture className="hero-slide-picture">
              <source media="(max-width: 768px)" srcSet={slide.mobileImage} />
              <source media="(min-width: 769px)" srcSet={slide.desktopImage} />
              <img
                src={slide.desktopImage}
                alt={slide.imageAlt}
                className="hero-slide-img"
                style={{
                  objectPosition: slide.positionDesktop || "center center",
                }}
              />
            </picture>
          </div>
        ))}
      </div>

      <div className="home-hero-shade" />

      {/* Floating Side Arrow Navigation */}
      <button
        type="button"
        className="hero-side-nav prev"
        onClick={goToPrev}
        aria-label="Previous slide"
      >
        <ChevronLeft size={28} />
      </button>

      <button
        type="button"
        className="hero-side-nav next"
        onClick={goToNext}
        aria-label="Next slide"
      >
        <ChevronRight size={28} />
      </button>

      {/* Hero Content - Perfectly Centered */}
      <div className="page-wrap home-hero-content">
        <div className="hero-content-inner centered">
          <span className="hero-kicker">
            <Globe2 size={15} />
            {current.eyebrow}
          </span>

          <h1 key={`title-${current.id}`} className="hero-slide-title">
            {current.title}
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
              <ArrowRight size={17} />
            </a>
            <Link className="secondary-link" href="/courses">
              Explore programmes
            </Link>
          </div>

          {/* Minimalist Slide Pagination */}
          <div
            className="hero-slide-pagination"
            role="tablist"
            aria-label="Slideshow pagination"
          >
            {heroSlides.map((slide, index) => (
              <button
                key={slide.id}
                type="button"
                role="tab"
                aria-selected={index === currentIndex}
                aria-label={`Go to ${slide.instrument} slide`}
                className={`hero-page-dot ${
                  index === currentIndex ? "active" : ""
                }`}
                onClick={() => goToSlide(index)}
              >
                <span className="hero-page-line" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
