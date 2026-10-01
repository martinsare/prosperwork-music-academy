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
  "https://www.linkedin.com/company/prosperwork-music-concepts/";

export const heroImage = "/images/hero/piano-desktop.jpg";
export const vocalImage = "/images/hero/voice-desktop.jpg";
export const lessonImage = "/images/showcase/client-live-piano-lesson.jpg";
export const stageImage = "/images/showcase/client-sax-recital-deborah.jpg";

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
    name: "Piano & Keyboard",
    category: "Instrument",
    level: "From age 5 & above • All grades",
    tagline:
      "Touch, sight-reading, worship voicings, chords, and musical confidence.",
    description:
      "Build posture, hand shape, two-hand coordination, reading fluency, and expressive playing across classical, gospel, and contemporary music on acoustic piano and digital keyboard.",
    curriculum: [
      "Keyboard geography & posture",
      "Two-hand coordination & technique",
      "Sight-reading & music literacy",
      "Chord voicings & accompaniment",
      "Classical, worship & modern pieces",
      "ABRSM, Muson & Trinity exam prep",
    ],
    VectorIcon: GrandPianoVector,
  },
  {
    id: "voice",
    name: "Voice Training",
    category: "Vocal studies",
    level: "From age 5 & above • All skill levels",
    tagline: "Breath, pitch, range, diction, and performance control.",
    description:
      "Develop a healthy singing voice through guided warmups, pitch accuracy, range extension, vowel placement, and confident delivery.",
    curriculum: [
      "Breath support & diaphragmatic control",
      "Pitch accuracy & ear training",
      "Vocal range extension",
      "Diction & vowel placement",
      "Song interpretation & stage presence",
    ],
    VectorIcon: StudioMicVector,
  },
  {
    id: "saxophone",
    name: "Saxophone",
    category: "Wind",
    level: "From age 7 & above • Beginner to advanced",
    tagline: "Warm tone, breath support, phrasing, scales, and improvisation.",
    description:
      "Train embouchure, tone control, articulation, melodic phrasing, and scale language for worship, jazz, and contemporary playing.",
    curriculum: [
      "Embouchure & breath control",
      "Tone extraction & dynamics",
      "Tonguing & articulation",
      "Major, minor & blues scales",
      "Improvisation & worship phrasing",
    ],
    VectorIcon: SaxophoneVector,
  },
  {
    id: "drums",
    name: "Drums",
    category: "Rhythm",
    level: "From age 5 & above • Beginner to advanced",
    tagline: "Timing, independence, stick control, and Afro-gospel grooves.",
    description:
      "Build a strong rhythmic foundation with metronome discipline, four-way independence, rudiments, fills, and practical groove vocabulary.",
    curriculum: [
      "Essential rudiments & stick control",
      "Four-way limb independence",
      "Metronome timing & groove locking",
      "Afrobeats, jazz & gospel grooves",
      "Graded drum exam preparation",
    ],
    VectorIcon: DrumsVector,
  },
  {
    id: "violin",
    name: "Violin",
    category: "Strings",
    level: "From age 5 & above • All grades",
    tagline: "Posture, bowing, intonation, vibrato, and classical pieces.",
    description:
      "Learn clean posture, bow grip, tone production, fingerboard accuracy, and expressive playing through a structured string pathway.",
    curriculum: [
      "Instrument setup & posture",
      "Bow grip & stroke mechanics",
      "Intonation & ear training",
      "Suzuki method & classical pieces",
      "ABRSM & Trinity exam prep",
    ],
    VectorIcon: ViolinVector,
  },
  {
    id: "acoustic-guitar",
    name: "Acoustic Guitar",
    category: "Strings",
    level: "From age 6 & above • Beginner to song-ready",
    tagline: "Fingerstyle, chords, rhythm, and acoustic accompaniment.",
    description:
      "Move from first chords to full songs with strong rhythm, clean transitions, fingerpicking patterns, and tasteful accompaniment.",
    curriculum: [
      "Open & barre chord mastery",
      "Strumming patterns & rhythm timing",
      "Fingerpicking & arpeggios",
      "Song accompaniment & lead lines",
      "Contemporary & worship repertoire",
    ],
    VectorIcon: AcousticGuitarVector,
  },
  {
    id: "bass-guitar",
    name: "Bass Guitar",
    category: "Groove",
    level: "From age 7 & above • Beginner to band-ready",
    tagline: "Pocket, harmony, walking lines, slap, and ensemble confidence.",
    description:
      "Learn to anchor a band with solid timing, clean technique, harmony awareness, groove vocabulary, and practical bassline building.",
    curriculum: [
      "Root-fifth foundation & rhythm locking",
      "Arpeggios & scale runs",
      "Walking bassline construction",
      "Slap, pop & mute control",
      "Live band ensemble dynamics",
    ],
    VectorIcon: BassGuitarVector,
  },
  {
    id: "theory",
    name: "Music Theory",
    category: "Literacy",
    level: "All ages • Grade 1 to 8 prep",
    tagline: "Notation, rhythm, scales, intervals, harmony, and exams.",
    description:
      "Understand how music works on paper and in the ear through clear lessons in notation, rhythm, scale systems, and chord construction.",
    curriculum: [
      "Clefs, staves & pitch notation",
      "Time signatures & rhythmic math",
      "Major, minor & chromatic scales",
      "Intervals, triads & harmonic analysis",
      "ABRSM & Trinity theory exam syllabus",
    ],
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
    a: "We offer training in Piano & Keyboard, Saxophone, Drums, Violin, Acoustic Guitar, Bass Guitar, as well as Voice Training and Music Theory.",
  },
];

export function getWhatsAppLink(customText?: string) {
  const text =
    customText ||
    "Hello ProsperWork Music Concepts, I would like to book a FREE one-on-one trial assessment.";
  return `https://wa.me/${SCHOOL_PHONE}?text=${encodeURIComponent(text)}`;
}

export const academyImages = {
  pianoLesson: "/images/showcase/client-live-piano-lesson.jpg",
  saxRecital: "/images/showcase/client-sax-recital-deborah.jpg",
  liveGuitar: "/images/showcase/client-live-guitar-class.jpg",
  keyboardSession: "/images/showcase/client-live-keyboard-session.jpg",
  drumLesson: "/images/showcase/showcase-drum-lesson.jpg",
  violinStudent: "/images/showcase/showcase-violin-student.jpg",
  guitarStudent: "/images/showcase/showcase-guitar-student.jpg",
  jesusKids: "/images/showcase/showcase-jesus-kids.jpg",
  annualAwards: "/images/showcase/video-thumb-deborah-recital.jpg",
  onlineSession: "/images/showcase/showcase-online-session.jpg",
  vocalCoaching: "/images/showcase/showcase-vocal-coaching.jpg",
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
  videoUrl?: string; // local /videos/*.mp4 or embed URL
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
    title: "Deborah Mordi: Saxophone Solo Recital",
    category: "recitals",
    categoryLabel: "Student Recital",
    instrument: "Saxophone",
    performerOrStudent: "Deborah Mordi (Saxophone Student)",
    caption:
      "Watch Deborah perform a live alto saxophone solo with warm tone and expressive phrasing developed through 1-on-1 coaching.",
    imageSrc: "/images/showcase/video-thumb-deborah-recital.jpg",
    videoDuration: "0:26",
    videoUrl: "/videos/deborah-sax-recital.mp4",
  },
  {
    id: "media-2",
    type: "video",
    title: "Deborah Mordi: Student Journey & Experience",
    category: "recitals",
    categoryLabel: "Student Story",
    instrument: "Saxophone",
    performerOrStudent: "Deborah Mordi (Student Testimonial)",
    caption:
      "Deborah shares how patient, structured instruction and attentive feedback helped her build confidence on the saxophone.",
    imageSrc: "/images/showcase/video-thumb-deborah-testimonial.jpg",
    videoDuration: "1:03",
    videoUrl: "/videos/deborah-mordi-testimonial.mp4",
  },
  {
    id: "media-3",
    type: "photo",
    title: "Live 1-on-1 Online Piano & Chord Guidance",
    category: "lessons",
    categoryLabel: "Live Lesson",
    instrument: "Piano & Keys",
    performerOrStudent: "Online Piano Student with Instructor",
    caption:
      "Split-screen live interactive session: digital chord charts and keyboard visualization on screen paired with acoustic piano practice at home.",
    imageSrc: "/images/showcase/client-live-piano-lesson.jpg",
  },
  {
    id: "media-4",
    type: "video",
    title: "Junior Saxophone Solo Performance",
    category: "recitals",
    categoryLabel: "Student Recital",
    instrument: "Saxophone",
    performerOrStudent: "Junior Saxophone Student",
    caption:
      "Energetic live playing demonstrating steady embouchure, dynamic control, and accurate note articulation.",
    imageSrc: "/images/showcase/video-thumb-student-sax-performance.jpg",
    videoDuration: "0:15",
    videoUrl: "/videos/student-sax-performance.mp4",
  },
  {
    id: "media-5",
    type: "video",
    title: "Saxophone Student Learning Journey & Review",
    category: "recitals",
    categoryLabel: "Student Story",
    instrument: "Saxophone",
    performerOrStudent: "Saxophone Student Experience",
    caption:
      "Reflecting on rapid technical progress, encouraging instructor support, and personalized weekly lesson goals.",
    imageSrc: "/images/showcase/video-thumb-student-sax-story.jpg",
    videoDuration: "1:00",
    videoUrl: "/videos/student-sax-story.mp4",
  },
  {
    id: "media-6",
    type: "photo",
    title: "Live Guitar Theory & Fretboard Class",
    category: "lessons",
    categoryLabel: "Live Lesson",
    instrument: "Guitar",
    performerOrStudent: "Ethan with Instructor Ezenduka",
    caption:
      "Live 1-on-1 guitar session covering fretboard notation, musical manuscript notes, and practical chord hand positions.",
    imageSrc: "/images/showcase/client-live-guitar-class.jpg",
  },
  {
    id: "media-7",
    type: "photo",
    title: "Interactive Keyboard Note-by-Note Masterclass",
    category: "lessons",
    categoryLabel: "Live Lesson",
    instrument: "Keyboard",
    performerOrStudent: "Keyboard Beginner Pathway",
    caption:
      "Step-by-step key identification, note chart reading, and melodic finger technique on Yamaha digital keyboard.",
    imageSrc: "/images/showcase/client-live-keyboard-session.jpg",
  },
  {
    id: "media-8",
    type: "photo",
    title: "Alto Saxophone Tone & Breathing Practice",
    category: "lessons",
    categoryLabel: "Live Practice",
    instrument: "Saxophone",
    performerOrStudent: "Deborah Mordi",
    caption:
      "Building clean lower-register articulation, steady breath support, and disciplined recital preparation at home.",
    imageSrc: "/images/showcase/client-sax-recital-deborah.jpg",
  },
  {
    id: "media-9",
    type: "photo",
    title: "Jesus Kids Praise & Worship Fellowship",
    category: "jesus-kids",
    categoryLabel: "Jesus Kids",
    instrument: "Choir & Keys",
    performerOrStudent: "ProsperWork Children Fellowship",
    caption:
      "Children reciting scriptures and performing worship praise songs with keyboard accompaniment.",
    imageSrc: "/images/showcase/showcase-jesus-kids.jpg",
  },
  {
    id: "media-10",
    type: "photo",
    title: "Annual Online Showcase & Talent Award Ceremony",
    category: "awards",
    categoryLabel: "Awards & Certificates",
    instrument: "All Instruments",
    performerOrStudent: "Annual Competition Winners",
    caption:
      "Recognizing student diligence with certificates, MUSON preparation commendations, and performance prizes.",
    imageSrc: academyImages.annualAwards,
  },
  {
    id: "media-11",
    type: "photo",
    title: "Admin Oversight & Seamless Lesson Monitoring",
    category: "lessons",
    categoryLabel: "Academy Standard",
    instrument: "Quality Assurance",
    performerOrStudent: "ProsperWork Academic Operations",
    caption:
      "Every lesson is backed by live administrative attendance and curriculum tracking for complete peace of mind.",
    imageSrc: "/images/showcase/showcase-online-session.jpg",
  },
];
