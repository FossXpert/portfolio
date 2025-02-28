import dotenv from "dotenv";
dotenv.config(); // Load environment variables before anything else
import express from 'express';
import cors from 'cors';
import connectDB from './util/db';
import { contactController } from './controller/contactController';
const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.json());
app.use(cors({
    origin: ["*"
    ], // Add your frontend URL here
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
}));

app.use('/api/getcontactForm', contactController);

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    connectDB();
})







