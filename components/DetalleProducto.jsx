import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import data from '../public/Productos.json';
import './DetalleProducto.css';

function DetalleProducto({ agregarAlCarrito }) {
    const { id } = useParams();
    const [producto, setProducto] = useState(null);

    useEffect(() => {
        const productoEncontrado = data.find(item => item.id === parseInt(id));
        setProducto(productoEncontrado);
    }, [id]);

    if (!producto) {
        return <div>Producto no encontrado</div>;
    }

    const handleClick = () => {
        agregarAlCarrito(producto.id);
    };

    return (
        <div className='detalle'>
            <h2 className="titulo-principal" id="titulo-principal">Detalle de {producto.nombre}</h2>
            <div className="detalle-producto">
                <img className="img-producto" src={producto.imagen} alt={producto.nombre} />
                <div>
                    <p>Categoría: {producto.categoria}</p>
                    <p>Precio: ${producto.precio}</p>
                    <p>Stock: {producto.stock}</p>
                    <button className="agregar-al-carrito" onClick={handleClick}>Agregar al carrito</button>
                </div>
                <div className='descripcion'>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint iure ad ab sit quibusdam ratione deleniti alias, dolorum optio voluptatibus blanditiis nisi pariatur fugit hic veritatis sed suscipit fuga. Quisquam.</p>
                </div>
            </div>
        </div>
    );
}

export default DetalleProducto;


