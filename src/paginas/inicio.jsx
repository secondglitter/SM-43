// 1-
import React from "react";
import '../estilos/inicio.css';
import '../estilos/Animations.css';
import '../estilos/Cube.css'
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
        <div className="contenido">
          <div className="seccion" style={{ border: '2px solid white', padding: '20px', width: '100%', height: '100px' }}>
            {/* Contenido de la primera sección */}
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
      </div>
      

      <Footer></Footer>
    </>
  );
}

export default Inicio;