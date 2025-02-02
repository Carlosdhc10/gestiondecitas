import React, { useState } from "react";
import "./Citas.css";

const Citas = () => {
  const [citas, setCitas] = useState([
    { id: 1, paciente: "Juan Pérez", medico: "Dr. Gómez", fecha: "2025-02-05", estado: "Pendiente" },
    { id: 2, paciente: "María López", medico: "Dra. Martínez", fecha: "2025-02-10", estado: "Confirmada" },
  ]);

  const [formData, setFormData] = useState({ paciente: "", medico: "", fecha: "", estado: "Pendiente" });
  const [editando, setEditando] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.paciente || !formData.medico || !formData.fecha || !formData.estado) {
      alert("Todos los campos son obligatorios.");
      return;
    }

    if (editando !== null) {
      setCitas(citas.map((c) => (c.id === editando ? { ...formData, id: editando } : c)));
      setEditando(null);
    } else {
      setCitas([...citas, { ...formData, id: citas.length + 1 }]);
    }

    setFormData({ paciente: "", medico: "", fecha: "", estado: "Pendiente" });
  };

  const handleEdit = (cita) => {
    setFormData(cita);
    setEditando(cita.id);
  };

  const handleDelete = (id) => {
    if (window.confirm("¿Seguro que quieres eliminar esta cita?")) {
      setCitas(citas.filter((c) => c.id !== id));
    }
  };

  return (
    <div className="citas-container">
      <h1>Gestión de Citas</h1>

      <form className="citas-form" onSubmit={handleSubmit}>
        <input type="text" name="paciente" placeholder="Paciente" value={formData.paciente} onChange={handleChange} required />
        <input type="text" name="medico" placeholder="Médico" value={formData.medico} onChange={handleChange} required />
        <input type="date" name="fecha" value={formData.fecha} onChange={handleChange} required />
        <select name="estado" value={formData.estado} onChange={handleChange} required>
          <option value="Pendiente">Pendiente</option>
          <option value="Confirmada">Confirmada</option>
          <option value="Cancelada">Cancelada</option>
        </select>
        <button type="submit">{editando ? "Actualizar" : "Agregar"}</button>
      </form>

      <table className="citas-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Paciente</th>
            <th>Médico</th>
            <th>Fecha</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {citas.map((c) => (
            <tr key={c.id} className={`estado-${c.estado.toLowerCase()}`}>
              <td>{c.id}</td>
              <td>{c.paciente}</td>
              <td>{c.medico}</td>
              <td>{c.fecha}</td>
              <td>{c.estado}</td>
              <td>
                <button className="editar-btn" onClick={() => handleEdit(c)}>✏️</button>
                <button className="eliminar-btn" onClick={() => handleDelete(c.id)}>🗑️</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Citas;
