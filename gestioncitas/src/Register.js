import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Importar useNavigate
import axios from "axios";
import "./styles.css";

function Register() {
  const [form, setForm] = useState({ name: "", email: "", password: "", confirmPassword: "" });
  const navigate = useNavigate(); // Hook para redirigir

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }
    try {
      await axios.post("http://localhost:5000/register", {
        name: form.name,
        email: form.email,
        password: form.password,
      });
      alert("Registro exitoso");
      navigate("/login"); // Redirigir al login
    } catch (error) {
      alert("Error en el registro");
    }
  };

  return (
    <div className="login-page">
      <div className="left-side"></div>
      <div className="right-side">
        <div className="login-container">
          <div className="login-card">
            <h2>Registro</h2>
            <div className="avatars">
              <img src="https://i.pinimg.com/736x/5e/c9/d9/5ec9d90cf558c385cd631b60b1a51540.jpg" alt="Uregistres" className="avatar" />
            </div>
            <form onSubmit={handleSubmit}>
              <div className="input-group">
                <span className="icon">👤</span>
                <input type="text" name="name" placeholder="Nombre" value={form.name} onChange={handleChange} required />
              </div>
              <div className="input-group">
                <span className="icon">📧</span>
                <input type="email" name="email" placeholder="Correo electrónico" value={form.email} onChange={handleChange} required />
              </div>
              <div className="input-group">
                <span className="icon">🔒</span>
                <input type="password" name="password" placeholder="Contraseña" value={form.password} onChange={handleChange} required />
              </div>
              <div className="input-group">
                <span className="icon">🔒</span>
                <input type="password" name="confirmPassword" placeholder="Confirmar contraseña" value={form.confirmPassword} onChange={handleChange} required />
              </div>
              <div className="button-group">
                <button type="submit" className="btn login-btn">Registrarse</button>
                <button type="button" className="btn cancel-btn">Cancelar</button>
              </div>
              <div className="links">
                <a href="#" onClick={() => navigate("/login")}>Iniciar sesión</a>
              </div>
            </form>
          </div>
          <footer>
            © 2025 Registro de Usuario. Todos los derechos reservados.
          </footer>
        </div>
      </div>
    </div>
  );
}

export default Register;
