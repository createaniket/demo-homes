import { PageHero } from "@/components/site/PageHero.jsx";
import craft from "@/assets/craft.jpg";
import hero from "@/assets/hero-home.jpg";

export default function About() {
  return (
    <>
      <PageHero eyebrow="About" title="A property group, not a builder."
        lede="Saanti Group is a privately-owned, vertically-integrated property group operating across construction, design, maintenance, warranty and development." />

      <section className="container-x py-24 grid lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-5">
          <img src={craft} alt="Saanti workshop" loading="lazy" className="w-full h-[600px] object-cover" />
        </div>
        <div className="lg:col-span-6 lg:col-start-7 space-y-8 text-lg text-ink-soft leading-relaxed">
          <p>Founded in 2008 as a small London refurbishment company, Saanti has grown into a property group of seventeen divisions, employing trades directly and operating its own joinery workshop, design studio and maintenance teams.</p>
          <p>We have delivered over £250m of construction and refurbishment across London and the Home Counties for private clients, family offices and institutional partners.</p>
          <p>What hasn't changed: every project still has a Saanti director on it. Every project still gets a hand-bound completion document. Every project still receives a warranty written, owned and serviced by us.</p>
        </div>
      </section>

      <section className="bg-ink text-paper py-24">
        <div className="container-x grid lg:grid-cols-4 gap-10">
          {[
            ["2008","Founded in London"],
            ["£250m+","Delivered to date"],
            ["120+","People in the group"],
            ["17","Specialist divisions"],
          ].map(([k,v]) => (
            <div key={k}>
              <div className="font-display text-5xl text-gold-soft">{k}</div>
              <div className="text-sm text-paper/60 uppercase tracking-widest mt-3">{v}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="container-x py-24 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="eyebrow mb-6">Leadership</div>
          <h2 className="font-display text-5xl text-ink leading-[1]">A director on every project.</h2>
          <p className="mt-6 text-ink-soft leading-relaxed">Our directors come from architecture, structural engineering, M&amp;E and property development. The person who quotes your project is on-site through delivery, and your point of contact for aftercare.</p>
        </div>
        <img src={hero} alt="Saanti project" loading="lazy" className="w-full h-[500px] object-cover" />
      </section>
    </>
  );
}
