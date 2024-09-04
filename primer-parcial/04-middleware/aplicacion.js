const express = require('express');
const app = express();

// Middleware para parsear JSON
app.use(express.json());

// Middleware para logging de solicitudes
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

// Middleware de autenticación
app.use((req, res, next) => {
    if (!req.headers.authorization) {
        return res.status(403).send('No autorizado');
    }
    next();
});

app.get('/', (req, res) => {
    res.send('Hola, mundo!');
});

app.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000');
});