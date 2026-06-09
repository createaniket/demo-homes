import { Link } from "react-router-dom";
import { PageHero } from "@/components/site/PageHero.jsx";
import { Shield, Check } from "lucide-react";

const tiers = [
  { term: "1 Year", tier: "Included", price: "Standard", features: ["Defects warranty","Snagging service","Single point of contact"] },
  { term: "3 Year", tier: "Enhanced", price: "From 2.5%", features: ["Priority call-outs","Annual health-check","Discounted repairs"] },
  { term: "5 Year", tier: "Premium", price: "From 4%", features: ["Annual inspections","Maintenance plan included","Transferable on sale"] },
  { term: "10 Year", tier: "Structural", price: "Bespoke", features: ["Insurance-backed","New build & extensions","Latent defects cover"] },
];

const covered = ["Kitchens","Bathrooms","Electrical works","Plumbing & heating","Roofing","Smart home systems","Renovations","Landscaping"];

export default function Warranty() {
  return (
    <>
      <PageHero eyebrow="santi Extended Warranty™" title="Protect your investment, long after the project is complete."
        lede="A genuinely industry-leading warranty programme — written, owned and serviced by santi Group, transferable to future owners." />

      <section className="container-x pb-24 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <div className="eyebrow mb-4">Available on</div>
          <ul className="grid grid-cols-2 gap-y-3">
            {covered.map(c => (
              <li key={c} className="flex items-center gap-3 text-ink"><Check size={16} className="text-gold" />{c}</li>
            ))}
          </ul>

          <div className="mt-12 p-8 bg-ink text-paper">
            <Shield size={28} className="text-gold-soft" />
            <div className="font-display text-3xl mt-4">Why it matters</div>
            <p className="mt-4 text-paper/80 text-sm leading-relaxed">
              Most contractors stop caring at handover. Our extended warranty turns aftercare into a contractual obligation — backed by our own maintenance teams, not an outsourced helpdesk.
            </p>
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="eyebrow mb-4">Tiers</div>
          <div className="grid sm:grid-cols-2 gap-6">
            {tiers.map(t => (
              <div key={t.term} className="border border-line bg-paper p-8 hover:border-ink transition">
                <div className="flex items-baseline justify-between">
                  <div className="font-display text-4xl text-ink">{t.term}</div>
                  <div className="eyebrow text-gold">{t.tier}</div>
                </div>
                <div className="text-sm text-ink-soft mt-2">{t.price}</div>
                <ul className="mt-6 space-y-3 text-sm">
                  {t.features.map(f => (
                    <li key={f} className="flex items-start gap-3"><Check size={14} className="text-gold mt-1 shrink-0" />{f}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-stone py-20">
        <div className="container-x text-center">
          <h2 className="font-display text-4xl text-ink max-w-2xl mx-auto">Questions about warranty terms?</h2>
          <Link to="/contact" className="btn-primary mt-8 inline-flex">Speak to a Director</Link>
        </div>
      </section>
    </>
  );
}
