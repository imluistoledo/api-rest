const getPi = require('./valorPi')

const calculateArea = (radius) => {
    if (radius <= 0) throw new Error('El radio debe ser mayor que 0')
    return getPi() * radius * radius
}

module.exports = calculateArea
