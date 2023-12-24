import axios from "axios";

export const createTaskRequest = async (task) => {
  await axios.post("http://localhost:4000/tasks", task);
};

export const getTasksRequest = async () => {
  const response = await axios.get("http://localhost:4000/tasks");
  return response.data;
};
