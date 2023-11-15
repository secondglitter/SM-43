import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import '../estilos/registro.css';
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import FacebookLogin from 'react-facebook-login';

function Registro() {
      //validacion del login de Facebook
    // Creamos el estado para almacenar los datos del usuario de Facebook
    const [userData, setUserData] = useState(null);

    // Manejador de click para el botón de Facebook
    const handleFacebookLogin = (response) => {
        // Almacenamos los datos del usuario en el estado
        setUserData(response);
    };

    // Manejador de click para el botón de cierre de sesión
    const handleLogout = () => {
        // Limpiamos los datos del usuario estableciendo el estado en null
        setUserData(null);
    };

    const responseFacebook = (response) => {
        console.log(response);
    }

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

                  <input type='text' placeholder="Usuario" onChange={(e) => setNewUsuario(e.target.value)} required />
                  <label >Usuario:</label>
                </div>
                <div className="inputbox1">
                  <ion-icon name="mail-outline" />
                  <input type='email' placeholder="Correo Electronico" onChange={(e) => setNewEmail(e.target.value)} required />
                  <label >Correo Electronico:</label>
                </div>
                <div className="inputbox1">
                  <ion-icon name="lock-closed-outline" />
                  <input type='password' placeholder="Contraseña" onChange={(e) => setNewContrasena(e.target.value)} required />
                  <label >Contraseña:</label>
                </div>
                <Link to="/login">
                  <button id="inicio1" onClick={() => addUser()}>Registrarse</button>
                </Link>
                <br></br><br></br>
                <button id="inicio1" onClick={() => login()}>Registrarte con Google </button>
                <br></br><br></br>
                <button id="inicio1">
                  {/* Facebook Login */}
                  {/* Botón de inicio de sesión de Facebook */}
                  <FacebookLogin
                    appId="1074200000261970"
                    autoLoad={false}
                    fields="name,email,picture"
                    callback={handleFacebookLogin}
                    textButton="Registrate con Facebook"
                    cssClass="facebook"
                  />
                </button>
                {userData && (
                  <div>
                    <img src={userData.picture} alt="Foto de perfil" />
                    <p >Nombre: {userData.name}</p>
                    <p >Correo electrónico: {userData.email}</p>
                    <button id='inicio1' onClick={handleLogout}>Cerrar sesión</button>
                  </div>
                )}
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