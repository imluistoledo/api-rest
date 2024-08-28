let pagina = 1
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


const cargarPeliculas = () => {
    let peliculas = ''
    const peticion = fetch(`https://api.themoviedb.org/3/movie/popular?api_key=192e0b9821564f26f52949758ea3c473&language=es-MX&page=${pagina}`)
        .then(respuesta => respuesta.json())
        .then(peliculas => {
            peliculas.results.forEach(pelicula => {
                peliculas += `
                <div class="pelicula">
                <img class="poster" src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}">
                <h3 class="titulo">${pelicula.title}</h3>
                </div>
				`
            })
            peliculas = peliculas.replace('[object Object]', '')

            document.getElementById('contenedor').innerHTML = peliculas
        })

}

window.onload = cargarPeliculas