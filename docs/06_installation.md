# Installation und Start

## Voraussetzungen

Für SecureTask wurden folgende Werkzeuge verwendet:

- Windows 11
- Visual Studio Code
- Git
- Node.js
- npm

Docker oder WSL werden für diese Version nicht benötigt.

## Repository klonen

Falls das Projekt von GitHub geladen wird:

git clone https://github.com/vieth43/securetask-distributed.git
cd securetask-distributed

## Projektstruktur

Das Projekt besteht aus drei Modulen:

- frontend
- backend
- worker

Jedes Modul besitzt eine eigene `package.json` und wird separat gestartet.

## Backend installieren und starten

In einem Terminal:

cd backend
npm install
npm run dev

Das Backend läuft danach unter:

http://localhost:3000

Wichtige Endpunkte:

- http://localhost:3000/
- http://localhost:3000/tasks
- http://localhost:3000/health

## Worker installieren und starten

In einem zweiten Terminal:

cd worker
npm install
npm run dev

Der Worker läuft als eigener Prozess im Terminal. Er ruft regelmäßig die Backend-API ab und prüft, ob Aufgaben überfällig sind.

Wichtig: Das Backend muss laufen, damit der Worker Aufgaben abrufen kann.

## Frontend installieren und starten

In einem dritten Terminal:

cd frontend
npm install
npm run dev

Das Frontend läuft danach unter:

http://localhost:5173

## Startreihenfolge

Empfohlene Reihenfolge:

1. Backend starten
2. Worker starten
3. Frontend starten

Dadurch kann das Frontend Aufgaben aus dem Backend laden und der Worker kann direkt mit der Verarbeitung beginnen.

## Erwartetes Verhalten

Nach dem Start sollten drei getrennte Prozesse laufen:

- Backend auf Port 3000
- Frontend auf Port 5173
- Worker als Hintergrundprozess im Terminal

Im Browser kann das Frontend unter `http://localhost:5173` geöffnet werden.  
Die Backend-Daten können unter `http://localhost:3000/tasks` geprüft werden.

## Fehlerbehebung

### npm wird in PowerShell blockiert

Falls PowerShell meldet, dass `npm.ps1` nicht ausgeführt werden darf, kann für den aktuellen Benutzer folgende Einstellung gesetzt werden:

Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned

Danach VS Code oder das Terminal neu öffnen.

### Backend nicht erreichbar

Wenn das Frontend meldet, dass die Backend-API nicht erreichbar ist, prüfen:

- Läuft das Backend?
- Wurde es im Ordner `backend` mit `npm run dev` gestartet?
- Ist Port 3000 frei?

### Worker kann keine Aufgaben verarbeiten

Wenn der Worker meldet, dass das Backend nicht erreichbar ist:

- Backend starten
- prüfen, ob `http://localhost:3000/tasks` im Browser erreichbar ist
- Worker danach neu starten

### node_modules fehlt

Der Ordner `node_modules` ist bewusst nicht im Git-Repository enthalten.

Die Abhängigkeiten werden pro Modul mit folgendem Befehl installiert:

npm install