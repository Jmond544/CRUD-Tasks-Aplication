import { useTask } from "../Context/TaskContext";
import { useNavigate } from "react-router-dom";

export default function TaskCard({ task }) {
  const { deleteTask, toggleTaskDone } = useTask();
  const navigate = useNavigate();

  const handleDone = async () => {
    await toggleTaskDone(task.id);
    console.log(task.id);
  };

  return (
    <div>
      <h2>{task.title}</h2>
      <p>{task.description}</p>
      <span>{task.done == 1 ? "✔️" : "❌"}</span>
      <span>{task.create_at}</span>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
      <button onClick={() => navigate(`/edit/${task.id}`)}>Edit</button>
      <button onClick={() => handleDone()}>Toggle Task</button>
    </div>
  );
}
