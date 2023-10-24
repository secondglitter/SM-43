import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import '../estilos/registro.css';

function Registro() {
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
      console.log("ERROR");
    }
  };
    return (
        <section className="uwu1">
  <div className="form-box1">
    <div className="form-value1">
      <form className="hp" action="">
        <h2 className="inicio">Registrar</h2>
        <div className="inputbox1">
          <ion-icon name="mail-outline" />
        
        <input type='text' placeholder="Usuario" name="Nombre_usuario" onChange={(e) => setNewUsuario(e.target.value)} required/>
        <label htmlFor="username">Usuario:</label>
            </div>
        <div className="inputbox1">
          <ion-icon name="mail-outline" />
          <input type='email' placeholder="Correo Electronico" name="Correo_electronico" onChange={(e) => setNewEmail(e.target.value)} required/>
          <label htmlFor="username">Correo Electronico:</label>
        </div>
        <div className="inputbox1">
          <ion-icon name="lock-closed-outline" />
        <input type='password' placeholder="Contraseña" name="Contrasenia" onChange={(e) => setNewContrasena(e.target.value)} required/>
        <label htmlFor="password">Contraseña:</label>
        </div>
        <Link to="/login">
        <button id="inicio1"onClick={() => addUser()}>Registrarse</button>
        </Link>
        <div className="register">
        <p>
            Ya tienes una cuenta? <Link to="/login">Iniciar Sesión</Link>
            <br /><br />
            <Link to="/">- Volver a inicio -</Link>
          </p>
        </div>
      </form>
    </div>
  </div>
</section>
    );
}

export default Registro;