import { useState } from "react";
import { Link } from "react-router-dom";
import { divisions, divisionGroups } from "@/data/divisions.js";
import { PageHero } from "@/components/site/PageHero.jsx";
import { ArrowUpRight, ChevronDown } from "lucide-react";

export default function Services() {
  const [open, setOpen] = useState([divisionGroups[0]]);

  const toggle = (group) => {
    setOpen(prev =>
      prev.includes(group) ? prev.filter(g => g !== group) : [...prev, group]
    );
  };

  return (
    <>
      <PageHero eyebrow="Services" title="Seventeen specialist divisions. One trusted group."
        lede="From bespoke joinery to large-scale residential development, every division is staffed by directly employed teams and overseen by a Saanti director." />
      <section className="container-x pb-24 lg:pb-32 max-w-4xl">
        <div className="border-y border-line">
          {divisionGroups.map(group => {
            const items = divisions.filter(d => d.category === group);
            const isOpen = open.includes(group);
            return (
              <div key={group} className="border-b border-line last:border-b-0">
                <button
                  onClick={() => toggle(group)}
                  className="w-full flex items-center justify-between py-6 hover:no-underline text-left"
                >
                  <div className="flex items-baseline gap-4">
                    <span className="font-display text-2xl md:text-3xl text-gold">{group}</span>
                    <span className="text-xs uppercase tracking-widest text-ink-soft">{items.length} divisions</span>
                  </div>
                  <ChevronDown size={18} className={`text-ink-soft transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
                </button>
                {isOpen && (
                  <div className="pb-6">
                    <ul className="divide-y divide-line/60 border-t border-line/60">
                      {items.map(d => (
                        <li key={d.slug}>
                          <Link to={`/services/${d.slug}`}
                            className="group flex items-center justify-between gap-6 py-4 hover:text-gold transition">
                            <div className="min-w-0 flex-1">
                              <div className="font-display text-lg md:text-xl">{d.name}</div>
                              <p className="text-sm text-ink-soft truncate">{d.tagline}</p>
                            </div>
                            <ArrowUpRight size={18} className="shrink-0 opacity-40 group-hover:opacity-100 transition" />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
