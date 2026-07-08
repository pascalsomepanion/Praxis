import Link from "next/link";

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-stone-300 bg-stone-200/60 text-stone-600">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between sm:items-center">
          <p className="text-sm text-stone-500 sm:flex-1 text-center sm:text-left">
            © Prof. h.c. Univ.-Doz. Dr. Günther Neumayr
          </p>

          <nav className="flex flex-col items-center gap-2 sm:flex-row sm:items-center sm:gap-6 sm:flex-1 sm:justify-end text-base" aria-label="Rechtliches">
            <Link
              href="/impressum"
              className="font-medium text-stone-600 hover:text-accent transition focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-stone-100 rounded"
            >
              Impressum
            </Link>
            <span className="hidden sm:inline h-4 w-px bg-stone-400" aria-hidden />
            <Link
              href="/datenschutz"
              className="font-medium text-stone-600 hover:text-accent transition focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-stone-100 rounded"
            >
              Datenschutz
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
