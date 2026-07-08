"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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
    <>
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? "bg-white/80 backdrop-blur-xl backdrop-saturate-150 shadow-soft"
            : "bg-transparent"
        }`}
      >
        <div className="flex h-16 w-full items-center justify-between gap-6 px-5 sm:px-8 lg:px-10">
          <Link
            href="/"
            className="flex min-w-0 items-center gap-3 transition opacity-90 hover:opacity-100"
            onClick={() => setMenuOpen(false)}
          >
            <span className="truncate text-[11px] font-medium tracking-wide text-stone-700 text-shadow-soft sm:text-base">
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
      </header>

      {/* Mobiles Ausklapp-Menü: kompaktes, verankertes Dropdown statt voller Breite */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-ink/5 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.18 }}
              onClick={() => setMenuOpen(false)}
              aria-hidden
            />
            <motion.div
              id="mobile-menu"
              className="fixed right-4 top-[72px] z-50 w-[min(62vw,230px)] rounded-2xl bg-white/85 p-2.5 backdrop-blur-xl backdrop-saturate-150 lg:hidden"
              style={{
                transformOrigin: "top right",
                boxShadow: "0 16px 48px rgba(28,25,23,0.16), 0 4px 12px rgba(28,25,23,0.08)",
              }}
              initial={{ opacity: 0, scale: 0.95, y: -8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -8 }}
              transition={{ duration: 0.18, ease: [0.4, 0, 0.2, 1] }}
            >
              <nav className="flex flex-col gap-0.5" aria-label="Mobile Hauptnavigation">
                {nav.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="rounded-lg px-3.5 py-3 text-base font-medium text-stone-700 transition hover:bg-accent-muted hover:text-accent"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
