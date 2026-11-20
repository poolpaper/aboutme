# Architektur

## Ziel

Eine persönliche Portfolio-Website als statische Seite. Sie ist schnell lokal testbar, kostenlos über GitHub Pages veröffentlicht und leicht zu pflegen. Neue Projekte sollen nur einen neuen Eintrag in einer Datendatei brauchen, ohne Änderung am Design.

## Tech-Stack

| Baustein | Wahl | Grund |
| --- | --- | --- |
| Framework | Astro 7 | Statischer Output, standardmäßig kein JavaScript im Browser, komponentenbasiert |
| Sprache | `.astro`, TypeScript (strict), CSS | Kein React, kein Tailwind. CSS mit Design-Tokens reicht für eine Seite |
| Daten | JSON in `src/data/`, geprüft über Content Collection (Zod-Schema) | Fehlende oder falsche Felder fallen beim Build auf |
| Hosting | GitHub Pages über GitHub Actions (`withastro/action`) | Kostenlos, Deployment bei jedem Push auf `main` |
| Voraussetzung | Node.js 22.23.4 oder neuer (gerade Version) | Mindestversion von Astro 7 |

Adresse: `https://poolpaper.github.io/aboutme/` (`site` und `base` in `astro.config.mjs`). Bei eigener Domain `base` entfernen.

## Datenfluss

```
src/data/profile.json  ──► src/lib/profile.ts ──► Kopfbereich, Kennzahlen, Kontakt
src/data/projects.json ──► src/content.config.ts (Schema-Prüfung)
                       ──► getCollection('projekte') ──► ProjektListe
src/styles/tokens.css  ──► global.css ──► alle Komponenten (nur über var(--...))
                                   │
src/pages/index.astro  ◄───────────┘  setzt die Abschnitte zusammen
src/layouts/Base.astro                HTML-Rahmen, lädt global.css
                                      │
                                      ▼
                        npm run build ──► dist/ ──► GitHub Pages
```

Regeln für den Fluss:

- Inhalt steht nur in `src/data/`. Komponenten enthalten keine festen Texte außer den Abschnittsüberschriften.
- Aussehen steht nur in `src/styles/tokens.css` und im CSS der Komponenten. Dort stehen keine rohen Farb- oder Größenwerte, nur Tokens.
- Leere Felder in den Daten rendern nichts. Die Seite bleibt mit leeren Daten fehlerfrei.

## Ordnerstruktur

```
aboutme/
├─ .github/workflows/deploy.yml   Deployment auf GitHub Pages
├─ public/downloads/              Lebenslauf-PDF und andere Dateien
├─ src/
│  ├─ components/                 Kopfbereich, Kennzahlen, ProjektListe, Kontakt
│  ├─ data/                       profile.json, projects.json
│  ├─ layouts/Base.astro
│  ├─ lib/profile.ts              Typen und Zugriff auf profile.json, assetUrl()
│  ├─ pages/index.astro
│  ├─ styles/                     tokens.css, global.css
│  └─ content.config.ts           Schema der Projekt-Sammlung
├─ ARCHITEKTUR.md  CLAUDE.md  PLAN.md
├─ astro.config.mjs  package.json  tsconfig.json
```

## Geplante Abschnitte

1. **Kopfbereich:** volle Breite, heller Akzentton. Name, ein Satz Profil, Button Lebenslauf, Link Kontakt.
2. **Kennzahlen-Leiste:** drei Zahlen aus den eigenen Projekten, groß in Serif, darunter kurz, wofür sie stehen.
3. **Projekte:** Liste mit Linien statt Kästen. Links Zeitraum, rechts Titel, Rolle, Ergebnis.
4. **Kontakt:** E-Mail und Profil-Links, nur mit gelieferten Angaben.

Weitere Abschnitte (Kenntnisse, Werdegang, Englisch) kommen nur auf ausdrücklichen Wunsch dazu.

## Offene Punkte

- Der Akzentton (`#1f5e4b`) ist ein Vorschlag und kann in `tokens.css` geändert werden.
- Alle Inhalte (Name, Profilsatz, Kennzahlen, Projekte, Kontakt, Lebenslauf-PDF) müssen vom Nutzer kommen.
