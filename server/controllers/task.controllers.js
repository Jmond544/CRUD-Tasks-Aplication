import { poll } from "../db.js";
import md5 from "md5";
import jwt from "jsonwebtoken";
import { SECRET_KEY } from "../config.js";

const getTasks = async (req, res) => {
  try {
    const [result] = await poll.query(
      "SELECT BIN_TO_UUID(id) AS id, title, description, done, DATE_FORMAT(create_at, '%d-%m-%Y | %H:%i') AS create_at FROM tasks WHERE user_id = UUID_TO_BIN(?) ORDER BY create_at DESC;",
      [req.userId]
    );
    res.json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getTask = async (req, res) => {
  try {
    const [result] = await poll.query(
      "SELECT BIN_TO_UUID(id) AS id, title, description, done FROM tasks WHERE id = UUID_TO_BIN(?)",
      [req.params.id]
    );
    if (result.length === 0) {
      return res.status(404).json({ message: "Task doesn't exist" });
    }
    res.send(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createTask = async (req, res) => {
  try {
    const { title, description } = req.body;
    const [result] = await poll.query(
      "INSERT INTO tasks (id, user_id, title, description) VALUES (UUID_TO_BIN( UUID() ), UUID_TO_BIN(?), ? ,?)",
      [req.userId, title, description]
    );
    res.json({
      id: result.insertId,
      title,
      description,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const [result] = await poll.query(
      "UPDATE tasks SET ? WHERE id = UUID_TO_BIN(?)",
      [req.body, id]
    );
    res.json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const [result] = await poll.query(
      "DELETE FROM tasks WHERE id = UUID_TO_BIN(?)",
      [id]
    );
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Task doesn't exist" });
    }
    res.status(204).json({ message: "Task deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createUser = async (req, res) => {
  try {
    const { username, password, email } = req.body;
    const password_encrypted = md5(password);
    const [result] = await poll.query(
      "INSERT INTO users (id, username, email, password) VALUES (UUID_TO_BIN( UUID() ), ?, ?, ?)",
      [username, email, password_encrypted]
    );
    const [queryID] = await poll.query(
      "SELECT BIN_TO_UUID(id) AS id FROM users WHERE username = ?",
      [username]
    );
    const token = jwt.sign({ id: queryID[0].id }, SECRET_KEY, {
      expiresIn: 60 * 60 * 24,
    });
    res.json({
      auth: true,
      token,
      username,
      email,
    });
  } catch (error) {
    console.log(`Error: ${error.message}`);
    return res.status(500).json({ message: error.message });
  }
};

const login = async (req, res) => {
  try {
    console.log(req.body);
    const { username, password } = req.body;
    const password_encrypted = md5(password);
    const [result] = await poll.query(
      "SELECT BIN_TO_UUID(id) AS id, username, email FROM users WHERE username = ? AND password = ?",
      [username, password_encrypted]
    );
    if (result.length === 0) {
      return res.status(404).json({ message: "User doesn't exist" });
    }
    const token = jwt.sign({ id: result[0].id }, SECRET_KEY, {
      expiresIn: 60 * 60 * 24,
    });
    res.json({
      auth: true,
      token,
      username,
      email: result[0].email,
      password: password_encrypted,
    });
  } catch (error) {
    console.log(`Error: ${error.message}`);
    return res.status(500).json({ message: error.message });
  }
};

export {
  getTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
  createUser,
  login,
};
