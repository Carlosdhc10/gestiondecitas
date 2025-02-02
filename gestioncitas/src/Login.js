import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Importar useNavigate
import axios from "axios";
import "./styles.css";

function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate(); // Hook para redirigir

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("http://localhost:5000/login", form);
      localStorage.setItem("token", data.token);
      alert("Inicio de sesión exitoso");
    } catch (error) {
      alert("Error en el login");
    }
  };

  return (
    <div className="login-page">
      <div className="left-side"></div>
      <div className="right-side">
        <div className="login-container">
          <div className="login-card">
            <div className="avatars">
              <img src="https://i.pinimg.com/736x/5e/c9/d9/5ec9d90cf558c385cd631b60b1a51540.jpg" alt="Usuario" className="avatar" />
            </div>
            <form onSubmit={handleSubmit}>
              <div className="input-group">
                <span className="icon">👤</span>
                <input type="email" name="email" placeholder="Correo" value={form.email} onChange={handleChange} required />
              </div>
              <div className="input-group">
                <span className="icon">🔒</span>
                <input type="password" name="password" placeholder="Contraseña" value={form.password} onChange={handleChange} required />
              </div>
              <div className="button-group">
                <button type="submit" className="btn login-btn">Iniciar sesión</button>
                <button type="button" className="btn cancel-btn">Cancelar</button>
              </div>
              <div className="links">
                <a href="#" onClick={() => navigate("/register")}>Registrar</a> / <a href="#">Recuperar contraseña</a>
              </div>
            </form>
          </div>
          <footer>
            © 2025 Formulario Login. Todos los derechos reservados.
          </footer>
        </div>
      </div>
    </div>
  );
}

export default Login;
