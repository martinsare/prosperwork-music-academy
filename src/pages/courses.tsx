import { useMemo, useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';

import { PageHero } from '@/components/site/page-blocks';
import { courses, getWhatsAppLink, lessonImage } from '@/lib/site-data';

export default function CoursesPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = useMemo(() => ['All', ...Array.from(new Set(courses.map((course) => course.category)))], []);
  const filteredCourses = activeCategory === 'All' ? courses : courses.filter((course) => course.category === activeCategory);

  return (
    <>
      <PageHero
        eyebrow="Course catalog"
        title="Music Theory, Voice Training, and Instrument Instruction."
        copy="We offer Music Theory, Voice Training, and comprehensive instrument instruction, including Afro music styles."
        image={lessonImage}
      />

      <section className="page-section">
        <div className="page-wrap">
          <div className="filter-bar" aria-label="Course categories">
            {categories.map((category) => (
              <button key={category} type="button" className={activeCategory === category ? 'active' : ''} onClick={() => setActiveCategory(category)}>
                {category}
              </button>
            ))}
          </div>

          <div className="course-grid">
            {filteredCourses.map((course) => (
              <article className="course-detail-card" key={course.id}>
                <div className="course-icon">
                  <course.VectorIcon />
                </div>
                <div>
                  <span>{course.level}</span>
                  <h2>{course.name}</h2>
                  <p>{course.description}</p>
                </div>
                <ul>
                  {course.curriculum.map((item) => (
                    <li key={item}>
                      <Check size={15} />
                      {item}
                    </li>
                  ))}
                </ul>
                <a href={getWhatsAppLink(`Hello ProsperWork Music Concepts, I would like to ask about ${course.name} lessons.`)} target="_blank" rel="noreferrer">
                  Ask about {course.name}
                  <ArrowRight size={16} />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
