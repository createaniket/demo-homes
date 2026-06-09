import { useState } from "react";
import { Link } from "react-router-dom";
import { portfolioProjects } from "@/data/divisions.js";
import { PageHero } from "@/components/site/PageHero.jsx";

const categories = ["All","Kitchens","Bathrooms","Extensions","HMOs","Developments","Landscaping","Smart Homes"];

export default function Portfolio() {
  const [filter, setFilter] = useState("All");
  const projects = filter === "All" ? portfolioProjects : portfolioProjects.filter(p => p.category === filter);

  return (
    <>
      <PageHero eyebrow="Portfolio" title="A decade of delivered work."
        lede="Each project tells you something different about how Saanti operates. Filter by category to see the breadth of work the group delivers." />

      <section className="container-x">
        <div className="flex flex-wrap gap-2 pb-12 border-b border-line">
          {categories.map(c => (
            <button key={c} onClick={() => setFilter(c)}
              className={`px-5 py-2 text-xs uppercase tracking-widest border transition ${filter === c ? "bg-ink text-paper border-ink" : "border-line text-ink-soft hover:border-ink hover:text-ink"}`}>
              {c}
            </button>
          ))}
        </div>
      </section>

      <section className="container-x py-16 lg:py-20 grid md:grid-cols-2 gap-x-8 gap-y-16">
        {projects.map((p, i) => (
          <Link key={p.slug} to="/portfolio" className={`group ${i % 3 === 0 ? "md:col-span-2" : ""}`}>
            <div className="overflow-hidden bg-stone">
              <img src={p.image} alt={p.title} loading="lazy"
                className={`w-full ${i % 3 === 0 ? "h-[600px]" : "h-[420px]"} object-cover group-hover:scale-[1.03] transition-transform duration-700`} />
            </div>
            <div className="mt-6 flex flex-wrap items-baseline justify-between gap-4">
              <div>
                <div className="font-display text-3xl text-ink">{p.title}</div>
                <div className="text-sm text-ink-soft mt-2">{p.scope} · {p.area} · {p.year}</div>
              </div>
              <div className="eyebrow text-gold">{p.value}</div>
            </div>
            <p className="mt-3 text-ink-soft max-w-2xl">{p.excerpt}</p>
          </Link>
        ))}
      </section>
    </>
  );
}
