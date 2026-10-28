import { ArrowRight, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { company } from '../data/company.js';
import ScrollReveal from './ScrollReveal.jsx';

export default function CTA() {
  return (
    <section className="blueprint-header py-14 text-white">
      <div className="container-shell">
        <ScrollReveal className="blueprint-meter grid items-center gap-8 rounded-lg p-6 lg:grid-cols-[1fr_auto]">
          <div>
            <p className="eyebrow text-amber-300">Direct inquiry</p>
            <h2 className="mt-3 text-3xl font-black leading-tight md:text-4xl">Need a custom engineering component?</h2>
            <p className="mt-4 max-w-2xl leading-7 text-slate-300">
              Share your drawing, sample, or product requirement and the team can discuss material, finish, quantity, and
              delivery.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a className="btn-secondary" href={`tel:${company.phones[0].replaceAll('-', '')}`}>
              <Phone size={18} aria-hidden="true" />
              Call Now
            </a>
            <Link className="btn-secondary" to="/contact">
              Contact Page
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
