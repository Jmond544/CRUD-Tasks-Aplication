import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="bg-zinc-900 text-white flex justify-between p-5 items-center">
      <h1 className="font-bold text-xl">
        <Link to="/">
          <span className="text-cyan-500">React </span>
          -{" "}
          <span className="text-sky-700">My</span>
          <span className="text-yellow-600">SQL</span>
        </Link>
      </h1>{" "}
      <ul className="flex gap-4 items-center">
        <li className="p-2 rounded-xl hover:bg-zinc-800 transition duration-300">
          <Link to="/">Home</Link>
        </li>
        <li className="bg-zinc-950 p-2 rounded-xl hover:bg-zinc-800 transition duration-500">
          <Link to="/new">Create task</Link>
        </li>
      </ul>
    </div>
  );
}
