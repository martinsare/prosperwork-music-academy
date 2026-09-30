import React, { useMemo, useState, useCallback } from "react";
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

const NOTE_COLORS = [
  "rgba(19, 91, 69, 0.35)",   // Forest
  "rgba(143, 202, 171, 0.45)", // Mint/Coral
  "rgba(16, 185, 129, 0.40)",  // Bright Emerald
  "rgba(203, 229, 214, 0.55)", // Sun/Sage
  "rgba(5, 150, 105, 0.38)",   // Deep Jade
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

  // Handle interactive touch / click / hover pop
  const handleNoteBurst = useCallback((id: number) => {
    if (burstIds.has(id)) return;

    // Play pleasant pentatonic chime
    playNotePopSound();

    // Mark as bursting
    setBurstIds((prev) => new Set(prev).add(id));

    // Respawns smoothly after 3.2s
    setTimeout(() => {
      setBurstIds((prev) => {
        const next = new Set(prev);
        next.delete(id);
        return next;
      });
    }, 3200);
  }, [burstIds]);

  // Generate harmonious horizontal melodic streams
  const notes = useMemo<NoteParticle[]>(() => {
    const tracks = [10, 22, 36, 50, 64, 78, 88]; // 7 melodic stave levels
    const items: NoteParticle[] = [];
    let id = 0;

    tracks.forEach((trackPercent, trackIdx) => {
      const countInTrack = 3;
      for (let i = 0; i < countInTrack; i++) {
        const duration = 20 + ((id * 4) % 16); // 20s to 36s
        const delay = -((i * (duration / countInTrack)) + (trackIdx * 3.1) % duration);
        
        items.push({
          id: id++,
          type: (id + trackIdx) % 6,
          top: trackPercent + ((id % 3) * 3 - 3),
          size: 22 + ((id * 6) % 22), // 22px to 44px
          duration,
          delay,
          opacity: 0.38 + ((id % 3) * 0.15),
          rotation: -12 + ((id * 17) % 25),
          waveAmplitude: 15 + ((id * 7) % 25),
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
            className={`stream-note-particle ${isBursting ? "bursting" : ""}`}
            style={{
              top: `${note.top}%`,
              animationDuration: `${note.duration}s`,
              animationDelay: `${note.delay}s`,
              opacity: isBursting ? 1 : note.opacity,
              ["--wave-amp" as string]: `${note.waveAmplitude}px`,
              ["--rot-start" as string]: `${note.rotation}deg`,
            }}
            onClick={() => handleNoteBurst(note.id)}
            onPointerDown={() => handleNoteBurst(note.id)}
            title="Touch or click to pop note!"
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
              <div className="note-touch-target">
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
