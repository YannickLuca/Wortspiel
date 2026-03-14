# Odettes Wortspiel

Statisches Wortspiel für GitHub Pages mit 10 Levels, Sternen, zwei kaufbaren Zusatzhinweisen pro Wort und lokalem Speichern.

## Dateien

- `index.html`: Layout der Website
- `style.css`: Design fuer Desktop und Mobile
- `levels.js`: Die ersten 10 Level mit Buchstaben, Zielwörtern und drei Hinweisstufen
- `app.js`: Spiellogik, Speichern, Backup, Import und PWA-Registrierung
- `manifest.webmanifest`: PWA-Metadaten
- `sw.js`: Offline-Cache
- `assets/`: Icons

## GitHub Pages veroeffentlichen

1. Repository auf GitHub anlegen.
2. Alle Dateien in das Repository pushen.
3. In GitHub zu `Settings -> Pages` gehen.
4. Bei `Build and deployment` die Option `Deploy from a branch` auswaehlen.
5. Als Branch `main` und Ordner `/root` waehlen.
6. Speichern.
7. Nach kurzer Zeit ist das Spiel ueber die angezeigte GitHub-Pages-URL erreichbar.

## Spielstand speichern: beste Startloesung

Für ein statisches Spiel auf GitHub Pages ist `localStorage` die beste erste Lösung, weil kein Server nötig ist.

### So funktioniert es im Projekt

1. Der Spielstand liegt im Browser unter dem Schlüssel `odettes-wortspiel-progress-v2`.
2. Gespeichert werden:
   - aktuelles Level
   - freigeschaltete Level
   - Sterne
   - gelöste Wörter pro Level
   - gekaufte Hinweisstufen pro Wort
3. Nach jeder wichtigen Aktion wird sofort gespeichert:
   - Wort geloest
   - Hinweis gekauft
   - Level gewechselt
   - Fortschritt importiert oder zurueckgesetzt
4. Beim naechsten Oeffnen der Website wird dieser Spielstand automatisch geladen.

### Warum das für den Start gut ist

- Einfach
- Kostenlos
- Perfekt fuer GitHub Pages
- Schnell
- Keine Anmeldung

### Wichtige Grenze

`localStorage` gilt nur für genau diesen Browser auf genau diesem Gerät. Wenn jemand das Gerät wechselt oder Browserdaten löscht, ist der Spielstand weg.

### Darum gibt es im Projekt zusätzlich Backup

- `Backup speichern` exportiert eine JSON-Datei.
- `Backup laden` spielt diese Datei wieder ein.

## Wenn du später Multi-Device-Sync willst

Dann brauchst du einen kleinen Backend-Dienst, zum Beispiel:

- Supabase
- Firebase
- Eigene API mit Datenbank

Dort würdest du den gleichen Spielstand speichern, aber an einen Benutzer oder Code koppeln.
