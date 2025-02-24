import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Dashboard from "./Dashboard";
import Citas from "./Citas";
import Pacientes from "./Pacientes";
import Medicos from "./Medicos";
import Reporte from "./Reporte";
import Categorias from "./Categorias";
import Usuarios from "./Usuarios";
import { useState, useEffect } from "react";

function ProtectedRoute({ children }) {
  const isAuthenticated = localStorage.getItem("token") !== null;
  return isAuthenticated ? children : <Navigate to="/" />;
}

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("token") !== null
  );

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsAuthenticated(token !== null);
  }, []);

  return (
    <Router>
      <Routes>
        {/* Rutas de Login y Registro */}
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Rutas dentro del Dashboard (Protegidas) */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        >
          <Route path="citas" element={<Citas />} />
          <Route path="pacientes" element={<Pacientes />} />
          <Route path="medicos" element={<Medicos />} />
          <Route path="categorias" element={<Categorias />} />
          <Route path="reporte" element={<Reporte />} />
          <Route path="usuarios" element={<Usuarios />} />
          <Route index element={<h1>Bienvenido al Dashboard</h1>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
