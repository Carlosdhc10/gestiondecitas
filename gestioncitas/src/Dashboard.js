import React, { useState } from "react";
import { Link } from "react-router-dom";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { FaHome, FaCalendarAlt, FaUserInjured, FaUserMd, FaClipboardList, FaChartBar, FaUsers } from "react-icons/fa"; // Importar íconos
import "./Dashboard.css";

const Dashboard = () => {
  const [citas, setCitas] = useState([
    { date: new Date(2025, 1, 5), title: "Consulta Dr. Pérez" },
    { date: new Date(2025, 1, 15), title: "Chequeo general" },
    { date: new Date(2025, 1, 22), title: "Revisión odontológica" },
  ]);

  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedCitas, setSelectedCitas] = useState([]);

  const handleDateClick = (date) => {
    setSelectedDate(date);
    const citasDelDia = citas.filter((cita) => cita.date.toDateString() === date.toDateString());
    setSelectedCitas(citasDelDia);
  };

  const tileClassName = ({ date, view }) => {
    if (view === "month") {
      const hasCita = citas.some((cita) => cita.date.toDateString() === date.toDateString());
      return hasCita ? "cita-dia" : null;
    }
  };

  return (
    <div className="dashboard-container">
      <nav className="sidebar">
        <h2>BOOKMEDIK</h2>
        <ul>
          <li><Link to="/"><FaHome className="menu-icon" /> Inicio</Link></li>
          <li><Link to="/citas"><FaCalendarAlt className="menu-icon" /> Citas</Link></li>
          <li><Link to="/pacientes"><FaUserInjured className="menu-icon" /> Pacientes</Link></li>
          <li><Link to="/medicos"><FaUserMd className="menu-icon" /> Médicos</Link></li>
          <li><Link to="/categorias"><FaClipboardList className="menu-icon" /> Categorías</Link></li>
          <li><Link to="/reporte"><FaChartBar className="menu-icon" /> Reporte de Citas</Link></li>
          <li><Link to="/usuarios"><FaUsers className="menu-icon" /> Usuarios</Link></li>
        </ul>
      </nav>

      <main className="main-content">
        <h1>Calendario de Citas</h1>
        <Calendar 
          tileClassName={tileClassName} 
          onClickDay={handleDateClick} 
        />

        {/* Mostrar citas del día seleccionado */}
        {selectedDate && (
          <div className="citas-container">
            <h2>Citas para {selectedDate.toLocaleDateString()}</h2>
            {selectedCitas.length > 0 ? (
              <ul>
                {selectedCitas.map((cita, index) => (
                  <li key={index}>{cita.title}</li>
                ))}
              </ul>
            ) : (
              <p>No hay citas para este día.</p>
            )}
          </div>
        )}
      </main>
    </div>
  );
};

export default Dashboard;
