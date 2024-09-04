const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();

// Middleware de terceros
app.use(morgan('dev'));
app.use(cors());

app.get('/', (req, res) => {
    res.send('Middleware de terceros en acción');
});

app.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000');
});