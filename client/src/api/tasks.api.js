import axios from "axios";
import { API_URL } from "./config.js";
import { instanceAxios } from "./axiosInstance.js";

export const createTaskRequest = async (task) => {
  await instanceAxios.post(`${API_URL}/tasks`, task);
};

export const getTasksRequest = async () => {
  const response = await instanceAxios.get(`/tasks`);
  return response.data;
};

export const deleteTaskRequest = async (id) => {
  const response = await instanceAxios.delete(`${API_URL}/tasks/${id}`);
  return response.data;
};

export const updateTaskRequest = async (id, task) => {
  return await instanceAxios.put(`${API_URL}/tasks/${id}`, task);
};

export const getTaskRequest = async (id) => {
  const response = await instanceAxios.get(`${API_URL}/tasks/${id}`);
  return response.data;
};

export const toggleTaskDoneRequest = async (id, done) => {
  await instanceAxios.put(`${API_URL}/tasks/${id}`, { done });
};

export const createUserRequest = async (user) => {
  const response = await axios.post(`${API_URL}/signup`, user);
  return response;
};

export const loginRequest = async (user) => {
  const response = await axios.post(`${API_URL}/login`, user);
  return response;
};

export const registerRequest = async (user) => {
  const response = await axios.post(`${API_URL}/signup`, user);
  return response;
}
