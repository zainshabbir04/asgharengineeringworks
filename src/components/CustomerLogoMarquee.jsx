import { customers } from '../data/customers.js';
import ScrollReveal from './ScrollReveal.jsx';
import SectionTitle from './SectionTitle.jsx';

export default function CustomerLogoMarquee({ showTitle = true }) {
  const loopedCustomers = [...customers, ...customers];

  return (
    <section className="overflow-hidden bg-white py-12">
      <div className="container-shell">
        {showTitle ? (
          <ScrollReveal className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <SectionTitle eyebrow="Customer Network" title="Serving recognized industrial names.">
              Asghar Engineering Works supports manufacturing, automotive, engineering, and industrial customers with
              precision machined components.
            </SectionTitle>
          </ScrollReveal>
        ) : null}

        <ScrollReveal className="relative overflow-hidden border-y border-slate-200 bg-slate-50 py-5" delay={80}>
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-slate-50 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-slate-50 to-transparent" />
          <div className="customer-marquee flex w-max items-center gap-5">
            {loopedCustomers.map((customer, index) => (
              <div
                className="logo-surface grid h-24 w-52 shrink-0 place-items-center rounded-lg border border-slate-200 p-4 shadow-sm"
                key={`${customer.name}-${index}`}
              >
                <img className="max-h-16 w-full object-contain" src={customer.logo} alt={`${customer.name} logo`} loading="lazy" />
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
