
import express from 'express';
import cors from 'cors';
import connectDB from './utill/db';
const PORT = 5000;

const app = express();
app.use(express.json());
app.use(cors({
    origin: ["http://localhost:5173"], // Add your frontend URL here
    methods: ['GET', 'POST', 'PUT', 'DELETE'], 
    credentials: true,
}));
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
    connectDB();
})







