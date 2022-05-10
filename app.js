var express = require('express');
var app = express();

app.get('/hola', function (req, res) {
    res.send('Hola Mundo');
});

app.get('/adios', function (req, res) {
    res.send('Adiós Mundo');
});

app.listen(3000, function () {
    console.log('Aplicación ejemplo, escuchando el puerto 3000!');
});