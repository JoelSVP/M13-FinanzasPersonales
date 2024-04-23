import axios from "axios";
import React from "react";
import {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./navBar";

const Add = () => {

    const [movimiento, setMovimiento] = useState({
        cantidad: null,
        categoria: null,
        fecha: "",
        descripcion: "",
        tipo: ""
    });
    const [error, setError] = useState(false)

    const navigate = useNavigate();

    const handleChange = (e) => {
        setMovimiento((prev) => ({...prev, [e.target.name]: e.target.value}));
    };

    const handleClick = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:8800/movimientos", movimiento);
            navigate("/");
        } catch (err) {
            console.log(err);
            setError(true)
        }
    };

    return (
        <div className="container mt-5">
            <div>
                <NavBar/>
            </div>
            <h1 className="mb-3">Añadir un movimiento</h1>
            <div className="input-group mb-3">
                <input
                    type="number"
                    className="form-control"
                    placeholder="Cantidad"
                    name="cantidad"
                    onChange={handleChange}
                />
            </div>
            <div className="input-group mb-3">
                <input
                    type="number"
                    className="form-control"
                    placeholder="Categoria"
                    name="categoria"
                    onChange={handleChange}
                />
            </div>
            <div className="input-group mb-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Fecha"
                    name="fecha"
                    onChange={handleChange}
                />
            </div>
            <div className="input-group mb-3">
                <textarea
                    rows={5}
                    className="form-control"
                    type="text"
                    placeholder="Descripcion"
                    name="descripcion"
                    onChange={handleChange}
                    style={{resize: "none"}}
                />
            </div>
            <div className="input-group mb-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Tipo"
                    name="tipo"
                    onChange={handleChange}
                />
            </div>
            <button className="btn btn-primary" onClick={handleClick}>Add</button>
            {error && "Something went wrong!"}
            <Link className="ms-2 btn btn-dark" to="/">See all movimientos</Link>
        </div>
    );
};

export default Add;
