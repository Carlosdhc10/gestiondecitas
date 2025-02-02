import { useState } from "react";
import axios from "axios";
import "./styles.css";

function Login() {
  const [form, setForm] = useState({ email: "", password: "" });

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
            <img src="https://i.pinimg.com/736x/56/9e/57/569e572826e057b5056dbad2f0bef46a.jpg" alt="Cliente" className="avatar" />
            <img src="https://i.pinimg.com/736x/e3/5d/19/e35d191a414645f5ef13de6026ba3f80.jpg" alt="Doctor" className="avatar" />
          </div>
          <form>
            <div className="input-group">
              <span className="icon">👤</span>
              <input type="text" placeholder="Usuario" required />
            </div>
            <div className="input-group">
              <span className="icon">🔒</span>
              <input type="password" placeholder="Password" required />
            </div>
            <div className="button-group">
              <button type="submit" className="btn login-btn">Iniciar sesión</button>
              <button type="button" className="btn cancel-btn">Cancelar</button>
            </div>
            <div className="links">
              <a href="#">Registrar</a> / <a href="#">Recuperar contraseña</a>
            </div>
          </form>
        </div>
        <footer>
          © 2021 Formulario Login. Todos los derechos reservados | Diseño de VaidrollTeam
        </footer>
      </div>

      </div>
    </div>
  );
}

export default Login;
