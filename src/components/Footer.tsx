import Link from "next/link";
import { Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-stone-800/50 bg-stone-900 text-stone-300">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-8 sm:flex-row sm:flex-wrap sm:items-center">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm">
            <Link
              href="/impressum"
              className="transition hover:text-white focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-stone-900 rounded"
            >
              Impressum
            </Link>
            <Link
              href="/datenschutz"
              className="transition hover:text-white focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-stone-900 rounded"
            >
              Datenschutz
            </Link>
            <a
              href="tel:+43485261952"
              className="inline-flex items-center gap-2 transition hover:text-accent"
            >
              <Phone className="h-4 w-4" aria-hidden />
              +43 4852 61952
            </a>
            <a
              href="mailto:ordination@ordination-neumayr.at"
              className="inline-flex items-center gap-2 transition hover:text-accent"
            >
              <Mail className="h-4 w-4" aria-hidden />
              E-Mail
            </a>
          </div>
        </div>
        <p className="mt-8 text-center text-xs text-stone-500">
          © {new Date().getFullYear()} Ordination Prof. Dr. Neumayr · Designed by{" "}
          <a
            href="https://www.digitalissimo.at"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:text-amber-400 transition"
          >
            www.digitalissimo.at
          </a>
        </p>
      </div>
    </footer>
  );
}
