import { Info } from "lucide-react";

export function HonorarKosten() {
  return (
    <section id="honorar" className="scroll-mt-past-hero bg-transparent py-6 sm:py-8">
      <div className="mx-auto max-w-6xl px-4 pt-8 sm:px-6 sm:pt-10 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Transparenz
          </p>
          <h2 className="mt-3 font-display text-display-lg font-semibold text-ink">
            Honorar & Kosten
          </h2>
          <p className="mt-4 text-lg text-stone-600">
            Transparente Information zu Ihren Behandlungskosten.
          </p>
        </div>

        <div className="mx-auto mt-14 max-w-3xl">
          <div className="relative overflow-hidden rounded-2xl border border-stone-200/80 bg-gradient-to-br from-accent-light/50 to-white p-8 shadow-soft sm:p-10">
            <div className="absolute right-0 top-0 h-32 w-32 bg-accent/5 rounded-bl-full" aria-hidden />
            <div className="relative flex gap-5 sm:gap-6">
              <div className="shrink-0">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent text-white shadow-soft text-2xl font-semibold">
                  €
                </div>
              </div>
              <div className="min-w-0">
                <h3 className="text-xl font-semibold text-ink">
                  Wahlarzt-Ordination
                </h3>
                <p className="mt-4 leading-relaxed text-stone-600">
                  Wir führen unsere Praxis als Wahlarzt-Ordination. Das ermöglicht uns, genau das Kostbarste in Ihre Behandlung zu investieren: ausreichend Zeit.
                </p>
                <p className="mt-4 leading-relaxed text-stone-600">
                  In einer entspannten Atmosphäre ohne Zeitdruck widmen wir uns intensiv Ihrer Diagnose und Therapie. Die Verrechnung erfolgt direkt mit Ihnen als Patient. Im Anschluss erhalten Sie von uns eine detaillierte Honorarnote, die Sie unkompliziert bei Ihrem Sozialversicherungsträger zur (Teil-)Rückerstattung einreichen können.
                </p>
              </div>
            </div>

            <div className="relative mt-8 flex flex-col gap-3 rounded-xl border border-accent/15 bg-white/90 p-5 text-sm text-stone-600 sm:flex-row sm:gap-4 sm:p-6">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                <Info className="h-4 w-4" strokeWidth={1.75} />
              </div>
              <div className="min-w-0 space-y-2.5">
                <p className="font-semibold text-ink">Transparenz ist uns wichtig</p>
                <p className="leading-relaxed">
                  Da die Kosten je nach individuellem Untersuchungsumfang variieren, beraten wir Sie gerne vorab persönlich über die voraussichtlichen Honorare.
                </p>
                <p className="leading-relaxed">
                  Wir unterstützen Sie zudem gerne bei Fragen zur Einreichung bei Ihrer Krankenkasse oder Zusatzversicherung.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
