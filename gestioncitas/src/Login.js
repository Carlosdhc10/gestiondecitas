import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";

function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.email || !form.password) {
      setError("Por favor, completa todos los campos.");
      return;
    }

    setLoading(true);

    // Simulación de autenticación sin backend
    if (form.email === "admin@example.com" && form.password === "1234") {
      localStorage.setItem("token", "fake-token");
      alert("Inicio de sesión exitoso");
      navigate("/dashboard");
    } else {
      setError("Correo o contraseña incorrectos.");
    }

    setLoading(false);
  };

  return (
    <div className="login-page">
      <div className="left-side"></div>
      <div className="right-side">
        <div className="login-container">
          <div className="login-card">
            <div className="avatars">
              <img 
                src="https://i.pinimg.com/736x/5e/c9/d9/5ec9d90cf558c385cd631b60b1a51540.jpg" 
                alt="Usuario" 
                className="avatar" 
              />
            </div>
            <form onSubmit={handleSubmit}>
              {error && <p className="error-message">{error}</p>}

              <div className="input-group">
                <span className="icon">👤</span>
                <input 
                  type="email" 
                  name="email" 
                  placeholder="Correo" 
                  value={form.email} 
                  onChange={handleChange} 
                  required 
                />
              </div>

              <div className="input-group">
                <span className="icon">🔒</span>
                <input 
                  type="password" 
                  name="password" 
                  placeholder="Contraseña" 
                  value={form.password} 
                  onChange={handleChange} 
                  required 
                />
              </div>

              <div className="button-group">
                <button type="submit" className="btn login-btn" disabled={loading}>
                  {loading ? "Cargando..." : "Iniciar sesión"}
                </button>
                <button type="button" className="btn cancel-btn">Cancelar</button>
              </div>

              <div className="links">
                <a href="#" onClick={() => navigate("/register")}>Registrar</a> / 
                <a href="#" onClick={() => navigate("/recuperar-password")}>Recuperar contraseña</a>
              </div>
            </form>
          </div>
          <footer>© 2025 Formulario Login. Todos los derechos reservados.</footer>
        </div>
      </div>
    </div>
  );
}

export default Login;
