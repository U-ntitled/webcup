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

//Connection avec La BD
mongoose.set('strictQuery', true)
main()
.then(()=>{console.log('DB connected successfully');})
.catch(err => console.log(err));


//authorization
app.use(cors({
    origin:['http://localhost:3000'],
    credentials: true
}))
app.use(cookieParser())

app.listen(process.env.PORT,()=>{
    console.log("listenning on port:" + process.env.PORT)
})

async function main(){
    await mongoose.connect(process.env.MONGO_URL)
}