
import express from 'express';
import cors from 'cors';
import connectDB from './utill/db';
import { contactController } from './controller/contactController';
import contactRouter from './routes/contactRouter';
const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.json());
app.use(cors({ origin: '*' })); // Allow all origins
app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl} from ${req.headers.host}`);
    next();
});
app.use('/api/contact', contactRouter);

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    connectDB();
})







