import { Link } from "react-router-dom";
import { ArrowUpRight, Shield, Hammer, Compass, Wrench, Building2 } from "lucide-react";
import hero from "@/assets/hero-home.jpg";
import craft from "@/assets/craft.jpg";
import { divisions, divisionGroups, portfolioProjects, testimonials } from "@/data/divisions.js";
import { QuoteForm } from "@/components/site/QuoteForm.jsx";

const stagePillars = [
  { icon: Compass, title: "Design", text: "Architectural and interior design in-house." },
  { icon: Hammer, title: "Construction", text: "From extensions to whole-house builds." },
  { icon: Wrench, title: "Installation", text: "Kitchens, bathrooms, M&E, smart systems." },
  { icon: Building2, title: "Maintenance", text: "Planned and reactive aftercare." },
  { icon: Shield, title: "Warranty", text: "Up to 10-year extended cover." },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[92vh] flex items-end">
        <img src={hero} alt="Saanti Group luxury home at dusk" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/10" />
        <div className="relative container-x pb-16 lg:pb-24 text-paper">
          <div className="eyebrow text-gold-soft mb-8">Construction · Design · Maintenance · Warranty</div>
          <h1 className="font-display text-[clamp(3rem,7vw,7.5rem)] leading-[0.92] max-w-5xl">
            Exceptional homes,<br/>
            <em className="not-italic text-gold-soft">built to last a lifetime.</em>
          </h1>
          <p className="mt-8 max-w-xl text-lg text-paper/85">
            Saanti Group designs, builds, installs and maintains the finest homes across London and the Home Counties — backed by an industry-leading extended warranty.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link to="/contact" className="btn-primary bg-paper text-ink hover:bg-gold">Request a Quote</Link>
            <Link to="/portfolio" className="btn-ghost text-paper">View Portfolio</Link>
          </div>
        </div>
        <div className="absolute top-1/2 right-6 lg:right-10 -translate-y-1/2 hidden md:flex flex-col gap-6 text-paper/70 text-[10px] uppercase tracking-[0.3em]">
          <span>£250m+ delivered</span>
          <span>17 divisions</span>
          <span>est. 2008</span>
        </div>
      </section>

      {/* DIFFERENTIATOR */}
      <section className="container-x py-24 lg:py-32">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <div className="eyebrow mb-6">What makes us different</div>
            <h2 className="font-display text-5xl lg:text-6xl leading-[1] text-ink">
              Most contractors finish the job and leave.<br/>
              <em className="not-italic text-gold">We stay.</em>
            </h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <p className="text-lg text-ink-soft leading-relaxed">
              Saanti is structured as a single property group — design studio, construction company, M&amp;E contractor, maintenance team and warranty provider — so the people who build your home are the people who look after it. One number to call, for the next decade.
            </p>
            <div className="mt-12 grid sm:grid-cols-2 gap-x-10 gap-y-8">
              {stagePillars.map(({ icon: Icon, title, text }) => (
                <div key={title} className="flex gap-4">
                  <Icon size={24} className="text-gold shrink-0 mt-1" />
                  <div>
                    <div className="font-display text-xl text-ink">{title}</div>
                    <div className="text-sm text-ink-soft mt-1">{text}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DIVISIONS */}
      <section className="bg-stone py-24 lg:py-32">
        <div className="container-x">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
            <div>
              <div className="eyebrow mb-4">Our Divisions</div>
              <h2 className="font-display text-5xl lg:text-6xl text-ink max-w-2xl">Seventeen specialist teams, one trusted name.</h2>
            </div>
            <Link to="/services" className="btn-ghost text-ink self-start">All Services</Link>
          </div>

          <div className="space-y-16">
            {divisionGroups.map((group) => (
              <div key={group}>
                <div className="flex items-center gap-6 mb-6">
                  <div className="font-display text-2xl text-gold">{group}</div>
                  <div className="flex-1 rule" />
                </div>
                <ul className="divide-y divide-line border-y border-line">
                  {divisions.filter(d => d.category === group).map((d) => (
                    <li key={d.slug}>
                      <Link to={`/services/${d.slug}`}
                        className="group flex items-center justify-between gap-6 py-5">
                        <div className="flex items-baseline gap-6 min-w-0">
                          <span className="font-display text-xl md:text-2xl text-ink group-hover:text-gold transition">{d.name.replace("Saanti ","")}</span>
                          <span className="hidden md:block text-sm text-ink-soft truncate">{d.tagline}</span>
                        </div>
                        <ArrowUpRight size={18} className="shrink-0 opacity-40 group-hover:opacity-100 group-hover:text-gold transition" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section className="container-x py-24 lg:py-32">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div>
            <div className="eyebrow mb-4">Selected Work</div>
            <h2 className="font-display text-5xl lg:text-6xl text-ink max-w-2xl">A portfolio worth opening the doors for.</h2>
          </div>
          <Link to="/portfolio" className="btn-ghost text-ink self-start">View Portfolio</Link>
        </div>

        <div className="grid md:grid-cols-12 gap-6">
          {portfolioProjects.slice(0,4).map((p, i) => (
            <Link key={p.slug} to="/portfolio" className={`group block ${i === 0 ? "md:col-span-8 md:row-span-2" : "md:col-span-4"}`}>
              <div className="overflow-hidden bg-stone">
                <img src={p.image} alt={p.title} loading="lazy"
                  className={`w-full ${i === 0 ? "h-[560px]" : "h-[270px]"} object-cover group-hover:scale-[1.03] transition-transform duration-700`} />
              </div>
              <div className="mt-4 flex justify-between items-baseline">
                <div>
                  <div className="font-display text-2xl text-ink">{p.title}</div>
                  <div className="text-sm text-ink-soft mt-1">{p.category} · {p.area} · {p.year}</div>
                </div>
                <div className="text-xs uppercase tracking-widest text-gold">{p.value}</div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CRAFT */}
      <section className="bg-ink text-paper py-24 lg:py-32">
        <div className="container-x grid lg:grid-cols-2 gap-16 items-center">
          <img src={craft} alt="Saanti craftsman" loading="lazy" className="w-full h-[520px] object-cover" />
          <div>
            <div className="eyebrow text-gold-soft mb-6">The Saanti Standard</div>
            <h2 className="font-display text-5xl leading-[1.05]">
              Built by people who care more than they need to.
            </h2>
            <p className="mt-8 text-paper/75 leading-relaxed">
              We employ our trades directly — joiners, electricians, plumbers, plasterers, decorators — and run our own joinery workshop. Quality control isn't outsourced. Standards aren't negotiable.
            </p>
            <Link to="/about" className="btn-ghost mt-12 text-paper inline-flex">Our Story</Link>
          </div>
        </div>
      </section>

      {/* WARRANTY */}
      <section className="container-x py-24 lg:py-32">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <div className="eyebrow mb-6">Saanti Extended Warranty™</div>
            <h2 className="font-display text-5xl lg:text-6xl text-ink leading-[1]">
              Protect your investment, long after handover.
            </h2>
            <p className="mt-8 text-ink-soft leading-relaxed">
              The only group of its kind in the UK to offer a fully transferable extended warranty across kitchens, bathrooms, electrics, plumbing, roofing, smart systems, renovations and landscaping.
            </p>
            <Link to="/warranty" className="btn-primary mt-10 inline-flex">Explore Warranty</Link>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <div className="border border-line">
              {[
                ["1 Year","Included","With every project"],
                ["3 Year","Enhanced","Priority call-outs"],
                ["5 Year","Premium","Annual inspections"],
                ["10 Year","Structural","Where applicable"],
              ].map(([term, tier, note]) => (
                <div key={term} className="grid grid-cols-12 items-center gap-6 px-6 py-7 border-b last:border-b-0 border-line hover:bg-stone transition">
                  <div className="col-span-3 font-display text-3xl text-ink">{term}</div>
                  <div className="col-span-4 eyebrow text-gold">{tier}</div>
                  <div className="col-span-5 text-sm text-ink-soft">{note}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-stone py-24 lg:py-32">
        <div className="container-x">
          <div className="eyebrow mb-6">Client Voices</div>
          <div className="grid md:grid-cols-3 gap-12">
            {testimonials.map((t) => (
              <figure key={t.author}>
                <blockquote className="font-display text-2xl leading-snug text-ink">"{t.quote}"</blockquote>
                <figcaption className="mt-6 text-sm text-ink-soft">
                  <div className="text-ink">{t.author}</div>
                  <div>{t.project}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* QUOTE CTA */}
      <section className="container-x py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <div className="eyebrow mb-6">Begin a Project</div>
            <h2 className="font-display text-5xl lg:text-6xl text-ink leading-[1]">Tell us about your home.</h2>
            <p className="mt-8 text-ink-soft max-w-md">A director responds to every enquiry within one working day. No call-centre, no junior estimator — a conversation with someone who will be on your project.</p>
            <div className="mt-12 space-y-2 text-sm">
              <div className="eyebrow text-ink-soft">Speak to us</div>
              <div className="font-display text-3xl text-ink">020 0000 0000</div>
              <div className="text-ink-soft">hello@saantigroup.co.uk</div>
            </div>
          </div>
          <div><QuoteForm /></div>
        </div>
      </section>
    </>
  );
}
