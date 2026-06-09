import { Link } from "react-router-dom";
import { PageHero } from "@/components/site/PageHero.jsx";
import { serviceAreas } from "@/data/divisions.js";
import { MapPin } from "lucide-react";

export default function Areas() {
  return (
    <>
      <PageHero eyebrow="Service Areas" title="Where we work."
        lede="Our residential teams operate across London and the Home Counties. For commercial, FM and development, we work nationwide." />
      <section className="container-x pb-24 grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-line">
        {serviceAreas.map(a => (
          <div key={a.name} className="bg-paper p-10 hover:bg-stone transition">
            <MapPin size={20} className="text-gold" />
            <div className="font-display text-3xl text-ink mt-4">{a.name}</div>
            <div className="text-sm text-ink-soft mt-2">{a.note}</div>
          </div>
        ))}
      </section>
      <section className="bg-stone py-20 text-center">
        <div className="container-x">
          <h2 className="font-display text-4xl text-ink">Not in our usual area?</h2>
          <p className="mt-4 text-ink-soft">We accept select projects outside our core regions where scope and value align.</p>
          <Link to="/contact" className="btn-primary mt-8 inline-flex">Enquire</Link>
        </div>
      </section>
    </>
  );
}
