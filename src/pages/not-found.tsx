import { ArrowRight, Music2 } from 'lucide-react';
import { Link } from 'wouter';

export default function NotFound() {
  return (
    <section className="not-found-page">
      <div className="not-found-mark">
        <Music2 size={24} />
      </div>
      <span className="eyebrow">Page unavailable</span>
      <h1>This page could not be found.</h1>
      <p>The page you’re looking for may have moved. Return to ProsperWork Music Concepts and continue exploring.</p>
      <Link className="primary-link" href="/">
        Back to home
        <ArrowRight size={17} />
      </Link>
    </section>
  );
}
