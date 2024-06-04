import React from 'react';
import './Carrito.css'
function Carrito() {
    return (

        <nav className="nav-carrito">
            <div>
                <a href="/" className="carrito-menu inicio-carrito">Inicio</a>
                <a className="carrito-menu">Carrito <span id="numero-carrito">0</span></a>
            </div>
        </nav>



    );
}

export default Carrito;
