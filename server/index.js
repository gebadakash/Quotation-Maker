import express from 'express';
import authRoutes from './route/auth.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';

const app = express()


app.use(express.json());

app.use(cors({
    origin:"http://localhost:5173",
    credentials: true
}));

app.use(cookieParser());

app.use("/api/auth", authRoutes);

app.listen(8800, ()=> {

    console.log("API working....");
})