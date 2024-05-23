import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import Productos from '../components/Productos'

import './App.css'

function App() {
  return (
    <>
      <header>
        <NavBar />
      </header>

      <h2 className="titulo-principal" id="titulo-principal">Todos los productos</h2>
      <Productos />

      <Footer />

    </>
  )
}

export default App
