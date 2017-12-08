var express = require('express');
var consign = require('consign');
var app = express();

app.set('views engine', 'ejs');
app.set('views' , './app/views');

consign().include('app/routes').into(app);

module.exports = app;