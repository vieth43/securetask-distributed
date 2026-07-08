# SecureTask Distributed

SecureTask ist ein AI-unterstützt entwickelter verteilter ToDo-Manager.

Das Projekt wurde im Rahmen der Aufgabe zu AI-supported Development entwickelt.
Ziel ist es, den Einsatz von Vibe Coding, AI-gestützter Softwareentwicklung und verteilter Architektur praktisch umzusetzen.

## Projektidee

SecureTask ermöglicht die Verwaltung persönlicher Aufgaben mit Informationen wie:

- Titel
- Priorität
- Deadline
- Status

Zusätzlich enthält die Anwendung einen separaten Worker-Service, der unabhängig vom Backend läuft und Aufgaben automatisiert verarbeitet.

## Architektur

Die Anwendung besteht aus drei getrennten Modulen:

```
securetask-distributed/

├── frontend/   React Benutzeroberfläche
├── backend/    Express REST API
├── worker/     separater Hintergrundprozess
└── docs/       Dokumentation und Screenshots
```

### Frontend

Das Frontend wurde mit React und TypeScript umgesetzt.

Aufgaben:

- Darstellung der Benutzeroberfläche
- Anzeige von Aufgaben
- Kommunikation mit dem Backend über HTTP

### Backend

Das Backend stellt eine REST-API mit Node.js und Express bereit.

Aufgaben:

- Verwaltung von Aufgaben
- Bereitstellung von API-Endpunkten
- Verarbeitung von Anfragen des Frontends und Workers

Verfügbare Endpunkte:

```
GET    /tasks
POST   /tasks
PATCH  /tasks/:id
DELETE /tasks/:id
GET    /health
```

### Worker-Service

Der Worker läuft als eigener Node.js-Prozess.

Aufgaben:

- regelmäßige Überprüfung von Aufgaben
- Erkennung überfälliger Aufgaben
- Aktualisierung des Aufgabenstatus über die Backend-API

Die Verteiltheit entsteht dadurch, dass Backend und Worker unabhängig voneinander gestartet und betrieben werden können.

## Start des Projekts

### Backend starten

```bash
cd backend
npm install
npm run dev
```

Das Backend läuft anschließend unter:

```
http://localhost:3000
```

### Worker starten

In einem zweiten Terminal:

```bash
cd worker
npm install
npm run dev
```

### Frontend starten

In einem dritten Terminal:

```bash
cd frontend
npm install
npm run dev
```

Das Frontend läuft anschließend unter:

```
http://localhost:5173
```

## AI-Unterstützung / Vibe Coding

Bei der Entwicklung wurden AI-Werkzeuge verwendet für:

- Erstellung von ersten Code-Strukturen
- Entwicklung von React-Komponenten
- Unterstützung bei Fehlersuche und Debugging
- Verbesserung der Dokumentation

Die verwendeten Prompts und Entwicklungsentscheidungen werden unter `docs/` dokumentiert.

## Entwicklungsprozess

Die Entwicklung wurde schrittweise mit Git dokumentiert:

1. Erstellung der Projektstruktur
2. Erstellung des React-Frontends
3. Implementierung der Backend-API
4. Ergänzung des verteilten Worker-Services
5. Tests und Dokumentation

## Dokumentation

Weitere Informationen befinden sich in:

```
docs/

01_requirements.md
02_gui_prompts.md
03_ai_prompts.md
04_architecture.md
05_distributed_explanation.md
06_installation.md
07_testing.md
```

## Autor

vieth43