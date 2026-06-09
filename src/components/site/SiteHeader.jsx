import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { divisions, divisionGroups } from "@/data/divisions.js";

const primaryNav = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/warranty", label: "Warranty" },
  { to: "/about", label: "About" },
  { to: "/careers", label: "Careers" },
  { to: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-paper/85 backdrop-blur border-b border-line">
      <div className="container-x flex items-center justify-between h-20">
        <Link to="/" className="flex items-baseline gap-2 group">
          <span className="font-display text-2xl tracking-tight text-ink">santi</span>
          <span className="eyebrow text-ink-soft group-hover:text-gold transition">Homes</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {primaryNav.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              end={n.to === "/"}
              className={({ isActive }) =>
                `text-sm link-underline transition ${isActive ? "text-ink" : "text-ink-soft hover:text-ink"}`
              }
            >
              {n.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link to="/contact" className="btn-primary">Request a Quote</Link>
        </div>

        <button className="lg:hidden p-2" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-line bg-paper">
          <div className="container-x py-6 space-y-6">
            <nav className="grid gap-3">
              {primaryNav.map((n) => (
                <Link key={n.to} to={n.to} onClick={() => setOpen(false)}
                  className="text-base text-ink py-1">{n.label}</Link>
              ))}
            </nav>
            <div className="rule" />
            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
              {divisionGroups.flatMap((g) =>
                divisions.filter(d => d.category === g).map(d => (
                  <Link key={d.slug} to={`/services/${d.slug}`}
                    onClick={() => setOpen(false)}
                    className="text-xs uppercase tracking-widest text-ink-soft py-1">
                    {d.name.replace("santi ", "")}
                  </Link>
                ))
              )}
            </div>
            <Link to="/contact" onClick={() => setOpen(false)} className="btn-primary w-full">Request a Quote</Link>
          </div>
        </div>
      )}
    </header>
  );
}
