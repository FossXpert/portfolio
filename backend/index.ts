
import express from 'express';
import cors from 'cors';
import connectDB from './utill/db';
import { contactController } from './controller/contactController';
const PORT = process.env.PORT || 9000;

const app = express();
app.use(express.json());
app.use(cors({
    origin: ["http://localhost:5173",
        "https://portfolio-nine-hazel-11.vercel.app",
    ], // Add your frontend URL here
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
}));

app.use('/api/getcontactForm', contactController);

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    connectDB();
})







