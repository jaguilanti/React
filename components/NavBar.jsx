import './NavBar.css'

function NavBar () {
  return (
    <>
      <div>
        <header>
            <div>
                <h1>Sorella</h1>
                <nav>
                    <ul>
                        <li><a id="Inicio" class="boton-categoria" href="#">Inicio</a></li>
                        <li><a id="Indumentaria" class="boton-categoria" href="#">Indumentaria</a></li>
                        <li><a id="Calzado" class="boton-categoria" href="#">Calzado</a></li>
                        <li><a id="Accesorios" class="boton-categoria" href="#">Accesorios</a></li>
                        <li><a href="#" id="carrito-link">Carrito<span id="numero-carrito">0</span></a></li>
                    </ul>

                </nav>

            </div>

        </header>
      </div>
    </>
  )
}

export default NavBar