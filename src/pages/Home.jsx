import { ArrowRight, CheckCircle2, Clock, Cog, Factory, Gauge, Ruler, ShieldCheck, Wrench } from 'lucide-react';
import { Link } from 'react-router-dom';
import CTA from '../components/CTA.jsx';
import CustomerLogoMarquee from '../components/CustomerLogoMarquee.jsx';
import PageMeta from '../components/PageMeta.jsx';
import ScrollReveal from '../components/ScrollReveal.jsx';
import SectionTitle from '../components/SectionTitle.jsx';
import { products } from '../data/products.js';
import { assetPath } from '../utils/assetPath.js';

const strengths = [
  { icon: ShieldCheck, title: 'Quality Focus', copy: 'Inspection-minded production for dependable engineering parts.' },
  { icon: Gauge, title: 'Precision Work', copy: 'Machining and finishing workflows shaped around dimensional accuracy.' },
  { icon: Clock, title: 'Timely Delivery', copy: 'Straightforward inquiry flow for clear quantity and delivery discussion.' },
  { icon: Cog, title: 'Custom Components', copy: 'Support for drawings, samples, repairs, and small-to-batch requirements.' },
];

const capabilities = [
  { icon: Wrench, title: 'Turning and Boring', copy: 'Clean machining support for round, stepped, and bored metal work.' },
  { icon: Ruler, title: 'Fitment Review', copy: 'Measurements and matching checks for drawing, sample, and repair jobs.' },
  { icon: Cog, title: 'Threading and Fitting', copy: 'Practical support for threaded, connected, and assembled components.' },
  { icon: CheckCircle2, title: 'Final Finishing', copy: 'Surface, edge, and readiness checks before delivery discussion.' },
];

const workflow = ['Requirement review', 'Material discussion', 'Machining plan', 'Inspection and delivery'];
const bannerItems = ['Drawing Review', 'Sample Matching', 'Custom Machining', 'Finish Check'];
const heroStats = ['Drawing support', 'Sample matching', 'Custom sizes', 'Direct inquiry'];
const serviceProducts = products.slice(1, 9);

export default function Home() {
  return (
    <>
      <PageMeta
        title="Precision Engineering Components"
        description="Asghar Engineering Works manufactures precision machined components with quality inspection and direct inquiry support."
      />

      <section
        className="animated-hero hero-stage motion-fade-in relative overflow-hidden bg-slate-950 text-white"
        style={{
          backgroundImage:
            `linear-gradient(90deg, rgba(7, 23, 44, 0.9) 0%, rgba(17, 65, 128, 0.74) 48%, rgba(47, 111, 211, 0.28) 100%), url('${assetPath('/images/hero-manufacturing.png')}')`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      >
        <div className="container-shell relative z-10 grid min-h-[78vh] items-center gap-10 py-14 lg:grid-cols-[1fr_380px]">
          <div className="motion-fade-up w-full min-w-0 max-w-3xl">
            <p className="mb-4 inline-flex items-center gap-2 rounded-md border border-white/18 bg-white/10 px-3 py-2 text-sm font-bold text-slate-100">
              <Factory size={17} aria-hidden="true" />
              From sample review to finished component
            </p>
            <h1 className="max-w-full text-4xl font-black leading-[1.05] text-white sm:text-5xl md:text-7xl">
              <span className="block">Custom CNC machining</span>
              <span className="block">made straightforward.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200 md:text-xl">
              Asghar Engineering Works supports precision machined components, drawing discussions, sample matching,
              finishing checks, and direct workshop communication.
            </p>
            <div className="mt-8 flex min-w-0 flex-wrap gap-3">
              <Link className="btn-primary focus-ring min-w-0 w-full sm:w-auto" to="/products">
                Explore Capability
                <ArrowRight size={18} aria-hidden="true" />
              </Link>
              <Link className="btn-secondary focus-ring min-w-0 w-full sm:w-auto" to="/contact">
                Start Quote
                <ArrowRight size={18} aria-hidden="true" />
              </Link>
            </div>
            <div className="mt-10 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4">
              {heroStats.map((item) => (
                <div className="stat-tile rounded-lg border border-white/14 bg-white/10 px-4 py-3 backdrop-blur" key={item}>
                  <p className="text-sm font-extrabold text-white">{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="motion-fade-up motion-delay-2 hidden lg:block">
            <div className="hero-product-panel floating-panel border border-white/14 bg-white/10 p-5 backdrop-blur">
              <p className="text-sm font-bold text-amber-200">Instant inquiry desk</p>
              <h2 className="mt-2 font-display text-3xl font-black text-white">Tell us what you need machined.</h2>
              <div className="mt-6 grid gap-3">
                {workflow.map((item, index) => (
                  <div className="grid grid-cols-[42px_1fr] items-center gap-3 rounded-md border border-white/12 bg-white/10 p-3" key={item}>
                    <span className="grid h-10 w-10 place-items-center rounded-md bg-white text-sm font-black text-[var(--brand)]">
                      {index + 1}
                    </span>
                    <span className="font-bold text-slate-100">{item}</span>
                  </div>
                ))}
              </div>
              <Link className="btn-primary mt-6 w-full" to="/contact">
                Request Discussion
                <ArrowRight size={18} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-0">
        <div className="container-shell">
          <ScrollReveal className="quote-strip -mt-8 grid overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xl sm:grid-cols-2 lg:grid-cols-4">
            {[
              ['Inquiry', 'Drawing or sample review'],
              ['Material', 'Requirement discussion'],
              ['Machining', 'Custom component support'],
              ['Delivery', 'Clear contact and follow-up'],
            ].map(([label, value]) => (
              <div className="border-b border-slate-200 px-5 py-5 sm:border-r sm:last:border-r-0 lg:border-b-0" key={label}>
                <p className="eyebrow">{label}</p>
                <p className="mt-2 text-lg font-black text-slate-950">{value}</p>
              </div>
            ))}
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-white py-6">
        <div className="container-shell">
          <ScrollReveal
            className="home-banner relative overflow-hidden rounded-xl border border-white/12 px-5 py-8 text-white shadow-2xl md:px-8 lg:px-10"
            style={{
              backgroundImage:
                `linear-gradient(105deg, rgba(7, 23, 44, 0.96) 0%, rgba(17, 65, 128, 0.88) 52%, rgba(47, 111, 211, 0.54) 100%), url('${assetPath('/images/hero-manufacturing.png')}')`,
            }}
          >
            <div className="relative z-10 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.72fr)] lg:items-center">
              <div>
                <p className="inline-flex items-center gap-2 rounded-md border border-white/18 bg-white/10 px-3 py-2 text-sm font-bold text-sky-100">
                  <Gauge size={17} aria-hidden="true" />
                  Manufacturing support
                </p>
                <h2 className="mt-4 max-w-3xl font-display text-3xl font-black leading-tight text-white md:text-5xl">
                  Reliable machining support without complicated inquiry steps.
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-7 text-slate-200 md:text-lg">
                  Share the requirement, confirm the important dimensions, then discuss finishing and delivery through a
                  direct contact point.
                </p>
              </div>

              <div className="grid gap-3">
                <div className="grid grid-cols-2 gap-3">
                  {bannerItems.map((item) => (
                    <div className="rounded-md border border-white/14 bg-white/10 px-4 py-3 backdrop-blur" key={item}>
                      <p className="text-sm font-extrabold text-white">{item}</p>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-3 pt-2">
                  <Link className="btn-primary min-w-0 flex-1 sm:flex-none" to="/contact">
                    Start Inquiry
                    <ArrowRight size={18} aria-hidden="true" />
                  </Link>
                  <Link className="btn-secondary min-w-0 flex-1 sm:flex-none" to="/products">
                    View Catalog
                    <ArrowRight size={18} aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <CustomerLogoMarquee />

      <section className="page-band blueprint-section">
        <div className="container-shell">
          <ScrollReveal className="split-layout lg:items-center">
            <SectionTitle eyebrow="Company Profile" title="Built for reliable industrial part inquiries.">
              Asghar Engineering Works manufactures precision metal components for customers who need reliable fitting,
              clean finishing, and straightforward communication.
            </SectionTitle>
            <div className="animated-rail grid gap-4 sm:grid-cols-2">
              {strengths.map((item) => {
                const Icon = item.icon;
                return (
                  <article className="layout-card stat-tile rounded-lg p-5" key={item.title}>
                    <Icon className="text-teal-700" size={28} aria-hidden="true" />
                    <h3 className="mt-4 text-lg font-black text-slate-950">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{item.copy}</p>
                  </article>
                );
              })}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="page-band bg-white">
        <div className="container-shell">
          <ScrollReveal className="rounded-xl border border-slate-200 bg-[var(--brand-soft)] p-5 shadow-sm md:p-7">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <SectionTitle eyebrow="Machining Services" title="Workshop-made precision component samples.">
                A clean photo preview of machined components, with full details kept inside the products catalog.
              </SectionTitle>
              <Link className="btn-quiet w-fit" to="/products">
                Open Products Page
                <ArrowRight size={18} aria-hidden="true" />
              </Link>
            </div>
          </ScrollReveal>
          <ScrollReveal className="service-photo-grid mt-10" delay={80}>
            {serviceProducts.map((product, index) => (
              <Link
                className="service-photo-tile focus-ring"
                key={product.id}
                to={`/products/${product.id}`}
                aria-label={`Open ${product.name} product detail`}
                style={{ '--tile-delay': `${index * 70}ms` }}
              >
                <img
                  src={product.image}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  style={{ objectPosition: product.imagePosition }}
                />
              </Link>
            ))}
          </ScrollReveal>
        </div>
      </section>

      <section className="page-band blueprint-section">
        <div className="container-shell">
          <ScrollReveal className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div className="process-panel layout-panel rounded-lg border border-slate-200 bg-slate-950 p-6 text-white">
              <p className="eyebrow text-white">Process Board</p>
              <h2 className="mt-3 font-display text-3xl font-black">From sample to finished work.</h2>
              <div className="mt-8 grid gap-4">
                {workflow.map((item, index) => (
                  <div className="tech-row items-start" key={item}>
                    <div className="grid h-12 w-12 place-items-center rounded-md bg-white font-black text-[var(--brand)]">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                    <div>
                      <h3 className="text-lg font-black text-white">{item}</h3>
                      <p className="mt-1 text-sm leading-6 text-slate-300">
                        Each step keeps communication clear, dimensions practical, and delivery expectations direct.
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <SectionTitle eyebrow="Manufacturing Capability" title="Clear workflows for custom engineering work.">
                Our workflow is built around practical requirements: sample review, drawing discussion, machining,
                finishing, and final inspection.
              </SectionTitle>
              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {capabilities.map((capability) => (
                  <div className="layout-card stat-tile flex items-center gap-3 rounded-lg px-4 py-3" key={capability.title}>
                    <Wrench size={18} className="text-amber-600" aria-hidden="true" />
                    <span className="font-bold text-slate-800">{capability.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <CTA />
    </>
  );
}
