// 1-
import React from "react";
import '../estilos/inicio.css';
import '../estilos/Animations.css';
import '../estilos/Cube.css';
import '../estilos/article-card.css';
import Header from "../componentes/encabezado";
import Footer from "../componentes/footer";
import { Link } from 'react-router-dom';

// 2-
function Inicio() {
  // 3-
  return (
    <>
      <Header></Header>
      <div className="inicio-container fondo-pro-3">

        <div className="bienvenida">
          <br />
          <div className="title-2"><span>MONKEYS GAMES</span></div>

        </div>
        <br />
        <br />
        <div className="contenido">
          <div className="seccion" style={{ border: '2px solid white', padding: '20px', width: '100%', height: '100px' }}>

            <div className="card-container-1">
              <div className="card-1">
                <div className="main-content">
                  <div className="header">
                    <span>Articulo emitido el</span>
                    <span>7-Nov-2023</span>
                  </div>
                  <p className="heading">Conoce sobre lo nuevo en Monkeys Games</p>
                  <br />
                  <div className="categories">
                    <span>Actualizaciones</span>
                    <span>Novedad</span>
                  </div>
                </div>
                <div className="by">
                  - by LL
                </div>
              </div>
            </div>

            <div className="card-container-2">
              <div className="card-1">
                <div className="main-content">
                  <div className="header">
                    <span>Articulo emitido el</span>
                    <span>7-Nov-2023</span>
                  </div>
                  <p className="heading">Conoce nuestras comunidades</p>
                  <br />
                  <div className="categories">
                    <span>Sociales</span>
                    <span>Comunidad</span>
                  </div>
                </div>
                <div className="by">
                  - by LL
                </div>
              </div>
            </div>

            <div className="card-container-3">
              <div className="card-1">
                <div className="main-content">
                  <div className="header">
                    <span>Articulo emitido el</span>
                    <span>7-Nov-2023</span>
                  </div>
                  <p className="heading">Adentrate en tus juegos favoritos con tus amigos!</p>
                  <br />
                  <div className="categories">
                    <span>Videojuegos</span>
                    <span>Amigos</span>
                  </div>
                </div>
                <div className="by">
                  - by LL
                </div>
              </div>
            </div>

            <div className="card-art">
              <div className="content-art">
                <p className="heading-art">¿Y si jugamos un rato?</p>
                <p className="para-art">
                  En mokeys games puedes pasar unos ratos de diversión con tus amigos y si
                  no tienes amigos pues puedes hacer algunos...
                </p>
                <button className="btn-art">VAMOS JUGAR</button>
              </div>
            </div>

            <div className="myCard-1">
              <div className="innerCard">
                <div className="frontSide">
                  <p className="title2">BEST GAME</p>
                  <p>Descubre el juego más popular</p>
                  <p className="title2">☝🏼</p>
                </div>
                <div className="backSide">
                  <Link to="/grupos/lol"><img src="/imagenes/lol.jpg" /></Link>
                </div>
              </div>
            </div>

            <div className="myCard-2">
              <div className="innerCard">
                <div className="frontSide">
                  <p className="title2">NEW GAME</p>
                  <p>Descubre el juego más reciente</p>
                  <p className="title2">☝🏼</p>
                </div>
                <div className="backSide">
                  <Link to="/grupos/cod"><img src="/imagenes/cod.jpg" /></Link>
                </div>
              </div>
            </div>

            <div className="myCard-3">
              <div className="innerCard">
                <div className="frontSide">
                  <p className="title2">BEST GROUP</p>
                  <p>Descubre el grupo más popular</p>
                  <p className="title2">☝🏼</p>
                </div>
                <div className="backSide">
                  <Link to="/grupos/forhonor"><img src="/imagenes/ForHonor.jpg" /></Link>
                </div>
              </div>
            </div>

          </div>
          <div className="inicio-container-cube">
            <div className="cube-card">
              <div className="cube">
                <div className="face front">
                  <Link to="/grupos/lol"><img src="/imagenes/lol.jpg" /></Link>
                </div>
                <div className="face back">
                  <Link to="/grupos/apex"><img src="/imagenes/apex.jpg" /></Link>
                </div>
                <div className="face left">
                  <Link to="/grupos/cod"><img src="/imagenes/cod.jpg" /></Link>
                </div>
                <div className="face right">
                  <Link to="/grupos/forhonor"><img src="/imagenes/ForHonor.jpg" /></Link>
                </div>
              </div>

            </div>
          </div>
          <div class="image-container">
            <img src="/imagenes/robot.png" />
          </div>
          <br />
        </div>
        <br /><br /><br /><br /><br /><br /><br /><br />
        <br /><br /><br /><br /><br /><br /><br /><br />
      </div>


      <Footer></Footer>
    </>
  );
}

export default Inicio;