// circulo.js
const areaCirculo = (radio) => {
    if (radio < 0) throw new Error("El radio debe ser positivo")
    return Math.PI * radio * radio
}

module.exports = { 
    areaCirculo 
}