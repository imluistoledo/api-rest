const express = require('express')
const app = express()
const port = 3000

app.get('/error', (req, res, next) => {
    const error = new Error()
    next(error)  // Pasar el error al manejador de errores
})

const manejadorErrores = (err, req, res, next) => {
    console.error(err.stack) // Registrar el error (stack trace)

    // Responder con un mensaje de error genérico
    res.status(500).json({
        status: 500,
        message: "Ocurrió un error en el servidor.",
        error: err.message  // En producción, quizás no quieras exponer detalles del error.
    })
}

app.use(manejadorErrores)

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`)
})