import React from "react";
import {Link} from "react-router-dom";
import {useState} from "react";
import {useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'


const NavBar = () => {
    return (
        <nav className="navbar">
            <header className="header">
                <div className="personal-container">

                    <ul className="nav-menu">
                        <h1 className="title1"><a href="#" className="nav-branding">App</a></h1>
                        <li className="nav-item">
                            <a href="/">Inicio</a>
                        </li>
                        <li className="nav-item">
                            <a href="/mesActual">(Este mes)</a>
                        </li>
                        <li className="nav-item">
                            <a href="/movimientos">Movimientos</a>
                        </li>
                        <li className="nav-item">
                            <a href="/transacciones">Transacciones</a>
                        </li>
                        <li className="nav-item">
                            <a href="/ahorros">Ahorros</a>
                        </li>
                        <li className="nav-item">
                            <a href="/cuenta">Mi Cuenta</a>
                        </li>
                    </ul>
                    <div className="hamburger">
                    <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                    </div>
                </div>
                <script src="scripts/navBarScript.js"></script>
            </header>
        </nav>

    )
}

export default NavBar;






