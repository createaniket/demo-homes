import { useParams, Link, Navigate } from "react-router-dom";
import { divisions } from "@/data/divisions.js";
import { QuoteForm } from "@/components/site/QuoteForm.jsx";
import { Check } from "lucide-react";

export default function ServicePage() {
  const { slug } = useParams();
  const d = divisions.find(div => div.slug === slug);

  if (!d) {
    return (
      <div className="container-x py-32 text-center">
        <h1 className="font-display text-4xl">Division not found</h1>
        <Link to="/services" className="btn-ghost text-ink mt-8 inline-flex">All services</Link>
      </div>
    );
  }

  return (
    <>
      <section className="relative min-h-[70vh] flex items-end">
        <img src={d.image} alt={d.name} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-ink/10" />
        <div className="relative container-x pb-16 text-paper">
          <div className="eyebrow text-gold-soft mb-4">{d.category}</div>
          <h1 className="font-display text-6xl lg:text-8xl leading-[0.95]">{d.name}</h1>
          <p className="mt-6 text-xl text-paper/85 max-w-2xl">{d.tagline}</p>
        </div>
      </section>

      <section className="container-x py-24 lg:py-32 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <div className="eyebrow mb-6">Overview</div>
          <p className="font-display text-3xl text-ink leading-snug">{d.intro}</p>
        </div>
        <div className="lg:col-span-6 lg:col-start-7">
          <div className="eyebrow mb-6">What we deliver</div>
          <ul className="divide-y divide-line border-t border-b border-line">
            {d.services.map((s) => (
              <li key={s} className="flex items-center gap-4 py-5">
                <Check size={18} className="text-gold shrink-0" />
                <span className="text-lg text-ink">{s}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-stone py-24">
        <div className="container-x grid lg:grid-cols-2 gap-16">
          <div>
            <div className="eyebrow mb-6">Enquire</div>
            <h2 className="font-display text-5xl text-ink leading-[1]">Request a quote for {d.name.replace("santi ","")}.
            </h2>
            <p className="mt-6 text-ink-soft max-w-md">A director responds within one working day with next steps and an initial budget framework.</p>
          </div>
          <QuoteForm />
        </div>
      </section>
    </>
  );
}
