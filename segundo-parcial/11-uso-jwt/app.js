const express = require('express')
const jwt = require('jsonwebtoken')
const bodyParser = require('body-parser')

const app = express()
const PORT = 3000

// Middleware para parsear el cuerpo de las peticiones
app.use(bodyParser.json())

// Clave secreta para firmar los tokens
const SECRET_KEY = 'tu_clave_secreta'

// Ruta para autenticar usuarios y generar un token
app.post('/login', (req, res) => {
    const { username } = req.body

    // Aquí deberías validar el usuario (ej. consultando a una base de datos)
    // Para este ejemplo, asumimos que cualquier usuario es válido

    // Crear un token JWT
    const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: '1h' })
    
    res.json({ token })
})

// Middleware para verificar el token
const verifyToken = (req, res, next) => {
    const token = req.headers['authorization']

    if (!token) return res.sendStatus(403)

    jwt.verify(token, SECRET_KEY, (err, decoded) => {
        if (err) return res.sendStatus(403)
        req.user = decoded // Almacenar la información del usuario decodificada
        next()
    })
}

// Ruta protegida que requiere un token válido
app.get('/protected', verifyToken, (req, res) => {
    res.json({ message: 'Acceso permitido', user: req.user })
})

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`)
})
