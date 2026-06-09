import { Link } from "react-router-dom";
import { PageHero } from "@/components/site/PageHero.jsx";

const roles = [
  { title: "Senior Project Manager", division: "santi Homes", location: "London", type: "Permanent" },
  { title: "Interior Designer", division: "santi Interior Design", location: "London", type: "Permanent" },
  { title: "Site Manager — High-End Residential", division: "santi Homes", location: "Surrey", type: "Permanent" },
  { title: "Bespoke Joiner", division: "santi Joinery", location: "Workshop, Essex", type: "Permanent" },
  { title: "Lighting Designer", division: "santi Lighting", location: "London", type: "Permanent" },
  { title: "Quantity Surveyor", division: "santi Group", location: "London", type: "Permanent" },
];

export default function Careers() {
  return (
    <>
      <PageHero eyebrow="Careers" title="Work with people who care."
        lede="We employ our trades, designers and engineers directly. We pay above market rate. We invest in training. We expect a high standard, every day." />
      <section className="container-x pb-24">
        <div className="eyebrow mb-6">Open Roles</div>
        <div className="border-y border-line divide-y divide-line">
          {roles.map(r => (
            <div key={r.title} className="grid md:grid-cols-12 items-center gap-4 py-7 hover:bg-stone px-2 -mx-2 transition">
              <div className="md:col-span-5 font-display text-2xl text-ink">{r.title}</div>
              <div className="md:col-span-3 text-sm text-ink-soft">{r.division}</div>
              <div className="md:col-span-2 text-sm text-ink-soft">{r.location}</div>
              <div className="md:col-span-1 eyebrow text-gold">{r.type}</div>
              <div className="md:col-span-1 text-right">
                <Link to="/contact" className="text-sm link-underline text-ink">Apply →</Link>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-ink-soft">
          Don't see your role? Send a CV to <a href="mailto:careers@santigroup.co.uk" className="text-ink link-underline">careers@santigroup.co.uk</a>.
        </div>
      </section>
    </>
  );
}
