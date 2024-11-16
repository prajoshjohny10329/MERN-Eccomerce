const express = require('express');
const mongoose  = require('mongoose')
const cookieParser = require('cookie-parser');
const cors = require('cors')
require('dotenv').config()

const authRouter = require('./routes/auth/routs')
const adminProductsRouter = require('./routes/admin/admin-products-routes')

//DB Connect
mongoose.connect(process.env.DB_ADDRESS)
        .then( () => console.log("DB Connected"))
        .catch(error => console.log("Error at DB Connected"))

const app = express();
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    console.log('running');
    res.send('Hello, World!'); // Sending a response back to the client
});

app.use(
    cors({
        // origin: process.env.CORS_ORIGIN,X
        origin: 'http://localhost:5173',
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

//router direction
app.use('/api/auth', authRouter)
app.use('/api/admin/product', adminProductsRouter)

app.listen(PORT, ()=> console.log(`Server Running on ${PORT}`))