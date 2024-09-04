const express = require('express');
const app = express();

const checkAdmin = (req, res, next) => {
    if (req.headers.role !== 'admin') {
        return res.status(403).send('Acceso denegado');
    }
    next();
};

app.get('/admin', checkAdmin, (req, res) => {
    res.send('Bienvenido, administrador!');
});

app.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000');
});