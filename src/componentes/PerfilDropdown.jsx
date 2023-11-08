import React, { useState } from 'react';
import PerfilMini from './Perfil-Mini';

function PerfilDropdown() {
  const [perfilVisible, setPerfilVisible] = useState(false);

  const togglePerfil = () => {
    setPerfilVisible(!perfilVisible);
  };

  return (
    <div className="relative">
      <button type="button" className="glitch-button-image" onClick={togglePerfil}>
        <img className="w-10 rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUaIh6EtmSoWx_Danr0rC2XVBXXqtkSQsj7WKp_W_XhSasMe7e-MUHhB6Y2LdJJdSGXgQ&usqp=CAU" alt="" />
      </button>
      {perfilVisible && (
        <div className="perfil-dropdown">
          <PerfilMini />
        </div>
      )}
    </div>
  );
}

export default PerfilDropdown;

