import Link from "next/link";

export default function ImpressumPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-2xl font-semibold text-gray-900">Impressum</h1>
      <p className="mt-6 text-gray-600">
        Angaben gemäß Informationspflicht. Bitte ergänzen Sie hier die rechtlich erforderlichen Impressumsangaben Ihrer Ordination (Betreiber, Adresse, Kontakt, ggf. Aufsichtsbehörde, UID etc.).
      </p>
      <Link href="/" className="mt-8 inline-block text-accent font-medium hover:underline">
        ← Zurück zur Startseite
      </Link>
    </div>
  );
}
