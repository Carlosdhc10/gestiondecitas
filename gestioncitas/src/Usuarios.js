import React, { useState } from "react";
import "./Usuarios.css";

const Usuarios = () => {
  const [usuarios, setUsuarios] = useState([
    { id: 1, nombre: "Admin", rol: "Administrador", correo: "admin@clinic.com" },
    { id: 2, nombre: "Doctor Pérez", rol: "Médico", correo: "perez@clinic.com" },
  ]);

  const [formData, setFormData] = useState({ nombre: "", rol: "", correo: "" });
  const [editando, setEditando] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.nombre || !formData.rol || !formData.correo) {
      alert("Todos los campos son obligatorios.");
      return;
    }

    if (editando !== null) {
      setUsuarios(usuarios.map((u) => (u.id === editando ? { ...formData, id: editando } : u)));
      setEditando(null);
    } else {
      setUsuarios([...usuarios, { ...formData, id: usuarios.length + 1 }]);
    }

    setFormData({ nombre: "", rol: "", correo: "" });
  };

  const handleEdit = (usuario) => {
    setFormData(usuario);
    setEditando(usuario.id);
  };

  const handleDelete = (id) => {
    if (window.confirm("¿Seguro que quieres eliminar este usuario?")) {
      setUsuarios(usuarios.filter((u) => u.id !== id));
    }
  };

  return (
    <div className="usuarios-container">
      <h1>Gestión de Usuarios</h1>

      <form className="usuarios-form" onSubmit={handleSubmit}>
        <input type="text" name="nombre" placeholder="Nombre" value={formData.nombre} onChange={handleChange} required />
        <select name="rol" value={formData.rol} onChange={handleChange} required>
          <option value="">Seleccionar Rol</option>
          <option value="Administrador">Administrador</option>
          <option value="Médico">Médico</option>
          <option value="Recepcionista">Cliente</option>
        </select>
        <input type="email" name="correo" placeholder="Correo" value={formData.correo} onChange={handleChange} required />
        <button type="submit">{editando ? "Actualizar" : "Agregar"}</button>
      </form>

      <table className="usuarios-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Rol</th>
            <th>Correo</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((u) => (
            <tr key={u.id}>
              <td>{u.id}</td>
              <td>{u.nombre}</td>
              <td>{u.rol}</td>
              <td>{u.correo}</td>
              <td>
                <button className="editar-btn" onClick={() => handleEdit(u)}>✏️</button>
                <button className="eliminar-btn" onClick={() => handleDelete(u.id)}>🗑️</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Usuarios;
