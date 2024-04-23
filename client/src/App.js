import {BrowserRouter, Routes, Route} from "react-router-dom";
import Movimientos from "../src/Movimientos";
import Add from "../src/Add";
import Update from "../src/Update";
import './index.css';
import './style.css';
import Home from "./Home";
import Cuenta from "./Cuenta";
import DetallesAhorros from "./DetallesAhorros";
import Ahorros from "./Ahorros";
import Transacciones from "./Transacciones";
import Mes from "./Mes";

function App() {
    return (

        // /add es añadirTransaccion
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/movimientos" element={<Movimientos/>}/>
                    <Route path="/add" element={<Add/>}/>
                    <Route path="/transacciones" element={<Transacciones/>}/>
                    <Route path="/ahorros" element={<Ahorros/>}/>
                    <Route path="/detallesAhorros" element={<DetallesAhorros/>}/>
                    <Route path="/mesActual" element={<Mes/>}/>
                    <Route path="/cuenta" element={<Cuenta/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
