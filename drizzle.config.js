import { defineConfig } from "drizzle-kit";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

export default defineConfig({
  dialect: "postgresql",
  schema: "./utils/schema.js",
  dbCredentials: {
    url:"postgresql://neondb_owner:vx1wE6qIHiot@ep-quiet-bush-a58xb5b9.us-east-2.aws.neon.tech/Ai-Interview-Mocker?sslmode=require"
  }
});
