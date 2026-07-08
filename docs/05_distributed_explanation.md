# Distributed Explanation

## Warum ist SecureTask verteilt?

SecureTask besteht nicht nur aus einem Frontend und einem Backend. Zusätzlich gibt es einen separaten Worker-Service, der als eigener Node.js-Prozess läuft.

Die drei Prozesse sind:

- Frontend: http://localhost:5173
- Backend: http://localhost:3000
- Worker: eigener Node.js-Prozess ohne Browseroberfläche

Das Backend stellt eine REST-API bereit. Der Worker ruft diese API regelmäßig auf, verarbeitet die empfangenen Aufgaben und schreibt Änderungen wieder über die API zurück.

## Kommunikationsablauf

Frontend  
→ HTTP  
Backend API  
← HTTP  
Worker Service

Das Frontend dient nur der Benutzeroberfläche.  
Das Backend verwaltet die Aufgaben.  
Der Worker verarbeitet Aufgaben unabhängig vom Frontend.

## Unterschied zu einer normalen Frontend-Backend-App

Eine normale Webanwendung hätte nur:

Frontend → Backend

SecureTask hat zusätzlich:

Frontend → Backend ← Worker

Der Worker ist keine Controller-Funktion im Backend, sondern ein eigenständig gestarteter Prozess. Er kann unabhängig vom Backend gestartet oder gestoppt werden.

## Test der Verteiltheit

Zum Test wurde eine Aufgabe mit einer abgelaufenen Deadline verwendet:

- dueDate: 2020-01-01
- status: open

Der Worker erkannte die Aufgabe als überfällig und schrieb im Terminal:

[worker] Task is overdue: Vibe-Coding-Projekt dokumentieren  
[worker] Updated task 1 to status overdue

Danach zeigte der Backend-Endpunkt `/tasks`, dass der Status auf `overdue` geändert wurde.

Damit wurde gezeigt, dass der Worker nicht nur läuft, sondern Daten vom Backend verarbeitet und Änderungen über HTTP zurückschreibt.

## Zusammenfassung

Die Verteiltheit entsteht durch:

- getrennte Module
- getrennte Prozesse
- HTTP-Kommunikation
- eigenständige Verarbeitung durch den Worker

Die Umsetzung wurde bewusst einfach gehalten, damit der Code vollständig verstanden und in der mündlichen Prüfung erklärt werden kann.