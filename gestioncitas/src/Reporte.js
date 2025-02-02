import React, { useState } from "react";
import "./Reporte.css"; // Archivo de estilos

const Reporte = () => {
  const [resumen, setResumen] = useState({
    total: 50,
    pendientes: 15,
    confirmadas: 30,
    canceladas: 5,
  });

  return (
    <div className="reporte-container">
      <h1>Reporte de Citas</h1>
      <div className="resumen">
        <div className="card pendiente">Pendientes: {resumen.pendientes}</div>
        <div className="card confirmada">Confirmadas: {resumen.confirmadas}</div>
        <div className="card cancelada">Canceladas: {resumen.canceladas}</div>
        <div className="card total">Total: {resumen.total}</div>
      </div>
    </div>
  );
};

export default Reporte;
