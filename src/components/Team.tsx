import { User, UserCircle, Users } from "lucide-react";

const team = [
  {
    name: "Prof. h. c. Univ.-Doz. Dr. Günther Neumayr",
    role: "Facharzt für Innere Medizin, Kardiologie und Sportmedizin",
    icon: User,
    vita: "Langjährige Erfahrung in Kardiologie, Sportmedizin und internistischer Diagnostik. Schwerpunkte: Herzultraschall, Belastungsuntersuchungen, Spiroergometrie und sportkardiologische Beratung. Akademische Lehre und Forschung im Bereich Innere Medizin und Kardiologie.",
  },
  {
    name: "Mag. Sabine Neumayr",
    role: "Praxismanagement",
    icon: UserCircle,
    vita: "Verantwortlich für die organisatorische und administrative Leitung der Ordination. Ansprechpartnerin für Termine, Abrechnung und alle Fragen rund um Ihren Besuch. Garantiert einen reibungslosen Ablauf und ein angenehmes Praxisumfeld.",
  },
  {
    name: "Peter Gstrein",
    role: "Pflege",
    icon: Users,
    vita: "Erfahrener Pflegefachmann mit Schwerpunkt auf kardiologischen und internistischen Untersuchungen. Unterstützt bei EKG, Langzeitmessungen, Blutabnahmen und der Vorbereitung sowie Durchführung der verschiedenen diagnostischen Verfahren.",
  },
];

export function Team() {
  return (
    <section id="team" className="scroll-mt-20 bg-transparent py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Über uns
          </p>
          <h2 className="mt-3 font-display text-display-lg font-semibold text-ink">
            Unser Team
          </h2>
          <p className="mt-4 text-lg text-ink-muted">
            Persönlich, kompetent und mit viel Erfahrung für Ihre Gesundheit da.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {team.map((person) => {
            const Icon = person.icon;
            const initials = (person.name || "")
              .split(" ")
              .filter((w) => w.length > 1)
              .slice(-2)
              .map((w) => w[0])
              .join("") || "?";
            return (
              <div
                key={person.name}
                className="group flex flex-col overflow-hidden rounded-2xl border border-stone-200/80 bg-white shadow-soft transition hover:shadow-card"
              >
                <div className="flex items-start gap-5 p-6 sm:p-8">
                  <div className="relative flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-stone-100 text-stone-500 transition group-hover:bg-accent/10 group-hover:text-accent">
                    <span className="text-lg font-semibold text-inherit">
                      {initials || "?"}
                    </span>
                    <div className="absolute -bottom-1 -right-1 flex h-8 w-8 items-center justify-center rounded-lg bg-accent/10 text-accent">
                      <Icon className="h-4 w-4" strokeWidth={1.75} />
                    </div>
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-semibold text-ink">{person.name}</h3>
                    <p className="mt-1 text-sm font-medium text-accent">
                      {person.role}
                    </p>
                    <p className="mt-4 text-sm leading-relaxed text-ink-muted">
                      {person.vita}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
