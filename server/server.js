const express = require('express');
const mongoose  = require('mongoose')
const cookieParser = require('cookie-parser');
const cors = require('cors')
require('dotenv').config()


//DB Connect
mongoose.connect(process.env.DB_ADDRESS)
        .then( () => console.log("DB Connected"))
        .catch(error => console.log("Error at DB Connected"))

const app = express();
const PORT = process.env.PORT || 5000;

app.use(
    cors({
        origin: process.env.CORS_ORIGIN,
        methods: ['GET', 'POST', 'DELETE', 'POST'],
        allowedHeaders: [
            'Content-Type',
            'Authorization',
            'Cache-Control',
            'Expires', 
            'Pragma'
        ],
        credentials: true
    })
);
app.use(cookieParser());
app.use(express.json());

app.listen(PORT, ()=> console.log(`Server Running on ${PORT}`))