import { Link } from "react-router-dom";
import { divisions, divisionGroups } from "@/data/divisions.js";

export function SiteFooter() {
  return (
    <footer className="bg-ink text-paper mt-24">
      <div className="container-x py-20">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <div className="flex items-baseline gap-2">
              <span className="font-display text-3xl">Saanti</span>
              <span className="eyebrow text-gold-soft">Homes</span>
            </div>
            <p className="mt-6 text-sm text-paper/70 leading-relaxed max-w-sm">
              A property group delivering construction, design, maintenance and extended warranty under one trusted name. London &amp; Home Counties.
            </p>
            <div className="mt-8 space-y-1 text-sm text-paper/80">
              <div>020 0000 0000</div>
              <div>hello@saantigroup.co.uk</div>
              <div>1 Saanti House, London, EC2A</div>
            </div>
          </div>

          <div className="lg:col-span-7 lg:col-start-6 grid grid-cols-2 md:grid-cols-4 gap-8">
            {divisionGroups.map((g) => (
              <div key={g}>
                <div className="eyebrow text-gold-soft mb-4">{g}</div>
                <ul className="space-y-2">
                  {divisions.filter(d => d.category === g).map(d => (
                    <li key={d.slug}>
                      <Link to={`/services/${d.slug}`}
                        className="text-sm text-paper/75 hover:text-gold transition">
                        {d.name.replace("Saanti ", "")}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-paper/15 flex flex-col md:flex-row gap-4 justify-between text-xs text-paper/55">
          <div>© {new Date().getFullYear()} Saanti Group Ltd. All rights reserved.</div>
          <div className="flex gap-6">
            <Link to="/" className="hover:text-gold">Home</Link>
            <Link to="/services" className="hover:text-gold">Services</Link>
            <Link to="/warranty" className="hover:text-gold">Warranty</Link>
            <Link to="/about" className="hover:text-gold">About</Link>
            <Link to="/careers" className="hover:text-gold">Careers</Link>
            <Link to="/contact" className="hover:text-gold">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
