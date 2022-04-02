const express = require('express');
const app = express();
const fs = require('fs');
const { getUsers } = require("./agregar.js");

app.listen(3000, () => console.log("Servidor activo en http://localhost:3000"));

app.use(express.json());

let rutaRoommates = `${__dirname}/data/roommates.json`;
let rutaGastos = `${__dirname}/data/gastos.json`;

/// GET: Debe devolver el documento HTML disponible en el apoyo.
app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/index.html`)
});

// /roommate POST: Almacena un nuevo roommate ocupando random user.
app.post('/roommate', (req, res) => {
    
    res.send(getUsers());
});

// /roommate GET: Devuelve todos los roommates almacenados.
app.get('/roommates', (req, res) => {
    res.sendFile(rutaRoommates);
});

// /gastos GET: Devuelve el historial con todos los gastos registrados.
app.get('/gastos', (req, res) => {
    res.sendFile(rutaGastos);
});

app.post('/gasto', (req, res) => {
    
});

// /gasto PUT: Edita los datos de un gasto.
app.put('/gasto');

// /gasto DELETE: Elimina un gasto del historial.
app.delete('/gasto');