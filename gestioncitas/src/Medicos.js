import React, { useState } from "react";
import "./Medicos.css"; // Archivo de estilos

const Medicos = () => {
  const [medicos, setMedicos] = useState([
    { id: 1, nombre: "Dr. Juan Pérez", especialidad: "Cardiología", telefono: "0987654321", correo: "juanperez@gmail.com" },
    { id: 2, nombre: "Dra. María Gómez", especialidad: "Pediatría", telefono: "0991234567", correo: "mariagomez@gmail.com" },
    { id: 3, nombre: "Dr. Carlos Ramírez", especialidad: "Dermatología", telefono: "0976543210", correo: "carlosramirez@gmail.com" },
  ]);

  return (
    <div className="medicos-container">
      <h1>Gestión de Médicos</h1>
      <table className="medicos-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Especialidad</th>
            <th>Teléfono</th>
            <th>Correo</th>
          </tr>
        </thead>
        <tbody>
          {medicos.map((medico) => (
            <tr key={medico.id}>
              <td>{medico.id}</td>
              <td>{medico.nombre}</td>
              <td>{medico.especialidad}</td>
              <td>{medico.telefono}</td>
              <td>{medico.correo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Medicos;
