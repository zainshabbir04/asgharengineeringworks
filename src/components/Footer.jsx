import { Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { company, navItems } from '../data/company.js';
import CompanyLogo from './CompanyLogo.jsx';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="container-shell py-12">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <CompanyLogo className="h-14 w-24 p-1" />
              <div>
                <p className="text-lg font-black">{company.name}</p>
                <p className="text-sm text-slate-400">Corporate precision manufacturing</p>
              </div>
            </div>
            <p className="mt-5 max-w-xl leading-7 text-slate-300">
              Professional engineering component manufacturing with a focus on precision, reliability, and customer
              inquiry support.
            </p>
          </div>

          <div>
            <h2 className="text-sm font-extrabold uppercase text-slate-300">Pages</h2>
            <div className="mt-4 grid grid-cols-2 gap-2">
              {navItems.map((item) => (
                <Link className="rounded-md py-1 text-sm text-slate-400 hover:text-white" key={item.path} to={item.path}>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-sm font-extrabold uppercase text-slate-300">Contact</h2>
            <div className="mt-4 space-y-3 text-sm text-slate-300">
              <div className="flex items-center gap-3">
                <Phone size={17} aria-hidden="true" className="shrink-0" />
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                  {company.phones.map((phone, index) => (
                    <span key={phone}>
                      <a className="hover:text-white" href={`tel:${phone.replaceAll('-', '')}`}>
                        {phone}
                      </a>
                      {index < company.phones.length - 1 ? ',' : ''}
                    </span>
                  ))}
                </div>
              </div>
              <a className="flex items-center gap-3 hover:text-white" href={`mailto:${company.email}`}>
                <Mail size={17} aria-hidden="true" className="shrink-0" />
                {company.email}
              </a>
              <p className="flex items-center gap-3">
                <MapPin size={17} aria-hidden="true" className="shrink-0" />
                Pakistan
              </p>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-white/10 pt-6 text-sm text-slate-500">
          © {new Date().getFullYear()} {company.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
