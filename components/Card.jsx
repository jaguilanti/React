import React from 'react';
import { Link } from 'react-router-dom';

function Card({ producto, agregarAlCarrito }) {
  const handleClick = () => {
    agregarAlCarrito(producto.id);
  };
  
  return (
    <div key={producto.id} className="producto">
      <Link to={`/producto/${producto.id}`}>
        <div className="contenedor-img">
          <img className="img-producto" src={producto.imagen} alt={producto.nombre} />
        </div>
      </Link>
      <h3>{producto.nombre}</h3>
      <p>Categoría: {producto.categoria}</p>
      <p>Precio: ${producto.precio}</p>
      <p>Stock: {producto.stock}</p>
      <button className="agregar-al-carrito" onClick={handleClick}>Agregar al carrito</button>
    </div>
  );
}

export default Card;
