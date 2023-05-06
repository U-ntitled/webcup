const express = require('express');
const app = express();
const server = http.createServer(app);
const io = socketio(server);
const dotenv = require('dotenv');
const mongoose = require('mongoose')
const multer = require('multer')
const cors= require('cors')
const cookieParser = require('cookie-parser')


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