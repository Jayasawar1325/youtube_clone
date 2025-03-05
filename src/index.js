import connectDB from "./db/index.js";
import dotenv from 'dotenv'
import { app } from "./app.js";
dotenv.config({
    path:'./.env'
})
connectDB()
.then(()=>{
    app.listen(process.env.PORT || 5000,()=>{
        console.log(`Server is running on port ${process.env.PORT}`)
    })
})
.catch((err)=>{
    console.log(err)
})



















/*import express from 'express';
import mongoose from 'mongoose';
import { DB_NAME } from './constants.js';
const app =express();
(async ()=>{
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on('error',(err)=>{
            console.log(err)
            throw err
        
        })
        app.listen(process.env.PORT,()=>{
            console.log(`Server is running on port ${process.env.PORT}`)
        });
    }
    catch(err){
        console.log(err)
    }
})*/