import express from 'express';
import dotenv from 'dotenv';
import cookieParser from "cookie-parser"

import authRoutes from "./routes/auth.route.js"
import { connectDB } from './lib/db.js';


dotenv.config();


const app = express();
app.use(express.json());
app.use(cookieParser());
app.use("/api/auth", authRoutes)


const PORT = process.env.PORT || 5001;
app.listen(5001 , () => {
    console.log(`Server is running on port ${PORT}`);
    connectDB();
})