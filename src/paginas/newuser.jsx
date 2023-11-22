import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import '../estilos/form.css';
import '../estilos/Bg-stars.css';

function Newuser() {
  const [newUsuario, setNewUsuario] = useState("");
  const [newContrasena, setNewContrasena] = useState("");
  const [newEmail, setNewEmail] = useState("");

  const addUser = async () => {
    const newUser = {
      UserName: newUsuario,
      Password: newContrasena,
      Email: newEmail,
    };

    try {
      const response = await axios.post("http://localhost:3000/users", newUser);
    } catch (error) {
      console.error("Error", error);
      window.alert("ERROR");
    }
  };

  return (
    <body className="estrellas-2">
    <div className="ab-newuser">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
      <img className="h-40 logo-form rotate-vert-center" src="../imagenes/Logo.png" alt="Logo" />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight texto-brillante">Usuario nuevo</h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="container" action="#" method="POST">
          <div className="input-container">
            <div className="input-content">
              <div className="input-dist">
                <div className="input-type">        
                <br/>
                  <input
                    id="usuario"
                    name="usuario"
                    type="text"
                    autoComplete="text"
                    required
                    className="input-is"
                    placeholder="Nombre de usuario"
                    onChange={(e) => setNewUsuario(e.target.value)}
                  />
                  <br/>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="input-is"
                    placeholder="Email"
                    onChange={(e) => setNewEmail(e.target.value)}
                  />
                  <br/>
                  <input
                    id="contrasena"
                    name="contrasena"
                    type="password"
                    autoComplete="new-password"
                    required
                    className="input-is"
                    placeholder="Contraseña"
                    onChange={(e) => setNewContrasena(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
          <br></br>
          <Link to="/users"><button
            type="button"
            className="submit-button"
            onClick={() => addUser()}
          >
            Crear
          </button>
          </Link>
          <Link to="/users"><button
            type="button"
            className="submit-button"
          >
            Regresar 
          </button>
          </Link>
        </form>
      </div>
    </div>
    <br/>
    </body>
  );
}

export default Newuser;
