import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import '../estilos/registro.css';
import { googleLogout, useGoogleLogin } from '@react-oauth/google';

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
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => setUser(codeResponse),
    onError: (error) => console.log('Login Failed:', error)
  });

  useEffect(() => {
    if (user) {
      axios
        .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
          headers: {
            Authorization: `Bearer ${user.access_token}`,
            Accept: 'application/json'
          }
        })
        .then((res) => {
          setProfile(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, [user]);

  // log out function to log the user out of google and set the profile array to null
  const logOut = () => {
    googleLogout();
    setProfile(null);
  };

  return (
    <section className="uwu1">
      <div>
        <br />
        {profile ? (
          <div className="form-box">
            <div className="form-value">
              <form className="hp">
                <div>
                  <h2 className="inicio">Te registraste con Google</h2>
                  <img src={profile.picture} alt="user image" />
                  <p>Nombre: {profile.name}</p>
                  <p>Email: {profile.email}</p>
                  <br />
                  <button id="inicio1" onClick={logOut}>Cerrar Sesion</button>

                </div>
              </form>
            </div>
          </div>

        ) : (
          <div className="form-box1">
            <div className="form-value1">
              <form className="hp" action="">
                <h2 className="inicio">Registrar</h2>
                <div className="inputbox1">
                  <ion-icon name="mail-outline" />

                  <input type='text' placeholder="Usuario" name="Nombre_usuario" onChange={(e) => setNewUsuario(e.target.value)} required />
                  <label htmlFor="username">Usuario:</label>
                </div>
                <div className="inputbox1">
                  <ion-icon name="mail-outline" />
                  <input type='email' placeholder="Correo Electronico" name="Correo_electronico" onChange={(e) => setNewEmail(e.target.value)} required />
                  <label htmlFor="username">Correo Electronico:</label>
                </div>
                <div className="inputbox1">
                  <ion-icon name="lock-closed-outline" />
                  <input type='password' placeholder="Contraseña" name="Contrasenia" onChange={(e) => setNewContrasena(e.target.value)} required />
                  <label htmlFor="password">Contraseña:</label>
                </div>
                <Link to="/login">
                  <button id="inicio1" onClick={() => addUser()}>Registrarse</button>
                </Link>
                <br></br><br></br>
                <button id="inicio1" onClick={() => login()}>Registrarte con Google </button>
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

        )}
      </div>
    </section>

  );
}

export default Registro;