import Link from "next/link";

const nav = [
  { href: "#info", label: "Info" },
  { href: "#leistungen", label: "Leistungen" },
  { href: "#honorar", label: "Kosten" },
  { href: "#team", label: "Über uns" },
  { href: "#kontakt", label: "Kontakt" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-transparent" style={{ background: "transparent" }}>
      <div className="flex h-16 w-full items-center justify-between gap-6 px-5 sm:px-8 lg:px-10">
        <Link
          href="/"
          className="flex items-center gap-3 transition opacity-90 hover:opacity-100"
        >
          <span className="hidden text-sm font-medium tracking-wide text-stone-700 text-shadow-soft sm:inline">
            <span className="text-accent">I</span>nnere Medizin <span className="text-stone-500 font-light">|</span>{" "}
            <span className="text-accent">K</span>ardiologie <span className="text-stone-500 font-light">|</span>{" "}
            <span className="text-accent">S</span>portmedizin
          </span>
        </Link>
        <nav className="flex items-center gap-0.5" aria-label="Hauptnavigation">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative rounded-lg px-4 py-2.5 text-sm font-medium text-stone-700 text-shadow-soft transition hover:text-accent"
            >
              <span className="relative z-10">{item.label}</span>
              <span className="absolute inset-0 rounded-lg bg-accent-muted opacity-0 transition opacity hover:opacity-100" aria-hidden />
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
