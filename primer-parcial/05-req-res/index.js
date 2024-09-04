const express = require('express');
const app = express();
const port = 3000
const cors = require('cors')

app.use(cors())

app.listen(3000, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});

app.get('/search', (req, res) => {
    const term = req.query.term;
    res.send(`Buscando el término: ${term}`);
});

app.get('/user/:id', (req, res) => {
    const userId = req.params.id;
    res.send(`Información del usuario con ID: ${userId}`);
});

app.get('/api/user/:id', (req, res) => {
    const user = {
        id: req.params.id,
        name: "John Doe",
        email: "johndoe@example.com"
    };
    res.json(user);
});

app.get('/not-found', (req, res) => {
    res.status(404).send('Página no encontrada');
});

app.get('/old-route', (req, res) => {
    res.redirect('/new-route');
});

app.get('/new-route', (req, res) => {
    res.send('Has sido redirigido a la nueva ruta');
});

app.get('/headers', (req, res) => {
    const userAgent = req.get('User-Agent');
    res.set('Content-Type', 'text/plain');
    res.send(`Tu User-Agent es: ${userAgent}`);
});

app.use(express.urlencoded({ extended: true }));

app.post('/submit', (req, res) => {
    const name = req.body.name;
    res.send(`Formulario enviado por: ${name}`);
});