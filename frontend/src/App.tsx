import { useEffect, useState } from "react";
import "./App.css";

type TaskStatus = "open" | "done" | "overdue";
type TaskPriority = "low" | "medium" | "high";

type Task = {
  id: number;
  title: string;
  priority: TaskPriority;
  dueDate: string;
  status: TaskStatus;
  createdAt: string;
};

const backendUrl = "http://localhost:3000";

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState<TaskPriority>("medium");
  const [dueDate, setDueDate] = useState("2026-07-10");
  const [error, setError] = useState("");

  async function loadTasks() {
    try {
      const response = await fetch(`${backendUrl}/tasks`);
      const data = await response.json();
      setTasks(data);
      setError("");
    } catch {
      setError("Backend API ist nicht erreichbar. Läuft das Backend auf Port 3000?");
    }
  }

  async function createTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!title.trim()) {
      setError("Bitte einen Titel eingeben.");
      return;
    }

    try {
      const response = await fetch(`${backendUrl}/tasks`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          priority,
          dueDate,
        }),
      });

      if (!response.ok) {
        throw new Error("Task could not be created");
      }

      setTitle("");
      setPriority("medium");
      setDueDate("2026-07-10");
      await loadTasks();
    } catch {
      setError("Aufgabe konnte nicht erstellt werden.");
    }
  }

  async function markAsDone(taskId: number) {
    try {
      await fetch(`${backendUrl}/tasks/${taskId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          status: "done",
        }),
      });

      await loadTasks();
    } catch {
      setError("Status konnte nicht aktualisiert werden.");
    }
  }

 useEffect(() => {
  const intervalId = window.setInterval(() => {
    loadTasks();
  }, 5000);

  window.setTimeout(() => {
    loadTasks();
  }, 0);

  return () => window.clearInterval(intervalId);
}, []);
  const openTasks = tasks.filter((task) => task.status === "open").length;
  const overdueTasks = tasks.filter((task) => task.status === "overdue").length;
  const doneTasks = tasks.filter((task) => task.status === "done").length;

  return (
    <main className="app">
      <section className="hero">
        <div>
          <p className="eyebrow">AI-supported distributed web project</p>
          <h1>SecureTask Distributed</h1>
          <p className="subtitle">
            Ein verteilter ToDo-Manager mit React-Frontend, Express-Backend und
            separatem Worker-Service zur Prüfung überfälliger Aufgaben.
          </p>
        </div>

        <div className="status-card">
          <h2>Systemstatus</h2>
          <div className="status-row">
            <span>Frontend</span>
            <strong className="online">online</strong>
          </div>
          <div className="status-row">
            <span>Backend API</span>
            <strong className="online">Port 3000</strong>
          </div>
          <div className="status-row">
            <span>Worker Service</span>
            <strong className="online">separater Prozess</strong>
          </div>
        </div>
      </section>

      {error && <div className="error-box">{error}</div>}

      <section className="dashboard">
        <div className="panel task-panel">
          <div className="panel-header">
            <div>
              <p className="eyebrow">Tasks</p>
              <h2>Aufgabenliste</h2>
            </div>
            <button onClick={loadTasks}>Aktualisieren</button>
          </div>

          <div className="stats">
            <div>
              <strong>{openTasks}</strong>
              <span>open</span>
            </div>
            <div>
              <strong>{overdueTasks}</strong>
              <span>overdue</span>
            </div>
            <div>
              <strong>{doneTasks}</strong>
              <span>done</span>
            </div>
          </div>

          <div className="task-list">
            {tasks.map((task) => (
              <article className="task-card" key={task.id}>
                <div>
                  <h3>{task.title}</h3>
                  <p>
                    Deadline: {task.dueDate} · Priorität:{" "}
                    <span className={`priority ${task.priority}`}>
                      {task.priority}
                    </span>
                  </p>
                </div>

                <div className="task-actions">
                  <span className={`badge ${task.status}`}>{task.status}</span>
                  {task.status !== "done" && (
                    <button onClick={() => markAsDone(task.id)}>
                      Als erledigt markieren
                    </button>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>

        <aside className="panel side-panel">
          <p className="eyebrow">Create Task</p>
          <h2>Neue Aufgabe</h2>

          <form onSubmit={createTask} className="task-form">
            <label>
              Titel
              <input
                value={title}
                onChange={(event) => setTitle(event.target.value)}
                placeholder="z. B. PDF-Abgabe vorbereiten"
              />
            </label>

            <label>
              Priorität
              <select
                value={priority}
                onChange={(event) =>
                  setPriority(event.target.value as TaskPriority)
                }
              >
                <option value="low">low</option>
                <option value="medium">medium</option>
                <option value="high">high</option>
              </select>
            </label>

            <label>
              Deadline
              <input
                type="date"
                value={dueDate}
                onChange={(event) => setDueDate(event.target.value)}
              />
            </label>

            <button type="submit">Aufgabe erstellen</button>
          </form>

          <div className="activity-log">
            <p className="eyebrow">Worker Activity</p>
            <ul>
              <li>Worker fragt regelmäßig GET /tasks ab.</li>
              <li>Überfällige Aufgaben werden erkannt.</li>
              <li>Status wird per PATCH /tasks/:id geändert.</li>
            </ul>
          </div>
        </aside>
      </section>
    </main>
  );
}

export default App;