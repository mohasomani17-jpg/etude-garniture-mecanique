"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { axes } from "./site-content";

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <header className="site-header">
      <a className="brand" href="/" aria-label="Accueil">
        <span className="brand-symbol">ME</span>
        <span className="brand-text"><b>Seal / 02CEX202PO</b><small>Étude de modernisation</small></span>
      </a>
      <nav className={menuOpen ? "nav is-open" : "nav"} aria-label="Navigation principale">
        {axes.map((axis) => (
          <a className={`${pathname === axis.href ? "is-active" : ""}${axis.href === "/decision" ? " nav-highlight" : ""}`} href={axis.href} key={axis.href} onClick={() => setMenuOpen(false)}>
            <span>{axis.number}</span>{axis.navLabel}
          </a>
        ))}
      </nav>
      <button className={menuOpen ? "menu-toggle is-open" : "menu-toggle"} onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"} aria-expanded={menuOpen}>
        <span /><span />
      </button>
    </header>
  );
}
