import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageMeta from '../components/PageMeta.jsx';

export default function NotFound() {
  return (
    <section className="page-band blueprint-section">
      <PageMeta title="Page Not Found" description="The requested page could not be found." />
      <div className="container-shell">
        <div className="layout-card max-w-2xl rounded-lg p-8">
          <p className="eyebrow">404</p>
          <h1 className="mt-3 text-5xl font-black text-slate-950">Page not found</h1>
          <p className="mt-4 max-w-xl text-lg leading-8 text-slate-600">
            The page you requested does not exist. Return to the homepage or browse the product catalog.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link className="btn-primary" to="/">
              <ArrowLeft size={18} aria-hidden="true" />
              Home
            </Link>
            <Link className="btn-quiet" to="/products">
              Products
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
