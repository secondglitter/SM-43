import React from "react";
import { Link } from "react-router-dom";
import '../estilos/login.css';


function Login() {
  // Declaring the state variables
  return (
    <section className="uwu">
      <div className="form-box">
        <div className="form-value">
          <form className="hp">
            <h2 className="inicio">Iniciar Sesión</h2>
            <div className="inputbox">
              <ion-icon name="mail-outline" />
              <input type='email' placeholder="Correo Electronico" name="Correo_electronico"  required />
              <label htmlFor="username">Correo Electronico:</label>
            </div>
            <div className="inputbox">
              <ion-icon name="lock-closed-outline" />
              <input type='password' placeholder="Contraseña" name="Contrasenia" required />
              <label htmlFor="password">Contraseña:</label>
            </div>
            <button id="inicio1" type="submit">Ingresar</button>
            <div className="register">
              <p>
                No tienes una cuenta? <Link to="/registro">Registrate</Link>
              </p>
              <br></br>
              <p>
                 <Link to="/">- Regresar al Inicio -</Link>
              </p>
              
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Login;