const express = require('express');
const app = express();

// Parsear cuerpos JSON
app.use(express.json());

// Parsear datos de formularios
app.use(express.urlencoded({ extended: true }));

app.post('/submit', (req, res) => {
    res.send(`Datos recibidos: ${req.body}`);
});

app.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000');
});