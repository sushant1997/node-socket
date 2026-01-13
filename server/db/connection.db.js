import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        const DB_URL = process.env.MONGODB_URL
        return await mongoose.connect(DB_URL)
    } catch (error) {
        throw error;
    }

}