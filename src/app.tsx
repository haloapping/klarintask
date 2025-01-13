import { Header } from "./components/header";
import { TaskForm } from "./components/form";
import { TaskList } from "./components/task-list";
import { Task } from "./types/task";
import { saveTask } from "./storage/local-storage";

export function App() {
  const tasks: Task[] = [
    {
      title: "Jadwal Pagi",
      description: "Bagi-bagi Susu Ultramilk (Gratis)",
      status: "In-Progress",
      priority: "High",
    },
    {
      title: "Jadwal Siang",
      description: "Makan Siang (Gratis)",
      status: "Todo",
      priority: "Low",
    },
    {
      title: "Jadwal Malam",
      description: "Rapat Persiapan Jan Ethes jadi Presiden",
      status: "Done",
      priority: "Medium",
    },
  ];

  saveTask(tasks);

  return (
    <>
      <Header username="FafaFufu" />
      <TaskList />
      <TaskForm />
    </>
  );
}
