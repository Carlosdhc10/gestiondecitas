const express = require('express');
const { obtenerCitas, obtenerCita, crearCita, actualizarCita, eliminarCita } = require('../controllers/citasController');
const router = express.Router();

// Definir las rutas
router.get('/', obtenerCitas);           // Leer todas las citas
router.get('/:id', obtenerCita);         // Leer una cita específica
router.post('/', crearCita);             // Crear una cita
router.put('/:id', actualizarCita);      // Actualizar una cita
router.delete('/:id', eliminarCita);     // Eliminar una cita

module.exports = router;
