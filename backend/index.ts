import express, {ErrorRequestHandler, Request, Response} from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import productsRouter from "./routes/products"

const port = 3000;

dotenv.config();

const app = express();

app.use(express.json());

// @ts-ignore
mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        console.log("Connected to DB.")
    }).catch((error) => {
    console.log(error)
})


app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));

app.use('/api/products', productsRouter);


app.listen(process.env.PORT || port, () => {
    console.log(`Server is running on port ${process.env.PORT}`)
})

