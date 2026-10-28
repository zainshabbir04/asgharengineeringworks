import { Search, X } from 'lucide-react';
import { useMemo, useState } from 'react';
import PageHeader from '../components/PageHeader.jsx';
import PageMeta from '../components/PageMeta.jsx';
import ProductCard from '../components/ProductCard.jsx';
import ScrollReveal from '../components/ScrollReveal.jsx';
import { products } from '../data/products.js';

export default function Products() {
  const [query, setQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = useMemo(() => ['All', ...new Set(products.map((product) => product.category))], []);

  const filteredProducts = useMemo(() => {
    const value = query.trim().toLowerCase();

    return products.filter((product) => {
      if (selectedCategory !== 'All' && product.category !== selectedCategory) {
        return false;
      }

      if (!value) return true;

      const productCode = `AEW-${product.id.replace('product-', 'P')}`;
      const searchableFields = [
        product.id,
        productCode,
        product.name,
        product.category,
        product.shortDescription,
        product.description,
        ...(product.features || []),
        ...(product.applications || []),
      ];

      return searchableFields.some((field) => field.toLowerCase().includes(value));
    });
  }, [query, selectedCategory]);

  const hasActiveFilters = query.trim().length > 0 || selectedCategory !== 'All';

  return (
    <>
      <PageMeta
        title="Products"
        description="Browse precision machined products from Asghar Engineering Works with clear detail pages and inquiry support."
      />
      <PageHeader eyebrow="Products" title="Responsive catalog for precision engineering products.">
        Review the current machined component range and open a direct inquiry for any product.
      </PageHeader>

      <section className="motion-fade-in page-band blueprint-section">
        <div className="container-shell">
          <div className="grid gap-8 lg:grid-cols-[320px_1fr]">
            <ScrollReveal as="aside" className="catalog-desk h-fit rounded-lg p-5 lg:sticky lg:top-28">
              <p className="eyebrow">Catalog Desk</p>
              <h2 className="mt-2 text-2xl font-black text-slate-950">Find a machined part</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Search by component name, code (e.g. AEW-P01), category, or application.
              </p>
              <label className="relative mt-5 block">
                <span className="sr-only">Search products</span>
                <Search className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={19} aria-hidden="true" />
                <input
                  className="focus-ring h-12 w-full rounded-md border border-slate-300 bg-white pl-10 pr-10 text-slate-900"
                  placeholder="Search catalog"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                />
                {query ? (
                  <button
                    type="button"
                    aria-label="Clear search"
                    onClick={() => setQuery('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700"
                  >
                    <X size={18} aria-hidden="true" />
                  </button>
                ) : null}
              </label>
              <div className="mt-6 border-t border-slate-200 pt-5">
                <div className="flex items-center justify-between gap-2">
                  <p className="text-sm font-bold text-slate-500">
                    Showing {filteredProducts.length} of {products.length} parts
                  </p>
                  {hasActiveFilters ? (
                    <button
                      type="button"
                      onClick={() => {
                        setQuery('');
                        setSelectedCategory('All');
                      }}
                      className="text-xs font-extrabold text-[var(--brand)] hover:underline"
                    >
                      Reset
                    </button>
                  ) : null}
                </div>
                <div className="mt-4 flex flex-wrap gap-2" role="group" aria-label="Filter by category">
                  {categories.map((category) => {
                    const isActive = selectedCategory === category;
                    return (
                      <button
                        type="button"
                        key={category}
                        aria-pressed={isActive}
                        onClick={() => setSelectedCategory(category)}
                        className={`focus-ring cursor-pointer rounded-md border px-3 py-2 text-xs font-bold transition ${
                          isActive
                            ? 'border-[var(--brand)] bg-[var(--brand)] text-white shadow-sm'
                            : 'border-slate-200 bg-white text-slate-700 shadow-sm hover:border-[var(--brand)] hover:text-[var(--brand-strong)]'
                        }`}
                      >
                        {category}
                      </button>
                    );
                  })}
                </div>
              </div>
            </ScrollReveal>

            <div className="animated-rail">
              <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                {filteredProducts.map((product, index) => (
                  <ProductCard delay={(index % 6) * 70} key={product.id} product={product} />
                ))}
              </div>

              {filteredProducts.length === 0 ? (
                <ScrollReveal className="rounded-lg border border-slate-200 bg-white p-8 text-center">
                  <p className="text-lg font-bold text-slate-950">No products match that search.</p>
                  <button
                    type="button"
                    onClick={() => {
                      setQuery('');
                      setSelectedCategory('All');
                    }}
                    className="btn-quiet mt-4"
                  >
                    Reset Filters
                  </button>
                </ScrollReveal>
              ) : null}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
