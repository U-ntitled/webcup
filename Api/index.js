const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose')
const multer = require('multer')
const cors= require('cors')
const cookieParser = require('cookie-parser')
const chatRoute = require('./src/routes/chat.route')
const filterRoute = require('./src/routes/filter.route')
const path = require('path')

dotenv.config()

//authorization to use req.body
app.use(express.json())

//Connection avec La BD
mongoose.set('strictQuery', true)
main()
.then(()=>{console.log('DB connected successfully');})
.catch(err => console.log(err));


//authorisation
git status
//app.use(express.static(path.join(__dirname,'front')));
app.get('/',(req, res)=>{
    res.sendFile(path.join(__dirname,'front',"index.html"))
})

app.use(cors({
    origin:['http://localhost:3000'],
    credentials: true
}))
app.use(cookieParser())

//Utilisation des routes de Chat
app.use('/api/chat', chatRoute)
app.use('/api/filter', filterRoute)

app.get('/api',(req, res) => {
    res.end('hello webcup')
})
app.get('/api/test',(req, res) => {
    res.end('hello test')
})
app.listen()


async function main(){
    await mongoose.connect(process.env.MONGO_URL)
}