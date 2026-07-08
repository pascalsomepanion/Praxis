import Link from "next/link";

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-stone-200 bg-white text-stone-600">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-between sm:items-center sm:gap-6">
          <nav
            className="order-1 flex flex-row items-center gap-4 sm:order-2 sm:flex-1 sm:justify-end sm:gap-6 text-base"
            aria-label="Rechtliches"
          >
            <Link
              href="/impressum"
              className="font-medium text-stone-600 hover:text-accent transition focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-stone-100 rounded"
            >
              Impressum
            </Link>
            <span className="h-4 w-px bg-stone-400" aria-hidden />
            <Link
              href="/datenschutz"
              className="font-medium text-stone-600 hover:text-accent transition focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-stone-100 rounded"
            >
              Datenschutz
            </Link>
          </nav>

          <p className="order-2 text-sm text-stone-500 sm:order-1 sm:flex-1 text-center sm:text-left">
            © Prof. h.c. Univ.-Doz. Dr. Günther Neumayr
          </p>
        </div>
      </div>
    </footer>
  );
}
