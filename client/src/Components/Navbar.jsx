import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <div className="bg-zinc-900 text-white flex justify-between p-5 items-center">
        <h1>React MySQL</h1>
        <ul className="flex gap-4 items-center">
            <li>
                <Link to = "/">Home</Link>
            </li>
            <li className="bg-zinc-950 p-2 rounded-xl">
                <Link to = "/new">Create task</Link>
            </li>
        </ul>
    </div>
  )
}
