# EDAIC Paper B – PWA (Version b2047be2)

Dieser Ordner ist eine fertige Progressive Web App. Sie braucht keinen Server-Code, nur statisches Hosting über HTTPS.

## Veröffentlichen (eine Variante genügt)

**Netlify Drop (schnellster Weg, kein Konto zwingend nötig):**
1. https://app.netlify.com/drop öffnen.
2. Diesen Ordner (entpackt) per Drag & Drop hineinziehen.
3. Die angezeigte Adresse (…netlify.app) auf dem Handy öffnen.

**GitHub Pages:**
1. Neues Repository anlegen, alle Dateien dieses Ordners in das Repository-Root hochladen.
2. Settings → Pages → Branch `main`, Ordner `/ (root)` → Save.
3. Nach 1–2 Minuten ist die App unter https://<name>.github.io/<repo>/ erreichbar.

## Auf dem Handy installieren
- **iPhone (Safari):** Teilen-Symbol → „Zum Home-Bildschirm“. Danach startet die App im Vollbild und funktioniert offline.
- **Android (Chrome):** Menü ⋮ → „App installieren“ bzw. „Zum Startbildschirm hinzufügen“.

## Daten
- Fortschritt, Prüfungen, Lernberichte und Einstellungen liegen im lokalen Speicher des Browsers/der App (localStorage). Beim Löschen der Website-Daten gehen sie verloren – daher unter „Statistik“ regelmäßig **„Fortschritt sichern (Datei)“** nutzen; die JSON-Datei lässt sich mit „Fortschritt wiederherstellen“ wieder einspielen (auch auf einem anderen Gerät).
- Die App speichert nichts auf einem Server.

## Aktualisieren
Neue Version (z. B. mit korrigierten Fragen) einfach erneut hochladen. Der Service Worker erkennt die neue Version am Cache-Namen und aktualisiert beim nächsten Öffnen (ggf. App einmal schließen und neu öffnen).
