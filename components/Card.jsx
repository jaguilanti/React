import React from 'react';

function Producto({ producto }) {
    return (

        <div key={producto.id} className="producto">
            <div className="contenedor-img"><img className="img-producto" src={producto.imagen} alt={producto.nombre}/></div>
            <h3>{producto.nombre}</h3>
            <p>Categoría: {producto.categoria}</p>
            <p>Precio: ${producto.precio}</p>
            <p>Stock: {producto.stock}</p>
            <button className="agregar-al-carrito" onClick={() => agregarAlCarrito(producto.id)}>Agregar al carrito</button>
        </div>


    );
}

export default Producto;