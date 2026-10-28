import { CheckCircle2, Factory, Gauge } from 'lucide-react';
import ScrollReveal from './ScrollReveal.jsx';

const headerSteps = ['Requirement review', 'Machining plan', 'Quality check'];

export default function PageHeader({ eyebrow, title, children }) {
  return (
    <section className="blueprint-header">
      <div className="container-shell grid gap-8 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-end">
        <ScrollReveal className="max-w-4xl">
          {eyebrow ? (
            <p className="mb-4 inline-flex items-center gap-2 rounded-md border border-white/16 bg-white/10 px-3 py-2 text-sm font-extrabold uppercase text-sky-100">
              <Factory size={17} aria-hidden="true" />
              {eyebrow}
            </p>
          ) : null}
          <h1 className="font-display text-3xl font-black leading-tight text-white sm:text-4xl md:text-6xl">{title}</h1>
          {children ? <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-200">{children}</p> : null}
        </ScrollReveal>

        <ScrollReveal className="blueprint-meter rounded-lg p-5" delay={120}>
          <div className="relative z-10">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-extrabold uppercase text-amber-300">Workshop flow</p>
                <h2 className="mt-1 text-2xl font-black text-white">Built for inquiries</h2>
              </div>
              <div className="grid h-12 w-12 place-items-center rounded-md bg-white text-[var(--brand-strong)]">
                <Gauge size={24} aria-hidden="true" />
              </div>
            </div>
            <div className="mt-5 grid gap-3">
              {headerSteps.map((step, index) => (
                <div className="flex items-center gap-3 rounded-md border border-white/12 bg-white/10 px-3 py-3" key={step}>
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-md bg-white text-sm font-black text-[var(--brand-strong)]">
                    {index + 1}
                  </span>
                  <span className="font-bold text-slate-100">{step}</span>
                  <CheckCircle2 className="ml-auto text-amber-300" size={18} aria-hidden="true" />
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
