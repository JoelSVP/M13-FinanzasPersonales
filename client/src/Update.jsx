import axios from "axios";
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Update = () => {
  const [movimiento, setMovimiento] = useState({
    cantidad: null,
    categoria: null,
    fecha: "",
    descripcion: "",
    tipo: ""
  });
  const [error,setError] = useState(false)

  const location = useLocation();
  const navigate = useNavigate();

  const movimientoId = location.pathname.split("/")[2];

  const handleChange = (e) => {
    setMovimiento((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`http://localhost:8800/movimientos/${movimientoId}`, movimiento);
      navigate("/");
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };

  return (
    <div className="form">
      <h1>Añadir un movimiento</h1>
      <input
        type="number"
        placeholder="Cantidad"
        name="cantidad"
        onChange={handleChange}
      />
      <input
        type="number"
        placeholder="Categoria"
        name="categoria"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Fecha"
        name="fecha"
        onChange={handleChange}
      />
      <textarea
        rows={5}
        type="text"
        placeholder="Descripcion"
        name="descripcion"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Tipo"
        name="tipo"
        onChange={handleChange}
      />
      <button onClick={handleClick}>Add</button>
      {error && "Something went wrong!"}
      <Link to="/">See all movimientos</Link>
    </div>
  );
};

export default Update;
