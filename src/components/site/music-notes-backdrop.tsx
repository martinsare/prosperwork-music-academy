import React, { useMemo } from "react";

interface NoteParticle {
  id: number;
  type: number;
  left: number; // percentage
  size: number; // px
  duration: number; // seconds
  delay: number; // seconds
  opacity: number;
  rotation: number; // deg
  swayDistance: number; // px
  color: string;
}

const NOTE_COLORS = [
  "rgba(19, 91, 69, 0.18)",   // Forest
  "rgba(143, 202, 171, 0.28)", // Mint/Coral
  "rgba(52, 211, 153, 0.22)",  // Bright Emerald
  "rgba(203, 229, 214, 0.35)", // Sun/Sage
  "rgba(16, 185, 129, 0.20)",  // Soft Jade
];

function NoteSvg({ type, size, color }: { type: number; size: number; color: string }) {
  switch (type % 5) {
    case 0:
      // Beamed eighth notes ♫
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke={color}
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="5.5" cy="17.5" r="3.5" fill={color} />
          <circle cx="18.5" cy="14.5" r="3.5" fill={color} />
          <path d="M9 17.5V5l13-3v12.5" />
          <path d="M9 9l13-3" />
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
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="6" cy="18" r="4" fill={color} />
          <path d="M10 18V3c3 0 6 2 6 5s-3 3-6 3" />
        </svg>
      );
    case 2:
      // Treble clef silhouette / stylized music mark
      return (
        <svg
          width={size * 1.1}
          height={size * 1.3}
          viewBox="0 0 24 24"
          fill="none"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 2v17a3 3 0 1 1-3-3c2 0 3 1.5 3 3V7c0-2.5 3-4 5-1.5" />
          <path d="M15 11c-2-1-5-1-6 2" />
        </svg>
      );
    case 3:
      // Musical Sharp / Harmonious Chord ♯
      return (
        <svg
          width={size * 0.9}
          height={size * 0.9}
          viewBox="0 0 24 24"
          fill="none"
          stroke={color}
          strokeWidth="2"
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
    default:
      // Quarter note with ring
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke={color}
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <ellipse cx="7" cy="17" rx="4" ry="3" fill={color} transform="rotate(-20 7 17)" />
          <path d="M10.5 16V4" />
        </svg>
      );
  }
}

export function MusicNotesBackdrop() {
  // Generate a deterministic set of floating notes distributed across the screen
  const notes = useMemo<NoteParticle[]>(() => {
    const count = 22; // Well-balanced density without cluttering UI
    const items: NoteParticle[] = [];

    for (let i = 0; i < count; i++) {
      items.push({
        id: i,
        type: i % 5,
        left: (i * 100) / count + (Math.sin(i * 99) * 3), // distributed across 0-100%
        size: 20 + ((i * 7) % 24), // 20px to 44px
        duration: 16 + ((i * 5) % 18), // 16s to 34s (smooth, gentle float)
        delay: -((i * 3.7) % 28), // negative delay so they are immediately visible in-flight
        opacity: 0.35 + ((i % 4) * 0.15),
        rotation: (i * 45) % 360,
        swayDistance: 25 + ((i * 11) % 45), // 25px to 70px horizontal wave
        color: NOTE_COLORS[i % NOTE_COLORS.length],
      });
    }

    return items;
  }, []);

  return (
    <div className="music-notes-canvas" aria-hidden="true">
      {notes.map((note) => (
        <div
          key={note.id}
          className="floating-note-particle"
          style={{
            left: `${note.left}%`,
            animationDuration: `${note.duration}s`,
            animationDelay: `${note.delay}s`,
            opacity: note.opacity,
            ["--sway-x" as string]: `${note.swayDistance}px`,
            ["--initial-rot" as string]: `${note.rotation}deg`,
          }}
        >
          <NoteSvg type={note.type} size={note.size} color={note.color} />
        </div>
      ))}
    </div>
  );
}

export default MusicNotesBackdrop;

