import Image from "next/image";

const team = [
  {
    name: "Prof. h.c. Univ.-Doz. Dr. Günther Neumayr",
    role: "Arzt für Innere Medizin, Kardiologie & Sportmedizin",
    image: "/team/guenther.png",
  },
  {
    name: "Mag. Sabine Neumayr",
    role: "Praxismanagerin / Sekretärin",
    image: "/team/sabine.png",
  },
  {
    name: "Peter Gstrein",
    role: "Diplomkrankenpfleger und Medizinischer Fachangestellter",
    image: "/team/peter.png",
  },
];

export function Team() {
  return (
    <section id="team" className="scroll-mt-past-hero bg-transparent py-6 sm:py-8">
      <div className="mx-auto max-w-6xl px-4 pt-8 sm:px-6 sm:pt-10 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Über uns
          </p>
          <h2 className="mt-3 font-display text-display-lg font-semibold text-ink">
            Unser Team
          </h2>
          <p className="mt-4 text-lg text-stone-600">
            Persönlich, kompetent und mit viel Erfahrung für Ihre Gesundheit da.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:gap-8 md:grid-cols-3">
          {team.map((person) => (
            <div
              key={person.name}
              className="group flex flex-col overflow-hidden rounded-2xl border border-stone-200/80 bg-white shadow-soft transition hover:border-stone-300/80 hover:shadow-card"
            >
              <div className="relative aspect-square w-full overflow-hidden bg-stone-100">
                <Image
                  src={person.image}
                  alt={person.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition duration-300 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col p-5 sm:p-6 text-center">
                <h3 className="font-semibold text-ink leading-tight">
                  {person.name}
                </h3>
                <p className="mt-1.5 text-sm font-medium text-accent">
                  {person.role}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-16 max-w-5xl">
          <div className="overflow-hidden rounded-2xl border border-stone-200/70 bg-gradient-to-br from-white via-white to-accent/5 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.06),0_0_0_1px_rgba(0,0,0,0.02)]">
            <div className="relative border-l-4 border-accent pl-6 pr-6 py-8 sm:pl-8 sm:pr-8 sm:py-10">
              <div className="space-y-6 text-base leading-relaxed text-stone-600 sm:text-lg sm:leading-loose">
                <p>
                  In unserer Praxis für Innere Medizin und Kardiologie in Lienz steht Prof. h.c. Univ.-Doz. Dr. Günther Neumayr gemeinsam mit seinem engagierten Team für medizinische Exzellenz und persönliche Betreuung auf höchstem Niveau.
                </p>
                <p>
                  Dr. Günther Neumayr verfügt über jahrzehntelange Erfahrung in der Inneren Medizin, Kardiologie und sportmedizinischen Diagnostik. Nach seiner Tätigkeit als Primar im Krankenhaus Innichen sowie später im Bezirkskrankenhaus Kitzbühel gründete er 2006 seine eigene Praxis in Lienz. Seine Leidenschaft für Medizin, gepaart mit wissenschaftlicher Expertise und kontinuierlicher Weiterbildung, macht ihn zu einem der angesehensten Fachärzte in der Region.
                </p>
                <p>
                  Unterstützt wird Dr. Neumayr von seiner Ehefrau Sabine Neumayr, die als erfahrene Sekretärin und Praxismanagerin für den reibungslosen organisatorischen Ablauf sorgt. Mit viel Herzlichkeit ist sie erste Ansprechpartnerin für Patienten und kümmert sich um sämtliche administrativen Belange.
                </p>
                <p>
                  In der medizinischen Betreuung wird Dr. Neumayr von Peter Gstrein, diplomierter Gesundheits- und Krankenpfleger, unterstützt. Durch seine fachliche Kompetenz, seine einfühlsame Art und langjährige Erfahrung begleitet er Patienten während diagnostischer Untersuchungen und sorgt für eine vertrauensvolle Atmosphäre.
                </p>
                <p>
                  Gemeinsam verfolgt unser Team ein Ziel: Ihre Gesundheit bestmöglich zu fördern, individuell auf Ihre Bedürfnisse einzugehen und Ihnen eine persönliche Betreuung auf Augenhöhe zu bieten.
                </p>
              </div>
            </div>
          </div>

          <blockquote className="relative mt-10 rounded-xl border border-stone-200/80 bg-white py-10 px-8 text-center sm:py-12 sm:px-14 shadow-[0_2px_20px_-4px_rgba(0,0,0,0.06)]">
            <span className="absolute left-6 top-6 h-6 w-px bg-accent/40" aria-hidden />
            <span className="absolute left-6 top-6 h-px w-6 bg-accent/40" aria-hidden />
            <span className="absolute right-6 bottom-6 h-6 w-px bg-accent/40" aria-hidden />
            <span className="absolute right-6 bottom-6 h-px w-6 bg-accent/40" aria-hidden />
            <div className="absolute left-0 right-0 top-0 h-0.5 rounded-t-xl bg-gradient-to-r from-transparent via-accent to-transparent opacity-80" aria-hidden />
            <p className="relative font-display text-lg font-medium italic leading-relaxed text-ink/95 sm:text-xl sm:leading-relaxed">
              Ein guter Arzt lindert die Erkrankung,
              <br />
              der bessere Arzt heilt die Erkrankung,
              <br />
              der beste Arzt verhindert die Erkrankung.
            </p>
            <div className="absolute bottom-0 left-1/2 h-0.5 w-32 -translate-x-1/2 rounded-full bg-gradient-to-r from-transparent via-accent/70 to-transparent" aria-hidden />
          </blockquote>
        </div>
      </div>
    </section>
  );
}
