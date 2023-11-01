import React from 'react';
import { Link } from 'react-router-dom';
import '../estilos/Menu.css';
import '../estilos/Glitch.css';
import Menu from './Menu';
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
                  <img className="h-8 w-auto rotate-vert-center" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Logo" />
                </Link>
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className=" space-x-4">
                  <Link to="/"><button className="glitch-button text-list-menu shining-text">Inicio</button></Link>
                  <Link to="/dashboard"><button className="glitch-button text-list-menu shining-text">Dashboard</button></Link>
                  <Link to="/conocenos"><button className="glitch-button text-list-menu shining-text">Conócenos</button></Link>
                  <Link to="/presentacion"><button className="glitch-button text-list-menu shining-text">Grupos</button></Link>
                  <Link to="/404"><button className="glitch-button text-list-menu shining-text">Noticias</button></Link>
                </div>
              </div>
            </div>
            <Menu></Menu>
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
