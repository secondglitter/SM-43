import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import '../estilos/login.css';
import FacebookLogin from 'react-facebook-login';
import MicrosoftLogin from "react-microsoft-login";

const Login = () => {
    const [msalInstance, onMsalInstanceChange] = useState();

    const loginHandler = (err, data, msal) => {
      console.log(err, data);
      // some actions
      if (!err && data) {
        onMsalInstanceChange(msal);
      }
    };
  
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
        <section className="uwu">
            <div>
                <br />
                {profile ? (
                    <div className="form-box">
                        <div className="form-value">
                            <form className="hp">
                                <div>
                                    <h2 className="inicio">Iniciaste sesion con Google</h2>
                                    <div className="register">
                                    <img src={profile.picture} alt="user image" />
                                    <p>Nombre: {profile.name}</p>
                                    <p>Email: {profile.email}</p>
                                    </div>
                                    <br />
                                    <button id="inicio1" onClick={logOut}>Cerrar Sesion</button>
                                    <br /><br />
                                </div>
                            </form>
                        </div>
                    </div>

                ) : (
                    <div className="form-box">
                        <div className="form-value">
                            <form className="hp">
                                <h2 className="inicio">Iniciar Sesión</h2>
                                <div className="inputbox">
                                    <ion-icon name="mail-outline" />
                                    <input type='email' placeholder="Correo Electronico" required />
                                    <label htmlFor="username">Correo Electronico:</label>
                                </div>
                                <div className="inputbox">
                                    <ion-icon name="lock-closed-outline" />
                                    <input type='password' placeholder="Contraseña" required />
                                    <label >Contraseña:</label>
                                </div>
                                <button id="inicio1" type="submit">Ingresar</button>
                                <br></br><br></br>
                                <button id="inicio1" onClick={() => login()}>Iniciar Sesion con Google </button>
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
                                    <div >
                                        <img src={userData.picture.data} alt="Foto de perfil" />
                                        <div className="register">
                                        <p >Nombre: {userData.name}</p>
                                        <p >Correo electrónico: {userData.email}</p>
                                        </div>
                                        {/* Botón de cierre de sesión */}
                                        <button id='inicio1' onClick={handleLogout}>Cerrar sesión</button>
                                    </div>
                                )}
                                <br></br><br></br>
                                <MicrosoftLogin 
                                clientId={"1d75087e-a41c-439a-b8e2-886688290717"} 
                                authCallback={loginHandler} 
                                /> 
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

                )}
            </div>

        </section>
    );
};

export default Login;
