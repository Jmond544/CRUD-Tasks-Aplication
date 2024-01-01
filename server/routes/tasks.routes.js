import { Router } from "express";
import {
  createTask,
  deleteTask,
  getTask,
  getTasks,
  updateTask,
  createUser,
  login,
} from "../controllers/task.controllers.js";
import { verifyToken } from "../controllers/verifyToken.js";

const router = Router();

// Tasks

router.get("/tasks", verifyToken, getTasks);

router.get("/tasks/:id", verifyToken, getTask);

router.post("/tasks", verifyToken, createTask);

router.put("/tasks/:id", verifyToken, updateTask);

router.delete("/tasks/:id", verifyToken, deleteTask);

// Users

router.post("/signup", createUser);
router.post("/login", login);

export default router;
