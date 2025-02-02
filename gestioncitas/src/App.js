import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Dashboard from "./Dashboard";
import Citas from "./Citas";
import Pacientes from "./Pacientes";
import Medicos from "./Medicos";
import Reporte from "./Reporte";
import Categorias from "./Categorias";
import Usuarios from "./Usuarios";

function App() {
  return (
    <Router>
      <Routes>
        {/* Rutas de Login y Registro */}
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Rutas dentro del Dashboard */}
        <Route path="/dashboard" element={<Dashboard />}>
        <Route path="citas" element={<Citas />} />
          <Route path="pacientes" element={<Pacientes />} />
          <Route path="medicos" element={<Medicos />} />
          <Route path="categorias" element={<Categorias />} /> {/* Nueva ruta */}
          <Route path="reporte" element={<Reporte />} />
          <Route path="usuarios" element={<Usuarios />} /> {/* Nueva ruta */}
          <Route index element={<h1>Bienvenido al Dashboard</h1>} /></Route>
      </Routes>
    </Router>
  );
}

export default App;
