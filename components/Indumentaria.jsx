import React, { useState, useEffect } from 'react';
import Productos from './Productos';
import data from '../public/Productos.json';

function Indumentaria() {
  const [productosIndumentaria, setProductosIndumentaria] = useState([]);

  useEffect(() => {
    const productosFiltrados = data.filter(producto => producto.categoria === 'Indumentaria');
    setProductosIndumentaria(productosFiltrados);
  }, []);

  return (
    <div>
      <h2 className="titulo-principal" id="titulo-principal">Indumentaria</h2>
      <Productos productos={productosIndumentaria} />
    </div>
  );
}

export default Indumentaria;
