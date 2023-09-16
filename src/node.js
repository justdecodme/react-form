const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

const app = express()
app.use(express())
app.use(cors())
app.use(express.json())

async function dbConnect() {
    await mongoose.connect('mongodb://localhost:27017/form')
}
dbConnect();