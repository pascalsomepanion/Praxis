import { MapPin, Clock, Phone, Mail, Car } from "lucide-react";

export function KontaktAnfahrt() {
  return (
    <section id="kontakt" className="scroll-mt-20 bg-transparent py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            So erreichen Sie uns
          </p>
          <h2 className="mt-3 font-display text-display-lg font-semibold text-ink">
            Kontakt & Anfahrt
          </h2>
          <p className="mt-4 text-lg text-ink-muted">
            So erreichen Sie uns und finden Sie zu uns.
          </p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-stone-200/80 bg-surface p-6 shadow-soft sm:p-8">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <Clock className="h-5 w-5" strokeWidth={1.75} />
              </div>
              <h3 className="text-lg font-semibold text-ink">
                Öffnungszeiten
              </h3>
            </div>
            <p className="mt-5 text-ink-muted">
              <span className="font-medium text-ink">Montag bis Donnerstag</span>
              <br />
              07:30 – 13:30 Uhr
            </p>
            <p className="mt-2 text-sm text-ink-muted">
              Termine nach telefonischer Vereinbarung.
            </p>
          </div>

          <div className="rounded-2xl border border-stone-200/80 bg-surface p-6 shadow-soft sm:p-8">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <MapPin className="h-5 w-5" strokeWidth={1.75} />
              </div>
              <h3 className="text-lg font-semibold text-ink">
                Adresse
              </h3>
            </div>
            <p className="mt-5 text-ink-muted">
              Michaelsgasse 20
              <br />
              9900 Lienz
            </p>
            <p className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href="tel:+43485261952"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-accent-hover"
              >
                <Phone className="h-4 w-4" aria-hidden />
                +43 4852 61952
              </a>
              <a
                href="mailto:ordination@ordination-neumayr.at"
                className="group inline-flex items-center justify-center gap-2 rounded-full border-2 border-stone-300 bg-white px-5 py-3 text-sm font-semibold text-ink transition hover:border-stone-400 hover:bg-stone-50"
              >
                <Mail className="h-4 w-4" aria-hidden />
                E-Mail schreiben
              </a>
            </p>
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
          <p className="mt-4 leading-relaxed text-ink-muted">
            Die Ordination befindet sich in der <strong className="text-ink">Michaelsgasse 20 in 9900 Lienz</strong>. 
            Sie erreichen uns mit dem Pkw über die Ortszufahrt Lienz; die Michaelsgasse liegt zentral und ist ausgeschildert. 
            <strong className="text-ink"> Parkmöglichkeiten</strong> finden Sie in der Nähe (öffentliche Parkplätze bzw. Parkraum in den umliegenden Straßen). 
            Bitte planen Sie gegebenenfalls etwas Zeit für die Parkplatzsuche ein, insbesondere zu Stoßzeiten.
          </p>
        </div>
      </div>
    </section>
  );
}
