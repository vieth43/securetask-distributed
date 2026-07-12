# GUI Prompts

## Ziel von Teil A

Für Teil A wurde ein GUI-Konzept für SecureTask erstellt. SecureTask ist eine Webanwendung und keine mobile App. Deshalb wurde ein Desktop-Webdashboard entworfen.

Das GUI-Design sollte zur späteren technischen Umsetzung passen:

- React Frontend
- Express Backend API
- separater Worker-Service
- Aufgabenliste
- Statusanzeigen
- Worker-Activity-Log

## Tool

Für den GUI-Entwurf wurde Google Stitch verwendet.

## Prompt 1: Initiales Dashboard

Design a modern web dashboard, not a mobile app, for a distributed personal task manager called SecureTask.

SecureTask is a web application with three technical modules:
- React frontend
- Express backend API
- separate worker service for checking overdue tasks

The dashboard should include:
- a task list with title, priority, due date and status
- status badges for open, done and overdue tasks
- a form for creating a new task
- a system status panel showing Frontend, Backend API and Worker Service
- a small activity log showing worker actions, for example "Task marked as overdue"
- a clean dark mode interface
- a technical but simple style suitable for a student software development project
- layout optimized for desktop browser usage

The design should make it visible that the application consists of multiple distributed modules.

## Ergebnis des ersten Prompts

Google Stitch erzeugte ein technisches Dashboard mit Aufgabenliste, Systemstatus und Worker-Activity-Stream. Das Ergebnis passte grundsätzlich zur Projektidee, wirkte aber optisch eher wie ein professionelles DevOps-Dashboard.

## Prompt 2: Vereinfachung

Simplify this dashboard so it is easier to implement in React.

Keep only:
- task list
- create task form
- system status for Frontend, Backend API and Worker Service
- small worker activity log

Remove unnecessary navigation items and deployment/security tabs.
Make the design look like a student project dashboard, not an enterprise DevOps platform.

## Ergebnis des zweiten Prompts

Der zweite Prompt reduzierte das Dashboard nur teilweise. Die Grundstruktur blieb ähnlich, einzelne Beschriftungen und Navigationselemente wurden jedoch vereinfacht.

Für die eigene React-Umsetzung wurde das Design deshalb nicht direkt übernommen. Stattdessen wurden nur die wichtigsten fachlichen Elemente verwendet:

- Aufgabenliste
- Formular zum Erstellen einer Aufgabe
- Statusanzeigen
- Systemstatus für Frontend, Backend und Worker
- Worker-Activity-Log

## Bewertung

Google Stitch war hilfreich, um schnell eine visuelle Richtung für die Oberfläche zu erhalten. Gleichzeitig zeigte sich, dass AI-generierte Designs kritisch bewertet und vereinfacht werden müssen. Für die Umsetzung wurde bewusst ein kleineres Dashboard geplant, damit der Code verständlich bleibt und in der mündlichen Prüfung erklärt werden kann.