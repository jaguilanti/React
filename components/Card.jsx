import './NavBar.css'
 

const Card = () => {
    const productos = []
    return (
        
          
        function mostrarProductos() {
            const main = document.getElementById("productos");
            main.innerHTML = "";
            productos.forEach(producto => { 
                const productoHTML = `
                    <div class="producto">
                        <div class="contenedor-img"><img class="img-producto" src="${producto.imagen}" alt="${producto.nombre}"></div>
                        <h3>${producto.nombre}</h3>
                        <p>Categoría: ${producto.categoria}</p>
                        <p>Precio: $${producto.precio}</p>
                        <p>Stock: ${producto.stock}</p>
                        <button class="agregar-al-carrito" onclick="agregarAlCarrito(${producto.id})">Agregar al carrito</button>
                    </div>
                `;
                main.innerHTML += productoHTML;
            });
        }
        
    )
}

export default Card;