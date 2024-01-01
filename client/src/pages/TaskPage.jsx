import { useEffect } from "react";
import TaskCard from "../Components/TaskCard";
import { useTask } from "../Context/TaskContext";
import { useNavigate } from "react-router-dom";

export default function TaskPage() {
  const { tasks, loadTasks } = useTask();
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("user_tasks")) {
      loadTasks();
    } else {
      navigate("/login");
    }
  }, []);

  function renderMain() {
    if (tasks.length === 0) {
      return (
        <h1 className="text-xl font-bold text-center mt-8 bg-zinc-50 p-5 rounded-lg w-80 m-auto drop-shadow-2xl dark:text-white dark:bg-gray-700">
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
      <h1 className="text-gray-800 flex justify-center text-2xl font-bold dark:text-gray-200">Tasks</h1>
      {renderMain()}
    </div>
  );
}
