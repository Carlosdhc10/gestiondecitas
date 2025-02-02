import React, { useState } from "react";
import "./Categorias.css"; // Archivo de estilos

const Categorias = () => {
  const [categorias, setCategorias] = useState([
    { id: 1, nombre: "Cardiología", descripcion: "Especialidad del corazón y sistema circulatorio" },
    { id: 2, nombre: "Pediatría", descripcion: "Especialidad en la salud de niños y adolescentes" },
    { id: 3, nombre: "Neurología", descripcion: "Especialidad en el sistema nervioso y cerebro" },
  ]);

  return (
    <div className="categorias-container">
      <h1>Gestión de Categorías</h1>
      <table className="categorias-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Descripción</th>
          </tr>
        </thead>
        <tbody>
          {categorias.map((categoria) => (
            <tr key={categoria.id}>
              <td>{categoria.id}</td>
              <td>{categoria.nombre}</td>
              <td>{categoria.descripcion}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Categorias;
