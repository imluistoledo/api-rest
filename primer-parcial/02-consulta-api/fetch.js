let pagina = 1
let idioma = ''
const btnAnterior = document.getElementById('btnAnterior')
const btnSiguiente = document.getElementById('btnSiguiente')

btnSiguiente.addEventListener('click', () => {
	if (pagina < 1000) {
		pagina += 1
		cargarPeliculas()
	}
})

btnAnterior.addEventListener('click', () => {
	if (pagina > 1) {
		pagina -= 1
		cargarPeliculas()
	}
})

btnCargarPeliculas.addEventListener('click', () => {
    idioma = document.getElementById('idiomas').value
    pagina = document.getElementById('secciones').value
    cargarPeliculas()
})


const cargarPeliculas = () => {
    let peliculas = ''
    const peticion = fetch(`https://api.themoviedb.org/3/movie/popular?api_key=192e0b9821564f26f52949758ea3c473&language=${idioma}&page=${pagina}`)
        .then(respuesta => respuesta.json())
        .then(peliculas => {
            peliculas.results.forEach(pelicula => {
                peliculas += `
                <div class="pelicula">
                <img class="poster" src="https://image.tmdb.org/t/p/w500/${pelicula.backdrop_path}">
                <h3 class="titulo">${pelicula.title}</h3>
                </div>
                <p class="descripcion">${pelicula.overview}</p>
				`
            })
            peliculas = peliculas.replace('[object Object]', '')

            document.getElementById('contenedor').innerHTML = peliculas
        })

}

//window.onload = cargarPeliculas