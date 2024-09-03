const express = require('express');
// const cors = require('cors'); // Importar cors
const app = express();
const port = 3000;

// Habilitar CORS para todas las rutas
// app.use(cors());  

app.get('/', (req, res) => {
  res.send('¡Hola Mundo!');
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});