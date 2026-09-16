import { useState } from "react";
import {
  Play,
  Film,
  Image as ImageIcon,
  Sparkles,
  Trophy,
  Users2,
  X,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import { Link } from "wouter";
import { PageHero } from "@/components/site/page-blocks";
import {
  showcaseCategories,
  showcaseMedia,
  ShowcaseMediaItem,
  getWhatsAppLink,
} from "@/lib/site-data";

export default function ShowcasePage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeVideo, setActiveVideo] = useState<ShowcaseMediaItem | null>(
    null
  );
  const [activePhoto, setActivePhoto] = useState<ShowcaseMediaItem | null>(
    null
  );

  const filteredMedia =
    activeCategory === "all"
      ? showcaseMedia
      : showcaseMedia.filter((item) => item.category === activeCategory);

  return (
    <>
      <PageHero
        eyebrow="Media & Showcases"
        title="Real moments, live lessons, and student recitals."
        copy="Explore how our students grow from their very first notes to confident performances. Watch live student recitals, see our 1-on-1 coaching sessions, and discover our award-winning learning environment."
        image="/images/showcase/showcase-annual-awards.jpg"
      />

      {/* Academy Quality Milestones Strip */}
      <section className="showcase-milestones-bar">
        <div className="page-wrap showcase-milestones-inner">
          <div className="milestone-item">
            <Trophy size={20} className="milestone-icon" />
            <div>
              <strong>100% Exam Pass Rate</strong>
              <span>MUSON, ABRSM & Trinity pathway prep</span>
            </div>
          </div>
          <div className="milestone-item">
            <Users2 size={20} className="milestone-icon" />
            <div>
              <strong>Global Student Community</strong>
              <span>Teaching UK, US, Denmark, Nigeria & worldwide</span>
            </div>
          </div>
          <div className="milestone-item">
            <ShieldCheck size={20} className="milestone-icon" />
            <div>
              <strong>24/7 Quality Oversight</strong>
              <span>Live administrative attendance for every lesson</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Gallery Section */}
      <section className="page-section">
        <div className="page-wrap">
          {/* Filter Categories Bar */}
          <div
            className="showcase-filter-nav"
            role="tablist"
            aria-label="Media Categories"
          >
            {showcaseCategories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                role="tab"
                aria-selected={activeCategory === cat.id}
                className={`showcase-filter-btn ${
                  activeCategory === cat.id ? "active" : ""
                }`}
                onClick={() => setActiveCategory(cat.id)}
              >
                {cat.id === "recitals" && <Film size={15} />}
                {cat.id === "lessons" && <ImageIcon size={15} />}
                {cat.id === "awards" && <Trophy size={15} />}
                {cat.id === "jesus-kids" && <Sparkles size={15} />}
                <span>{cat.label}</span>
                <span className="filter-count">
                  {cat.id === "all"
                    ? showcaseMedia.length
                    : showcaseMedia.filter((m) => m.category === cat.id).length}
                </span>
              </button>
            ))}
          </div>

          {/* Media Grid */}
          <div className="showcase-grid">
            {filteredMedia.map((item) => (
              <article
                key={item.id}
                className={`showcase-card ${
                  item.type === "video" ? "is-video" : "is-photo"
                }`}
                onClick={() => {
                  if (item.type === "video") setActiveVideo(item);
                  else setActivePhoto(item);
                }}
              >
                {/* Media Image / Thumbnail */}
                <div className="showcase-img-wrap">
                  <img
                    src={item.imageSrc}
                    alt={item.title}
                    loading="lazy"
                    className="showcase-img"
                  />
                  <div className="showcase-overlay" />

                  {/* Badge & Duration */}
                  <div className="showcase-badge-top">
                    <span className="media-type-tag">
                      {item.type === "video" ? (
                        <>
                          <Film size={12} />
                          Video Recital
                        </>
                      ) : (
                        <>
                          <ImageIcon size={12} />
                          {item.categoryLabel}
                        </>
                      )}
                    </span>
                    {item.videoDuration && (
                      <span className="media-duration-tag">
                        {item.videoDuration}
                      </span>
                    )}
                  </div>

                  {/* Play Button Icon for Videos */}
                  {item.type === "video" && (
                    <div
                      className="showcase-play-trigger"
                      aria-label="Play video"
                    >
                      <div className="play-pulse" />
                      <div className="play-circle">
                        <Play
                          size={20}
                          className="fill-white translate-x-0.5"
                        />
                      </div>
                    </div>
                  )}

                  {/* Instrument Badge Bottom */}
                  <span className="showcase-instrument-pill">
                    {item.instrument}
                  </span>
                </div>

                {/* Card Content */}
                <div className="showcase-content">
                  <h3 className="showcase-title">{item.title}</h3>
                  <div className="showcase-performer">
                    <CheckCircle2
                      size={14}
                      className="text-emerald-600 flex-shrink-0"
                    />
                    <span>{item.performerOrStudent}</span>
                  </div>
                  <p className="showcase-desc">{item.caption}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Video Modal Player */}
      {activeVideo && (
        <div
          className="media-modal-backdrop"
          onClick={() => setActiveVideo(null)}
          role="dialog"
          aria-modal="true"
          aria-label={activeVideo.title}
        >
          <div
            className="media-modal-container"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="media-modal-header">
              <div>
                <span className="media-modal-eyebrow">
                  {activeVideo.instrument} • {activeVideo.categoryLabel}
                </span>
                <h2 className="media-modal-title">{activeVideo.title}</h2>
              </div>
              <button
                type="button"
                className="media-modal-close"
                onClick={() => setActiveVideo(null)}
                aria-label="Close video modal"
              >
                <X size={20} />
              </button>
            </div>

            <div className="media-video-frame">
              <iframe
                src={activeVideo.videoUrl}
                title={activeVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="video-iframe"
              />
            </div>

            <div className="media-modal-footer">
              <p className="media-modal-caption">
                <strong>{activeVideo.performerOrStudent}:</strong>{" "}
                {activeVideo.caption}
              </p>
              <a
                href={getWhatsAppLink(
                  `Hello ProsperWork, I watched ${activeVideo.title} and I'd like to book a free trial assessment.`
                )}
                target="_blank"
                rel="noreferrer"
                className="primary-link modal-action-btn"
              >
                Book a Trial for {activeVideo.instrument}
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Photo Lightbox Modal */}
      {activePhoto && (
        <div
          className="media-modal-backdrop"
          onClick={() => setActivePhoto(null)}
          role="dialog"
          aria-modal="true"
          aria-label={activePhoto.title}
        >
          <div
            className="media-modal-container photo-mode"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="media-modal-header">
              <div>
                <span className="media-modal-eyebrow">
                  {activePhoto.instrument} • {activePhoto.categoryLabel}
                </span>
                <h2 className="media-modal-title">{activePhoto.title}</h2>
              </div>
              <button
                type="button"
                className="media-modal-close"
                onClick={() => setActivePhoto(null)}
                aria-label="Close photo preview"
              >
                <X size={20} />
              </button>
            </div>

            <div className="media-photo-frame">
              <img
                src={activePhoto.imageSrc}
                alt={activePhoto.title}
                className="lightbox-img"
              />
            </div>

            <div className="media-modal-footer">
              <p className="media-modal-caption">
                <strong>{activePhoto.performerOrStudent}:</strong>{" "}
                {activePhoto.caption}
              </p>
              <a
                href={getWhatsAppLink(
                  `Hello ProsperWork, I would like to enquire about ${activePhoto.instrument} lessons.`
                )}
                target="_blank"
                rel="noreferrer"
                className="primary-link modal-action-btn"
              >
                Enquire for {activePhoto.instrument}
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Showcase Bottom Enrollment CTA */}
      <section className="page-section tinted">
        <div className="page-wrap enrollment-band">
          <div>
            <span className="eyebrow">Start your journey</span>
            <h2>See your child perform on our next recital stage.</h2>
            <p>
              Book a free 1-on-1 trial assessment. We will understand the
              learner’s goals, assess their current level, and pair them with an
              expert instructor.
            </p>
          </div>
          <div>
            <a
              href={getWhatsAppLink(
                "Hello ProsperWork Music Concepts, I saw your student showcases and would like to book a FREE trial assessment."
              )}
              target="_blank"
              rel="noreferrer"
              className="primary-link"
            >
              Book a FREE Trial Assessment
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
