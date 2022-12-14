const express = require('express')
const mongoose= require('mongoose');
const cors=require('cors')
require('dotenv').config()
const Router = require('./Routes');

const app=express()

const uri = process.env.MONGO_URI
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true})
.then(res=>console.log("Database Connected")).catch(err=>console.log(err))
app.use(cors())
app.use(express.json())
app.use('/uploads',express.static('./uploads'))

app.use('/',Router)

app.listen(process.env.PORT,()=>{
    console.log("server is running on 2000")
})