/* import React from 'react';
import productos from './Productos.json';
import Producto from './Card';
import './Card.css'

function Productos() {
  return (
    <div className="grid-container" >
      {productos.map((producto) => (
        <Producto key={producto.id} producto={producto} />
      ))}
    </div>
  );
}

export default Productos; */

import React, { useState, useEffect } from 'react';
import Producto from './Card';
import './Card.css';

function Productos() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const response = await fetch('../public/Productos.json');
        if (!response.ok) {
          throw new Error('No se pudo cargar el archivo JSON');
        }
        const data = await response.json();
        setProductos(data);
      } catch (error) {
        console.error('Error al cargar el archivo JSON:', error);
      }
    };

    fetchProductos();
  }, []);

  return (
    <div className="grid-container">
      {productos.map((producto) => (
        <Producto key={producto.id} producto={producto} />
      ))}
    </div>
  );
}

export default Productos; 
