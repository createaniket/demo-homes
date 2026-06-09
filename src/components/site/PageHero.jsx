export function PageHero({ eyebrow, title, lede, image, children }) {
  return (
    <section className="relative">
      {image && (
        <div className="absolute inset-0 -z-10">
          <img src={image} alt="" className="h-full w-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-ink/55" />
        </div>
      )}
      <div className={`container-x ${image ? "py-32 lg:py-44 text-paper" : "py-20 lg:py-28"}`}>
        {eyebrow && <div className="eyebrow mb-6">{eyebrow}</div>}
        <h1 className="font-display text-5xl md:text-7xl leading-[0.95] max-w-4xl">{title}</h1>
        {lede && <p className={`mt-8 max-w-2xl text-lg leading-relaxed ${image ? "text-paper/85" : "text-ink-soft"}`}>{lede}</p>}
        {children}
      </div>
    </section>
  );
}
