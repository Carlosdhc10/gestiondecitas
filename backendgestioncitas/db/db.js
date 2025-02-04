const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',         // Cambia por tu usuario de PostgreSQL
  host: 'localhost',          // Cambia si usas un host diferente
  database: 'gestion_citas_medicas', // Cambia por el nombre de tu base
  password: 'example',  // Cambia por tu contraseña
  port: 5436,                 // Puerto por defecto de PostgreSQL
});

module.exports = pool;
