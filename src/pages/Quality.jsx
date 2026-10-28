import { CheckCircle2, ClipboardCheck, Ruler, ShieldCheck, Sparkles } from 'lucide-react';
import CTA from '../components/CTA.jsx';
import PageHeader from '../components/PageHeader.jsx';
import PageMeta from '../components/PageMeta.jsx';
import ScrollReveal from '../components/ScrollReveal.jsx';
import SectionTitle from '../components/SectionTitle.jsx';

const process = [
  { icon: ClipboardCheck, title: 'Material Checking', copy: 'Material and project requirements are reviewed before production starts.' },
  { icon: Ruler, title: 'Dimensional Accuracy', copy: 'Key dimensions are checked to support reliable fit and assembly.' },
  { icon: Sparkles, title: 'Finishing Review', copy: 'Edges, surfaces, and visual finishing are reviewed before delivery.' },
  { icon: ShieldCheck, title: 'Customer Satisfaction', copy: 'The workflow stays focused on repeatable quality and practical communication.' },
];

export default function Quality() {
  return (
    <>
      <PageMeta
        title="Quality"
        description="Quality policy, inspection process, material checking, dimensional accuracy, finishing, and customer satisfaction."
      />
      <PageHeader eyebrow="Quality" title="Inspection-led manufacturing presentation.">
        A straightforward quality page that explains material checks, dimensional review, finishing, and continuous
        improvement.
      </PageHeader>

      <section className="page-band blueprint-section">
        <div className="container-shell">
          <ScrollReveal className="split-layout">
            <SectionTitle eyebrow="Policy" title="Consistent standards for every product inquiry.">
              Asghar Engineering Works is positioned around dependable manufacturing, clear customer communication, and
              careful attention to fit, finish, and practical performance.
            </SectionTitle>
            <div className="animated-rail grid gap-4 sm:grid-cols-2">
              {process.map((item) => {
                const Icon = item.icon;
                return (
                  <article className="layout-card rounded-lg p-5" key={item.title}>
                    <Icon className="text-teal-700" size={28} aria-hidden="true" />
                    <h3 className="mt-4 text-xl font-black text-slate-950">{item.title}</h3>
                    <p className="mt-2 leading-6 text-slate-600">{item.copy}</p>
                  </article>
                );
              })}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="page-band-tight bg-slate-950 text-white">
        <div className="container-shell">
          <ScrollReveal className="grid gap-6 md:grid-cols-3">
            {['Material', 'Measurement', 'Finish'].map((step, index) => (
              <div className="stat-tile rounded-lg border border-white/10 bg-white/[0.06] p-6" key={step}>
                <div className="grid h-10 w-10 place-items-center rounded-md bg-amber-400 font-black text-slate-950">
                  {index + 1}
                </div>
                <h3 className="mt-5 text-2xl font-black">{step}</h3>
                <p className="mt-3 leading-7 text-slate-300">
                  {step === 'Material'
                    ? 'Project requirements and material expectations are clarified.'
                    : step === 'Measurement'
                      ? 'Important dimensions are checked against the intended fit.'
                      : 'Final surfaces and component readiness are reviewed.'}
                </p>
              </div>
            ))}
          </ScrollReveal>
          <ScrollReveal className="mt-8 flex items-center gap-3 rounded-lg bg-teal-600 px-5 py-4 text-white" delay={120}>
            <CheckCircle2 size={22} aria-hidden="true" />
            <p className="font-bold">Every component is reviewed for fit, finish, and practical customer requirements before delivery.</p>
          </ScrollReveal>
        </div>
      </section>

      <CTA />
    </>
  );
}
