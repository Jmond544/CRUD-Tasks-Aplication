import { useEffect, useState } from "react";
import { getTasksRequest } from "../api/tasks.api";
import TaskCard from "../Components/TaskCard";

export default function TaskPage() {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    async function loadTasks() {
      const tasks = await getTasksRequest();
      setTasks(tasks);
      console.log(tasks);
    }

    loadTasks();
  }, []);
  return (
    <div>
      <h1>Task</h1>

      {tasks.map((task) => {
        return (
          <TaskCard task={task} key={task.id} />
        );
      })}
    </div>
  );
}
