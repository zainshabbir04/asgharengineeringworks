import { Mail, MapPin, Phone } from 'lucide-react';
import ContactForm from '../components/ContactForm.jsx';
import PageHeader from '../components/PageHeader.jsx';
import PageMeta from '../components/PageMeta.jsx';
import ScrollReveal from '../components/ScrollReveal.jsx';
import { company } from '../data/company.js';

const contactItems = [
  { icon: Phone, label: 'Phone', value: company.phones.join(', '), href: `tel:${company.phones[0].replaceAll('-', '')}` },
  { icon: Mail, label: 'Email', value: company.email, href: `mailto:${company.email}` },
  { icon: MapPin, label: 'Location', value: 'Pakistan', href: null },
];

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
              {contactItems.map((item) => {
                const Icon = item.icon;
                const content = (
                  <div className="layout-card rounded-lg p-5">
                    <Icon className="text-teal-700" size={26} aria-hidden="true" />
                    <p className="mt-4 text-sm font-bold text-slate-500">{item.label}</p>
                    <p className="mt-1 break-words text-xl font-black text-slate-950">{item.value}</p>
                  </div>
                );

                return item.href ? (
                  <a className="focus-ring rounded-lg" href={item.href} key={item.label}>
                    {content}
                  </a>
                ) : (
                  <div key={item.label}>{content}</div>
                );
              })}
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
