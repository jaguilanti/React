import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import Footer from '../components/Footer';
import Catalogo from '../components/Catalogo';
import NavBar from '../components/NavBar';
import Indumentaria from '../components/Indumentaria';
import Calzado from '../components/Calzado';
import Accesorios from '../components/Accesorios';
import Carrito from '../components/Carrito';
import CarritoNavBar from '../components/CarritoNavBar';
import DetalleProducto from '../components/DetalleProducto';
import './App.css';

function App() {
  const location = useLocation();
  const isCarritoPage = location.pathname === '/carrito';
  const [numeroCarrito, setNumeroCarrito] = useState(0);

  useEffect(() => {
    const numeroCarritoLocalStorage = localStorage.getItem("numeroCarrito");
    if (numeroCarritoLocalStorage) {
      setNumeroCarrito(parseInt(numeroCarritoLocalStorage));
    }
  }, []);

  return (
    <div>
      <header>
        {isCarritoPage ? <CarritoNavBar /> : <NavBar numeroCarrito={numeroCarrito} />}
      </header>

      <Routes>
        <Route path="/" element={<Catalogo />} />
        <Route path="/indumentaria" element={<Indumentaria categoria="Indumentaria" />} />
        <Route path="/calzado" element={<Calzado categoria="Calzado" />} />
        <Route path="/accesorios" element={<Accesorios categoria="ccesorios" />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="/producto/:id" element={<DetalleProducto />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
