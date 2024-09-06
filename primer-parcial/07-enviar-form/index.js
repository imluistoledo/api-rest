// get, post y put
// get param ruta
// post cadena consulta
// put body json
const express = require('express')
const multer = require('multer') // FormData
const bodyParser = require('body-parser') // XML
const bodyParserXml = require('body-parser-xml') // XML
const app = express()
const port = 3000
const upload = multer()

bodyParserXml(bodyParser) // Habilitar soporte para XML usando body-parser-xml

app.use(express.json()) // Middleware incorporado
app.use(express.text()) // Middleware incorporado
app.use(express.urlencoded({extended:true})) // Middleware para URLEncoded
app.use(upload.none()) // Middleware para FormData

app.use(bodyParser.xml({
    limit: '1MB',   // Tamaño máximo del cuerpo
    xmlParseOptions: {
      normalize: true,    // Normalizar texto (eliminar espacios en blanco)
      normalizeTags: true, // Convertir etiquetas a minúsculas
      explicitArray: false // No poner valores en arrays si hay solo uno
    }
}))

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`)
})

app.post('/clientes', (req, res) => {
    console.log(req.body)
    res.json(req.body)
})

app.post('/xml', (req, res) => {
    console.log('Datos XML recibidos:', req.body)
    res.send('XML procesado correctamente')
});