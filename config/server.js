var express = require('express');
var app = express();

app.set('views engine', 'ejs');
app.set('views' , './app/views');

module.exports = app;