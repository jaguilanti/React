import React from 'react';

function Carrito() {
    document.addEventListener("DOMContentLoaded", () => {
        cargarCarritoDesdeLS();
        fetch('./productos.json')
            .then(response => response.json())
            .then(data => {
                productos = data;
                mostrarCarrito();
            })
            .catch(error => console.error('Error al cargar los productos:', error));
    });
    return (<div>

        <h1 className="titulo-carrito">Carrito de Compras</h1>

        <div className="contenido-carrito">
            <ul id="carrito-lista"></ul>
            <p id="total">Total a pagar: $<span id="total-pagar">0.00</span></p>
            <div className="botones">
                <button id="vaciar-carrito">Vaciar Carrito</button>
                <button id="comprar">Comprar</button>
            </div>
        </div>


        <div id="mensaje" className="mensaje hidden"></div>
    </div>



    );
}

export default Carrito;
