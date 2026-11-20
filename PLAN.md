# Bauplan

Jeder Schritt endet mit: `npm run dev` läuft, Ansicht bei 390 px und 1280 px geprüft. Haken setzen, wenn der Schritt fertig ist.

## Schritt 0: Gerüst

- [x] Ordnerstruktur, Design-Tokens, leere Daten, Komponenten-Gerüst
- [x] ARCHITEKTUR.md, CLAUDE.md, PLAN.md
- [x] Node.js 22 installieren, `npm install`, Dev-Server startet fehlerfrei
- [ ] Erster Commit

## Schritt 1: Inhalte sammeln (vom Nutzer)

Quelle der bisherigen Daten: LinkedIn-Ausdruck des Nutzers. Alles als Entwurf, bis der Nutzer es bestätigt.

- [x] Name (Dominik Rick), Profilsatz (erster Info-Punkt aus LinkedIn, Entwurf)
- [x] Projekte als Entwurf in `projects.json`: Masterthesis TU Graz, Spacebattle (Volkswagen), Chinprotect (Scott Sports)
- [x] LinkedIn-Link
- [ ] Auswahl der Projekte bestätigen. Die LinkedIn-Texte beschreiben die Aufgabe, nicht das Ergebnis. Echte Ergebnisse nachtragen
- [ ] Drei Kennzahlen festlegen (nur belegbare Zahlen, siehe Vorschläge unten)
- [ ] Lebenslauf als PDF nach `public/downloads/`
- [ ] E-Mail und GitHub, falls öffentlich gewünscht
- [ ] Zielgruppe, Tonalität, Sprache (nur Deutsch oder auch Englisch)
- [ ] Akzentton bestätigen oder ändern

### Offene Entscheidungen

- **Kennzahlen, Kandidaten aus LinkedIn:** Note 1,0 (Masterthesis), Note 1,3 (Master Integrated Design Engineering), 2 Jahre 10 Monate Tutor und Hilfskraft (Uni Magdeburg), 6 Jahre 9 Monate Mitglied im VWI, 7 Monate Praktikum bei der BMW Group. Der Nutzer wählt drei.
- **Weiterer Abschnitt Werdegang:** LinkedIn enthält Erfahrung, Ausbildung, Zertifikat und Ehrenamt. Soll ein Abschnitt Werdegang als Liste mit Linien dazukommen? Wenn ja, als Schritt 5 einfügen.
- **Nicht übernommen:** Nachweis-ID des Zertifikats, Profilstatistiken, Kontaktzahlen.

## Schritt 2: Kopfbereich

- [x] `profile.json` füllen (Name, Profil). Lebenslauf-Datei fehlt noch, der Button erscheint, sobald `lebenslauf.datei` gesetzt ist
- [x] Layout, Typografie, Navigation (Name, Projekte, Kontakt), Sprunglink, Kontakt-Link
- [x] Kontrast gerechnet (Text auf hellem Akzent über 4,5 zu 1), 390 px und 1280 px angesehen
- [ ] Feedback des Nutzers einarbeiten
- [x] Dev-Server-404 behoben: Achtung: mit `base: /aboutme/` kollidiert die leere Datei `aboutme` im Dev-Server wieder, nicht committet

## Schritt 3: Kennzahlen-Leiste

- [ ] Drei Kennzahlen eintragen
- [ ] Zahl in Serif im Akzent, Erklärung darunter
- [ ] Auf 390 px untereinander

## Schritt 4: Projekte

- [ ] Projekte in `projects.json` eintragen (Skill `projekt-karte` nutzbar)
- [ ] Liste mit Linien, Zeitraum links, Rest rechts
- [ ] Auf 390 px untereinander, nichts abgeschnitten

## Schritt 5: Kontakt

- [ ] Angaben in `profile.json`
- [ ] Links testen, Fokus-Rahmen sichtbar

## Schritt 6: Feinschliff

- [ ] Seitentitel und Beschreibung
- [ ] Favicon
- [ ] Tastaturbedienung, Zoom 200 Prozent
- [ ] Alle Texte gegen die Liste der gelieferten Angaben prüfen

## Schritt 7: Veröffentlichung

- [x] `npm run build` ohne Fehler (base /aboutme/ geprüft)
- [ ] `npm run preview` ansehen
- [ ] `package-lock.json` committen (die Action braucht ihn)
- [ ] Push auf `main`
- [ ] GitHub: Settings, Pages, Source auf "GitHub Actions" stellen
- [ ] Veröffentlichte Seite auf Handy und Desktop prüfen
