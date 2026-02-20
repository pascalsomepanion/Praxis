"use client";

import { Clock, Car, Copy, Navigation, MapPin } from "lucide-react";

const ADRESSE = "Michaelsgasse 20, 9900 Lienz";
const MAP_URL = "https://www.google.com/maps/search/?api=1&query=Michaelsgasse+20+9900+Lienz";

const oeffnungszeiten = [
  { tag: "Montag", zeiten: "07:30–13:30", geschlossen: false },
  { tag: "Dienstag", zeiten: "07:30–13:30", geschlossen: false },
  { tag: "Mittwoch", zeiten: "07:30–13:30", geschlossen: false },
  { tag: "Donnerstag", zeiten: "07:30–13:30", geschlossen: false },
  { tag: "Freitag", zeiten: "nach Vereinbarung", geschlossen: false },
  { tag: "Samstag", zeiten: "Geschlossen", geschlossen: true },
  { tag: "Sonntag", zeiten: "Geschlossen", geschlossen: true },
];

function copyAddress() {
  void navigator.clipboard.writeText(ADRESSE);
}

export function KontaktAnfahrt() {
  return (
    <section id="kontakt" className="scroll-mt-past-hero bg-transparent py-6 sm:py-8">
      <div className="mx-auto max-w-6xl px-4 pt-8 sm:px-6 sm:pt-10 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Kontakt
          </p>
          <h2 className="mt-3 font-display text-display-lg font-semibold text-ink">
            So erreichen Sie uns
          </h2>
          <p className="mt-4 text-lg text-stone-600">
            Wir freuen uns auf Ihren Besuch. Hier finden Sie alle Informationen zu unseren Kontaktmöglichkeiten und den schnellsten Weg in unsere Praxis.
          </p>
        </div>

        <div className="mt-16 grid gap-5 lg:grid-cols-2">
          <div className="rounded-xl border border-stone-200/80 bg-surface p-5 shadow-soft sm:p-6">
            <div className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                <MapPin className="h-4 w-4" strokeWidth={1.75} />
              </div>
              <h3 className="text-base font-semibold text-ink">Ordination</h3>
            </div>
            <p className="mt-3 font-display text-base font-semibold text-ink">
              Michaelsgasse 20
            </p>
            <p className="mt-0.5 text-sm text-stone-600">A-9900 Lienz</p>
            <div className="mt-5 flex flex-wrap items-center gap-2 text-xs">
              <button
                type="button"
                onClick={copyAddress}
                className="inline-flex items-center gap-1 text-accent hover:text-accent-hover transition font-medium"
              >
                <Copy className="h-3 w-3" strokeWidth={2} />
                Adresse kopieren
              </button>
              <span className="text-stone-300" aria-hidden>·</span>
              <a
                href={MAP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-accent hover:text-accent-hover transition font-medium"
              >
                <Navigation className="h-3 w-3" strokeWidth={2} />
                Route planen
              </a>
            </div>
            <p className="mt-5 text-sm text-stone-600">
              <span className="text-stone-500">Telefon</span>{" "}
              <a href="tel:+43485261952" className="font-medium text-ink hover:text-accent transition">
                +43 4852 61952
              </a>
            </p>
            <p className="mt-2 text-sm text-stone-600">
              <span className="text-stone-500">E-Mail</span>{" "}
              <a href="mailto:ordination@ordination-neumayr.at" className="font-medium text-ink hover:text-accent transition break-all">
                ordination@ordination-neumayr.at
              </a>
            </p>
          </div>

          <div className="rounded-xl border border-stone-200/80 bg-surface p-5 shadow-soft sm:p-6">
            <div className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                <Clock className="h-4 w-4" strokeWidth={1.75} />
              </div>
              <h3 className="text-base font-semibold text-ink">Öffnungszeiten</h3>
            </div>
            <dl className="mt-3 space-y-1.5">
              {oeffnungszeiten.map(({ tag, zeiten, geschlossen }) => (
                <div key={tag} className="flex justify-between items-center gap-3 text-sm">
                  <dt className="text-stone-600 shrink-0">{tag}</dt>
                  <dd className="text-right flex items-center justify-end gap-1.5">
                    {geschlossen && (
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                    )}
                    <span className={geschlossen ? "text-stone-500" : "text-ink"}>{zeiten}</span>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <div className="mt-6 rounded-2xl border border-stone-200/80 bg-gradient-to-br from-accent-light/30 to-white p-6 shadow-soft sm:p-8">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
              <Car className="h-5 w-5" strokeWidth={1.75} />
            </div>
            <h3 className="text-lg font-semibold text-ink">
              Anfahrtsbeschreibung & Parken
            </h3>
          </div>
          <div className="mt-4 space-y-5 leading-relaxed text-stone-600">
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wide text-ink mb-2">Ihr Weg zu uns</h4>
              <p>
                Die Ordination liegt zentral in der Michaelsgasse 20, 9900 Lienz. Sie erreichen uns bequem über die Hauptzufahrten nach Lienz.
              </p>
            </div>
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wide text-ink mb-2">Parkmöglichkeiten</h4>
              <p>
                Für Ihren Komfort stehen Ihnen Parkplätze direkt vor der Ordination zur Verfügung. Sollten diese bei Ihrer Ankunft belegt sein, finden Sie in unmittelbarer Nähe zahlreiche öffentliche Parkmöglichkeiten in den umliegenden Straßen.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
