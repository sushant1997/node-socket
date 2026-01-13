import dotenv from 'dotenv';
import express from "express";
import router from "./routes.js";
import { connectDB } from './db/connection.db.js';
import { errorMiddleware } from './middlewares/error.middleware.js';
import cookieParser from 'cookie-parser';

dotenv.config();

const PORT = process.env.PORT || 8000;
const app = express();

app.use(cookieParser());
app.use(express.json());
app.use('/api/v1', router);
app.use(errorMiddleware);


connectDB().then(instance => {
    console.log(`DB connected: ${instance.connection.host}`);
    app.listen(PORT, () => {
        console.log(`server running on port : ${PORT}`);
    })
}).catch(error => {
    console.log(error);
})