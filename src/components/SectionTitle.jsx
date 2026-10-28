export default function SectionTitle({ eyebrow, title, children, align = 'left' }) {
  const isCenter = align === 'center';

  return (
    <div className={isCenter ? 'mx-auto w-full min-w-0 max-w-3xl text-center' : 'w-full min-w-0 max-w-3xl'}>
      {eyebrow ? <p className="eyebrow mb-3">{eyebrow}</p> : null}
      <h2 className="break-words font-display text-2xl font-bold leading-tight text-slate-950 sm:text-3xl md:text-4xl">{title}</h2>
      {children ? <p className="mt-4 text-base leading-7 text-slate-600 md:text-lg">{children}</p> : null}
    </div>
  );
}
