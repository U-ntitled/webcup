const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose')
const multer = require('multer')
const cors= require('cors')
const cookieParser = require('cookie-parser')
const chatRoute = require('./src/routes/chat.route')
const filterRoute = require('./src/routes/filter.route')
const auth = require('./src/routes/auth.router')

dotenv.config()

//authorization to use req.body
app.use(express.json())

//Connection avec La BD
mongoose.set('strictQuery', true)
main()
.then(()=>{console.log('DB connected successfully');})
.catch(err => console.log(err));


//authorisation
app.use(cors({
    origin:['http://localhost:3000'],
    credentials: true
}))
app.use(cookieParser())

//Utilisation des routes de Chat
app.use('/chat', chatRoute)
app.use('/filter', filterRoute)
app.use('/auth/',auth)

app.listen(process.env.PORT,()=>{
    console.log("listenning on port:" + process.env.PORT)
})

async function main(){
    await mongoose.connect(process.env.MONGO_URL)
}