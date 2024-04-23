import React from "react";
import {useEffect} from "react";
import {useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./navBar";


const Movimientos = () => {
    const [movimientos, setMovimientos] = useState([]);

    useEffect(() => {
        const fetchAllMovimientos = async () => {
            try {
                const res = await axios.get("http://localhost:8800/movimientos");
                setMovimientos(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchAllMovimientos();
    }, []);

    console.log(movimientos);

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:8800/movimientos/${id}`);
            window.location.reload()
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="container mt-5">
            <NavBar/>
            <h1>Movimientos</h1>
            <table>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Cantidad</th>
                    <th>Categoria</th>
                    <th>Fecha</th>
                    <th>Descripcion</th>
                    <th>Tipo</th>
                    <th>Acciones</th>
                </tr>
                </thead>
                <tbody>
                {movimientos.map((movimiento) => (
                    <tr key={movimiento.id}>
                        <td>{movimiento.id}</td>
                        <td>{movimiento.cantidad}</td>
                        <td>{movimiento.categoria}</td>
                        <td>{movimiento.fecha}</td>
                        <td>{movimiento.descripcion}</td>
                        <td>{movimiento.tipo}</td>
                        <td>
                            <button className="btn btn-danger" onClick={() => handleDelete(movimiento.id)}>Delete
                            </button>
                            <button className="btn btn-warning">
                                <Link
                                    to={`/update/${movimiento.id}`}
                                    style={{color: "inherit", textDecoration: "none"}}
                                >
                                    Update
                                </Link>
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
            <button className="btn btn-primary mt-2">
                <Link to="/add" style={{color: "inherit", textDecoration: "none"}}>
                    Add new movimiento
                </Link>
            </button>
        </div>
    );
};

export default Movimientos;
