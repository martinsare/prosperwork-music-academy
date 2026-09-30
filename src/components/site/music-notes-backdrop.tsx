import React, { useMemo } from "react";

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

const NOTE_COLORS = [
  "rgba(19, 91, 69, 0.22)",   // Forest
  "rgba(143, 202, 171, 0.32)", // Mint/Coral
  "rgba(16, 185, 129, 0.25)",  // Bright Emerald
  "rgba(203, 229, 214, 0.40)", // Sun/Sage
  "rgba(5, 150, 105, 0.24)",   // Deep Jade
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
          strokeWidth="1.8"
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
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="6" cy="18" r="4" fill={color} />
          <path d="M10 18V3c3 0 6 2 6 5s-3 3-6 3" />
        </svg>
      );
    case 2:
      // Treble Clef 𝄞
      return (
        <svg
          width={size * 1.1}
          height={size * 1.35}
          viewBox="0 0 24 24"
          fill="none"
          stroke={color}
          strokeWidth="1.6"
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
      // Quarter note with stem ♩
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
          <ellipse
            cx="7"
            cy="17"
            rx="4"
            ry="3"
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
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="6" cy="18" r="3.5" fill={color} />
          <path d="M9.5 18V4c4 0 7 1.5 7 4.5" />
          <path d="M9.5 9c3.5 0 6 1 6 3.5" />
        </svg>
      );
  }
}

export function MusicNotesBackdrop() {
  // Generate harmonious horizontal melodic streams
  const notes = useMemo<NoteParticle[]>(() => {
    const tracks = [10, 22, 36, 50, 64, 78, 88]; // 7 melodic stave levels
    const items: NoteParticle[] = [];
    let id = 0;

    tracks.forEach((trackPercent, trackIdx) => {
      // 3-4 notes per track with staggered delays to populate the entire stream
      const countInTrack = 3;
      for (let i = 0; i < countInTrack; i++) {
        const duration = 20 + ((id * 4) % 16); // 20s to 36s (graceful melodic tempo)
        // Spread staggered delay across the full duration
        const delay = -((i * (duration / countInTrack)) + (trackIdx * 3.1) % duration);
        
        items.push({
          id: id++,
          type: (id + trackIdx) % 6,
          top: trackPercent + ((id % 3) * 3 - 3), // slight organic offset
          size: 20 + ((id * 6) % 22), // 20px to 42px
          duration,
          delay,
          opacity: 0.35 + ((id % 3) * 0.15),
          rotation: -12 + ((id * 17) % 25), // -12deg to +13deg
          waveAmplitude: 15 + ((id * 7) % 25), // 15px to 40px sinusoidal pitch wave
          color: NOTE_COLORS[(id + trackIdx) % NOTE_COLORS.length],
        });
      }
    });

    return items;
  }, []);

  return (
    <div className="music-notes-canvas melodic-stream" aria-hidden="true">
      {notes.map((note) => (
        <div
          key={note.id}
          className="stream-note-particle"
          style={{
            top: `${note.top}%`,
            animationDuration: `${note.duration}s`,
            animationDelay: `${note.delay}s`,
            opacity: note.opacity,
            ["--wave-amp" as string]: `${note.waveAmplitude}px`,
            ["--rot-start" as string]: `${note.rotation}deg`,
          }}
        >
          <NoteSvg type={note.type} size={note.size} color={note.color} />
        </div>
      ))}
    </div>
  );
}

export default MusicNotesBackdrop;
