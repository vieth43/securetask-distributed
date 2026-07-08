import axios from "axios";

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
const checkIntervalMs = 10000;

function isOverdue(task: Task): boolean {
  const today = new Date();
  const dueDate = new Date(task.dueDate);

  return task.status === "open" && dueDate < today;
}

async function checkTasks(): Promise<void> {
  try {
    console.log(`[worker] Checking tasks at ${new Date().toLocaleTimeString()}`);

    const response = await axios.get<Task[]>(`${backendUrl}/tasks`);
    const tasks = response.data;

    for (const task of tasks) {
      if (isOverdue(task)) {
        console.log(`[worker] Task is overdue: ${task.title}`);

        await axios.patch(`${backendUrl}/tasks/${task.id}`, {
          status: "overdue",
        });

        console.log(`[worker] Updated task ${task.id} to status overdue`);
      }
    }

    console.log(`[worker] Check finished. Tasks checked: ${tasks.length}`);
  } catch (error) {
    console.error("[worker] Could not process tasks.");
    console.error("[worker] Is the backend running on http://localhost:3000?");
  }
}

console.log("[worker] SecureTask Worker started");
console.log(`[worker] Backend URL: ${backendUrl}`);
console.log(`[worker] Check interval: ${checkIntervalMs / 1000} seconds`);

checkTasks();
setInterval(checkTasks, checkIntervalMs);