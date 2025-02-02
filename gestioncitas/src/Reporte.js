import React, { useState } from "react";
import "./Reporte.css";
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const Reporte = () => {
  // Datos de ejemplo
  const [resumen, setResumen] = useState({
    totalAtendidas: 434,
    totalCanceladas: 63,
    tiempoEspera: 14.46,
    tiempoVisita: 29.13,
    ratioCancelacion: 9.42,
  });

  // Datos para gráficos
  const dataEspecialidad = [
    { name: "Pediatría", value: 46.5 },
    { name: "Medicina General", value: 8.76 },
    { name: "Cardiología", value: 7.83 },
  ];

  const dataCancelaciones = [
    { name: "Canceladas", value: resumen.totalCanceladas },
    { name: "Atendidas", value: resumen.totalAtendidas },
  ];

  const COLORS = ["#e74c3c", "#3498db"];

  return (
    <div className="reporte-container">
      <h1>Reporte de Citas</h1>
      <div className="estadisticas">
        <div className="card">
          <h3>Citas Atendidas</h3>
          <p className="numero">{resumen.totalAtendidas} 🔽</p>
        </div>
        <div className="card">
          <h3>Citas Canceladas</h3>
          <p className="numero">{resumen.totalCanceladas} 🔽</p>
        </div>
        <div className="card">
          <h3>Tiempo Medio de Espera (min)</h3>
          <p className="numero">{resumen.tiempoEspera} 🔽</p>
        </div>
        <div className="card">
          <h3>Tiempo Medio de Visita (min)</h3>
          <p className="numero">{resumen.tiempoVisita} 🔽</p>
        </div>
      </div>

      {/* Gráfico de Pie para cancelaciones */}
      <div className="graficos">
        <div className="grafico">
          <h3>Ratio de Cancelación</h3>
          <PieChart width={250} height={250}>
            <Pie data={dataCancelaciones} dataKey="value" cx="50%" cy="50%" outerRadius={80} label>
              {dataCancelaciones.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
          <p>{resumen.ratioCancelacion}%</p>
        </div>

        {/* Gráfico de Barras por Especialidad */}
        <div className="grafico">
          <h3>Citas Atendidas por Especialidad</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={dataEspecialidad}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#3498db" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Reporte;
