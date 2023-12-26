import { useTask } from "../Context/TaskContext";
import { useNavigate } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";
import { IoIosCloseCircle } from "react-icons/io";

export default function TaskCard({ task }) {
  const { deleteTask, toggleTaskDone } = useTask();
  const navigate = useNavigate();

  const handleDone = async () => {
    await toggleTaskDone(task.id);
    console.log(task.id);
  };

  return (
    <div className="bg-zinc-50 rounded-xl p-4 flex flex-col justify-between gap-4 drop-shadow-2xl">
      <header className="flex justify-between">
        <h2 className="text-lg font-bold">{task.title}</h2>
        <span>
          {task.done == 1 ? (
            <FaCheckCircle className="text-green-600 text-xl" />
          ) : (
            <IoIosCloseCircle className="text-red-600 text-2xl" />
          )}
        </span>
      </header>
      <p className="text-sm break-words">{task.description}</p>
      <span>{task.create_at}</span>
      <div className="flex gap-2 justify-center ">
        <button
          className="bg-red-500 py-1 px-2 rounded-md items-center hover:bg-red-400"
          onClick={() => deleteTask(task.id)}
        >
          Delete
        </button>
        <button
          className="bg-green-500 py-1 px-2 rounded-md items-center  hover:bg-green-400"
          onClick={() => navigate(`/edit/${task.id}`)}
        >
          Edit
        </button>
        <button
          className="bg-yellow-500 py-1 px-2 rounded-md items-center  hover:bg-yellow-400"
          onClick={() => handleDone()}
        >
          Toggle Task
        </button>
      </div>
    </div>
  );
}
