import { type FormEvent, useState } from 'react';
import { Clock3, Mail, MapPin, Phone, Send, Star, Trophy } from 'lucide-react';

import { PageHero } from '@/components/site/page-blocks';
import { courses, SCHOOL_EMAIL, SCHOOL_NAME, SCHOOL_PHONE, SCHOOL_PHONE_DISPLAY, SCHOOL_ADDRESS } from '@/lib/site-data';

export default function ContactPage() {
  const [name, setName] = useState('');
  const [selectedCourse, setSelectedCourse] = useState('Piano');
  const [experience, setExperience] = useState('Absolute Beginner');
  const [message, setMessage] = useState('');

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const text = `Hello ProsperWork Music Concepts! I am submitting an admissions inquiry:
- Name: ${name}
- Instrument / Course: ${selectedCourse}
- Level: ${experience}
- Questions / Schedule: ${message || 'None'}`;
    window.open(`https://wa.me/${SCHOOL_PHONE}?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      <PageHero
        eyebrow="Admissions"
        title="Book a FREE one-on-one trial assessment."
        copy="Prospective students can message the academy directly via WhatsApp or through the Instagram page to get started."
      />

      <section className="page-section">
        <div className="page-wrap contact-layout">
          <form className="admission-form" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Student / parent name</label>
              <input id="name" required value={name} onChange={(event) => setName(event.target.value)} placeholder="e.g. Samuel Adebayo" />
            </div>
            <div className="form-pair">
              <div>
                <label htmlFor="course">Course</label>
                <select id="course" value={selectedCourse} onChange={(event) => setSelectedCourse(event.target.value)}>
                  {courses.map((course) => (
                    <option key={course.id} value={course.name}>
                      {course.name}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="experience">Current level</label>
                <select id="experience" value={experience} onChange={(event) => setExperience(event.target.value)}>
                  <option>Absolute Beginner</option>
                  <option>Beginner with basics</option>
                  <option>Intermediate</option>
                  <option>Advanced</option>
                </select>
              </div>
            </div>
            <div>
              <label htmlFor="message">Questions or preferred schedule</label>
              <textarea id="message" value={message} onChange={(event) => setMessage(event.target.value)} rows={5} placeholder="Learner age, goals, preferred days..." />
            </div>
            <button type="submit">
              <Send size={18} />
              Send request via WhatsApp
            </button>
          </form>

          <aside className="contact-panel">
            <div>
              <h2>Direct contact</h2>
              <p>{SCHOOL_NAME}</p>
            </div>
            <a href={`https://wa.me/${SCHOOL_PHONE}`} target="_blank" rel="noreferrer">
              <Phone size={18} />
              {SCHOOL_PHONE_DISPLAY}
            </a>
            <a href={`mailto:${SCHOOL_EMAIL}`}>
              <Mail size={18} />
              {SCHOOL_EMAIL}
            </a>
            <span>
              <MapPin size={18} />
              {SCHOOL_ADDRESS}
            </span>
            <div className="mini-stats">
              <span>
                <Clock3 size={18} />
                Flexible scheduling
              </span>
              <span>
                <Star size={18} />
                FREE one-on-one trial assessment
              </span>
              <span>
                <Trophy size={18} />
                Student showcases
              </span>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
