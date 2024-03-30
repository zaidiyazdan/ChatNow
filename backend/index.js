import express from 'express';
import dotenv from 'dotenv'
import { chats } from './data/dummy.js';
import connectDB from './db/connect.js';
import colors from "colors"
import userRoutes from './routes/userRoutes.js'

const app = express();
dotenv.config();


app.use('/api/user',userRoutes);

app.get('/',(req,res)=>{
    res.send(`<h1>Hii Welcome to server </h1>`);
})

app.get('/api/chat',(req,res)=>{
    res.send(chats);
})

const PORT = process.env.PORT || 5000

connectDB();

const server = app.listen(
    PORT,
    console.log(
      `Server is listening on port ${PORT}`
        .yellow.bold
    )
  );