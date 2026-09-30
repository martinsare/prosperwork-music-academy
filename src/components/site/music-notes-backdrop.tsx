import React, {
  useMemo,
  useState,
  useCallback,
  useRef,
  useEffect,
} from "react";
import { playNotePopSound } from "@/lib/instrument-audio";

interface NoteParticle {
  id: number;
  type: number;
  top: number; // percentage from top of viewport
  size: number; // px
  duration: number; // seconds for full left-to-right traverse
  delay: number; // seconds (negative so immediately active)
  opacity: number;
  rotation: number; // deg
  waveAmplitude: number; // vertical pitch wave height in px
  color: string;
}

// Delicate, subtle, elegant translucent brand tones
const NOTE_COLORS = [
  "rgba(19, 91, 69, 0.22)", // Soft Forest
  "rgba(143, 202, 171, 0.28)", // Pale Mint
  "rgba(16, 185, 129, 0.22)", // Soft Emerald
  "rgba(94, 113, 104, 0.20)", // Muted Sage
  "rgba(5, 150, 105, 0.24)", // Translucent Jade
];

function NoteSvg({
  type,
  size,
  color,
}: {
  type: number;
  size: number;
  color: string;
}) {
  switch (type % 6) {
    case 0:
      // Beamed eighth notes ♫
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke={color}
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="5.5" cy="17.5" r="3" fill={color} />
          <circle cx="18.5" cy="14.5" r="3" fill={color} />
          <path d="M8.5 17.5V5l13-3v12.5" />
          <path d="M8.5 9l13-3" />
        </svg>
      );
    case 1:
      // Single eighth note ♪
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke={color}
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="6" cy="18" r="3.5" fill={color} />
          <path d="M9.5 18V3c3 0 5.5 1.8 5.5 4.5s-2.5 3-5.5 3" />
        </svg>
      );
    case 2:
      // Treble Clef 𝄞
      return (
        <svg
          width={size * 1.1}
          height={size * 1.3}
          viewBox="0 0 24 24"
          fill="none"
          stroke={color}
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 2v17a3 3 0 1 1-3-3c2 0 3 1.5 3 3V7c0-2.5 3-4 5-1.5" />
          <path d="M15 11c-2-1-5-1-6 2" />
        </svg>
      );
    case 3:
      // Musical Sharp ♯
      return (
        <svg
          width={size * 0.85}
          height={size * 0.85}
          viewBox="0 0 24 24"
          fill="none"
          stroke={color}
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="4" y1="9" x2="20" y2="7" />
          <line x1="4" y1="17" x2="20" y2="15" />
          <line x1="9" y1="3" x2="7" y2="21" />
          <line x1="17" y1="3" x2="15" y2="21" />
        </svg>
      );
    case 4:
      // Quarter note with stem ♩
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke={color}
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <ellipse
            cx="7"
            cy="17"
            rx="3.5"
            ry="2.6"
            fill={color}
            transform="rotate(-20 7 17)"
          />
          <path d="M10.5 16V4" />
        </svg>
      );
    case 5:
    default:
      // Double sixteenth note flag ♬
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke={color}
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="6" cy="18" r="3" fill={color} />
          <path d="M9 18V4c3.5 0 6 1.3 6 4" />
          <path d="M9 9c3 0 5.5 1 5.5 3" />
        </svg>
      );
  }
}

// Sparkle Burst Particle Component
function SparkleBurst({ color }: { color: string }) {
  return (
    <div className="note-sparkle-burst">
      <span className="burst-ring" style={{ borderColor: color }} />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
        <span
          key={i}
          className="burst-spark"
          style={{
            backgroundColor: color,
            ["--spark-angle" as string]: `${angle}deg`,
          }}
        />
      ))}
      <span className="burst-flash" />
    </div>
  );
}

export function MusicNotesBackdrop() {
  const [burstIds, setBurstIds] = useState<Set<number>>(new Set());
  const noteRefs = useRef<Map<number, HTMLDivElement>>(new Map());

  // Handle interactive note pop
  const handleNoteBurst = useCallback((id: number) => {
    setBurstIds((prev) => {
      if (prev.has(id)) return prev;
      playNotePopSound();
      const next = new Set(prev);
      next.add(id);
      return next;
    });

    // Auto-respawn after 3.2s
    setTimeout(() => {
      setBurstIds((prev) => {
        const next = new Set(prev);
        next.delete(id);
        return next;
      });
    }, 3200);
  }, []);

  // Content-Aware Global Pointer Detection (Hit testing)
  useEffect(() => {
    const onGlobalPointerDown = (e: PointerEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      // If user clicked/tapped directly on a note particle or its SVG, let the direct handler handle it!
      if (target.closest(".stream-note-particle")) return;

      // If user tapped inside an interactive control, form, card, modal, or header:
      // do not burst notes sitting behind them!
      const isForegroundCover = target.closest(
        'button, a, input, select, textarea, [role="button"], [role="dialog"], [role="alertdialog"], ' +
          "video, iframe, audio, " +
          ".site-header, .mobile-panel, .cookie-banner, .media-modal-backdrop, .media-modal-container, " +
          ".course-card, .course-detail-card, .recital-card, .journey-card, .showcase-card, .home-outcome-card, .outcome-card, " +
          ".learning-path-card, .timeline article, .feature-row, .support-item, .enrollment-band, .jesus-panel, .contact-panel, " +
          ".faq-aside, .lead-form, .admission-form, .page-hero-media, .showcase-photo-mosaic, .proof-panel div, .lesson-flow div"
      );
      if (isForegroundCover) return;

      const clickX = e.clientX;
      const clickY = e.clientY;

      // Check all active notes on screen using live getBoundingClientRect()
      noteRefs.current.forEach((el, id) => {
        if (!el || burstIds.has(id)) return;
        const rect = el.getBoundingClientRect();

        // Ensure note is currently visible within the viewport
        if (
          rect.right < 0 ||
          rect.left > window.innerWidth ||
          rect.bottom < 0 ||
          rect.top > window.innerHeight
        )
          return;

        const noteCenterX = rect.left + rect.width / 2;
        const noteCenterY = rect.top + rect.height / 2;
        const distance = Math.hypot(clickX - noteCenterX, clickY - noteCenterY);

        // Generous, intuitive hit radius (40px)
        if (distance <= Math.max(rect.width * 0.95, 40)) {
          handleNoteBurst(id);
        }
      });
    };

    window.addEventListener("pointerdown", onGlobalPointerDown, {
      passive: true,
    });
    return () => {
      window.removeEventListener("pointerdown", onGlobalPointerDown);
    };
  }, [handleNoteBurst, burstIds]);

  // Generate harmonious horizontal melodic streams with delicate size & opacity
  const notes = useMemo<NoteParticle[]>(() => {
    const tracks = [12, 26, 40, 54, 68, 80, 90]; // 7 melodic stave levels
    const items: NoteParticle[] = [];
    let id = 0;

    tracks.forEach((trackPercent, trackIdx) => {
      const countInTrack = 3;
      for (let i = 0; i < countInTrack; i++) {
        const duration = 22 + ((id * 4) % 18); // 22s to 40s (slow, calm pace)
        const delay = -(
          i * (duration / countInTrack) +
          ((trackIdx * 3.4) % duration)
        );

        items.push({
          id: id++,
          type: (id + trackIdx) % 6,
          top: trackPercent + ((id % 3) * 2 - 2),
          size: 15 + ((id * 5) % 11), // 15px to 25px (delicate & proportional)
          duration,
          delay,
          opacity: 0.18 + (id % 3) * 0.08, // 0.18 to 0.34 (subtle & soft)
          rotation: -10 + ((id * 15) % 20),
          waveAmplitude: 12 + ((id * 5) % 18), // 12px to 30px
          color: NOTE_COLORS[(id + trackIdx) % NOTE_COLORS.length],
        });
      }
    });

    return items;
  }, []);

  return (
    <div className="music-notes-canvas melodic-stream" aria-hidden="false">
      {notes.map((note) => {
        const isBursting = burstIds.has(note.id);

        return (
          <div
            key={note.id}
            ref={(el) => {
              if (el) {
                noteRefs.current.set(note.id, el);
              } else {
                noteRefs.current.delete(note.id);
              }
            }}
            className={`stream-note-particle ${isBursting ? "bursting" : ""}`}
            style={{
              top: `${note.top}%`,
              animationDuration: `${note.duration}s`,
              animationDelay: `${note.delay}s`,
              opacity: isBursting ? 1 : note.opacity,
              ["--wave-amp" as string]: `${note.waveAmplitude}px`,
              ["--rot-start" as string]: `${note.rotation}deg`,
            }}
            onClick={(e) => {
              e.stopPropagation();
              handleNoteBurst(note.id);
            }}
            onPointerDown={(e) => {
              e.stopPropagation();
              handleNoteBurst(note.id);
            }}
            role="button"
            tabIndex={0}
            aria-label="Interactive Music Note"
          >
            {isBursting ? (
              <SparkleBurst color={note.color} />
            ) : (
              <div
                className="note-touch-target"
                onClick={(e) => {
                  e.stopPropagation();
                  handleNoteBurst(note.id);
                }}
              >
                <NoteSvg type={note.type} size={note.size} color={note.color} />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default MusicNotesBackdrop;
