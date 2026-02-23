import dotenv from 'dotenv';
dotenv.config();

import express, { Request, Response } from 'express';
import cors from 'cors';
import connectDB from './config/db.js';
import todoRouter from './routes/todo.route.js';

connectDB();

const app = express();

app.use(cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
}));

app.use(express.json());
app.use("/api", todoRouter)

app.use(( err: Error, req: Request, res: Response, next: Function) => {
    res.status(500).json({"Something went wrong": err});
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});