import express from "express"; // 1. Ensure this is here
import "dotenv/config";
import cookieParser from "cookie-parser";
import cors from "cors";
import path from "path";


const app = express();
const PORT = process.env.PORT || 5400;

const __dirname = path.resolve();

const origin = process.env.NODE_ENV === "production" ? false : "http://localhost:5173";
if (origin) {
    app.use(cors({ origin, credentials: true }));
}

app.use(express.json());
app.use(cookieParser());


if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "frontend/dist")));

    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "frontend/dist", "index.html"));
    });
}

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server is running on port ${PORT}`);
    connectDB();
});
