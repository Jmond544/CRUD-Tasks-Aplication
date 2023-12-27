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
    <div className="bg-zinc-50 rounded-xl p-4 flex flex-col justify-between gap-4 drop-shadow-2xl text-gray-900 dark:bg-gray-700 dark:text-white">
      <header className="flex justify-between">
        <h2 className="text-lg font-bold">{task.title}</h2>
        <span>
          {task.done == 1 ? (
            <FaCheckCircle className="text-green-600 text-xl dark:text-green-700" />
          ) : (
            <IoIosCloseCircle className="text-red-600 text-2xl dark:text-red-700" />
          )}
        </span>
      </header>
      <p className="text-sm break-words">{task.description}</p>
      <span className="text-sm italic">{task.create_at}</span>
      <div className="flex gap-2 justify-center font-bold text-sm">
        <button
          className="text-red-950 bg-red-500 py-1 px-2 rounded-md items-center hover:bg-red-400 transition duration-300 ease-in-out dark:bg-red-900 dark:text-red-500 dark:hover:bg-red-700"
          onClick={() => deleteTask(task.id)}
        >
          Delete
        </button>
        <button
          className="text-green-950 bg-green-500 py-1 px-2 rounded-md items-center  hover:bg-green-400 transition duration-300 ease-in-out dark:bg-green-900 dark:text-green-500 dark:hover:bg-green-700"
          onClick={() => navigate(`/edit/${task.id}`)}
        >
          Edit
        </button>
        <button
          className="text-yellow-950 bg-yellow-500 py-1 px-2 rounded-md items-center  hover:bg-yellow-400 transition duration-300 ease-in-out dark:bg-yellow-900 dark:text-yellow-500 dark:hover:bg-yellow-700"
          onClick={() => handleDone()}
        >
          Toggle Task
        </button>
      </div>
    </div>
  );
}
