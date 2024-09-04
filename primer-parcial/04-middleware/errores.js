const express = require('express');
const app = express();

// Middleware de manejo de errores
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Algo salió mal!');
});

app.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000');
});