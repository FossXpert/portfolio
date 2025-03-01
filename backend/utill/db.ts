import mongoose from "mongoose";
require('dotenv').config();

const connectionString = process.env.MONGO_URI;

if (!connectionString) {
    throw new Error('MONGO_URI is not defined in the environment variables');
}

const connectDB = async () => {
    try {
        await mongoose.connect(connectionString, {
            maxPoolSize: 10, // Maintain up to 10 socket connections
        });
        console.log("MongoDB Connected with connection pooling");
    } catch (error: any) {
        console.log(error.message);
    }
}


mongoose.connection.on('connected', () => {
    console.log("MongoDB Connected")
})
mongoose.connection.on('disconnected', () => {
    console.log("MongoDB Disconnected")
})
mongoose.connection.on('error', () => {
    console.log("Error in MongoDB Connection")
})

export default connectDB;


