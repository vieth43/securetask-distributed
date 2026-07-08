# GUI Prompts

Für Teil A wurde Google Stitch verwendet, um ein erstes Web-Dashboard für SecureTask zu entwerfen. Ziel war kein Mobile-Design, sondern ein Desktop-Webdashboard passend zur späteren React-Anwendung.

## Prompt

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

## Ergebnis

Google Stitch erzeugte ein technisches Dashboard mit Aufgabenliste, Systemstatus und Worker-Activity-Stream. Das Design war optisch relativ komplex und erinnerte an moderne Developer-Dashboards.

Für die spätere React-Umsetzung wurden deshalb nicht alle visuellen Details übernommen. Verwendet wurden vor allem die fachlichen Elemente:

- Aufgabenliste
- Prioritäts- und Statusanzeigen
- Systemstatus für Frontend, Backend und Worker
- Aktivitätslog des Workers
- dunkles Dashboard-Layout

## Bewertung

Das Tool war hilfreich, um sehr schnell eine visuelle Richtung für die GUI zu erhalten. Gleichzeitig musste das Ergebnis vereinfacht werden, damit die Implementierung verständlich bleibt und in der mündlichen Prüfung vollständig erklärt werden kann.