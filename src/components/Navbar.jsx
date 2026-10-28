import { ArrowRight, Menu, Phone, X } from 'lucide-react';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { company, navItems } from '../data/company.js';
import CompanyLogo from './CompanyLogo.jsx';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    [
      'nav-link-pill focus-ring',
      isActive
        ? 'nav-link-pill-active'
        : 'text-slate-700 hover:text-[var(--brand-strong)]',
    ].join(' ');

  return (
    <header className="site-header sticky top-0 z-50 backdrop-blur">
      <div className="header-strip hidden py-2 text-white md:block">
        <div className="container-shell flex items-center justify-between gap-4 text-xs font-extrabold uppercase tracking-normal">
          <span>Pakistan based precision manufacturing</span>
          <span>Drawing, sample, and custom component inquiries</span>
        </div>
      </div>
      <div className="container-shell">
        <div className="site-nav-row flex min-h-20 items-center justify-between gap-2 sm:gap-4">
          <Link className="brand-lockup focus-ring flex min-w-0 max-w-[calc(100%-54px)] items-center gap-2 rounded-md sm:gap-3" to="/" onClick={() => setIsOpen(false)}>
            <CompanyLogo className="h-11 w-16 border border-slate-200 p-1 sm:h-12 sm:w-20" />
            <span className="min-w-0 max-w-[145px] sm:max-w-none">
              <span className="block truncate text-sm font-black text-slate-950 sm:text-base xl:text-sm 2xl:text-base">
                Asghar Engineering Works
              </span>
              <span className="block truncate text-xs font-semibold text-slate-500">Precision manufacturing</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
            {navItems.map((item) => (
              <NavLink className={linkClass} key={item.path} to={item.path}>
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden items-center gap-2 xl:flex">
            <a className="nav-phone-button text-sm" href={`tel:${company.phones[0].replaceAll('-', '')}`}>
              <Phone size={17} aria-hidden="true" />
              {company.phones[0]}
            </a>
            <Link className="btn-primary text-sm" to="/contact">
              Get Quote
              <ArrowRight size={17} aria-hidden="true" />
            </Link>
          </div>

          <button
            className="nav-menu-button focus-ring grid h-11 w-11 place-items-center rounded-md text-slate-900 lg:hidden"
            type="button"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((value) => !value)}
          >
            {isOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
          </button>
        </div>

        {isOpen ? (
          <div className="mobile-menu-panel py-4 lg:hidden">
            <nav className="grid gap-2" aria-label="Mobile navigation">
              {navItems.map((item) => (
                <NavLink className={linkClass} key={item.path} to={item.path} onClick={() => setIsOpen(false)}>
                  {item.label}
                </NavLink>
              ))}
            </nav>
            <div className="mt-4 grid gap-2 sm:grid-cols-2">
              <a className="nav-phone-button text-sm" href={`tel:${company.phones[0].replaceAll('-', '')}`}>
                <Phone size={17} aria-hidden="true" />
                {company.phones[0]}
              </a>
              <Link className="btn-primary text-sm" to="/contact" onClick={() => setIsOpen(false)}>
                Get Quote
                <ArrowRight size={17} aria-hidden="true" />
              </Link>
            </div>
          </div>
        ) : null}
      </div>
    </header>
  );
}
