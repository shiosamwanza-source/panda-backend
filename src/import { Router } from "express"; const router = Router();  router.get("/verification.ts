import { Router } from "express";
const router = Router();

router.get("/", (_req, res) => {
  res.json({ message: "Live verification call endpoint" });
});

export default router;
