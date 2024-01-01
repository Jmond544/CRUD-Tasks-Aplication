import "./App.css";
import { Route, Routes } from "react-router-dom";
import TaskPage from "./pages/TaskPage";
import Login from "./pages/Login";
import TaskForm from "./pages/TaskForm";
import NotFound from "./pages/NotFound";
import Navbar from "./Components/Navbar";
import Footer from "./Components/footer";
import { TaskProvider } from "./Context/TaskContext";
import Register from "./pages/Register"
import Profile from "./pages/Profile"

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("user_tasks")) {
      navigate("/login");
    }
  }, []);

  return (
    <TaskProvider>
      <div className="bg-gray-100 min-h-screen flex flex-col justify-between dark:bg-gray-800">
        <Navbar />
        <Routes>
          <Route path="/" element={<TaskPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/new" element={<TaskForm />} />
          <Route path="/edit/:id" element={<TaskForm />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </TaskProvider>
  );
}

export default App;
