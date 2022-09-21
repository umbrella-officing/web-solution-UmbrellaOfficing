const express = require("express");

const app = express();
const consign = require('consign');
const session = require('express-session');

app.set('view engine','ejs');
app.set('views','./app/views');

app.use(express.static('app/public'));

app.use(session({
    secret: 'keyboard cat', // palavra-secreta garante que a sessão seja única
    resave: false
    // saveUninitialized: false
}));

consign()
    .include('app/routes') 
    .then('config/dbConnection.js')
    .then('app/models') 
    .then('app/controllers') 
    .into(app); 

module.exports = app;