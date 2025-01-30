
import express from 'express';
import cors from 'cors';
import connectDB from './utill/db';
import { contactController } from './controller/contactController';
const PORT = process.env.PORT || 9000;

const app = express();
app.use(express.json());
app.use(cors({
    origin: ["http://localhost:5173",
        "https://9000-idx-portfoliogit-1738151759195.cluster-bec2e4635ng44w7ed22sa22hes.cloudworkstations.dev/?monospaceUid=30318&embedded=0",
        "https://sprl.in/Rahul-Portfolio",
        "https://9000-idx-portfoliogit-1738151759195.cluster-bec2e4635ng44w7ed22sa22hes.cloudworkstations.dev"
    ], // Add your frontend URL here
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
}));

app.use('/api/getcontactForm', contactController);

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    connectDB();
})







