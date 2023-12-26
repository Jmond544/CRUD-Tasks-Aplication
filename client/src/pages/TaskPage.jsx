import { useEffect } from "react";
import TaskCard from "../Components/TaskCard";
import { useTask } from "../Context/TaskContext";

export default function TaskPage() {
  const { tasks, loadTasks } = useTask();
  useEffect(() => {
    loadTasks();
    console.log(import.meta.env.VITE_API_URL)
  }, []);

  function renderMain() {
    if (tasks.length === 0) {
      return (
        <h1 className="text-xl font-bold text-center mt-8 bg-zinc-50 p-5 rounded-lg w-80 m-auto drop-shadow-2xl">
          No tasks. Create one!
        </h1>
      );
    }
    return (
      <div className="grid gap-3 xl:grid-cols-5 lg:grid-cols-4  md:grid-cols-3 sm:grid-cols-2">
        {tasks.map((task) => {
          return <TaskCard task={task} key={task.id} />;
        })}
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-5 p-5">
      <h1 className="flex justify-center text-2xl font-bold">Tasks</h1>
      {renderMain()}
    </div>
  );
}
