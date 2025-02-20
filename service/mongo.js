import mongoose from "mongoose";

export async function connect() {
    try {
        const conn = await mongoose.connect(String(process.env.MONGODB_CONNECTION_STRING));
        console.log(`MongoDB connected: ${conn.connection.host}`);
        return conn;
        
    } catch (error) {
        console.log(error);
        
    }
}