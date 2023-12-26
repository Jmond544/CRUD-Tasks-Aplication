import axios from "axios";
import {API_URL} from "./config.js"

export const createTaskRequest = async (task) => {
  await axios.post(`${API_URL}/tasks`, task);
};

export const getTasksRequest = async () => {
  const response = await axios.get(`${API_URL}/tasks`);
  return response.data;
};

export const deleteTaskRequest = async (id) => {
  await axios.delete(`${API_URL}/tasks/${id}`);
};

export const updateTaskRequest = async (id, task) => {
  return await axios.put(`${API_URL}/tasks/${id}`, task);
};

export const getTaskRequest = async (id) => {
  const response = await axios.get(`${API_URL}/tasks/${id}`);
  return response.data;
};

export const toggleTaskDoneRequest = async (id, done) => {
  await axios.put(`${API_URL}/tasks/${id}`, { done });
};
