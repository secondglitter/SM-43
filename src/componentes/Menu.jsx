import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../estilos/Menu.css";
import "../estilos/PerfilDropdown.css";

function Menu() {
    const [isMenuVisible, setMenuVisible] = useState(false);

    const toggleMenu = () => {
        setMenuVisible(!isMenuVisible);
    };

    return (
        <>
            <div className="relative ml-3 espacio">
                <button class="btn glitch-button-menu"
                    aria-expanded={isMenuVisible}
                    aria-haspopup="true"
                    onClick={toggleMenu}>
                    <span class="icon">
                        <svg viewBox="0 0 175 80" width="40" height="40">
                            <rect width="80" height="15" fill="#f0f0f0" rx="10"></rect>
                            <rect y="30" width="80" height="15" fill="#f0f0f0" rx="10"></rect>
                            <rect y="60" width="80" height="15" fill="#f0f0f0" rx="10"></rect>
                        </svg>
                    </span>
                    <span class="text shining-text">MENU</span>
                </button>
                {isMenuVisible && (
                    <ul className="absolute mt-2 text-white rounded-md text-sm font-medium">
                        <li className="roll-in-top"><Link to="/login"><button className="button-list shining-text">Iniciar Sesión</button></Link></li>
                        <li className="roll-in-top-2"><Link to="/404"><button className="button-list shining-text">Perfil</button></Link></li>
                        <li className="roll-in-top-3"><Link to="/API"><button className="button-list shining-text">API</button></Link></li>
                        <li className="roll-in-top-4"><Link to="/404"><button className="button-list shining-text">Amigos</button></Link></li>
                        <li className="roll-in-top-5"><Link to="/404"><button className="button-list shining-text">Cuentas</button></Link></li>
                        <li className="roll-in-top-6"><Link to="/404"><button className="button-list shining-text">Configuración</button></Link></li>
                    </ul>
                )}
            </div>
        </>
    );
}

export default Menu;
