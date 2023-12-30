import jwt from "jsonwebtoken";
import { SECRET_KEY } from "../config.js";

export function verifyToken(req, res, next) {
  const token = req.headers["x-access-token"];
  if (!token) {
    return res.status(403).json({ message: "No token provided" });
  }
  const decoded = jwt.verify(token, SECRET_KEY);
  req.userId = decoded.id;
  next();
}
