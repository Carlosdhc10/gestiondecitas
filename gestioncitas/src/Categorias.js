import React, { useState } from "react";
import "./Categorias.css";

const Categorias = () => {
  const [categorias, setCategorias] = useState([
    { id: 1, nombre: "Cardiología", descripcion: "Especialidad del corazón y sistema circulatorio" },
    { id: 2, nombre: "Pediatría", descripcion: "Especialidad en la salud de niños y adolescentes" },
  ]);

  const [formData, setFormData] = useState({ nombre: "", descripcion: "" });
  const [editando, setEditando] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.nombre || !formData.descripcion) {
      alert("Todos los campos son obligatorios.");
      return;
    }

    if (editando !== null) {
      setCategorias(categorias.map((c) => (c.id === editando ? { ...formData, id: editando } : c)));
      setEditando(null);
    } else {
      setCategorias([...categorias, { ...formData, id: categorias.length + 1 }]);
    }

    setFormData({ nombre: "", descripcion: "" });
  };

  const handleEdit = (categoria) => {
    setFormData(categoria);
    setEditando(categoria.id);
  };

  const handleDelete = (id) => {
    if (window.confirm("¿Seguro que quieres eliminar esta categoría?")) {
      setCategorias(categorias.filter((c) => c.id !== id));
    }
  };

  return (
    <div className="categorias-container">
      <h1>Gestión de Categorías</h1>

      <form className="categorias-form" onSubmit={handleSubmit}>
        <input type="text" name="nombre" placeholder="Nombre" value={formData.nombre} onChange={handleChange} required />
        <input type="text" name="descripcion" placeholder="Descripción" value={formData.descripcion} onChange={handleChange} required />
        <button type="submit">{editando ? "Actualizar" : "Agregar"}</button>
      </form>

      <table className="categorias-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {categorias.map((c) => (
            <tr key={c.id}>
              <td>{c.id}</td>
              <td>{c.nombre}</td>
              <td>{c.descripcion}</td>
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

export default Categorias;
