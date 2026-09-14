import { type SVGProps } from "react";

export function ConservatoryCrest(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle
        cx="50"
        cy="50"
        r="46"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeDasharray="4 2"
      />
      <circle cx="50" cy="50" r="41" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M50 14V86"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeOpacity="0.4"
      />
      <path
        d="M14 50H86"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeOpacity="0.4"
      />
      {/* Treble Clef in Shield */}
      <path
        d="M51 26C51 26 43 32 43 42C43 51 57 48 57 56C57 62 51 67 45 67C40 67 37 63 37 59C37 53 44 49 50 49C54 49 56 51 56 54M50 22V78M50 78C47 78 44 76 44 73C44 70 47 68 50 68C53 68 56 70 56 73C56 76 53 78 50 78Z"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* 5-Stave Arch Motif */}
      <path
        d="M28 32C34 27 41 24 50 24C59 24 66 27 72 32"
        stroke="currentColor"
        strokeWidth="1"
        strokeOpacity="0.6"
      />
      <path
        d="M25 36C32 30 40 27 50 27C60 27 68 30 75 36"
        stroke="currentColor"
        strokeWidth="1"
        strokeOpacity="0.6"
      />
      <path
        d="M22 40C30 33 39 30 50 30C61 30 70 33 78 40"
        stroke="currentColor"
        strokeWidth="1"
        strokeOpacity="0.6"
      />
    </svg>
  );
}

export function GrandPianoVector(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M8 44V22C8 22 8 12 24 12C42 12 56 20 56 34V44H8Z"
        fill="currentColor"
        fillOpacity="0.12"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      {/* Prop stick & lid */}
      <path
        d="M12 20L48 8"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M42 11L42 28"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* Keys */}
      <rect
        x="8"
        y="44"
        width="48"
        height="10"
        rx="1.5"
        stroke="currentColor"
        strokeWidth="2"
      />
      <line
        x1="14"
        y1="44"
        x2="14"
        y2="54"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <line
        x1="20"
        y1="44"
        x2="20"
        y2="54"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <line
        x1="26"
        y1="44"
        x2="26"
        y2="54"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <line
        x1="32"
        y1="44"
        x2="32"
        y2="54"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <line
        x1="38"
        y1="44"
        x2="38"
        y2="54"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <line
        x1="44"
        y1="44"
        x2="44"
        y2="54"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <line
        x1="50"
        y1="44"
        x2="50"
        y2="54"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      {/* Black keys */}
      <rect x="12" y="44" width="3" height="6" fill="currentColor" />
      <rect x="18" y="44" width="3" height="6" fill="currentColor" />
      <rect x="30" y="44" width="3" height="6" fill="currentColor" />
      <rect x="36" y="44" width="3" height="6" fill="currentColor" />
      <rect x="42" y="44" width="3" height="6" fill="currentColor" />
      {/* Legs */}
      <line
        x1="12"
        y1="54"
        x2="12"
        y2="60"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <line
        x1="52"
        y1="54"
        x2="52"
        y2="60"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function StudioMicVector(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {/* Shock mount ring */}
      <circle
        cx="32"
        cy="26"
        r="20"
        stroke="currentColor"
        strokeWidth="2"
        strokeDasharray="3 3"
        strokeOpacity="0.5"
      />
      {/* Microphone capsule */}
      <rect
        x="22"
        y="10"
        width="20"
        height="30"
        rx="10"
        fill="currentColor"
        fillOpacity="0.12"
        stroke="currentColor"
        strokeWidth="2.5"
      />
      {/* Mesh grille */}
      <line
        x1="22"
        y1="20"
        x2="42"
        y2="20"
        stroke="currentColor"
        strokeWidth="2"
      />
      <line
        x1="22"
        y1="25"
        x2="42"
        y2="25"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeOpacity="0.6"
      />
      <line
        x1="32"
        y1="10"
        x2="32"
        y2="25"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeOpacity="0.6"
      />
      {/* Mount arm */}
      <path
        d="M16 28C16 36.8366 23.1634 44 32 44C40.8366 44 48 36.8366 48 28"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <line
        x1="32"
        y1="44"
        x2="32"
        y2="56"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <line
        x1="20"
        y1="56"
        x2="44"
        y2="56"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function SaxophoneVector(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {/* Mouthpiece & Neck */}
      <path
        d="M12 10L20 12L24 20"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Body tube */}
      <path
        d="M24 20L34 46C36 52 46 54 50 48C54 42 54 30 48 24C44 20 38 22 36 28"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      {/* Flare Bell */}
      <path
        d="M48 24C52 18 56 16 58 18C60 20 58 26 52 30"
        fill="currentColor"
        fillOpacity="0.15"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* Key cups */}
      <circle cx="28" cy="28" r="2.5" fill="currentColor" />
      <circle cx="31" cy="35" r="2.5" fill="currentColor" />
      <circle cx="34" cy="42" r="2.5" fill="currentColor" />
      <line
        x1="24"
        y1="28"
        x2="28"
        y2="28"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <line
        x1="27"
        y1="35"
        x2="31"
        y2="35"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <line
        x1="30"
        y1="42"
        x2="34"
        y2="42"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}

export function AcousticGuitarVector(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {/* Headstock & Neck */}
      <path
        d="M10 10L14 14M14 14L28 28"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      {/* Guitar body */}
      <path
        d="M26 30C23 27 20 28 18 31C15 36 17 43 22 47C25 50 29 55 35 55C43 55 49 47 48 39C47 33 42 31 38 33C35 34 32 32 30 28C28 24 25 24 22 26"
        fill="currentColor"
        fillOpacity="0.12"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      {/* Sound hole */}
      <circle
        cx="34"
        cy="40"
        r="5"
        fill="currentColor"
        fillOpacity="0.3"
        stroke="currentColor"
        strokeWidth="2"
      />
      {/* Bridge */}
      <line
        x1="40"
        y1="46"
        x2="44"
        y2="42"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function ViolinVector(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {/* Scroll & Neck */}
      <path
        d="M12 12C10 10 10 7 12 5C14 3 17 4 16 7L24 23"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* Violin upper & lower bouts */}
      <path
        d="M24 23C20 24 18 28 19 32C20 36 24 37 23 40C22 44 17 46 18 52C19 58 27 60 33 57C39 54 41 48 38 43C36 40 39 37 42 34C45 31 44 26 40 23C36 20 28 20 24 23Z"
        fill="currentColor"
        fillOpacity="0.12"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      {/* F-holes */}
      <path
        d="M26 34C25 36 26 38 27 40"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M34 31C33 33 34 35 35 37"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      {/* Bow crossing */}
      <line
        x1="8"
        y1="46"
        x2="56"
        y2="18"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeDasharray="30 2 2 2"
      />
    </svg>
  );
}

export function DrumsVector(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {/* Hi-hat / Cymbal */}
      <ellipse
        cx="18"
        cy="18"
        rx="12"
        ry="3.5"
        fill="currentColor"
        fillOpacity="0.15"
        stroke="currentColor"
        strokeWidth="2"
      />
      <line
        x1="18"
        y1="18"
        x2="18"
        y2="52"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* Snare / Tom */}
      <ellipse
        cx="42"
        cy="24"
        rx="14"
        ry="5"
        fill="currentColor"
        fillOpacity="0.15"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M28 24V34C28 36.7 34.3 39 42 39C49.7 39 56 36.7 56 34V24"
        stroke="currentColor"
        strokeWidth="2"
      />
      {/* Bass drum behind */}
      <ellipse
        cx="36"
        cy="46"
        rx="18"
        ry="10"
        stroke="currentColor"
        strokeWidth="2.5"
      />
      {/* Drumsticks crossed */}
      <line
        x1="14"
        y1="12"
        x2="38"
        y2="36"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <line
        x1="48"
        y1="14"
        x2="22"
        y2="38"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function MusicTheoryVector(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {/* Parchment / Score Book */}
      <rect
        x="8"
        y="12"
        width="48"
        height="40"
        rx="3"
        fill="currentColor"
        fillOpacity="0.1"
        stroke="currentColor"
        strokeWidth="2.5"
      />
      {/* 5-Stave Lines */}
      <line
        x1="14"
        y1="20"
        x2="50"
        y2="20"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <line
        x1="14"
        y1="24"
        x2="50"
        y2="24"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <line
        x1="14"
        y1="28"
        x2="50"
        y2="28"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <line
        x1="14"
        y1="32"
        x2="50"
        y2="32"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <line
        x1="14"
        y1="36"
        x2="50"
        y2="36"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      {/* Notes on Score */}
      <ellipse
        cx="22"
        cy="28"
        rx="2.5"
        ry="2"
        fill="currentColor"
        transform="rotate(-20 22 28)"
      />
      <line
        x1="24"
        y1="27"
        x2="24"
        y2="16"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <ellipse
        cx="34"
        cy="24"
        rx="2.5"
        ry="2"
        fill="currentColor"
        transform="rotate(-20 34 24)"
      />
      <line
        x1="36"
        y1="23"
        x2="36"
        y2="14"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M24 16C28 14 32 14 36 14"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* Quill / Pen */}
      <path
        d="M46 48L54 36C56 33 54 31 52 33L42 45L40 50L46 48Z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function SynthesizerVector(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {/* Keyboard Case */}
      <rect
        x="6"
        y="18"
        width="52"
        height="30"
        rx="3"
        fill="currentColor"
        fillOpacity="0.12"
        stroke="currentColor"
        strokeWidth="2.5"
      />
      {/* Control Panel / Knobs & Screen */}
      <rect
        x="10"
        y="22"
        width="16"
        height="8"
        rx="1.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeOpacity="0.7"
      />
      <circle cx="32" cy="26" r="2" fill="currentColor" />
      <circle cx="38" cy="26" r="2" fill="currentColor" />
      <circle cx="44" cy="26" r="2" fill="currentColor" />
      <circle cx="50" cy="26" r="2" fill="currentColor" />
      {/* Waveform on screen */}
      <path
        d="M12 26L14 24L16 28L18 23L20 27L24 26"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Keys */}
      <line
        x1="6"
        y1="34"
        x2="58"
        y2="34"
        stroke="currentColor"
        strokeWidth="2"
      />
      <line
        x1="14"
        y1="34"
        x2="14"
        y2="48"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <line
        x1="22"
        y1="34"
        x2="22"
        y2="48"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <line
        x1="30"
        y1="34"
        x2="30"
        y2="48"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <line
        x1="38"
        y1="34"
        x2="38"
        y2="48"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <line
        x1="46"
        y1="34"
        x2="46"
        y2="48"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <line
        x1="52"
        y1="34"
        x2="52"
        y2="48"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      {/* Black keys */}
      <rect x="11" y="34" width="3" height="7" fill="currentColor" />
      <rect x="17" y="34" width="3" height="7" fill="currentColor" />
      <rect x="27" y="34" width="3" height="7" fill="currentColor" />
      <rect x="35" y="34" width="3" height="7" fill="currentColor" />
      <rect x="43" y="34" width="3" height="7" fill="currentColor" />
    </svg>
  );
}

export function BassGuitarVector(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {/* Neck & 4 Tuning Pegs */}
      <path
        d="M8 8L24 24"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <circle cx="6" cy="7" r="1.5" fill="currentColor" />
      <circle cx="10" cy="5" r="1.5" fill="currentColor" />
      <circle cx="8" cy="11" r="1.5" fill="currentColor" />
      <circle cx="12" cy="9" r="1.5" fill="currentColor" />
      {/* Solid Bass Body with Horns */}
      <path
        d="M24 24C21 21 16 23 15 28C14 34 20 40 22 46C24 52 30 56 38 55C46 54 52 46 50 38C48 30 42 28 38 31C34 34 32 30 28 26L24 24Z"
        fill="currentColor"
        fillOpacity="0.12"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      {/* Pickups */}
      <rect x="28" y="36" width="6" height="2" rx="1" fill="currentColor" />
      <rect x="34" y="40" width="6" height="2" rx="1" fill="currentColor" />
      {/* Bridge */}
      <rect
        x="38"
        y="45"
        width="4"
        height="6"
        rx="1"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}
