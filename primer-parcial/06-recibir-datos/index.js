// get, post y put
// get param ruta
// post cadena consulta
// put body json
const express = require('express');
const app = express();
const port = 3000

app.use(express.json())

app.listen(3000, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});

app.get('/user/:name', (req, res) => {
    const username = req.params.name;
    res.send(`Nombre del usuario: ${username}`);
});

app.post('/cadena-consulta', (req, res) => {
    const nombre = req.query.nombre;
    res.send(`Hola, ${nombre}!`);
});

app.put('/body-json', (req, res) => {
    console.log(req.body)
});