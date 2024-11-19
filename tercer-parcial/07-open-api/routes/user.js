const express = require('express')
const router = express.Router()

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - name
 *         - email
 *       properties:
 *         id:
 *           type: integer
 *           description: ID del usuario
 *         name:
 *           type: string
 *           description: Nombre del usuario
 *         email:
 *           type: string
 *           description: Correo electrónico del usuario
 *       example:
 *         id: 1
 *         name: Luis Toledo
 *         email: luistoledo30@example.com
 */

/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Obtiene la lista de usuarios
 *     responses:
 *       200:
 *         description: Lista de usuarios
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 */
router.get('/', (req, res) => {
    res.json([
        { id: 1, name: 'Luis Toledo', email: 'luistoledo30@example.com' },
        { id: 2, name: 'Daniela Garcia', email: 'dangarcia08@example.com' },
    ])
})

/**
 * @swagger
 * /api/users:
 *   post:
 *     summary: Crea un nuevo usuario
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       201:
 *         description: Usuario creado
 */
router.post('/', (req, res) => {
    const { name, email } = req.body
    res.status(201).json({ id: 3, name, email })
})

module.exports = router
