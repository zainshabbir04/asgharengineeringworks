import { ArrowRight, ClipboardList, Package, Ruler } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

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

export default function ProductCard({ product, delay = 0 }) {
  const cardRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const productCode = `AEW-${product.id.replace('product-', 'P')}`;
  const primaryUse = product.applications?.[0] || 'Industrial assemblies';
  const material = readSpec(product, 'Material', 'As per requirement');
  const finish = readSpec(product, 'Finish', 'Machined metal');
  const dataRows = [
    { label: 'Process', value: processFor(product.category) },
    { label: 'Use', value: primaryUse },
    { label: 'Material', value: material },
    { label: 'Finish', value: finish },
  ];

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return undefined;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      setIsVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        rootMargin: '0px 0px -8% 0px',
        threshold: 0.14,
      },
    );

    observer.observe(card);

    return () => observer.disconnect();
  }, []);

  return (
    <article
      className={`classic-product-card reveal-card group overflow-hidden rounded-sm border border-slate-300 bg-white shadow-sm ${isVisible ? 'is-visible' : ''}`}
      ref={cardRef}
      style={{ '--reveal-delay': `${delay}ms` }}
    >
      <div className="product-data-header">
        <span className="inline-flex items-center gap-2">
          <ClipboardList size={15} aria-hidden="true" />
          Component Data
        </span>
        <span className="product-code">
          {productCode}
        </span>
      </div>

      <Link className="focus-ring block bg-white p-4" to={`/products/${product.id}`} aria-label={`View ${product.name} data sheet`}>
        <div className="product-photo-frame aspect-[4/3] overflow-hidden border border-slate-200 bg-white">
          <img
            className="h-full w-full object-contain"
            src={product.image}
            alt={`${product.name} precision engineering component`}
            loading="lazy"
            decoding="async"
            style={{ objectPosition: product.imagePosition }}
          />
        </div>
      </Link>

      <div className="p-5 pt-1">
        <div className="mb-3 flex items-center gap-2 text-xs font-black uppercase text-teal-700">
          <Package size={15} aria-hidden="true" />
          {product.category}
        </div>
        <h3 className="text-xl font-black text-slate-950">{product.name}</h3>
        <p className="line-clamp-2 mt-2 min-h-[48px] text-sm leading-6 text-slate-600">{product.shortDescription}</p>

        <div className="product-spec-table mt-5 text-sm">
          {dataRows.map((row) => (
            <div className="product-spec-row" key={row.label}>
              <span>{row.label}</span>
              <strong>{row.value}</strong>
            </div>
          ))}
        </div>

        <div className="product-card-footer mt-5 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs font-bold uppercase text-slate-500">
            <Ruler size={15} aria-hidden="true" />
            Custom Size
          </div>
          <Link className="inline-flex items-center gap-2 rounded-md font-bold text-slate-950 hover:text-teal-700" to={`/products/${product.id}`}>
            Data Sheet
            <ArrowRight size={17} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </article>
  );
}
