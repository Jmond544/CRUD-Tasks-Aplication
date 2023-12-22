import { Router } from "express";
import { poll } from "../db.js";

const router = Router();

router.get("/ping", async (req, res) => {
  const [row, fields] = await poll.query("SELECT 1 + 1 AS solution");
  console.log(row[0]);
  console.log(fields);
  res.json(row[0]);
});

export default router;
