import { poll } from "../db.js";

const getTasks = async (req, res) => {
  try {
    const [result] = await poll.query(
      "SELECT id, title, description, done, DATE_FORMAT(create_at, '%d-%m-%Y | %H:%i') AS create_at FROM tasks ORDER BY create_at DESC;"
    );
    res.json(result);
  } catch (error) {
    res.sendStatus(500).json({ message: error.message });
  }
};

const getTask = async (req, res) => {
  try {
    const [result] = await poll.query("SELECT * FROM tasks WHERE id = ?", [
      req.params.id,
    ]);
    if (result.length === 0) {
      return res.status(404).json({ message: "Task doesn't exist" });
    }
    res.send(result);
  } catch (error) {
    res.sendStatus(500).json({ message: error.message });
  }
};

const createTask = async (req, res) => {
  try {
    const { title, description } = req.body;
    const [result] = await poll.query(
      "INSERT INTO tasks (title, description) VALUES (?, ?)",
      [title, description]
    );
    res.json({
      id: result.insertId,
      title,
      description,
    });
  } catch (error) {
    res.sendStatus(500).json({ message: error.message });
  }
};

const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const [result] = await poll.query("UPDATE tasks SET ? WHERE id = ?", [
      req.body,
      id,
    ]);
    res.json(result);
  } catch (error) {
    res.sendStatus(500).json({ message: error.message });
  }
};

const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const [result] = await poll.query("DELETE FROM tasks WHERE id = ?", [id]);
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Task doesn't exist" });
    }
    res.sendStatus(204);
  } catch (error) {
    res.sendStatus(500).json({ message: error.message });
  }
};
export { getTasks, getTask, createTask, updateTask, deleteTask };
