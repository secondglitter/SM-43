import React from 'react';
import { Link } from 'react-router-dom';
import '../estilos/Menu.css';
import '../estilos/Glitch.css';
import PerfilDropdown from './PerfilDropdown'; // Importa el nuevo componente

function Encabezado() {
  return (
    <>
      <nav className="bg-gray-800">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="flex flex-1 items-center">
              <div className="flex flex-shrink-0 items-center">
                <Link to="/">
                  <img className="h-8 logo-size rotate-vert-center" src="../imagenes/Logo.png" alt="Logo" />
                </Link>
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className=" space-x-10">
                  <Link to="/"><button className="glitch-button text-list-menu shining-text">Inicio</button></Link>
                  <Link to="/estadisticas"><button className="glitch-button text-list-menu shining-text">Dash</button></Link>
                  <Link to="/conocenos"><button className="glitch-button text-list-menu shining-text">Conócenos</button></Link>
                  <Link to="/presentacion"><button className="glitch-button text-list-menu shining-text">Grupos</button></Link>
                  <Link to="/categorias"><button className="glitch-button text-list-menu shining-text">Categorias</button></Link>
                  <Link to="/noticias"><button className="glitch-button text-list-menu shining-text">Noticias</button></Link>
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <PerfilDropdown />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Encabezado;
