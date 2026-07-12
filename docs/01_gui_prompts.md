# GUI-Prompts

Für Teil A wurde mit Google Stitch ein erster GUI-Entwurf für SecureTask erstellt.

SecureTask sollte als Web-Dashboard dargestellt werden, nicht als mobile App. Wichtig war dabei, dass man die drei technischen Teile der Anwendung erkennt: Frontend, Backend und Worker.

## Prompt 1: Erster Entwurf

```text
Erstelle ein modernes Web-Dashboard für einen verteilten ToDo-Manager namens SecureTask.

Die Anwendung besteht aus drei technischen Teilen:
- React-Frontend
- Express-Backend-API
- separater Worker-Service zur Prüfung überfälliger Aufgaben

Das Dashboard soll enthalten:
- eine Aufgabenliste mit Titel, Priorität, Deadline und Status
- Statusanzeigen für open, done und overdue
- ein Formular zum Erstellen neuer Aufgaben
- eine kleine Systemübersicht für Frontend, Backend und Worker
- einen Aktivitätsbereich für Worker-Aktionen
- dunkles, technisches Design
- Desktop-Layout, keine mobile App
```

## Ergebnis

Google Stitch erzeugte daraus ein technisches Dashboard mit Aufgabenliste, Systemstatus und Worker-Bereich. Der Entwurf passte grundsätzlich zur Idee, war aber für die eigene Umsetzung etwas zu umfangreich.

## Prompt 2: Vereinfachung

```text
Vereinfache dieses Dashboard, damit es leichter in React umgesetzt werden kann.

Behalte nur:
- Aufgabenliste
- Formular zum Erstellen neuer Aufgaben
- Statusanzeige für Frontend, Backend und Worker
- kleinen Aktivitätsbereich für Worker-Aktionen

Entferne unnötige Navigation und komplexe Zusatzbereiche.
Das Design soll wie ein überschaubares studentisches Softwareprojekt wirken.
```

## Bewertung

Der zweite Entwurf war etwas einfacher, aber immer noch relativ umfangreich. Deshalb wurde das Design nicht direkt übernommen. Für die React-Umsetzung wurden nur die wichtigsten Elemente verwendet:

- Aufgabenliste
- Formular zum Erstellen einer Aufgabe
- Statusanzeigen
- Hinweis auf Frontend, Backend und Worker
- Worker-Aktivität

Google Stitch war hilfreich, um schnell eine visuelle Richtung zu bekommen. Die Umsetzung wurde danach bewusst kleiner gehalten, damit der Code verständlich bleibt.