import React, { useState } from "react";
import "./Usuarios.css"; // Archivo de estilos

const Usuarios = () => {
  const [usuarios, setUsuarios] = useState([
    { id: 1, nombre: "Juan Pérez", rol: "Paciente", correo: "juan@gmail.com" },
    { id: 2, nombre: "Dra. María Gómez", rol: "Médico", correo: "maria@gmail.com" },
    { id: 3, nombre: "Carlos Ramírez", rol: "Administrador", correo: "carlos@gmail.com" },
  ]);

  return (
    <div className="usuarios-container">
      <h1>Gestión de Usuarios</h1>
      <table className="usuarios-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Rol</th>
            <th>Correo</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((usuario) => (
            <tr key={usuario.id}>
              <td>{usuario.id}</td>
              <td>{usuario.nombre}</td>
              <td>{usuario.rol}</td>
              <td>{usuario.correo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Usuarios;
