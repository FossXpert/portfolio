import express from 'express';
import cors from 'cors';
import connectDB from './util/db';
import contactRouter from './routes/contactRouter';
import mongoose from 'mongoose';
const PORT = process.env.PORT || 5000;

const app = express();

connectDB()
  .then(() => {
    console.log("Server is starting...");
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Server failed to start due to DB connection issue:", error);
  });

app.use(express.json());
app.use(cors({ origin: '*' })); // Allow all origins
app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl} from ${req.headers.host}`);
    next();
});
app.use('/api/contact', contactRouter);

app.get("/db", async (req, res) => {
    const status = mongoose.connection.readyState;
    const states = ["Disconnected", "Connected", "Connecting", "Disconnecting"];
  
    res.json({
      statusCode: status,
      status: states[status] || "Unknown",
    });
  });







