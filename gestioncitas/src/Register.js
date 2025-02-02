import { useState } from "react";
import axios from "axios";
import "./styles.css";

function Register() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/register", form);
      alert("Usuario registrado");
    } catch (error) {
      alert("Error en el registro");
    }
  };

  return (
    <div className="body-container">
      <div className="left-side"></div>
      <div className="right-side">
        <div className="container">
          <h2>Registro</h2>
          <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Nombre" onChange={handleChange} required />
            <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
            <input type="password" name="password" placeholder="Contraseña" onChange={handleChange} required />
            <button type="submit">Registrarse</button>
          </form>
          <a href="/login" className="link">¿Ya tienes cuenta? Inicia sesión</a>
        </div>
      </div>
    </div>
  );
}

export default Register;
