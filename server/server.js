import dotenv from 'dotenv';
import express from "express";
import router from "./routes.js";
import { connectDB } from './db/connection.db.js';

dotenv.config();
connectDB()
const app = express();
const PORT = process.env.PORT || 8000;

app.use('/api/v1', router);

app.listen(PORT, () => {
    console.log(`server running on port : ${PORT}`);
})