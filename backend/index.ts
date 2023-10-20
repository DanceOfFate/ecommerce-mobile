import express, {ErrorRequestHandler} from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(express.json());



app.listen(3000, () => {
    console.log("Server is running on port 3000")
})

