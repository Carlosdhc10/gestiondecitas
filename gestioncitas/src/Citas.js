import React, { useState } from "react";
import "./Citas.css"; // Archivo de estilos

const Citas = () => {
  const [citas, setCitas] = useState([
    { id: 1, paciente: "Juan Pérez", medico: "Dr. Gómez", fecha: "2025-02-05", estado: "Pendiente" },
    { id: 2, paciente: "María López", medico: "Dra. Martínez", fecha: "2025-02-10", estado: "Confirmada" },
    { id: 3, paciente: "Carlos Ramírez", medico: "Dr. Fernández", fecha: "2025-02-15", estado: "Cancelada" },
  ]);

  return (
    <div className="citas-container">
      <h1>Gestión de Citas</h1>
      <table className="citas-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Paciente</th>
            <th>Médico</th>
            <th>Fecha</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          {citas.map((cita) => (
            <tr key={cita.id} className={`estado-${cita.estado.toLowerCase()}`}>
              <td>{cita.id}</td>
              <td>{cita.paciente}</td>
              <td>{cita.medico}</td>
              <td>{cita.fecha}</td>
              <td>{cita.estado}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Citas;
