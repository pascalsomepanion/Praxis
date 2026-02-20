import Link from "next/link";

export default function DatenschutzPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
        Rechtliches
      </p>
      <h1 className="mt-2 font-display text-3xl font-semibold text-ink">
        Datenschutzerklärung
      </h1>
      <p className="mt-4 text-stone-600 leading-relaxed">
        Wir, die Ordination Dr. Günther Neumayr, nehmen den Schutz Ihrer persönlichen Daten sehr ernst. In dieser Datenschutzerklärung informieren wir Sie darüber, welche Daten wir auf unserer Website erfassen, wie wir sie verwenden und welche Rechte Ihnen zustehen.
      </p>

      <div className="mt-10 space-y-10">
        <section>
          <h2 className="text-lg font-semibold text-ink">1. Verantwortlicher für die Datenverarbeitung</h2>
          <dl className="mt-4 grid gap-2 text-sm">
            <div>
              <dt className="text-stone-500">Webseitenbetreiber</dt>
              <dd className="text-ink">Prof. h.c. Univ.-Doz. Dr. Günther Neumayr</dd>
            </div>
            <div>
              <dt className="text-stone-500">Adresse</dt>
              <dd className="text-ink">Michaelsgasse 20, 9900 Lienz</dd>
            </div>
            <div>
              <dt className="text-stone-500">Telefonnummer</dt>
              <dd>
                <a href="tel:+43485261952" className="text-ink hover:text-accent transition">+43 4852 61952</a>
              </dd>
            </div>
            <div>
              <dt className="text-stone-500">E-Mail</dt>
              <dd>
                <a href="mailto:ordination@neumayr-lienz.at" className="text-ink hover:text-accent transition break-all">ordination@neumayr-lienz.at</a>
              </dd>
            </div>
          </dl>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-ink">2. Erhebung und Speicherung personenbezogener Daten</h2>

          <h3 className="mt-5 text-base font-semibold text-ink">2.1 Server-Logfiles</h3>
          <p className="mt-2 text-sm leading-relaxed text-stone-600">
            Beim Besuch unserer Website speichert unser Webserver automatisch folgende Daten:
          </p>
          <ul className="mt-2 list-inside list-disc text-sm text-stone-600 space-y-1">
            <li>IP-Adresse</li>
            <li>Datum und Uhrzeit des Zugriffs</li>
            <li>Browsertyp und -version</li>
            <li>Betriebssystem</li>
            <li>Referrer-URL (die zuvor besuchte Seite)</li>
          </ul>
          <p className="mt-3 text-sm leading-relaxed text-stone-600">
            Diese Daten werden zur Sicherstellung des ordnungsgemäßen Betriebs unserer Website und zur Fehleranalyse verwendet. Die Speicherung erfolgt gemäß Art. 6 Abs. 1 lit. f DSGVO auf Grundlage unseres berechtigten Interesses. Die Daten werden nur so lange gespeichert, wie es zur Erfüllung dieser Zwecke erforderlich ist und anschließend gelöscht.
          </p>

          <h3 className="mt-5 text-base font-semibold text-ink">2.2 Kontaktaufnahme</h3>
          <p className="mt-2 text-sm leading-relaxed text-stone-600">
            Wenn Sie uns per E-Mail, Telefon, Fax oder Kontaktformular kontaktieren, speichern wir Ihre angegebenen Daten (Name, E-Mail-Adresse, Telefonnummer, etc.) nur zur Bearbeitung Ihrer Anfrage. Diese Daten werden nicht ohne Ihre Zustimmung an Dritte weitergegeben und nach Erfüllung des Zwecks oder nach Ablauf der gesetzlichen Aufbewahrungsfristen gelöscht.
          </p>
          <p className="mt-2 text-sm leading-relaxed text-stone-600">
            Die Verarbeitung erfolgt gemäß Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen).
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-ink">3. Cookies & Tracking-Technologien</h2>
          <p className="mt-3 text-sm leading-relaxed text-stone-600">
            Unsere Website verwendet Cookies. Cookies sind kleine Textdateien, die auf Ihrem Endgerät gespeichert werden. Sie richten keinen Schaden an.
          </p>
          <h3 className="mt-4 text-base font-semibold text-ink">3.1 Erforderliche Cookies</h3>
          <p className="mt-2 text-sm leading-relaxed text-stone-600">
            Diese Cookies sind technisch notwendig, damit die Website funktioniert. Sie können nicht deaktiviert werden.
          </p>
          <h3 className="mt-4 text-base font-semibold text-ink">3.2 Optionale Cookies (z. B. für Analyse oder Marketing)</h3>
          <p className="mt-2 text-sm leading-relaxed text-stone-600">
            Falls wir Analyse- oder Marketing-Cookies verwenden, bitten wir Sie vorab um Ihre Zustimmung per Cookie Banner. Sie können Ihre Einstellungen jederzeit ändern.
          </p>
          <p className="mt-2 text-sm leading-relaxed text-stone-600">
            Sie können Cookies in den Browsereinstellungen deaktivieren. Bei der Deaktivierung können jedoch einige Funktionen der Website eingeschränkt sein.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-ink">4. Eingebundene Drittanbieter-Dienste</h2>

          <div className="mt-5 rounded-xl border border-stone-200/80 bg-stone-50/50 p-5 space-y-6">
            <div>
              <h3 className="text-base font-semibold text-ink">4.1 Google Maps</h3>
              <p className="mt-2 text-sm leading-relaxed text-stone-600">
                Unsere Website nutzt Google Maps zur Darstellung von Kartenmaterial. Betreiber: Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland.
              </p>
              <p className="mt-2 text-sm leading-relaxed text-stone-600">
                Beim Laden von Google Maps wird Ihre IP-Adresse an Google übertragen. Falls Sie dies nicht möchten, deaktivieren Sie JavaScript in Ihrem Browser.
              </p>
              <p className="mt-2 text-sm leading-relaxed text-stone-600">
                Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einer besseren Auffindbarkeit unserer Standorte).
              </p>
              <a href="https://policies.google.com/privacy?hl=de" target="_blank" rel="noopener noreferrer" className="mt-2 inline-block text-sm font-medium text-accent hover:underline">
                Weitere Infos: Google Datenschutz
              </a>
            </div>

            <div>
              <h3 className="text-base font-semibold text-ink">4.2 Google Fonts</h3>
              <p className="mt-2 text-sm leading-relaxed text-stone-600">
                Unsere Website nutzt Schriftarten von Google Fonts. Beim Aufruf der Website werden Fonts von Google-Servern geladen, wodurch Ihre IP-Adresse an Google übertragen werden kann.
              </p>
              <p className="mt-2 text-sm leading-relaxed text-stone-600">
                Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einer einheitlichen und ansprechenden Darstellung).
              </p>
              <a href="https://fonts.google.com/" target="_blank" rel="noopener noreferrer" className="mt-2 inline-block text-sm font-medium text-accent hover:underline">
                Weitere Infos: Google Fonts
              </a>
            </div>

            <div>
              <h3 className="text-base font-semibold text-ink">4.3 Google Analytics</h3>
              <p className="mt-2 text-sm leading-relaxed text-stone-600">
                Unsere Website verwendet Google Analytics, einen Webanalyse-Dienst von Google Ireland Limited. Google Analytics verwendet Cookies, um Informationen über die Nutzung der Website zu sammeln, einschließlich Ihrer IP-Adresse, die an Google übermittelt wird. Die gesammelten Informationen werden genutzt, um Reports zur Nutzung der Website zu erstellen und die Website zu verbessern.
              </p>
              <p className="mt-2 text-sm leading-relaxed text-stone-600">
                Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Analyse der Nutzung unserer Website und der Verbesserung unserer Angebote).
              </p>
              <a href="https://policies.google.com/privacy?hl=de" target="_blank" rel="noopener noreferrer" className="mt-2 inline-block text-sm font-medium text-accent hover:underline">
                Weitere Infos: Google Analytics Datenschutzerklärung
              </a>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-ink">5. Ihre Rechte als Betroffener</h2>
          <p className="mt-3 text-sm leading-relaxed text-stone-600">
            Sie als Betroffener haben bezüglich Ihrer Daten, welche bei uns gespeichert sind, grundsätzlich ein Recht auf:
          </p>
          <ul className="mt-3 list-inside list-disc text-sm text-stone-600 space-y-1">
            <li>Auskunft</li>
            <li>Löschung der Daten</li>
            <li>Berichtigung der Daten</li>
            <li>Übertragbarkeit der Daten</li>
            <li>Wiederruf und Widerspruch zur Datenverarbeitung</li>
            <li>Einschränkung</li>
          </ul>
          <p className="mt-4 text-sm leading-relaxed text-stone-600">
            Wenn Sie vermuten, dass im Zuge der Verarbeitung Ihrer Daten Verstöße gegen das Datenschutzrecht passiert sind, so haben Sie die Möglichkeit, sich bei uns (
            <a href="mailto:ordination@neumayr-lienz.at" className="font-medium text-accent hover:underline">ordination@neumayr-lienz.at</a>
            ) oder der Datenschutzbehörde zu beschweren.
          </p>
        </section>
      </div>

      <Link href="/" className="mt-12 inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline">
        ← Zurück zur Startseite
      </Link>
    </div>
  );
}
