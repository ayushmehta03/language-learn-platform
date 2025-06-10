import express from "express"
import dotenv from "dotenv"
import cookiePraser from "cookie-parser"
const app= express();
dotenv.config();
import authRoutes from './routes/auth.route.js'
import userRoutes from "../src/routes/user.route.js"
import { connectDB } from "./lib/db.js";
const PORT=process.env.PORT ;
app.use(express.json());
app.use(cookiePraser());




app.use('/api/auth',authRoutes)
app.use('/api/users',userRoutes)





app.listen(PORT, ()=>{
    console.log("Server is running on this port")
    connectDB();
})