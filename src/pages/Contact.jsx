import { Mail, MapPin, Phone } from 'lucide-react';
import ContactForm from '../components/ContactForm.jsx';
import PageHeader from '../components/PageHeader.jsx';
import PageMeta from '../components/PageMeta.jsx';
import ScrollReveal from '../components/ScrollReveal.jsx';
import { company } from '../data/company.js';

export default function Contact() {
  return (
    <>
      <PageMeta
        title="Contact"
        description="Contact Asghar Engineering Works by phone, email, or inquiry form."
      />
      <PageHeader eyebrow="Contact" title="Start a product inquiry.">
        Use phone, email, or the inquiry form to discuss a product, drawing, sample, or custom engineering requirement.
      </PageHeader>

      <section className="page-band blueprint-section">
        <div className="container-shell">
          <div className="split-layout">
            <ScrollReveal className="animated-rail grid gap-4">
              <div className="layout-card rounded-lg p-5">
                <Phone className="text-teal-700" size={26} aria-hidden="true" />
                <p className="mt-4 text-sm font-bold text-slate-500">Phone</p>
                <div className="mt-1 flex flex-wrap gap-x-3 gap-y-1 text-xl font-black text-slate-950">
                  {company.phones.map((phone, index) => (
                    <span key={phone}>
                      <a className="focus-ring rounded hover:text-[var(--brand)]" href={`tel:${phone.replaceAll('-', '')}`}>
                        {phone}
                      </a>
                      {index < company.phones.length - 1 ? ',' : ''}
                    </span>
                  ))}
                </div>
              </div>

              <a className="focus-ring rounded-lg" href={`mailto:${company.email}`}>
                <div className="layout-card rounded-lg p-5">
                  <Mail className="text-teal-700" size={26} aria-hidden="true" />
                  <p className="mt-4 text-sm font-bold text-slate-500">Email</p>
                  <p className="mt-1 break-words text-xl font-black text-slate-950">{company.email}</p>
                </div>
              </a>

              <div className="layout-card rounded-lg p-5">
                <MapPin className="text-teal-700" size={26} aria-hidden="true" />
                <p className="mt-4 text-sm font-bold text-slate-500">Location</p>
                <p className="mt-1 break-words text-xl font-black text-slate-950">Pakistan</p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={120}>
              <ContactForm />
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
