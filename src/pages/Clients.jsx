import { Factory, Hammer, Settings, Wrench } from 'lucide-react';
import CTA from '../components/CTA.jsx';
import PageHeader from '../components/PageHeader.jsx';
import PageMeta from '../components/PageMeta.jsx';
import ScrollReveal from '../components/ScrollReveal.jsx';
import SectionTitle from '../components/SectionTitle.jsx';
import { customers } from '../data/customers.js';

const industries = [
  { icon: Factory, title: 'Manufacturing', copy: 'Component support for production and repair needs.' },
  { icon: Settings, title: 'Industrial', copy: 'Machined parts for equipment and assemblies.' },
  { icon: Wrench, title: 'Engineering', copy: 'Custom items based on drawings, samples, and fitment.' },
  { icon: Hammer, title: 'Maintenance', copy: 'Replacement parts and workshop repair support.' },
];

export default function Clients() {
  return (
    <>
      <PageMeta
        title="Clients"
        description="Industries served by Asghar Engineering Works, including manufacturing, industrial, engineering, and maintenance customers."
      />
      <PageHeader eyebrow="Clients" title="Industries served with practical engineering support.">
        Asghar Engineering Works works with customers who need reliable machined components, replacement parts, and
        custom engineering support.
      </PageHeader>

      <section className="page-band blueprint-section">
        <div className="container-shell">
          <ScrollReveal className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <SectionTitle eyebrow="Customer Logos" title="Companies and sectors connected with our work.">
              These logos represent the customer and industry network shown for Asghar Engineering Works.
            </SectionTitle>
            <div className="animated-rail rounded-lg border border-slate-200 bg-white/80 p-5 shadow-sm">
              <p className="text-sm font-bold uppercase text-slate-500">Customer network</p>
              <p className="mt-2 text-2xl font-black text-slate-950">Recognized industrial and engineering names.</p>
            </div>
          </ScrollReveal>
          <ScrollReveal className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4" delay={90}>
            {customers.map((customer) => (
              <article className="logo-surface layout-card grid h-32 place-items-center rounded-lg p-5" key={customer.name}>
                <img className="max-h-20 w-full object-contain" src={customer.logo} alt={`${customer.name} logo`} loading="lazy" />
              </article>
            ))}
          </ScrollReveal>

          <div className="mt-16">
            <SectionTitle eyebrow="Customer Groups" title="Built for buyers who need clear component communication." align="center">
              We support production teams, maintenance teams, and engineering buyers with clear communication from
              sample to delivery.
            </SectionTitle>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {industries.map((item) => {
              const Icon = item.icon;
              return (
                <article className="layout-card rounded-lg p-6" key={item.title}>
                  <Icon className="text-teal-700" size={30} aria-hidden="true" />
                  <h2 className="mt-5 text-xl font-black text-slate-950">{item.title}</h2>
                  <p className="mt-3 leading-6 text-slate-600">{item.copy}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
