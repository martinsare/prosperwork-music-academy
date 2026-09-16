import {
  AcousticGuitarVector,
  BassGuitarVector,
  DrumsVector,
  GrandPianoVector,
  MusicTheoryVector,
  SaxophoneVector,
  StudioMicVector,
  SynthesizerVector,
  ViolinVector,
} from "@/components/vectors/instrument-vectors";

export const SCHOOL_NAME = "ProsperWork Music Concepts";
export const SCHOOL_ADDRESS = "31 Ogubambi Street, Lagos, Nigeria";
export const SCHOOL_PHONE = "+2347031926969";
export const SCHOOL_PHONE_DISPLAY = "+234 703 192 6969";
export const SCHOOL_EMAIL = "prosperworkmusicconcepts@gmail.com";
export const INSTAGRAM_URL =
  "https://www.instagram.com/prosperworkmusicconcepts";
export const FACEBOOK_URL = "https://www.facebook.com/prosperworkmusicconcepts";
export const LINKEDIN_URL =
  "https://www.linkedin.com/company/prosperworkmusicconcepts";

export const heroImage =
  "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?auto=format&fit=crop&w=1800&q=85";
export const vocalImage =
  "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=85";
export const lessonImage =
  "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=1600&q=85";
export const stageImage =
  "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1600&q=85";

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/courses", label: "Courses" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/showcase", label: "Showcase" },
  { href: "/about", label: "About" },
  { href: "/jesus-kids", label: "Jesus Kids" },
  { href: "/faqs", label: "FAQs" },
  { href: "/contact", label: "Admissions" },
];

export const courses = [
  {
    id: "piano",
    name: "Piano",
    category: "Instrument",
    level: "Beginner to Grade 5",
    tagline: "Touch, sight-reading, repertoire, and musical confidence.",
    description:
      "Build posture, hand shape, two-hand coordination, reading fluency, and expressive playing across classical, gospel, and contemporary music.",
    curriculum: [
      "Keyboard geography",
      "Two-hand coordination",
      "Sight-reading",
      "Classical and worship repertoire",
      "ABRSM / Trinity prep",
    ],
    VectorIcon: GrandPianoVector,
  },
  {
    id: "keyboard",
    name: "Keyboard",
    category: "Modern keys",
    level: "Beginner to band-ready",
    tagline: "Chords, worship voicings, synth sounds, and accompaniment.",
    description:
      "Learn practical keyboard skills for church, home, stage, and studio with a clear path from simple chords to live-band fluency.",
    curriculum: [
      "Chord inversions",
      "Progressions",
      "Pad and lead sounds",
      "Chart reading",
      "Live accompaniment",
    ],
    VectorIcon: SynthesizerVector,
  },
  {
    id: "voice",
    name: "Voice Training",
    category: "Vocal studies",
    level: "All ages",
    tagline: "Breath, pitch, range, diction, and performance control.",
    description:
      "Develop a healthy singing voice through guided warmups, pitch accuracy, range extension, vowel placement, and confident delivery.",
    curriculum: [
      "Breath support",
      "Pitch accuracy",
      "Vocal range",
      "Diction",
      "Song interpretation",
    ],
    VectorIcon: StudioMicVector,
  },
  {
    id: "saxophone",
    name: "Saxophone",
    category: "Wind",
    level: "Alto and tenor",
    tagline: "Warm tone, breath support, phrasing, scales, and improvisation.",
    description:
      "Train embouchure, tone control, articulation, melodic phrasing, and scale language for worship, jazz, and contemporary playing.",
    curriculum: [
      "Embouchure",
      "Tone extraction",
      "Tonguing",
      "Major and blues scales",
      "Improvisation",
    ],
    VectorIcon: SaxophoneVector,
  },
  {
    id: "drums",
    name: "Drums",
    category: "Rhythm",
    level: "Beginner to performance",
    tagline: "Timing, independence, stick control, and Afro-gospel grooves.",
    description:
      "Build a strong rhythmic foundation with metronome discipline, four-way independence, rudiments, fills, and practical groove vocabulary.",
    curriculum: [
      "Rudiments",
      "Limb independence",
      "Timekeeping",
      "Afrobeats and gospel grooves",
      "Drum exam prep",
    ],
    VectorIcon: DrumsVector,
  },
  {
    id: "violin",
    name: "Violin",
    category: "Strings",
    level: "Beginner to Grade 5",
    tagline: "Posture, bowing, intonation, vibrato, and classical pieces.",
    description:
      "Learn clean posture, bow grip, tone production, fingerboard accuracy, and expressive playing through a structured string pathway.",
    curriculum: [
      "Instrument setup",
      "Bow grip",
      "Intonation",
      "Suzuki pieces",
      "ABRSM / Trinity prep",
    ],
    VectorIcon: ViolinVector,
  },
  {
    id: "acoustic-guitar",
    name: "Acoustic Guitar",
    category: "Strings",
    level: "Beginner to song-ready",
    tagline: "Fingerstyle, chords, rhythm, and acoustic accompaniment.",
    description:
      "Move from first chords to full songs with strong rhythm, clean transitions, fingerpicking patterns, and tasteful accompaniment.",
    curriculum: [
      "Open chords",
      "Barre chords",
      "Fingerpicking",
      "Strumming",
      "Song accompaniment",
    ],
    VectorIcon: AcousticGuitarVector,
  },
  {
    id: "bass-guitar",
    name: "Bass Guitar",
    category: "Groove",
    level: "Beginner to band-ready",
    tagline: "Pocket, harmony, walking lines, slap, and ensemble confidence.",
    description:
      "Learn to anchor a band with solid timing, clean technique, harmony awareness, groove vocabulary, and practical bassline building.",
    curriculum: [
      "Root-fifth motion",
      "Arpeggios",
      "Walking bass",
      "Slap and mute control",
      "Band locking",
    ],
    VectorIcon: BassGuitarVector,
  },
  {
    id: "theory",
    name: "Music Theory",
    category: "Literacy",
    level: "Grade 1 to 5",
    tagline: "Notation, rhythm, scales, intervals, harmony, and exams.",
    description:
      "Understand how music works on paper and in the ear through clear lessons in notation, rhythm, scale systems, and chord construction.",
    curriculum: ["Clefs", "Time signatures", "Scales", "Intervals", "Harmony"],
    VectorIcon: MusicTheoryVector,
  },
];

export const faqsList = [
  {
    q: "How do I enroll in classes?",
    a: "Simply send us a message on WhatsApp, and we will help you book a FREE one-on-one trial assessment to get started.",
  },
  {
    q: "How long is each lesson?",
    a: "Our lessons are perfectly paced, running between 45 minutes to 1 hour.",
  },
  {
    q: "Are the classes group or private?",
    a: "All classes are private 1-on-1 premium lessons to ensure full personal attention tailored to your child's pace.",
  },
  {
    q: "Who will be teaching me?",
    a: "You will be taught by professional, expert instructors who are passionate about taking you from beginner to advanced mastery.",
  },
  {
    q: "How do you keep online classes professional?",
    a: "We have a 24/7 dedicated admin support team that sends reminders and actively monitors every class to ensure it runs smoothly and remains highly professional.",
  },
  {
    q: "What instruments do you teach?",
    a: "We offer training in Piano, Keyboard, Saxophone, Drums, Violin, Acoustic Guitar, Bass Guitar, as well as Voice Training and Music Theory.",
  },
];

export function getWhatsAppLink(customText?: string) {
  const text =
    customText ||
    "Hello ProsperWork Music Concepts, I would like to book a FREE one-on-one trial assessment.";
  return `https://wa.me/${SCHOOL_PHONE}?text=${encodeURIComponent(text)}`;
}

export const academyImages = {
  pianoLesson: "/images/showcase/showcase-piano-lesson.jpg",
  saxRecital: "/images/showcase/showcase-sax-recital.jpg",
  vocalCoaching: "/images/showcase/showcase-vocal-coaching.jpg",
  drumLesson: "/images/showcase/showcase-drum-lesson.jpg",
  violinStudent: "/images/showcase/showcase-violin-student.jpg",
  guitarStudent: "/images/showcase/showcase-guitar-student.jpg",
  jesusKids: "/images/showcase/showcase-jesus-kids.jpg",
  annualAwards: "/images/showcase/showcase-annual-awards.jpg",
  onlineSession: "/images/showcase/showcase-online-session.jpg",
};

export interface ShowcaseMediaItem {
  id: string;
  type: "photo" | "video";
  title: string;
  category: "all" | "recitals" | "lessons" | "awards" | "jesus-kids";
  categoryLabel: string;
  instrument: string;
  performerOrStudent: string;
  caption: string;
  imageSrc: string;
  videoDuration?: string;
  videoUrl?: string; // YouTube / Vimeo or local video embed
}

export const showcaseCategories = [
  { id: "all", label: "All Media" },
  { id: "recitals", label: "Student Recitals & Videos" },
  { id: "lessons", label: "Live 1-on-1 Lessons" },
  { id: "awards", label: "Showcase Awards & Exams" },
  { id: "jesus-kids", label: "Jesus Kids Fellowship" },
];

export const showcaseMedia: ShowcaseMediaItem[] = [
  {
    id: "media-1",
    type: "video",
    title: "Sarah’s Classical Piano Recital: Ode to Joy",
    category: "recitals",
    categoryLabel: "Student Recital",
    instrument: "Piano",
    performerOrStudent: "Sarah (Age 9, Grade 2 Pathway)",
    caption:
      "Sarah demonstrating steady tempo, clean two-hand balance, and dynamic touch after 4 months of 1-on-1 lessons.",
    imageSrc: "/images/showcase/video-thumb-piano-recital.jpg",
    videoDuration: "2:15",
    videoUrl: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
  },
  {
    id: "media-2",
    type: "photo",
    title: "Live 1-on-1 Saxophone Tone & Phrasing Session",
    category: "lessons",
    categoryLabel: "Live Lesson",
    instrument: "Saxophone",
    performerOrStudent: "Emmanuel with Instructor David",
    caption:
      "Focusing on embouchure control, clean lower register articulation, and worship melodic phrasing.",
    imageSrc: "/images/showcase/showcase-sax-recital.jpg",
  },
  {
    id: "media-3",
    type: "video",
    title: "Vocal Masterclass: Diaphragmatic Breath & Range",
    category: "recitals",
    categoryLabel: "Vocal Masterclass",
    instrument: "Voice Training",
    performerOrStudent: "Grace (Adult Vocal Track)",
    caption:
      "Guided vocal warmup, vowel placement, and pitch centering during an online coaching session.",
    imageSrc: "/images/showcase/video-thumb-vocal-warmup.jpg",
    videoDuration: "3:40",
    videoUrl: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
  },
  {
    id: "media-4",
    type: "photo",
    title: "Junior Drum Rhythm & Metronome Rudiments",
    category: "lessons",
    categoryLabel: "Live Lesson",
    instrument: "Drums",
    performerOrStudent: "Joshua (Age 11)",
    caption:
      "Practicing 4-way limb independence, single paradiddle rudiments, and Afro-gospel pocket groove.",
    imageSrc: "/images/showcase/showcase-drum-lesson.jpg",
  },
  {
    id: "media-5",
    type: "photo",
    title: "Violin Bow Technique & Intonation Practice",
    category: "lessons",
    categoryLabel: "Live Lesson",
    instrument: "Violin",
    performerOrStudent: "Victoria (Age 8)",
    caption:
      "Establishing correct shoulder rest alignment, straight bow stroke, and first fingerboard placements.",
    imageSrc: "/images/showcase/showcase-violin-student.jpg",
  },
  {
    id: "media-6",
    type: "video",
    title: "Jesus Kids Praise & Worship Recital",
    category: "jesus-kids",
    categoryLabel: "Jesus Kids",
    instrument: "Choir & Keys",
    performerOrStudent: "ProsperWork Children Fellowship",
    caption:
      "Children reciting scriptures and performing group worship praise songs with accompaniment.",
    imageSrc: "/images/showcase/video-thumb-kids-praise.jpg",
    videoDuration: "4:10",
    videoUrl: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
  },
  {
    id: "media-7",
    type: "photo",
    title: "Annual Online Showcase & Talent Award Ceremony",
    category: "awards",
    categoryLabel: "Awards & Certificates",
    instrument: "All Instruments",
    performerOrStudent: "Annual Competition Winners",
    caption:
      "Recognizing student diligence with certificates, MUSON preparation commendations, and performance prizes.",
    imageSrc: "/images/showcase/showcase-annual-awards.jpg",
  },
  {
    id: "media-8",
    type: "photo",
    title: "Acoustic Guitar Fingerpicking & Chords",
    category: "lessons",
    categoryLabel: "Live Lesson",
    instrument: "Guitar",
    performerOrStudent: "Daniel (Teen Track)",
    caption:
      "Transitioning cleanly between open chords, barre shapes, and fingerstyle worship accompaniments.",
    imageSrc: "/images/showcase/showcase-guitar-student.jpg",
  },
  {
    id: "media-9",
    type: "photo",
    title: "Admin Oversight & Seamless Lesson Monitoring",
    category: "lessons",
    categoryLabel: "Academy Standard",
    instrument: "Quality Assurance",
    performerOrStudent: "ProsperWork Academic Operations",
    caption:
      "Every lesson is backed by live administrative attendance and curriculum tracking.",
    imageSrc: "/images/showcase/showcase-online-session.jpg",
  },
];
