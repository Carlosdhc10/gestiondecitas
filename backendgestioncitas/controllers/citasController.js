const pool = require('../db/db');

// Obtener todas las citas
const obtenerCitas = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM citas');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener las citas' });
  }
};

// Obtener una cita específica
const obtenerCita = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query('SELECT * FROM citas WHERE id = $1', [id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Cita no encontrada' });
    }
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener la cita' });
  }
};

// Crear una cita
const crearCita = async (req, res) => {
  const { usuario_id, fecha, descripcion } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO citas (usuario_id, fecha, descripcion) VALUES ($1, $2, $3) RETURNING *',
      [usuario_id, fecha, descripcion]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: 'Error al crear la cita' });
  }
};

// Actualizar una cita
const actualizarCita = async (req, res) => {
  const { id } = req.params;
  const { usuario_id, fecha, descripcion } = req.body;
  try {
    const result = await pool.query(
      'UPDATE citas SET usuario_id = $1, fecha = $2, descripcion = $3 WHERE id = $4 RETURNING *',
      [usuario_id, fecha, descripcion, id]
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Cita no encontrada' });
    }
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: 'Error al actualizar la cita' });
  }
};

// Eliminar una cita
const eliminarCita = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query('DELETE FROM citas WHERE id = $1 RETURNING *', [id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Cita no encontrada' });
    }
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: 'Error al eliminar la cita' });
  }
};

module.exports = { obtenerCitas, obtenerCita, crearCita, actualizarCita, eliminarCita };
