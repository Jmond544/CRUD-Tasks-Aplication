import axios from "axios";

export const createTaskRequest = async (task) => {
  await axios.post("http://localhost:4000/tasks", task);
};

export const getTasksRequest = async () => {
  const response = await axios.get("http://localhost:4000/tasks");
  return response.data;
};

export const deleteTaskRequest = async (id) => {
  await axios.delete(`http://localhost:4000/tasks/${id}`);
};

export const updateTaskRequest = async (id, task) => {
  return await axios.put(`http://localhost:4000/tasks/${id}`, task);
};

export const getTaskRequest = async (id) => {
  const response = await axios.get(`http://localhost:4000/tasks/${id}`);
  return response.data;
};

export const toggleTaskDoneRequest = async (id, done) => {
  await axios.put(`http://localhost:4000/tasks/${id}`, { done });
};
