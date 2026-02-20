import { Info, FileText } from "lucide-react";

export function HonorarKosten() {
  return (
    <section id="honorar" className="scroll-mt-20 bg-transparent py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Transparenz
          </p>
          <h2 className="mt-3 font-display text-display-lg font-semibold text-ink">
            Honorar & Kosten
          </h2>
          <p className="mt-4 text-lg text-ink-muted">
            Transparente Information zu Ihren Behandlungskosten.
          </p>
        </div>

        <div className="mx-auto mt-14 max-w-3xl">
          <div className="relative overflow-hidden rounded-2xl border border-stone-200/80 bg-gradient-to-br from-accent-light/50 to-white p-8 shadow-soft sm:p-10">
            <div className="absolute right-0 top-0 h-32 w-32 bg-accent/5 rounded-bl-full" aria-hidden />
            <div className="relative flex gap-5 sm:gap-6">
              <div className="shrink-0">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent text-white shadow-soft">
                  <Info className="h-7 w-7" strokeWidth={1.75} />
                </div>
              </div>
              <div className="min-w-0">
                <h3 className="text-xl font-semibold text-ink">
                  Wahlarzt-Ordination
                </h3>
                <p className="mt-4 leading-relaxed text-ink-muted">
                  Unsere Ordination arbeitet als <strong className="text-ink">Wahlarzt-Ordination</strong>. 
                  Die Kosten für die Untersuchungen und Behandlungen sind von Ihnen als Patientin bzw. Patient zu tragen. 
                  Sie erhalten von uns eine detaillierte Honorarnote, die Sie bei Ihrer Krankenkasse zur Teilrückerstattung einreichen können. 
                  Die genauen Erstattungssätze erfahren Sie bei Ihrer jeweiligen Kasse.
                </p>
                <p className="mt-5 flex items-center gap-3 rounded-xl bg-white/80 px-4 py-3 text-sm text-ink-muted">
                  <FileText className="h-5 w-5 shrink-0 text-accent" strokeWidth={1.5} />
                  Gerne informieren wir Sie vor der ersten Untersuchung über die voraussichtlichen Kosten.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
