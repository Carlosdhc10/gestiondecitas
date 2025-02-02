import React, { useState } from "react";
import "./Pacientes.css"; // Archivo de estilos

const Pacientes = () => {
  const [pacientes, setPacientes] = useState([
    { id: 1, nombre: "Juan Pérez", edad: 35, telefono: "0987654321", correo: "juan@gmail.com" },
    { id: 2, nombre: "María Gómez", edad: 29, telefono: "0991234567", correo: "maria@gmail.com" },
    { id: 3, nombre: "Carlos Ramírez", edad: 42, telefono: "0976543210", correo: "carlos@gmail.com" },
  ]);

  return (
    <div className="pacientes-container">
      <h1>Gestión de Pacientes</h1>
      <table className="pacientes-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Edad</th>
            <th>Teléfono</th>
            <th>Correo</th>
          </tr>
        </thead>
        <tbody>
          {pacientes.map((paciente) => (
            <tr key={paciente.id}>
              <td>{paciente.id}</td>
              <td>{paciente.nombre}</td>
              <td>{paciente.edad}</td>
              <td>{paciente.telefono}</td>
              <td>{paciente.correo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Pacientes;
