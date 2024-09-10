const express = require('express')
const app = express()
const port = 3000
// Get the client
const mysql = require('mysql2')

// Configurar la conexion a la BDD
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Pas$w0rd',
  database: 'sakila',
})

// Conexion a la BDD
connection.connect((err) => {
  if (err) {
    console.error('Error al conectar: ', err)
    return
  }
  console.log('Conexion exitosa')
})

// Consulta select
let query = `
  select 
    film_id,
      title,
      release_year,
      length
  from sakila.film
  limit 20;
`

// Ruta para realizar la consulta
app.get('/film', (req, res) => {
  const filmID = req.query.id
  if (typeof(filmID) !== 'undefined') {
    query = `
      select 
        film_id,
        title,
        release_year,
        length
      from sakila.film
      where film_id = '${filmID}'
      limit 20;
    `
  }
  else {
    query = `
    select 
      film_id,
      title,
      release_year,
      length
    from sakila.film
    limit 20;
  `
  }

  connection.query(query, (err, results) => {
    if (err) {
      res.status(500).send('Error al ejecutar la consulta')
      return
    }
    // Validar existencia
    if (results.length === 0) {
      res.json({
        'Excepcion: ': 'No se ha encontrado ninguna pelicula'
      })
      return
    }
    res.json(results)
  })
})

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`)
})
