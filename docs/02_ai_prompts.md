# AI Prompts

## Ziel

Diese Datei dokumentiert ausgewählte Prompts und AI-unterstützte Entwicklungsschritte. Die Prompts wurden nicht als vollständige automatische Lösung verwendet, sondern als Unterstützung bei Planung, Code-Struktur, Debugging und Dokumentation.

## Prompt 1: Projektidee und Architektur

Erstelle eine kleine verteilte Webanwendung für eine AI-supported Development Aufgabe.

Die Anwendung soll aus mehreren getrennten Modulen bestehen:
- React Frontend
- Node.js/Express Backend
- separater Worker-Service

Das Thema soll ein persönlicher ToDo-Manager sein. Der Worker soll regelmäßig Aufgaben prüfen und überfällige Aufgaben markieren.

## Ergebnis

Aus diesem Prompt entstand die Projektidee SecureTask. Die Anwendung wurde als verteilter ToDo-Manager geplant und in die Ordner `frontend`, `backend` und `worker` aufgeteilt.

## Prompt 2: Backend API

Erstelle eine einfache Express-TypeScript-API für Aufgaben.

Die API soll folgende Endpunkte besitzen:
- GET /tasks
- POST /tasks
- PATCH /tasks/:id
- DELETE /tasks/:id
- GET /health

Eine Aufgabe soll folgende Felder besitzen:
- id
- title
- priority
- dueDate
- status
- createdAt

## Ergebnis

Die Backend-Grundstruktur wurde mit Express und TypeScript umgesetzt. Die API verwaltet Aufgaben zunächst im Speicher. Dadurch bleibt der Code einfach und in der mündlichen Prüfung erklärbar.

## Prompt 3: Worker-Service

Erstelle einen separaten Node.js-Worker in TypeScript.

Der Worker soll:
- regelmäßig die Backend-API unter http://localhost:3000/tasks abfragen
- Aufgaben mit abgelaufener Deadline erkennen
- den Status über PATCH /tasks/:id auf overdue setzen
- seine Aktionen im Terminal protokollieren

## Ergebnis

Der Worker wurde als eigener Prozess im Ordner `worker` umgesetzt. Er kommuniziert über HTTP mit dem Backend und zeigt im Terminal, wann Aufgaben geprüft und aktualisiert werden.

## Prompt 4: React Frontend

Erstelle ein React-TypeScript-Dashboard für SecureTask.

Das Dashboard soll enthalten:
- Titel und kurze Projektbeschreibung
- Systemstatus für Frontend, Backend API und Worker Service
- Aufgabenliste
- Status-Badges für open, done und overdue
- Formular zum Erstellen neuer Aufgaben
- Worker-Activity-Hinweise

Das Design soll an das mit Google Stitch erzeugte Dashboard angelehnt sein, aber einfacher und verständlicher bleiben.

## Ergebnis

Das ursprüngliche Vite-Template wurde durch ein eigenes SecureTask-Dashboard ersetzt. Das Frontend lädt Aufgaben vom Backend, zeigt Statuswerte an und ermöglicht das Erstellen neuer Aufgaben.

## Prompt 5: Debugging TypeScript

Das Backend startet nicht und TypeScript meldet ein Problem mit rootDir und tsconfig. Erkläre den Fehler und gib eine einfache tsconfig.json für ein Express-TypeScript-Projekt.

## Ergebnis

Die TypeScript-Konfiguration wurde angepasst. Besonders wichtig waren:

- rootDir: ./src
- outDir: ./dist
- module: commonjs
- esModuleInterop: true
- include: src/**/*

Danach konnte das Backend erfolgreich gestartet werden.

## Prompt 6: Git und Repository-Bereinigung

Ich habe versehentlich node_modules in Git committed. Wie entferne ich node_modules wieder aus dem Repository und verhindere, dass es erneut committed wird?

## Ergebnis

Es wurde eine `.gitignore` ergänzt und `node_modules` aus dem Git-Index entfernt. Dadurch enthält das Repository nur noch Quellcode, Konfiguration und Dokumentation.

## Reflexion

AI war besonders hilfreich für:

- schnelle Erstellung von Grundstrukturen
- Erklärung von Fehlern
- Vorschläge für Architektur und Doku
- Beschleunigung beim Schreiben von TypeScript/React-Code

Gleichzeitig mussten die Ergebnisse geprüft und angepasst werden. Das mit Google Stitch erzeugte UI war zum Beispiel optisch interessant, aber zu komplex für die eigene Umsetzung. Deshalb wurde es vereinfacht.

Der wichtigste Punkt war, den generierten Code nicht blind zu übernehmen, sondern schrittweise zu testen und zu verstehen.