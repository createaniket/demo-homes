import { PageHero } from "@/components/site/PageHero.jsx";
import { QuoteForm } from "@/components/site/QuoteForm.jsx";

export default function Contact() {
  return (
    <>
      <PageHero eyebrow="Contact" title="Begin a conversation."
        lede="A director responds to every enquiry within one working day." />
      <section className="container-x pb-24 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4 space-y-10">
          <div>
            <div className="eyebrow mb-3">Studio</div>
            <div className="font-display text-2xl text-ink leading-tight">1 Saanti House<br/>Shoreditch<br/>London EC2A</div>
          </div>
          <div>
            <div className="eyebrow mb-3">Speak to us</div>
            <div className="font-display text-2xl text-ink">020 0000 0000</div>
            <div className="text-ink-soft">hello@saantigroup.co.uk</div>
          </div>
          <div>
            <div className="eyebrow mb-3">Departments</div>
            <ul className="space-y-2 text-ink-soft text-sm">
              <li>New enquiries — hello@saantigroup.co.uk</li>
              <li>Investors — invest@saantigroup.co.uk</li>
              <li>Careers — careers@saantigroup.co.uk</li>
              <li>Press — press@saantigroup.co.uk</li>
            </ul>
          </div>
          <div>
            <div className="eyebrow mb-3">Hours</div>
            <div className="text-ink-soft text-sm">Mon – Fri · 8:30 – 18:00<br/>24/7 emergency line for warranty clients</div>
          </div>
        </div>
        <div className="lg:col-span-7 lg:col-start-6">
          <div className="border border-line p-8 lg:p-12 bg-paper">
            <div className="eyebrow mb-4">Request a Quote</div>
            <QuoteForm />
          </div>
        </div>
      </section>
    </>
  );
}
