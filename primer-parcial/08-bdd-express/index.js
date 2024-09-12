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
  database: 'letterboxd',
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
  from film
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
      from letterboxd.film
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
    from film
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

// Ruta para crear registros
app.post('/record', (req, res) => {
  const title = req.query.title
  const about = req.query.about
  const length = req.query.length
  const release = req.query.release
  const rating = req.query.rating
  const director = req.query.director

  // Consulta insert
  let insert = `
    insert into film values (
      null, 
      '${title}', 
      '${about}',
      ${length},
      ${release},
      ${rating},
      '${director}'
    );
  `

  connection.query(insert, (err, results) => {
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
    res.json({
      'status': '200',
      'message': 'Pelicula registrada correctamente',
      'pelicula': {
        'title': title,
        'release': release,
        'director': director,
        'rating': rating
      }
    })
  })
})

app.delete('/undo', (req, res) => {
  const title = req.query.title
  const release = req.query.release

  let remove = `delete from film where title = '${title}' and release_year = ${release}`

  connection.query(remove, (err, results) => {
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
    res.json({
      'status': '200',
      'message': 'Pelicula eliminada correctamente',
      'pelicula': {
        'title': title,
        'release': release
      }
    })
  })
})

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`)
})
