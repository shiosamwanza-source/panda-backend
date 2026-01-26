import { Pool } from "pg";

export const db = new Pool({
  host: "localhost",
  user: "postgres",
  password: "yourpassword",
  database: "panda",
  port: 5432
});
