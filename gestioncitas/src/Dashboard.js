import React from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { FaHome, FaCalendarAlt, FaUserInjured, FaUserMd, FaClipboardList, FaChartBar, FaUsers, FaSignOutAlt } from "react-icons/fa";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./Dashboard.css";

const Dashboard = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token"); // Eliminar el token de sesión
    navigate("/"); // Redirigir al Login
  };

  return (
    <div className="dashboard-container">
      {/* Menú lateral */}
      <nav className="sidebar">
        <h2>BOOKMEDIK</h2>
        <ul>
          <li><Link to="/dashboard"><FaHome className="menu-icon" /> Inicio</Link></li>
          <li><Link to="/dashboard/citas"><FaCalendarAlt className="menu-icon" /> Citas</Link></li>
          <li><Link to="/dashboard/pacientes"><FaUserInjured className="menu-icon" /> Pacientes</Link></li>
          <li><Link to="/dashboard/medicos"><FaUserMd className="menu-icon" /> Médicos</Link></li>
          <li><Link to="/dashboard/categorias"><FaClipboardList className="menu-icon" /> Categorías</Link></li>
          <li><Link to="/dashboard/reporte"><FaChartBar className="menu-icon" /> Reporte de Citas</Link></li>
          <li><Link to="/dashboard/usuarios"><FaUsers className="menu-icon" /> Usuarios</Link></li>
        </ul>

        {/* Botón de Cerrar Sesión */}
        <button className="logout-btn" onClick={handleLogout}>
          <FaSignOutAlt className="menu-icon" /> Cerrar Sesión
        </button>
      </nav>

      {/* Contenido principal */}
      <main className="main-content">
        {location.pathname === "/dashboard" ? (
          <>
            <h1>Calendario de Citas</h1>
            <Calendar />
          </>
        ) : (
          <Outlet /> // Carga las demás páginas aquí
        )}
      </main>
    </div>
  );
};

export default Dashboard;
