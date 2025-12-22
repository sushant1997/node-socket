import mongoose from "mongoose";

export const connectDB = async() => {
    const DB_URL = process.env.MONGODB_URL
    const instance = await mongoose.connect(DB_URL)
    console.log(`DB connected: ${instance.connection.host}`);
}