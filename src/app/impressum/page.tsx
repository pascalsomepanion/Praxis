import Link from "next/link";

export default function ImpressumPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
        Rechtliches
      </p>
      <h1 className="mt-2 font-display text-3xl font-semibold text-ink">
        Impressum
      </h1>

      <div className="mt-10 space-y-8">
        <section className="rounded-2xl border border-stone-200/80 bg-white p-6 shadow-soft sm:p-8">
          <h2 className="text-lg font-semibold text-ink">
            Ordination Dr. Günther Neumayr
          </h2>
          <p className="mt-1 text-sm text-stone-500">Einzelunternehmen</p>
          <dl className="mt-6 grid gap-3 text-sm">
            <div>
              <dt className="text-stone-500">Telefon</dt>
              <dd>
                <a href="tel:+43485261952" className="font-medium text-ink hover:text-accent transition">
                  +43 (0)4852 61952
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-stone-500">E-Mail</dt>
              <dd>
                <a href="mailto:ordination@neumayr-lienz.at" className="font-medium text-ink hover:text-accent transition break-all">
                  ordination@neumayr-lienz.at
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-stone-500">Geschäftszweig</dt>
              <dd className="text-ink">Medizin</dd>
            </div>
            <div>
              <dt className="text-stone-500">Berufsbezeichnung</dt>
              <dd className="text-ink">Facharzt für Innere Medizin, Kardiologie und Sportmedizin</dd>
            </div>
            <div>
              <dt className="text-stone-500">Mitglied bei</dt>
              <dd className="text-ink">Ärztekammer für Tirol</dd>
            </div>
            <div>
              <dt className="text-stone-500">UID-Nr.</dt>
              <dd className="text-ink font-mono">ATU 61657546</dd>
            </div>
            <div>
              <dt className="text-stone-500">Firmensitz</dt>
              <dd className="text-ink">Michaelsgasse 20, 9900 Lienz</dd>
            </div>
            <div>
              <dt className="text-stone-500">Geschäftsführer / Inhaber</dt>
              <dd className="text-ink">Prof. h.c. Univ.-Doz. Dr. Günther Neumayr</dd>
            </div>
          </dl>
        </section>

        <section>
          <h3 className="text-base font-semibold text-ink">E-Mails</h3>
          <p className="mt-2 text-sm leading-relaxed text-stone-600">
            Gemäß dem E-Commerce-Gesetz weisen wir darauf hin, dass E-Mails an uns ausschließlich während unserer regulären Geschäftszeiten abgerufen und bearbeitet werden.
          </p>
        </section>

        <section className="rounded-xl border-l-4 border-accent/60 bg-stone-50/80 py-4 pl-5 pr-4 sm:pl-6">
          <h3 className="text-base font-semibold text-ink">Wichtiger rechtlicher Hinweis</h3>
          <p className="mt-2 text-sm leading-relaxed text-stone-600">
            Dr. Günther Neumayr hat alle zumutbaren Maßnahmen ergriffen, um sicherzustellen, dass die auf dieser Website bereitgestellten Informationen zum Zeitpunkt der Veröffentlichung korrekt und vollständig sind. Dennoch können unbeabsichtigte Fehler auftreten, für die wir um Verständnis bitten.
          </p>
        </section>

        <p className="text-sm text-stone-600">
          <Link href="/datenschutz" className="font-medium text-accent hover:underline">
            Datenschutz
          </Link>
        </p>
      </div>

      <Link href="/" className="mt-12 inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline">
        ← Zurück zur Startseite
      </Link>
    </div>
  );
}
