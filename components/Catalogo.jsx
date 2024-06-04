import React, { useState, useEffect } from 'react';
import Productos from './Productos';
import data from '../public/Productos.json';
import Swal from 'sweetalert2';

function Catalogo({ categoriaSeleccionada }) {
  const [detalleProducto, setDetalleProducto] = useState(null);
  const [carrito, setCarrito] = useState([]);
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const productosFiltrados = categoriaSeleccionada
      ? data.filter(producto => producto.categoria === categoriaSeleccionada)
      : data;
    setProductos(productosFiltrados);
  }, [categoriaSeleccionada]);
  useEffect(() => {
    const carritoLocalStorage = localStorage.getItem("carrito");
    if (carritoLocalStorage) {
      setCarrito(JSON.parse(carritoLocalStorage));
    }

  }, []);

  const calcularTotal = () => {
    let total = 0;
    for (const item of carrito) {
      const index = productos.findIndex(producto => producto.id === item.id);
      if (index !== -1) {
        total += productos[index].precio * item.cantidad;
      }
    }
    return total.toFixed(2);
  }
  const verDetalleProducto = (producto) => {
    setDetalleProducto(producto);
  };
  const actualizarNumeroCarrito = () => {
    const numeroCarritoElement = document.getElementById("numero-carrito");
    const cantidadProductosEnCarrito = carrito.reduce((total, item) => total + item.cantidad, 0);
    numeroCarritoElement.textContent = cantidadProductosEnCarrito;
  };
  const guardarLocalS = () => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  };
  
  document.addEventListener("DOMContentLoaded", () => {
    cargarCarritoDesdeLS();

  });
  const agregarAlCarrito = (productId) => {
    const productoExistente = carrito.find(item => item.id === productId);
    const producto = productos.find(item => item.id === productId);
    if (productoExistente) {
      if (productoExistente.cantidad < producto.stock) {
        productoExistente.cantidad++;
        actualizarNumeroCarrito();
        guardarLocalS();
        calcularTotal();
        Swal.fire({
          position: "center",
          icon: "success",
          title: ` ${producto.nombre} se añadió al carrito`,
          showConfirmButton: false,
          timer: 1000
        });
      } else {
        Swal.fire({
          position: "center",
          icon: "error",
          title: ` No hay suficiente stock disponible de este producto.`,
          showConfirmButton: false,
          timer: 1200
        });

      }
    } else {
      if (producto.stock > 0) {
        carrito.push({ id: productId, cantidad: 1 });
        actualizarNumeroCarrito();
        guardarLocalS();
        calcularTotal();
        Swal.fire({
          position: "center",
          icon: "success",
          title: ` ${producto.nombre} se añadió al carrito`,
          showConfirmButton: false,
          timer: 1000
        });
      } else {
        Swal.fire({
          position: "center",
          icon: "error",
          title: ` ${producto.nombre} esta agotado`,
          showConfirmButton: false,
          timer: 1000
        });
      }
    }
    actualizarNumeroCarrito(carrito);
  };
  
  return (
    <div>
      <h2 className="titulo-principal" id="titulo-principal">Todos los Productos</h2>
      {detalleProducto && (
        <div className="detalle-producto">
          <h3>{detalleProducto.nombre}</h3>
          <p>Categoría: {detalleProducto.categoria}</p>
          <p>Precio: ${detalleProducto.precio}</p>
          <p>Stock: {detalleProducto.stock}</p>

        </div>
      )}

      <Productos verDetalleProducto={verDetalleProducto} agregarAlCarrito={agregarAlCarrito} productos={productos} />

    </div>
  );
}

export default Catalogo;

