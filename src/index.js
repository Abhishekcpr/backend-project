require('dotenv').config();
const express = require('express')
const connectDB = require('./db/index')
const app = express()
console.log(process.env.PORT);
connectDB() ;