import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom";
import {useState} from "react";
import {useEffect} from "react";
import NavBar from "./navBar";
import ProgressBar from "./ProgressBar";


const Home = () => {
    return (
        <div>
            <NavBar/>
            <div className="container mt-5">
                <div className="text-center">
                    <div className="row py-1">
                        <div className="col-6 ">
                            <div className="card">
                                <div className="card-body ">
                                    <h5 className="card-title">Este mes</h5>
                                    <h6>Presupuesto: 10.000€</h6>
                                    <h6>Gastos: 3.500€</h6>
                                    <h6>Restante: 6.500€</h6>
                                    <a href="/mesActual" className=" btn btn-primary">Ver mas</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 ">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Test</h5>
                                    <p>Test 2</p>
                                    <ProgressBar/>
                                    <a href="#" className="btn btn-primary">Ver mas</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;
