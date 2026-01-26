import { Router } from "express";
import jwt from "jsonwebtoken";

const router = Router();

// Temporary in-memory users (later: database)
const users: any[] = [];

// REGISTER
router.post("/register", (req, res) => {
  const { name, email, password } = req.body;

  if (users.find(u => u.email === email)) {
    return res.status(400).json({ message: "Email already exists" });
  }

  const newUser = { id: Date.now(), name, email, password };
  users.push(newUser);

  res.json({ message: "User registered", user: newUser });
});

// LOGIN
router.post("/login", (req, res) => {
  const { email, password } = req.body;

  const user = users.find(u => u.email === email && u.password === password);
  if (!user) return res.status(401).json({ message: "Invalid credentials" });

  const token = jwt.sign({ id: user.id, email: user.email }, "SECRET123", {
    expiresIn: "7d"
  });

  res.json({ token, user });
});

export default router;
