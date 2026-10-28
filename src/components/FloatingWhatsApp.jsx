import { company } from '../data/company.js';
import WhatsAppLogo from './WhatsAppLogo.jsx';

export default function FloatingWhatsApp() {
  const message = 'Hello Asghar Engineering Works, I want to inquire about your products.';
  const url = `${company.whatsappUrl}?text=${encodeURIComponent(message)}`;

  return (
    <a
      className="focus-ring fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-[#25d366] text-white shadow-2xl shadow-green-900/25 transition hover:-translate-y-1 hover:bg-[#1fbd5a]"
      href={url}
      target="_blank"
      rel="noreferrer"
      aria-label="Open WhatsApp inquiry"
      title="WhatsApp"
    >
      <WhatsAppLogo size={32} />
    </a>
  );
}
