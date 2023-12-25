import { useEffect } from "react";
import TaskCard from "../Components/TaskCard";
import { useTask } from "../Context/TaskContext";

export default function TaskPage() {
  const { tasks, loadTasks } = useTask();
  useEffect(() => {
    loadTasks();
  }, []);

  function renderMain() {
    if (tasks.length === 0) {
      return <h1>No tasks</h1>;
    }
    return (
      <div>
        {tasks.map((task) => {
          return <TaskCard task={task} key={task.id} />;
        })}
      </div>
    );
  }

  return (
    <div>
      <h1>Task</h1>
      {renderMain()}
    </div>
  );
}
