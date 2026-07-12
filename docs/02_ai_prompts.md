# AI-Prompts

Diese Datei enthält eine kurze Übersicht über die AI-Unterstützung während der Entwicklung. Die Prompts wurden nicht als vollständige automatische Lösung verwendet, sondern als Hilfe bei Planung, Code-Struktur und Debugging.

## Projektidee

```text
Erstelle eine kleine verteilte Webanwendung für eine AI-supported Development Aufgabe.

Die Anwendung soll aus mehreren getrennten Modulen bestehen:
- React-Frontend
- Node.js/Express-Backend
- separater Worker-Service

Das Thema soll ein persönlicher ToDo-Manager sein. Der Worker soll regelmäßig Aufgaben prüfen und überfällige Aufgaben markieren.
```

Daraus entstand die Idee für SecureTask als verteilter ToDo-Manager mit Frontend, Backend und Worker.

## Backend

```text
Erstelle eine einfache Express-TypeScript-API für Aufgaben.

Die API soll Endpunkte für Anzeigen, Erstellen, Aktualisieren und Löschen von Aufgaben besitzen.
Eine Aufgabe soll Titel, Priorität, Deadline, Status und Erstellungszeit enthalten.
```

Das Backend wurde danach als einfache REST-API umgesetzt. Die Aufgaben werden im Speicher gehalten, damit das Projekt überschaubar bleibt.

## Worker

```text
Erstelle einen separaten Node.js-Worker in TypeScript.

Der Worker soll regelmäßig die Backend-API abfragen, überfällige Aufgaben erkennen und den Status per PATCH-Anfrage auf overdue setzen.
```

Der Worker wurde als eigener Prozess umgesetzt. Er kommuniziert über HTTP mit dem Backend und ist der wichtigste Teil für die Verteiltheit.

## Frontend

```text
Erstelle ein React-TypeScript-Dashboard für SecureTask.

Das Dashboard soll Aufgaben anzeigen, neue Aufgaben anlegen können und Statusinformationen zu Frontend, Backend und Worker enthalten.
```

Das ursprüngliche Vite-Template wurde durch ein eigenes Dashboard ersetzt. Das Frontend lädt Aufgaben vom Backend und zeigt sie in einer einfachen Oberfläche an.

## Debugging

AI wurde außerdem für Fehlersuche verwendet, zum Beispiel bei:

- TypeScript-Konfiguration
- Startproblemen mit Node.js
- Git-Problemen
- Entfernen von versehentlich committeten `node_modules`

## Reflexion

AI war besonders hilfreich, um schnell eine Grundstruktur für das Projekt zu bekommen. Trotzdem mussten die Vorschläge angepasst werden. Einige Ergebnisse waren zu umfangreich oder zu allgemein.

Besonders beim GUI-Entwurf zeigte sich, dass AI-generierte Ergebnisse nicht direkt übernommen werden sollten. Das Stitch-Design war optisch interessant, aber für die eigene Umsetzung zu groß. Deshalb wurde es vereinfacht.

Der wichtigste Punkt war, den Code schrittweise zu testen und zu verstehen, statt einfach nur generierten Code zu übernehmen.