import Link from "next/link";
import { Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-stone-200/80 bg-stone-100 text-stone-600">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8 sm:flex-row sm:justify-between sm:items-center">
          <p className="text-sm text-stone-600">
            © Prof. h.c. Univ.-Doz. Dr. Günther Neumayr
          </p>

          <div className="flex flex-col items-center gap-2 sm:gap-3">
            <a
              href="tel:+43485261952"
              className="inline-flex items-center gap-2 text-sm font-medium text-ink hover:text-accent transition"
            >
              <Phone className="h-4 w-4 shrink-0" aria-hidden />
              +43 4852 61952
            </a>
            <a
              href="mailto:ordination@neumayr-lienz.at"
              className="inline-flex items-center gap-2 text-sm font-medium text-ink hover:text-accent transition"
            >
              <Mail className="h-4 w-4 shrink-0" aria-hidden />
              ordination@neumayr-lienz.at
            </a>
          </div>

          <nav className="flex flex-col items-center gap-2 sm:flex-row sm:gap-6 text-sm" aria-label="Rechtliches">
            <Link
              href="/impressum"
              className="font-medium text-stone-600 hover:text-accent transition focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-stone-100 rounded"
            >
              Impressum
            </Link>
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
