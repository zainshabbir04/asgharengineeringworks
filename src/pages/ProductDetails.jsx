import { ArrowLeft, ArrowRight, CheckCircle2, ClipboardList, FileText, Layers, PackageCheck, Ruler, Wrench } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import PageMeta from '../components/PageMeta.jsx';
import ScrollReveal from '../components/ScrollReveal.jsx';
import { products } from '../data/products.js';

function readSpec(product, label, fallback) {
  const match = product.specifications?.find((item) => item.toLowerCase().startsWith(`${label.toLowerCase()}:`));
  return match?.split(':').slice(1).join(':').trim() || fallback;
}

function processFor(category) {
  const value = category.toLowerCase();
  if (value.includes('thread')) return 'Threading';
  if (value.includes('turned')) return 'Turning';
  if (value.includes('block')) return 'Milling / drilling';
  if (value.includes('connector') || value.includes('fitting')) return 'Boring / finishing';
  return 'Precision machining';
}

export default function ProductDetails() {
  const { id } = useParams();
  const product = products.find((item) => item.id === id);

  if (!product) {
    return (
      <section className="page-band bg-white">
        <div className="container-shell">
          <PageMeta title="Product Not Found" description="The requested product was not found." />
          <Link className="btn-quiet" to="/products">
            <ArrowLeft size={18} aria-hidden="true" />
            Back to Products
          </Link>
          <h1 className="mt-8 text-4xl font-black text-slate-950">Product not found</h1>
        </div>
      </section>
      );
  }

  const productCode = `AEW-${product.id.replace('product-', 'P')}`;
  const material = readSpec(product, 'Material', 'As per requirement');
  const finish = readSpec(product, 'Finish', 'Machined metal');
  const detailRows = [
    { label: 'Code', value: productCode },
    { label: 'Process', value: processFor(product.category) },
    { label: 'Material', value: material },
    { label: 'Finish', value: finish },
    { label: 'Primary Use', value: product.applications?.[0] || 'Industrial assemblies' },
    { label: 'Fitment', value: 'Sample or drawing based' },
  ];

  return (
    <>
      <PageMeta title={product.name} description={product.shortDescription} />
      <section className="product-detail-hero blueprint-section py-10 md:py-16">
        <div className="container-shell">
          <div className="product-detail-topbar mb-6 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
            <Link className="inline-flex items-center gap-2 rounded-md font-bold text-slate-700 hover:text-slate-950" to="/products">
              <ArrowLeft size={18} aria-hidden="true" />
              Back to Products
            </Link>
            <span className="product-detail-label">
              <FileText size={16} aria-hidden="true" />
              Component Data Sheet
            </span>
          </div>

          <div className="grid gap-6 xl:grid-cols-[minmax(0,0.98fr)_minmax(0,1.02fr)] xl:items-start">
            <ScrollReveal className="product-detail-media layout-card rounded-lg p-4 md:p-5">
              <div className="product-detail-photo">
                <img
                  src={product.image}
                  alt={`${product.name} product detail`}
                  decoding="async"
                  fetchPriority="high"
                  style={{ objectPosition: product.imagePosition }}
                />
              </div>
              <div className="product-detail-strip">
                <span>
                  <FileText size={16} aria-hidden="true" />
                  {productCode}
                </span>
                <span>
                  <PackageCheck size={16} aria-hidden="true" />
                  {product.category}
                </span>
                <span>
                  <Ruler size={16} aria-hidden="true" />
                  Custom Size
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal className="product-detail-sheet rounded-lg" delay={100}>
              <div className="product-detail-sheet-head">
                <p className="product-detail-kicker">{product.category}</p>
                <h1>{product.name}</h1>
                <p>{product.description}</p>
              </div>

              <div className="product-detail-data-grid">
                {detailRows.map((row) => (
                  <div className="product-detail-data-cell" key={row.label}>
                    <span>{row.label}</span>
                    <strong>{row.value}</strong>
                  </div>
                ))}
              </div>

              <div className="product-detail-action">
                <div className="product-detail-note">
                  <Wrench size={18} aria-hidden="true" />
                  Built for repeatable fitment from customer drawing, sample, or custom requirement.
                </div>
                <Link className="btn-primary" to="/contact">
                  Start Quote
                  <ArrowRight size={18} aria-hidden="true" />
                </Link>
                <Link className="btn-secondary" to="/products">
                  Back Catalog
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="product-detail-info page-band-tight bg-white">
        <div className="container-shell">
          <div className="mb-8 max-w-3xl">
            <p className="eyebrow">Technical Information</p>
            <h2 className="mt-2 text-3xl font-black text-slate-950 md:text-4xl">Manufacturing details for inquiry review</h2>
          </div>
          <div className="grid gap-5 lg:grid-cols-[1fr_1fr_1fr]">
            <DetailList delay={0} icon={CheckCircle2} title="Features" items={product.features} />
            <DetailList delay={90} icon={Layers} title="Applications" items={product.applications} />
            <DetailList delay={180} icon={ClipboardList} title="Specifications" items={product.specifications} />
          </div>
        </div>
      </section>
    </>
  );
}

function DetailList({ delay = 0, icon: Icon, title, items }) {
  return (
    <ScrollReveal as="article" className="detail-list-card layout-card rounded-lg p-6 md:p-7" delay={delay}>
      <span className="detail-list-icon">
        <Icon size={26} aria-hidden="true" />
      </span>
      <h2 className="mt-4 text-2xl font-black text-slate-950">{title}</h2>
      <ul className="mt-5 space-y-3">
        {items.map((item) => (
          <li className="flex gap-3 text-slate-700" key={item}>
            <CheckCircle2 className="mt-0.5 shrink-0 text-blue-700" size={18} aria-hidden="true" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </ScrollReveal>
  );
}
