<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import '../estilos/login.css';

const Login = () => {
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
                    <div className="form-box">
                        <div className="form-value">
                            <form className="hp">
                                <h2 className="inicio">Iniciar Sesión</h2>
                                <div className="inputbox">
                                    <ion-icon name="mail-outline" />
                                    <input type='email' placeholder="Correo Electronico" name="Correo_electronico" required />
                                    <label htmlFor="username">Correo Electronico:</label>
                                </div>
                                <div className="inputbox">
                                    <ion-icon name="lock-closed-outline" />
                                    <input type='password' placeholder="Contraseña" name="Contrasenia" required />
                                    <label htmlFor="password">Contraseña:</label>
                                </div>
                                <button id="inicio1" type="submit">Ingresar</button>
                                <br></br><br></br>
                                <button id="inicio1" onClick={() => login()}>Iniciar Sesion con Google </button>
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
=======
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import '../estilos/login.css';

const Login = () => {
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
                <div>
                <br />
                {profile ? (
                    <div>
                        <h2>Iniciaste sesion con Google</h2>
                        <img src={profile.picture} alt="user image" />
                        <p>Nombre: {profile.name}</p>
                        <p>Email: {profile.email}</p>
                        <br />
                        <button id="inicio1" onClick={logOut}>Cerrar Sesion</button>
                    </div>
                ) : (
                    <button id="inicio1" onClick={() => login()}>Iniciar Sesion con Google </button>
                    
                )}
            </div>
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
};

export default Login;
>>>>>>> 6fdab3317e7e6244b5f5d573370dfe23d080f4fa
