import express from "express";
import cors from "cors";

import rfqRouter from "./routes/rfq";
import ordersRouter from "./routes/orders";
import documentsRouter from "./routes/documents";
import disputesRouter from "./routes/disputes";
import notesRouter from "./routes/notes";
import verificationRouter from "./routes/verification";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (_req, res) => {
  res.json({
    status: "PANDA API running",
    motto: "We Own the Port, You Own the Profit"
  });
});

app.use("/api/rfq", rfqRouter);
app.use("/api/orders", ordersRouter);
app.use("/api/documents", documentsRouter);
app.use("/api/disputes", disputesRouter);
app.use("/api/notes", notesRouter);
app.use("/api/verification", verificationRouter);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`PANDA backend listening on port ${PORT}`);
});
