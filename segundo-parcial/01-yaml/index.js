// Importar las bibliotecas necesarias
const fs = require('fs');
const yaml = require('js-yaml');
const path = require('path');

// Función para leer el archivo YAML
function leerYaml(archivo) {
    try {
        // Leer el archivo
        const data = fs.readFileSync(archivo, 'utf8')

        // Convertir el YAML a un objeto JavaScript
        const resultado = yaml.load(data)

        // Mostrar el resultado
        console.log(JSON.stringify(resultado, null, 2))
    } catch (e) {
        console.error(e)
    }
}

// Llamar a la función con el nombre del archivo
leerYaml(path.join(__dirname, '/peliculas.yml'))