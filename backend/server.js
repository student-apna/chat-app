import express from 'express';
import "dotenv/config";
import cors from 'cors';
import http  from "http";

import {connectDB} from './lib/db.js';


// create Express app and http server

const app = express();
const server = http.createServer(app);

// Middleware setup

app.use(express.json({limit:"4mb"}));
app.use(cors());


app.get('/api/status',(req,res)=>{
    res.send("Server is live");
})

// connect to MongoDB
await connectDB();

const port = process.env.PORT || 4000;

server.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})