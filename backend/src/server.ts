import express from "express";
import cors from "cors";

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

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

let tasks: Task[] = [
  {
    id: 1,
    title: "Vibe-Coding-Projekt dokumentieren",
    priority: "high",
    dueDate: "2020-01-01",
    status: "open",
    createdAt: new Date().toISOString(),
  },
];

app.get("/", (_req, res) => {
  res.json({
    message: "SecureTask Backend API is running",
    endpoints: ["/tasks", "/health"],
  });
});

app.get("/health", (_req, res) => {
  res.json({
    status: "ok",
    service: "backend",
    timestamp: new Date().toISOString(),
  });
});

app.get("/tasks", (_req, res) => {
  res.json(tasks);
});

app.post("/tasks", (req, res) => {
  const { title, priority, dueDate } = req.body;

  if (!title || !priority || !dueDate) {
    return res.status(400).json({
      error: "title, priority and dueDate are required",
    });
  }

  const newTask: Task = {
    id: Date.now(),
    title,
    priority,
    dueDate,
    status: "open",
    createdAt: new Date().toISOString(),
  };

  tasks.push(newTask);

  res.status(201).json(newTask);
});

app.patch("/tasks/:id", (req, res) => {
  const taskId = Number(req.params.id);
  const task = tasks.find((item) => item.id === taskId);

  if (!task) {
    return res.status(404).json({
      error: "Task not found",
    });
  }

  const { title, priority, dueDate, status } = req.body;

  if (title !== undefined) task.title = title;
  if (priority !== undefined) task.priority = priority;
  if (dueDate !== undefined) task.dueDate = dueDate;
  if (status !== undefined) task.status = status;

  res.json(task);
});

app.delete("/tasks/:id", (req, res) => {
  const taskId = Number(req.params.id);
  const oldLength = tasks.length;

  tasks = tasks.filter((item) => item.id !== taskId);

  if (tasks.length === oldLength) {
    return res.status(404).json({
      error: "Task not found",
    });
  }

  res.status(204).send();
});

app.listen(port, () => {
  console.log(`SecureTask Backend API running on http://localhost:${port}`);
});