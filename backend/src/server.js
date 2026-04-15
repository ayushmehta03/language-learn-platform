import express from "express";
import "dotenv/config";
import cookieParser from "cookie-parser";
import cors from "cors";
import path from "path";
import connectDB from "./lib/db.js";

const app = express();
const PORT = process.env.PORT || 5400;

const __dirname = path.resolve();

app.use(express.json());
app.use(cookieParser());

if (process.env.NODE_ENV !== "production") {
    app.use(cors({ origin: "http://localhost:5173", credentials: true }));
}

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "frontend/dist")));

    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "frontend/dist", "index.html"));
    });
}

connectDB()
  .then(() => {
    app.listen(PORT, "0.0.0.0", () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("DB connection failed:", err);
    process.exit(1);
  });
