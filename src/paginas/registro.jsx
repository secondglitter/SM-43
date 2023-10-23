import React from "react";
import { Link } from "react-router-dom";
import '../estilos/registro.css';

function Registro() {
    return (
        <section className="uwu1">
  <div className="form-box1">
    <div className="form-value1">
      <form className="hp" action="">
        <h2 className="inicio">Registrar</h2>
        <div className="inputbox1">
          <ion-icon name="mail-outline" />
        
        <input type='text' placeholder="Usuario" name="Nombre_usuario"  required/>
        <label htmlFor="username">Usuario:</label>
            </div>
        <div className="inputbox1">
          <ion-icon name="mail-outline" />
          <input type='email' placeholder="Correo Electronico" name="Correo_electronico" required/>
          <label htmlFor="username">Correo Electronico:</label>
        </div>
        <div className="inputbox1">
          <ion-icon name="lock-closed-outline" />
        <input type='password' placeholder="Contraseña" name="Contrasenia" required/>
        <label htmlFor="password">Contraseña:</label>
        </div>
        <button id="inicio1">Registrarse</button>
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