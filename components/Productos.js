fetch("./productos.json")
  .then((response) => response.json())
  .then((datos) => {
    productos = datos; // obtiene y guarda los datos en la variable
    //cargarCarritoDesdeLS();
    //mostrarProductos();
    actualizarNumeroCarrito();
    const categorias = document.querySelectorAll(".boton-categoria");
    categorias.forEach((categoria) => {
      categoria.addEventListener("click", (event) => {
        event.preventDefault();
        const categoriaSeleccionada = event.target.id;
        filtrarProductos(categoriaSeleccionada);
      });
    });
  })
  .catch((error) => {
    console.error("Error al cargar los productos:", error);
  });

 export const productos = []