const { error } = require('console');
const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose')
const linkRoute = require('./routes/linkRoute')


mongoose.connect('mongodb://127.0.0.1:27017/link');

let db = mongoose.connection

db.on("error", () => { console.log("houve um erro") })
db.once("open", () => { console.log("banco carregado ...")})


app.use('/', linkRoute)



app.listen(port, () => console.log(`Example app listening port ${port}!`))
