# Testing and Debugging

## Ziel

In dieser Datei werden die wichtigsten Tests dokumentiert, die während der Entwicklung von SecureTask durchgeführt wurden.

Getestet wurden:

- Start des Frontends
- Start des Backends
- Erreichbarkeit der REST-API
- Start des Worker-Services
- Verarbeitung überfälliger Aufgaben durch den Worker
- Zusammenspiel der getrennten Prozesse

## Test 1: Frontend starten

Das Frontend wurde im Ordner `frontend` gestartet:

npm run dev

Danach war die React-Anwendung im Browser unter folgender Adresse erreichbar:

http://localhost:5173

Ergebnis:

Das Frontend wurde erfolgreich gestartet und zeigte zunächst die Vite-Standardseite. Später wurde die Oberfläche zu einem SecureTask-Dashboard erweitert.

Relevante Screenshots:

- frontend first run
- SecureTask Dashboard

## Test 2: Backend starten

Das Backend wurde im Ordner `backend` gestartet:

npm run dev

Danach war die Express-API unter folgender Adresse erreichbar:

http://localhost:3000

Der Root-Endpunkt zeigte:

SecureTask Backend API is running

Außerdem wurden die Endpunkte `/tasks` und `/health` angezeigt.

Ergebnis:

Das Backend lief erfolgreich als eigener Node.js-Prozess auf Port 3000.

Relevante Screenshots:

- Backend First Run
- Backend Tasks Endpoint

## Test 3: Aufgaben-Endpunkt prüfen

Der Endpunkt `/tasks` wurde im Browser getestet:

http://localhost:3000/tasks

Ergebnis:

Das Backend lieferte eine JSON-Liste mit Aufgaben zurück. Dadurch wurde geprüft, dass die API Daten bereitstellt und vom Frontend oder Worker verwendet werden kann.

## Test 4: Worker starten

Der Worker wurde im Ordner `worker` gestartet:

npm run dev

Der Worker lief als eigener Node.js-Prozess und schrieb regelmäßig Log-Ausgaben ins Terminal.

Beispiel:

[worker] Checking tasks at ...
[worker] Check finished. Tasks checked: 1

Ergebnis:

Der Worker konnte das Backend erreichen und Aufgaben regelmäßig abrufen.

## Test 5: Überfällige Aufgabe erkennen

Zur Demonstration der Worker-Funktion wurde eine Aufgabe testweise mit einer alten Deadline versehen:

dueDate: 2020-01-01
status: open

Der Worker erkannte diese Aufgabe als überfällig.

Terminalausgabe:

[worker] Task is overdue: Vibe-Coding-Projekt dokumentieren
[worker] Updated task 1 to status overdue

Anschließend wurde der Endpunkt `/tasks` erneut im Browser geöffnet.

Ergebnis:

Der Status der Aufgabe wurde durch den Worker von `open` auf `overdue` geändert.

Damit wurde gezeigt, dass der Worker nicht nur läuft, sondern Daten vom Backend verarbeitet und Änderungen über die Backend-API zurückschreibt.

## Test 6: Frontend mit Backend verbinden

Nach der Anpassung der React-Oberfläche wurde das Frontend erneut gestartet.

Das Dashboard zeigte:

- Aufgabenliste
- Anzahl offener Aufgaben
- Anzahl überfälliger Aufgaben
- Anzahl erledigter Aufgaben
- Systemstatus für Frontend, Backend API und Worker Service
- Formular zum Erstellen neuer Aufgaben
- Worker-Activity-Hinweise

Ergebnis:

Das Frontend konnte Aufgaben aus dem Backend laden und im Dashboard anzeigen.

## Debugging: TypeScript-Konfiguration

Beim Start des Backends trat zunächst ein TypeScript-Konfigurationsproblem auf. Die Datei `tsconfig.json` wurde daraufhin angepasst.

Wichtige Einstellungen waren:

- rootDir: ./src
- outDir: ./dist
- module: commonjs
- esModuleInterop: true
- include: src/**/*

Danach konnte das Backend erfolgreich gestartet werden.

## Debugging: node_modules in Git

Beim ersten Backend-Commit wurde versehentlich der Ordner `node_modules` mit in Git aufgenommen.

Das wurde korrigiert durch:

- Ergänzung einer `.gitignore`
- Entfernen von `node_modules` aus dem Git-Index
- erneuten Commit der bereinigten Repository-Struktur

Dadurch enthält das Repository nur noch Quellcode, Konfigurationsdateien und Dokumentation. Die Abhängigkeiten können später mit `npm install` wiederhergestellt werden.

## Zusammenfassung

Die Tests zeigen, dass SecureTask aus mehreren getrennten Prozessen besteht:

- Frontend auf Port 5173
- Backend auf Port 3000
- Worker als separater Hintergrundprozess

Besonders wichtig war der Test mit der überfälligen Aufgabe. Dieser Test zeigt, dass der Worker eigenständig Daten verarbeitet und Änderungen über HTTP an das Backend zurückgibt.