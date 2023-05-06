const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose')
const multer = require('multer')
const cors= require('cors')
const cookieParser = require('cookie-parser')

dotenv.config()

//authorization to use req.body
app.use(express.json())

//authorization
app.use(cors({
    origin:['http://localhost:3000'],
    credentials: true
}))

app.listen(process.env.PORT,()=>{
    console.log("listenning on port:" + process.env.PORT)
})