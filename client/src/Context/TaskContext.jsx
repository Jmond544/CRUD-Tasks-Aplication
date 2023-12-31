import { createContext, useState } from "react";
import { useContext } from "react";
import {
  getTasksRequest,
  deleteTaskRequest,
  createTaskRequest,
  updateTaskRequest,
  getTaskRequest,
  toggleTaskDoneRequest,
  createUserRequest,
  loginRequest,
} from "../api/tasks.api";

export const TaskContext = createContext();

export const useTask = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error("useTask must be used within a TaskProvider");
  }
  return context;
};

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [user, setUser] = useState({});

  async function loadTasks() {
    try {
      const tasks = await getTasksRequest();
      setTasks(tasks);
    } catch (error) {
      console.log(error);
    }
  }
  const deleteTask = async (id) => {
    try {
      await deleteTaskRequest(id);
      setTasks(tasks.filter((task) => task.id !== id));
    } catch (error) {
      console.log(error);
    }
  };
  const createTask = async (task) => {
    try {
      const response = await createTaskRequest(task);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  const updateTask = async (id, task) => {
    try {
      const response = await updateTaskRequest(id, task);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  const getTask = async (id) => {
    try {
      const task = await getTaskRequest(id);
      console.log(task);
      return task;
    } catch (error) {
      console.log(error);
    }
  };
  const toggleTaskDone = async (id) => {
    try {
      const taskFound = tasks.find((task) => task.id === id);
      await toggleTaskDoneRequest(id, taskFound.done === 0 ? 1 : 0);
      tasks.map((task) => {
        if (task.id === id) {
          task.done = task.done === 0 ? 1 : 0;
        }
      });
      setTasks([...tasks]);
    } catch (error) {
      console.log(error);
    }
  };
  const createuser = async (user) => {
    try {
      const response = await createUserRequest(user);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  const login = async (user) => {
    try {
      const response = await loginRequest(user);
      setUser(response.data);
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        user,
        loadTasks,
        deleteTask,
        createTask,
        updateTask,
        getTask,
        toggleTaskDone,
        createuser,
        login,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
