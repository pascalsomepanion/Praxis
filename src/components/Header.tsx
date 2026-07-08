"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const nav = [
  { href: "#info", label: "Info" },
  { href: "#leistungen", label: "Leistungen" },
  { href: "#honorar", label: "Kosten" },
  { href: "#team", label: "Über uns" },
  { href: "#kontakt", label: "Kontakt" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-colors duration-300 ${
        scrolled || menuOpen ? "bg-white shadow-soft" : "bg-transparent"
      }`}
    >
      <div className="flex h-16 w-full items-center justify-between gap-6 px-5 sm:px-8 lg:px-10">
        <Link
          href="/"
          className="flex items-center gap-3 transition opacity-90 hover:opacity-100"
          onClick={() => setMenuOpen(false)}
        >
          <span className="text-sm font-medium tracking-wide text-stone-700 text-shadow-soft sm:hidden">
            Ordination Neumayr
          </span>
          <span className="hidden text-base font-medium tracking-wide text-stone-700 text-shadow-soft sm:inline">
            <span className="text-accent">I</span>nnere Medizin <span className="text-stone-500 font-light">|</span>{" "}
            <span className="text-accent">K</span>ardiologie <span className="text-stone-500 font-light">|</span>{" "}
            <span className="text-accent">S</span>portmedizin
          </span>
        </Link>

        {/* Desktop-Navigation */}
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Hauptnavigation">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative rounded-lg px-4 py-2.5 text-base font-medium text-stone-700 text-shadow-soft transition hover:text-accent"
            >
              <span className="relative z-10">{item.label}</span>
              <span className="absolute inset-0 rounded-lg bg-accent-muted opacity-0 transition opacity hover:opacity-100" aria-hidden />
            </Link>
          ))}
        </nav>

        {/* Burger-Button für mobile Ansicht */}
        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-stone-700 transition hover:bg-accent-muted hover:text-accent lg:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Menü schließen" : "Menü öffnen"}
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobiles Ausklapp-Menü */}
      <div
        id="mobile-menu"
        className={`overflow-hidden bg-white shadow-soft transition-[max-height] duration-300 ease-out lg:hidden ${
          menuOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col gap-1 px-5 py-3 sm:px-8" aria-label="Mobile Hauptnavigation">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="rounded-lg px-3 py-3 text-base font-medium text-stone-700 transition hover:bg-accent-muted hover:text-accent"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
