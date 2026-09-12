const express = require('express');
const CORS = require('cors');
//const RUTA_CLIENTE = require('./vista/ClienteRutas');
//const RUTA_ADMIN = require('./vista/AdminRutas');
const APP = express();
const PORT = process.env.PORT || 8080;

APP.use(CORS({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'], 
    credentials: true
}));

APP.use(express.json());
APP.use(express.urlencoded( {extended: true}));

APP.get('/', (req,res) => {
    res.send('<h1 style="background-image: linear-gradient(to left, violet, indigo, blue, green, yellow, orange, red); color: transparent; -webkit-background-clip: text;">Welcome to my awesom website!</h1>')
});


APP.listen(PORT, () => {
    console.log("Going up");
});
