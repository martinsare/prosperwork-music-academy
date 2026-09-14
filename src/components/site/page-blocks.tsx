import { type FormEvent, type ReactNode, useState } from 'react';
import { Send } from 'lucide-react';

import { courses, getWhatsAppLink, SCHOOL_PHONE } from '@/lib/site-data';

export function PageHero({
  eyebrow,
  title,
  copy,
  image,
}: {
  eyebrow: string;
  title: string;
  copy: string;
  image?: string;
}) {
  return (
    <section className="page-hero">
      <div className={`page-wrap page-hero-grid${image ? '' : ' single'}`}>
        <div>
          <span className="eyebrow">{eyebrow}</span>
          <h1>{title}</h1>
          <p>{copy}</p>
        </div>
        {image && (
          <div className="page-hero-media">
            <img src={image} alt="" />
          </div>
        )}
      </div>
    </section>
  );
}

export function SectionIntro({ eyebrow, title, copy }: { eyebrow?: string; title: string; copy?: string }) {
  return (
    <div className="section-intro">
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2>{title}</h2>
      {copy && <p>{copy}</p>}
    </div>
  );
}

export function ContactMiniForm({ compact = false }: { compact?: boolean }) {
  const [name, setName] = useState('');
  const [selectedCourse, setSelectedCourse] = useState('Piano');
  const [experience, setExperience] = useState('Absolute Beginner');

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const text = `Hello ProsperWork Music Concepts! I would like to book a FREE 1-on-1 Trial Assessment.
- Student / Parent Name: ${name}
- Instrument / Course: ${selectedCourse}
- Current Level: ${experience}`;
    window.open(`https://wa.me/${SCHOOL_PHONE}?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <form className={compact ? 'lead-form compact' : 'lead-form'} onSubmit={handleSubmit}>
      <div>
        <label htmlFor="lead-name">Name</label>
        <input id="lead-name" required value={name} onChange={(event) => setName(event.target.value)} placeholder="Student or parent name" />
      </div>
      <div className="form-pair">
        <div>
          <label htmlFor="lead-course">Course</label>
          <select id="lead-course" value={selectedCourse} onChange={(event) => setSelectedCourse(event.target.value)}>
            {courses.map((course) => (
              <option key={course.id} value={course.name}>
                {course.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="lead-level">Level</label>
          <select id="lead-level" value={experience} onChange={(event) => setExperience(event.target.value)}>
            <option>Absolute Beginner</option>
            <option>Beginner with basics</option>
            <option>Intermediate</option>
            <option>Advanced</option>
          </select>
        </div>
      </div>
      <button type="submit">
        <Send size={17} />
        Send to WhatsApp
      </button>
    </form>
  );
}

export function WhatsAppLink({ text, children, className }: { text?: string; children: ReactNode; className?: string }) {
  return (
    <a href={getWhatsAppLink(text)} target="_blank" rel="noreferrer" className={className}>
      {children}
    </a>
  );
}
