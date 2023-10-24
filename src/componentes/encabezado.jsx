import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../estilos/Menu.css";

function Encabezado() {
    const [isMenuVisible, setMenuVisible] = useState(false);

    const toggleMenu = () => {
        setMenuVisible(!isMenuVisible);
    };

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
                                <div className="flex space-x-4">
                                    <Link to="/" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Inicio</Link>
                                    <Link to="/dashboard" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Dashboard</Link>
                                    <Link to="/conocenos" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Conócenos</Link>
                                    <Link to="/presentacion" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Grupos</Link>
                                    <button className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Noticias</button>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <button type="button" className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                <img className="w-10 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOj12MDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                            </button>
                            <div className="relative ml-3">
                                <button type="button" className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 shake-bottom" id="user-menu-button" aria-expanded="false" aria-haspopup="true" onClick={toggleMenu}>
                                    <img className="w-10 rounded-full" src="https://cdn-icons-png.flaticon.com/128/7543/7543108.png" alt="" />
                                </button>
                                {isMenuVisible ? (
                                    <ul className="absolute mt-2 text-white rounded-md text-sm font-medium">
                                        <li className={`diseño-elemento-lista roll-in-top`}><Link to="/login">Iniciar sesión</Link></li>
                                        <li className={`diseño-elemento-lista roll-in-top-2`}><Link to="/404">Perfil</Link></li>
                                        <li className={`diseño-elemento-lista roll-in-top-3`}>Opción 3</li>
                                        <li className={`diseño-elemento-lista roll-in-top-4`}>Opción 4</li>
                                        <li className={`diseño-elemento-lista roll-in-top-5`}>Opción 5</li>
                                        <li className={`diseño-elemento-lista roll-in-top-6`}>Configuración</li>
                                    </ul>
                                ) : (
                                    <ul className="absolute mt-2 text-white rounded-md text-sm font-medium">
                                        <li className={`diseño-elemento-lista roll-out-top`}><Link to="/login">Iniciar sesión</Link></li>
                                        <li className={`diseño-elemento-lista roll-out-top-2`}>Perfil</li>
                                        <li className={`diseño-elemento-lista roll-out-top-3`}>Opción 3</li>
                                        <li className={`diseño-elemento-lista roll-out-top-4`}>Opción 4</li>
                                        <li className={`diseño-elemento-lista roll-out-top-5`}>Opción 5</li>
                                        <li className={`diseño-elemento-lista roll-out-top-6`}>Configuración</li>
                                    </ul>
                                )}

                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Encabezado;
