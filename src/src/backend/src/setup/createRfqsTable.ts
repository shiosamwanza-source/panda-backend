import { db } from "../db";

async function createRfqsTable() {
  await db.query(`
    CREATE TABLE IF NOT EXISTS rfqs (
      id SERIAL PRIMARY KEY,
      importer_id INT NOT NULL REFERENCES users(id),
      product TEXT NOT NULL,
      quantity TEXT NOT NULL,
      status TEXT DEFAULT 'pending',
      created_at TIMESTAMP DEFAULT NOW()
    );
  `);

  console.log("✅ RFQs table created successfully");
  process.exit();
}

createRfqsTable();
