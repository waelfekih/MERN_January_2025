import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import dbConnect from './config/mernbook.config.js';
import router from './routes/mernbook.route.js';

const app = express();

dotenv.config();

app.use(express.json(), cors());


const PORT = process.env.PORT;
dbConnect();



app.use("/api" , router)
//dotenv.config();
//const PORT = process.env.PORT;
//dbConnect();
app.listen(PORT, () =>
    console.log(`Listening on port: ${PORT}`)
);