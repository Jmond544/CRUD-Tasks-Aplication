import { Link } from "react-router-dom";
import { MdDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(() => {
    if(window.matchMedia("(prefers-color-scheme: dark)").matches){
      return true;
    } else {
      return false;
    }
  } );
  useEffect(() => {
    if (darkMode) {
      document.querySelector("body").classList.add("dark");
    } else {
      document.querySelector("body").classList.remove("dark");
    }
  } , [darkMode]);
  return (
    <div className="bg-gray-300 text-gray-900 flex justify-between p-5 items-center font-bold dark:bg-gray-900 dark:text-white">
      <h1 className="font-bold text-xl">
        <Link to="/">
          <span className="text-cyan-500">React </span>-{" "}
          <span className="text-sky-700">My</span>
          <span className="text-yellow-600">SQL</span>
        </Link>
      </h1>{" "}
      <ul className="flex gap-4 items-center">
        <li className="flex items-center justify-center">
          <button
            className={`flex justify-center relative ${darkMode? "text-purple-600 hover:text-purple-500" : "text-yellow-500 hover:text-yellow-400"} transition duration-300 rounded-full w-8 h-8 bg-gray-200 dark:bg-gray-800`}
            onClick={() => setDarkMode(!darkMode)}
          >
            <div
              className={`absolute translate-y-1 transition-opacity duration-300 ${
                darkMode ? "opacity-0" : "opacity-100"
              }`}
            >
              <MdOutlineLightMode className="text-2xl" />
            </div>
            <div
              className={`absolute translate-y-1 transition-opacity duration-300 ${
                darkMode ? "opacity-100" : "opacity-0"
              }`}
            >
              <MdDarkMode className="text-2xl" />
            </div>
          </button>
        </li>
        <li className="p-2 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-800 transition duration-300">
          <Link to="/">Home</Link>
        </li>
        <li className="bg-gray-400 p-2 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-800 transition duration-500 dark:bg-gray-950">
          <Link to="/new">Create task</Link>
        </li>
      </ul>
    </div>
  );
}
