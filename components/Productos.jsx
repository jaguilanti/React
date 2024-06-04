import React from 'react';
import Producto from './Card';

function Productos({ verDetalleProducto, agregarAlCarrito, productos }) {
  return (
    <div className="grid-container">
      {productos.map(producto => (
        <Producto key={producto.id} producto={producto} verDetalleProducto={verDetalleProducto} agregarAlCarrito={agregarAlCarrito} />
      ))}
    </div>
  );
}

export default Productos;

