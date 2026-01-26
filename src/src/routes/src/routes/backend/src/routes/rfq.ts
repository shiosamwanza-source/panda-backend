import { Router } from "express";
import { db } from "../db";
import authGuard from "../middleware/authGuard";

const router = Router();

// CREATE RFQ
router.post("/", authGuard, async (req, res) => {
  const { product, quantity } = req.body;
  const user = (req as any).user;

  const result = await db.query(
    "INSERT INTO rfqs (importer_id, product, quantity) VALUES ($1,$2,$3) RETURNING *",
    [user.id, product, quantity]
  );

  res.json(result.rows[0]);
});

// GET ALL RFQs FOR LOGGED-IN USER
router.get("/", authGuard, async (req, res) => {
  const user = (req as any).user;

  const result = await db.query(
    "SELECT * FROM rfqs WHERE importer_id=$1 ORDER BY created_at DESC",
    [user.id]
  );

  res.json(result.rows);
});

// GET RFQ BY ID
router.get("/:id", authGuard, async (req, res) => {
  const { id } = req.params;

  const result = await db.query("SELECT * FROM rfqs WHERE id=$1", [id]);

  if (result.rows.length === 0)
    return res.status(404).json({ message: "RFQ not found" });

  res.json(result.rows[0]);
});

export default router;
