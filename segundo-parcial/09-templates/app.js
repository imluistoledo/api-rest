const express = require('express')
const app = express()
const port = 3000
const path = require('path')

// Configura la carpeta public como estática
app.use(express.static(path.join(__dirname, 'public')))

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render(path.join(__dirname, '/views/index.ejs'), { 
        title: 'Vertigo by Hitchcock',
        desc: 'Tras una persecución en una azotea, en donde su compañero policía cae y muere, el detective de San Francisco John «Scottie» Ferguson (James Stewart) se retira tempranamente y empieza a padecer de acrofobia y vértigo. Scottie intenta vencer su miedo aplicando su propio método, pero su amiga y ex prometida, la diseñadora de ropa interior Marjorie «Midge» Wood (Barbara Bel Geddes) dice que solo otro shock emocional severo podría ser la cura de Scottie para sus padecimientos.',
        imgURL: '/img/vertigo-stewart-novak.jpg' 
    })
})

app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`)
})
