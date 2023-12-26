import "./App.css";
import { Route, Routes } from "react-router-dom";
import TaskPage from "./pages/TaskPage";
import TaskForm from "./pages/TaskForm";
import NotFound from "./pages/NotFound";
import Navbar from "./Components/Navbar";
import { TaskProvider } from "./Context/TaskContext";

function App() {
  return (
    <div className="bg-zinc-400 h-screen">
      <TaskProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<TaskPage />} />
          <Route path="/new" element={<TaskForm />} />
          <Route path="/edit/:id" element={<TaskForm />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </TaskProvider>
    </div>
  );
}

export default App;
