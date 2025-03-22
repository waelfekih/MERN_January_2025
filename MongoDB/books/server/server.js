import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import dbConnect from './config/books.config.js';
import router from './routes/book.route.js';
const app = express();
app.use(express.json(), cors());

app.use("/api" , router)
dotenv.config();
const PORT = process.env.PORT;
dbConnect();
app.listen(PORT, () =>
    console.log(`Listening on port: ${PORT}`)
);

