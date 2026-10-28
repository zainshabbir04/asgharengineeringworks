import { Building2, CheckCircle2, Target, Users } from 'lucide-react';
import CTA from '../components/CTA.jsx';
import PageHeader from '../components/PageHeader.jsx';
import PageMeta from '../components/PageMeta.jsx';
import ScrollReveal from '../components/ScrollReveal.jsx';
import SectionTitle from '../components/SectionTitle.jsx';
import { company } from '../data/company.js';

const values = ['Quality', 'Reliability', 'Precision', 'Customer satisfaction'];

export default function About() {
  return (
    <>
      <PageMeta
        title="About"
        description="Company profile, management details, mission, vision, and values for Asghar Engineering Works."
      />
      <PageHeader eyebrow="About Us" title="Professional engineering profile for customer trust.">
        Asghar Engineering Works serves industrial and engineering customers through precision-focused component work and
        direct inquiry support.
      </PageHeader>

      <section className="page-band blueprint-section">
        <div className="container-shell">
          <ScrollReveal className="split-layout lg:items-start">
            <div>
              <SectionTitle eyebrow="Company" title={company.name}>
                The business focuses on practical machining support, clear customer communication, and dependable
                component finishing for industrial requirements.
              </SectionTitle>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <article className="layout-card rounded-lg p-5">
                  <Users size={27} className="text-teal-700" aria-hidden="true" />
                  <p className="mt-4 text-sm font-bold text-slate-500">Proprietor</p>
                  <h3 className="mt-1 text-xl font-black text-slate-950">{company.proprietor}</h3>
                </article>
                <article className="layout-card rounded-lg p-5">
                  <Building2 size={27} className="text-teal-700" aria-hidden="true" />
                  <p className="mt-4 text-sm font-bold text-slate-500">Managing Director</p>
                  <h3 className="mt-1 text-xl font-black text-slate-950">{company.managingDirector}</h3>
                </article>
              </div>
            </div>

            <div className="animated-rail grid gap-5">
              <article className="layout-card rounded-lg p-6">
                <Target size={28} className="text-amber-600" aria-hidden="true" />
                <h3 className="mt-4 text-2xl font-black text-slate-950">Mission</h3>
                <p className="mt-3 leading-7 text-slate-600">
                  Deliver dependable engineering components with clear communication, practical production support, and
                  consistent attention to finishing and fitment.
                </p>
              </article>
              <article className="layout-card rounded-lg p-6">
                <Target size={28} className="text-teal-700" aria-hidden="true" />
                <h3 className="mt-4 text-2xl font-black text-slate-950">Vision</h3>
                <p className="mt-3 leading-7 text-slate-600">
                  Build a trusted manufacturing presence where customers can review capabilities, browse products, and
                  start serious engineering conversations quickly.
                </p>
              </article>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="page-band-tight bg-white">
        <div className="container-shell">
          <SectionTitle eyebrow="Business Values" title="Practical standards customers can recognize." align="center">
            Our work stays focused on what matters for manufacturing buyers: reliable fit, clear communication, and
            consistent finishing.
          </SectionTitle>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div className="layout-card rounded-lg p-5 text-center" key={value}>
                <CheckCircle2 className="mx-auto text-teal-700" size={28} aria-hidden="true" />
                <p className="mt-4 text-lg font-black text-slate-950">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
