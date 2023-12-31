import { Link } from "react-router-dom";

export default function DropDownProfile() {
    const handleLogout = () => {
        window.localStorage.removeItem("user_tasks");
        window.location.reload();
    }
  return (
    <div className='flex flex-col absolute top-16 right-5 dark:bg-gray-700 p-3 rounded-xl'>
        <ul className='flex flex-col text-sm font-medium mx-auto'>
            <li className="py-1 px-2 rounded-xl cursor-pointer dark:hover:bg-gray-500 transition duration-200">Profile</li>
            <li className="py-1 px-2 rounded-xl cursor-pointer dark:hover:bg-gray-500 transition duration-200" onClick={handleLogout}>Logout</li>
        </ul>
    </div>
  )
}
