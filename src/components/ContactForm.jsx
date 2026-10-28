import { Send } from 'lucide-react';
import { useState } from 'react';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <form
      className="layout-card rounded-lg p-5 md:p-6"
      onSubmit={(event) => {
        event.preventDefault();
        setSubmitted(true);
      }}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-bold text-slate-700">
          Name
          <input className="focus-ring rounded-md border border-slate-300 px-3 py-3 font-normal" name="name" required />
        </label>
        <label className="grid gap-2 text-sm font-bold text-slate-700">
          Phone
          <input className="focus-ring rounded-md border border-slate-300 px-3 py-3 font-normal" name="phone" required />
        </label>
        <label className="grid gap-2 text-sm font-bold text-slate-700 sm:col-span-2">
          Email
          <input className="focus-ring rounded-md border border-slate-300 px-3 py-3 font-normal" name="email" type="email" />
        </label>
        <label className="grid gap-2 text-sm font-bold text-slate-700 sm:col-span-2">
          Message
          <textarea className="focus-ring min-h-36 rounded-md border border-slate-300 px-3 py-3 font-normal" name="message" required />
        </label>
      </div>
      <button className="btn-primary mt-5 w-full sm:w-auto" type="submit">
        <Send size={18} aria-hidden="true" />
        Submit Inquiry
      </button>
      {submitted ? (
        <p className="mt-4 rounded-md border border-teal-200 bg-teal-50 px-4 py-3 text-sm font-semibold text-teal-800">
          Thank you. We will review your inquiry and respond through the provided contact details.
        </p>
      ) : null}
    </form>
  );
}
