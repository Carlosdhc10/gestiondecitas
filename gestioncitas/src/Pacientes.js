import React, { useState } from "react";
import "./Pacientes.css";

const Pacientes = () => {
  const [pacientes, setPacientes] = useState([
    { id: 1, nombre: "Juan Pérez", edad: 35, telefono: "0987654321", correo: "juan@gmail.com" },
    { id: 2, nombre: "María Gómez", edad: 29, telefono: "0991234567", correo: "maria@gmail.com" },
  ]);

  const [formData, setFormData] = useState({ nombre: "", edad: "", telefono: "", correo: "" });
  const [editando, setEditando] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.nombre || !formData.edad || !formData.telefono || !formData.correo) {
      alert("Todos los campos son obligatorios.");
      return;
    }

    if (editando !== null) {
      setPacientes(pacientes.map((p) => (p.id === editando ? { ...formData, id: editando } : p)));
      setEditando(null);
    } else {
      setPacientes([...pacientes, { ...formData, id: pacientes.length + 1 }]);
    }
    
    setFormData({ nombre: "", edad: "", telefono: "", correo: "" });
  };

  const handleEdit = (paciente) => {
    setFormData(paciente);
    setEditando(paciente.id);
  };

  const handleDelete = (id) => {
    if (window.confirm("¿Seguro que quieres eliminar este paciente?")) {
      setPacientes(pacientes.filter((p) => p.id !== id));
    }
  };

  return (
    <div className="pacientes-container">
      <h1>Gestión de Pacientes</h1>

      <form className="pacientes-form" onSubmit={handleSubmit}>
        <input type="text" name="nombre" placeholder="Nombre" value={formData.nombre} onChange={handleChange} required />
        <input type="number" name="edad" placeholder="Edad" value={formData.edad} onChange={handleChange} required />
        <input type="text" name="telefono" placeholder="Teléfono" value={formData.telefono} onChange={handleChange} required />
        <input type="email" name="correo" placeholder="Correo" value={formData.correo} onChange={handleChange} required />
        <button type="submit">{editando ? "Actualizar" : "Agregar"}</button>
      </form>

      <table className="pacientes-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Edad</th>
            <th>Teléfono</th>
            <th>Correo</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {pacientes.map((p) => (
            <tr key={p.id}>
              <td>{p.id}</td>
              <td>{p.nombre}</td>
              <td>{p.edad}</td>
              <td>{p.telefono}</td>
              <td>{p.correo}</td>
              <td>
                <button className="editar-btn" onClick={() => handleEdit(p)}>✏️</button>
                <button className="eliminar-btn" onClick={() => handleDelete(p.id)}>🗑️</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Pacientes;
