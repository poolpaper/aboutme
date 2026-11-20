# Regeln für dieses Projekt

Persönliche Portfolio-Website mit Astro, veröffentlicht über GitHub Pages. Aufbau und Datenfluss: [ARCHITEKTUR.md](ARCHITEKTUR.md). Bauschritte: [PLAN.md](PLAN.md).

Antworte auf Deutsch, in einfachen Worten. Frag, bevor du etwas installierst, löschst oder außerhalb dieses Ordners änderst.

## Inhalt

- Nichts über die Person erfinden: keine Noten, Zahlen, Firmen, Abschlüsse, Zitate. Fehlt eine Angabe, lass das Feld leer und frag nach.
- Texte und Zahlen stehen nur in `src/data/`. Keine Inhalte in Komponenten schreiben.
- Keine Passwörter oder Schlüssel in Dateien, die ins Git-Repo gehen.

## Design (verbindlich)

Idee: ein gut gesetztes Beraterprofil. Ruhig, präzise, mit Zahlen, die man in drei Sekunden sieht. Keine generischen Standard-Layouts: keine Kartenraster, keine zentrierte Hero-Fläche mit Verlauf, keine Icon-Reihen, keine Skill-Balken.

### Typografie

- Überschriften in Serif: `Georgia, 'Times New Roman', serif`. Fließtext in `system-ui`.
- Name 72 px, Zwischentitel 28 px, Text 18 px, Zeilenhöhe 1.6.
- Auf dem Handy (bis 600 px) Name 44 px.
- Gewichte nur 400 und 600.
- Keine Großbuchstaben-Labels, keine Emojis.

### Farbe und Kontrast

| Token | Wert | Verwendung |
| --- | --- | --- |
| `--farbe-grund` | `#fafaf7` | Hintergrund |
| `--farbe-text` | `#1b1f1d` | Text |
| `--farbe-text-leise` | `#5c635f` | Nebentext |
| `--farbe-linie` | `#e4e6e1` | Linien |
| `--farbe-akzent` | `#1f5e4b` | Button, Links, wichtigste Zahl je Karte |
| `--farbe-akzent-hell` | `#e3eee8` | Fläche des Kopfbereichs |

- Genau ein Akzent. Der helle Ton gehört nur auf die Fläche des Kopfbereichs.
- Keine Verläufe, keine Schatten, keine farbigen Schatten.
- Kontrast mindestens 4,5 zu 1 für Text. Vor jeder neuen Farbkombination nachrechnen, besonders Nebentext auf dem hellen Akzentton.
- Farbwerte nur in `src/styles/tokens.css` ändern.

### Layout

- Kopfbereich über die volle Breite im hellen Akzentton: Name, ein Satz Profil, Button Lebenslauf, Link Kontakt.
- Darunter die Kennzahlen-Leiste mit drei Zahlen, groß in Serif, darunter kurz, wofür sie stehen.
- Projekte als Liste mit Linien statt Kästen: links Zeitraum, rechts Titel, Rolle, Ergebnis.
- Inhalt höchstens 880 px breit. Abstände im 8-px-Raster (`--abstand-*`).

### Mobile

- Auf 390 px Breite steht alles untereinander, nichts wird abgeschnitten, kein horizontales Scrollen.
- Bedienelemente mindestens 40 px hoch.
- Auf dem Handy verschwindet nie Inhalt, der am Desktop sichtbar ist.

## Technik

- Astro 7, TypeScript strict, reines CSS mit Tokens. Kein React, kein Tailwind, keine UI-Bibliothek ohne Absprache.
- Dev-Server: `npm run dev`. Build-Test: `npm run build`.
- Interne Links und Dateien aus `public/` über `assetUrl()` aus `src/lib/profile.ts` bauen, damit `base` auf GitHub Pages stimmt.
- Aktuelle Astro-Doku über Context7 abfragen, nicht aus dem Gedächtnis arbeiten.

## Vor der Fertigmeldung prüfen

1. Gibt es einen Text oder eine Zahl, die der Nutzer nicht geliefert hat? Dann entfernen.
2. Seite bei 390 px und 1280 px Breite ansehen.
3. `npm run build` läuft ohne Fehler.
