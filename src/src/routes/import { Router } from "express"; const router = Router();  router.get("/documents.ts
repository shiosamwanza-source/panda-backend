import { Router } from "express";
const router = Router();

router.get("/", (_req, res) => {
  res.json({ message: "Document center endpoint" });
});

export default router;
