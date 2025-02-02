import React, { useState } from "react";
import "./Medicos.css";

const Medicos = () => {
  const [medicos, setMedicos] = useState([
    { id: 1, nombre: "Dr. Juan Pérez", especialidad: "Cardiología", telefono: "0987654321", correo: "juanperez@gmail.com" },
    { id: 2, nombre: "Dra. María Gómez", especialidad: "Pediatría", telefono: "0991234567", correo: "mariagomez@gmail.com" },
  ]);

  const [formData, setFormData] = useState({ nombre: "", especialidad: "", telefono: "", correo: "" });
  const [editando, setEditando] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.nombre || !formData.especialidad || !formData.telefono || !formData.correo) {
      alert("Todos los campos son obligatorios.");
      return;
    }

    if (editando !== null) {
      setMedicos(medicos.map((m) => (m.id === editando ? { ...formData, id: editando } : m)));
      setEditando(null);
    } else {
      setMedicos([...medicos, { ...formData, id: medicos.length + 1 }]);
    }
    
    setFormData({ nombre: "", especialidad: "", telefono: "", correo: "" });
  };

  const handleEdit = (medico) => {
    setFormData(medico);
    setEditando(medico.id);
  };

  const handleDelete = (id) => {
    if (window.confirm("¿Seguro que quieres eliminar este médico?")) {
      setMedicos(medicos.filter((m) => m.id !== id));
    }
  };

  return (
    <div className="medicos-container">
      <h1>Gestión de Médicos</h1>

      <form className="medicos-form" onSubmit={handleSubmit}>
        <input type="text" name="nombre" placeholder="Nombre" value={formData.nombre} onChange={handleChange} required />
        <input type="text" name="especialidad" placeholder="Especialidad" value={formData.especialidad} onChange={handleChange} required />
        <input type="text" name="telefono" placeholder="Teléfono" value={formData.telefono} onChange={handleChange} required />
        <input type="email" name="correo" placeholder="Correo" value={formData.correo} onChange={handleChange} required />
        <button type="submit">{editando ? "Actualizar" : "Agregar"}</button>
      </form>

      <table className="medicos-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Especialidad</th>
            <th>Teléfono</th>
            <th>Correo</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {medicos.map((m) => (
            <tr key={m.id}>
              <td>{m.id}</td>
              <td>{m.nombre}</td>
              <td>{m.especialidad}</td>
              <td>{m.telefono}</td>
              <td>{m.correo}</td>
              <td>
                <button className="editar-btn" onClick={() => handleEdit(m)}>✏️</button>
                <button className="eliminar-btn" onClick={() => handleDelete(m.id)}>🗑️</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Medicos;
