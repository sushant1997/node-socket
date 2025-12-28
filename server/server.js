import dotenv from 'dotenv';
import express from "express";
import router from "./routes.js";
import { connectDB } from './db/connection.db.js';
import { errorMiddleware } from './middlewares/error.middleware.js';

dotenv.config();
connectDB()
const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use('/api/v1', router);
app.use(errorMiddleware);

app.listen(PORT, () => {
    console.log(`server running on port : ${PORT}`);
})