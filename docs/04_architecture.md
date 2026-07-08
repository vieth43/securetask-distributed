# Architektur

## Überblick

SecureTask wurde als verteilte Anwendung mit mehreren getrennten Modulen umgesetzt.

Die Anwendung besteht aus:

- React Frontend
- Node.js/Express Backend
- Node.js Worker-Service

## Komponenten

### Frontend

Das Frontend stellt die Benutzeroberfläche bereit.

Technologien:

- React
- TypeScript
- Vite

Aufgaben:

- Darstellung von Aufgaben
- Benutzerinteraktion
- Kommunikation mit dem Backend über HTTP

### Backend

Das Backend stellt eine REST-API bereit.

Technologien:

- Node.js
- Express
- TypeScript

Aufgaben:

- Verwaltung der Aufgaben
- Verarbeitung von HTTP-Anfragen
- Bereitstellung der Daten für Frontend und Worker

### Worker

Der Worker läuft als eigenständiger Prozess.

Technologien:

- Node.js
- TypeScript
- Axios

Aufgaben:

- regelmäßige Prüfung von Aufgaben
- Erkennung überfälliger Aufgaben
- Aktualisierung des Status über die Backend-API

## Kommunikationsablauf
