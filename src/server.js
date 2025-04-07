import express from 'express';
import cors from'cors';
import dotenv from 'dotenv';
import { connectDB } from './lib/db.js';
import feedbackRouter from './routes/feedbackRoutes.js';

dotenv.config();

const PORT = process.env.PORT;

const app = express();
app.use(cors());
app.use(express.json());

app.use("/", feedbackRouter);

app.listen(PORT, () => {
    console.log("Server is running on port:" + PORT);
    connectDB();
});