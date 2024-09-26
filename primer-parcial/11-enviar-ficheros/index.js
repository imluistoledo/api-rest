const express = require('express');
const cors = require('cors'); // Importar cors
const path = require('path')
const app = express();
const port = 3000;

// Habilitar CORS para todas las rutas
app.use(cors());  

app.get('/sendFile', (req, res) => {
    let archivo = path.join(__dirname, '/img/catherine-deneuve.jpeg')
    res.sendFile(archivo)
})

app.get('/download', (req, res) => {
    let archivo = path.join(__dirname, '/img/mirror.jpeg')
    res.download(archivo)
})

app.get('/attachment', (req, res) => {
    let archivo = path.join(__dirname, '/img/The-Umbrellas-of-Cherbourg.jpg')
    res.attachment(archivo)
    res.send()
    // Es importante enviar con send despues de hacer el attachment
})

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`)
})