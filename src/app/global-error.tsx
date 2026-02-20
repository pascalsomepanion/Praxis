"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="de">
      <body style={{ margin: 0, fontFamily: "system-ui, sans-serif", padding: "2rem", background: "#fafafa" }}>
        <div style={{ maxWidth: "28rem", margin: "0 auto", textAlign: "center" }}>
          <h1 style={{ fontSize: "1.25rem", fontWeight: 600, color: "#111" }}>Fehler</h1>
          <p style={{ color: "#666", marginBottom: "1.5rem" }}>Bitte Seite neu laden.</p>
          <button
            onClick={reset}
            style={{ padding: "0.5rem 1rem", background: "#b86308", color: "#fff", border: "none", borderRadius: "0.5rem", fontWeight: 500, cursor: "pointer" }}
          >
            Erneut versuchen
          </button>
        </div>
      </body>
    </html>
  );
}
