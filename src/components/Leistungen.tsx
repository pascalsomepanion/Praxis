import { Heart, Activity, Stethoscope, ChevronRight } from "lucide-react";

const fachgebiete = [
  {
    icon: Heart,
    title: "Kardiologie",
    items: [
      "EKG (Ruhe- und Belastungs-EKG)",
      "Echokardiographie (Herzultraschall)",
      "Langzeit-EKG",
      "Langzeit-Blutdruckmessung",
      "Spiroergometrie (ergometrische Leistungsdiagnostik mit Atemgasanalyse)",
      "Stressechokardiographie",
    ],
  },
  {
    icon: Stethoscope,
    title: "Innere Medizin",
    items: [
      "Ultraschall des Bauchraums (Abdomen)",
      "Ultraschall der Schilddrüse",
      "Lungenfunktionsprüfung (Spirometrie)",
      "Laboruntersuchungen (Blut, Urin)",
      "Vorsorgeuntersuchungen",
      "Internistische Basisdiagnostik",
    ],
  },
  {
    icon: Activity,
    title: "Sportmedizin",
    items: [
      "Sportkardiologische Untersuchung",
      "Leistungsdiagnostik (Fahrradergometrie, Spiroergometrie)",
      "Sporttauglichkeitsuntersuchungen",
      "Beratung zu Training und Regeneration",
    ],
  },
];

export function Leistungen() {
  return (
    <section id="leistungen" className="scroll-mt-past-hero bg-transparent py-6 sm:py-8">
      <div className="mx-auto max-w-6xl px-4 pt-8 sm:px-6 sm:pt-10 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Leistungen
          </p>
          <h2 className="mt-3 font-display text-display-lg font-semibold text-ink">
            Unser Spektrum
          </h2>
          <p className="mt-4 text-lg text-stone-600">
            Präzise Diagnostik und individuelle Therapiekonzepte auf dem neuesten Stand der Medizin. Wir bieten Ihnen eine umfassende Betreuung in folgenden Fachbereichen:
          </p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {fachgebiete.map((fach, index) => {
            const Icon = fach.icon;
            return (
              <div
                key={fach.title}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-stone-200/80 bg-white shadow-soft transition hover:shadow-card hover:border-stone-300/80"
              >
                <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-accent/80 to-accent/40 opacity-90" aria-hidden />
                <div className="flex-1 px-6 pt-6 pb-4 sm:px-8 sm:pt-8">
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent transition group-hover:bg-accent group-hover:text-white">
                      <Icon className="h-6 w-6" strokeWidth={1.75} />
                    </div>
                    <span className="text-3xl font-display font-light text-stone-200 group-hover:text-accent/30 transition">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-ink">
                    {fach.title}
                  </h3>
                  <ul className="mt-5 space-y-3">
                    {fach.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-sm text-stone-600"
                      >
                        <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-accent/70" strokeWidth={2} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
