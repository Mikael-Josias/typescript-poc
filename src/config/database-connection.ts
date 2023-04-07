import pg from "pg"
import "dotenv/config";

const { Pool } = pg;

const DBConnection = {
    connectionString: process.env.DATABASE_URL,
    ssl: process.env.MODE === "prod"
}

export default new Pool(DBConnection);
