import { CheckCircle2, Mail, RotateCcw, Send } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { company } from '../data/company.js';
import WhatsAppLogo from './WhatsAppLogo.jsx';

export default function ContactForm() {
  const [searchParams] = useSearchParams();
  const productParam = searchParams.get('product') || '';

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: productParam ? `I would like to inquire about ${productParam}.` : '',
  });
  const [submittedData, setSubmittedData] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    if (productParam) {
      setFormData((prev) => ({
        ...prev,
        message: prev.message || `I would like to inquire about ${productParam}.`,
      }));
    }
  }, [productParam]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (error) setError('');
  };

  const buildInquiryText = (data) => {
    const lines = [
      `Hello ${company.name},`,
      `Name: ${data.name}`,
      `Phone: ${data.phone}`,
      data.email ? `Email: ${data.email}` : null,
      productParam ? `Product Reference: ${productParam}` : null,
      `Message: ${data.message}`,
    ].filter(Boolean);
    return lines.join('\n');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const trimmed = {
      name: formData.name.trim(),
      phone: formData.phone.trim(),
      email: formData.email.trim(),
      message: formData.message.trim(),
    };

    if (!trimmed.name || !trimmed.phone || !trimmed.message) {
      setError('Please fill in your name, phone number, and inquiry message.');
      return;
    }

    setError('');
    setSubmittedData(trimmed);
  };

  const whatsappInquiryUrl = submittedData
    ? `${company.whatsappUrl}?text=${encodeURIComponent(buildInquiryText(submittedData))}`
    : '';
  const mailtoInquiryUrl = submittedData
    ? `mailto:${company.email}?subject=${encodeURIComponent(
        productParam ? `Inquiry: ${productParam} - ${submittedData.name}` : `Product Inquiry from ${submittedData.name}`,
      )}&body=${encodeURIComponent(buildInquiryText(submittedData))}`
    : '';

  return (
    <form className="layout-card rounded-lg p-5 md:p-6" onSubmit={handleSubmit}>
      {productParam ? (
        <div className="mb-4 rounded-md border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-bold text-slate-800">
          Inquiring about: <span className="text-[var(--brand-strong)]">{productParam}</span>
        </div>
      ) : null}

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-bold text-slate-700">
          Name
          <input
            className="focus-ring rounded-md border border-slate-300 px-3 py-3 font-normal"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <label className="grid gap-2 text-sm font-bold text-slate-700">
          Phone
          <input
            className="focus-ring rounded-md border border-slate-300 px-3 py-3 font-normal"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </label>
        <label className="grid gap-2 text-sm font-bold text-slate-700 sm:col-span-2">
          Email
          <input
            className="focus-ring rounded-md border border-slate-300 px-3 py-3 font-normal"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <label className="grid gap-2 text-sm font-bold text-slate-700 sm:col-span-2">
          Message
          <textarea
            className="focus-ring min-h-36 rounded-md border border-slate-300 px-3 py-3 font-normal"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </label>
      </div>

      {error ? (
        <p className="mt-4 rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700" role="alert">
          {error}
        </p>
      ) : null}

      <div className="mt-5 flex flex-wrap items-center gap-3">
        <button className="btn-primary w-full sm:w-auto" type="submit">
          <Send size={18} aria-hidden="true" />
          Submit Inquiry
        </button>
        {submittedData ? (
          <button
            type="button"
            onClick={() => {
              setSubmittedData(null);
              setFormData({ name: '', phone: '', email: '', message: '' });
            }}
            className="btn-quiet w-full sm:w-auto"
          >
            <RotateCcw size={16} aria-hidden="true" />
            Clear Form
          </button>
        ) : null}
      </div>

      {submittedData ? (
        <div className="mt-4 rounded-md border border-teal-200 bg-teal-50 p-4 text-sm text-teal-800" role="status">
          <p className="flex items-center gap-2 font-bold">
            <CheckCircle2 size={18} aria-hidden="true" className="shrink-0" />
            Inquiry details prepared for {submittedData.name}. Choose a direct channel below or we will review your inquiry:
          </p>
          <div className="mt-3 flex flex-wrap gap-3">
            <a
              className="btn-primary text-sm"
              href={whatsappInquiryUrl}
              target="_blank"
              rel="noreferrer"
            >
              <WhatsAppLogo size={18} />
              Send via WhatsApp
            </a>
            <a className="btn-quiet text-sm" href={mailtoInquiryUrl}>
              <Mail size={17} aria-hidden="true" />
              Send via Email
            </a>
          </div>
        </div>
      ) : null}
    </form>
  );
}
