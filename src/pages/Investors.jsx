import { Link } from "react-router-dom";
import { PageHero } from "@/components/site/PageHero.jsx";

const offerings = [
  { title: "Development Opportunities", text: "Residential and mixed-use schemes in London and the Home Counties, GDV £5m – £50m." },
  { title: "Joint Ventures", text: "Land-owner JVs, profit-share arrangements and structured equity participation." },
  { title: "Land Acquisition", text: "Off-market and on-market sites — single plots, brownfield, conversion opportunities." },
  { title: "Commercial Partnerships", text: "FM contracts, framework agreements and white-label construction services for institutional clients." },
];

export default function Investors() {
  return (
    <>
      <PageHero eyebrow="Investors & Partners" title="Capital, land and partnership."
        lede="Saanti Developments and Saanti Facilities work with institutional capital, private investors and land-owners to deliver schemes of substance." />

      <section className="container-x pb-24 grid md:grid-cols-2 gap-px bg-line">
        {offerings.map(o => (
          <div key={o.title} className="bg-paper p-12">
            <div className="eyebrow text-gold mb-4">Opportunity</div>
            <div className="font-display text-3xl text-ink">{o.title}</div>
            <p className="mt-4 text-ink-soft leading-relaxed">{o.text}</p>
          </div>
        ))}
      </section>

      <section className="bg-ink text-paper py-24">
        <div className="container-x grid lg:grid-cols-2 gap-12 items-center">
          <h2 className="font-display text-5xl leading-[1]">For investor decks, schemes in the pipeline and partnership terms — speak to our development office.</h2>
          <div className="space-y-2">
            <div className="eyebrow text-gold-soft">Development Office</div>
            <div className="font-display text-3xl">invest@saantigroup.co.uk</div>
            <div className="text-paper/70">020 0000 0000</div>
            <Link to="/contact" className="btn-ghost mt-6 inline-flex text-paper">Make an Introduction</Link>
          </div>
        </div>
      </section>
    </>
  );
}
