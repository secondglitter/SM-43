// 1-
import React from "react";
import '../estilos/inicio.css';
import Header from "../componentes/encabezado";
import Footer from "../componentes/footer";
import { Link } from 'react-router-dom';

// 2-
function Inicio() {
  // 3-
  return (
    <>
      <Header></Header>
      <div className="inicio-container fondo-pro-2">
        <div className="bienvenida">
          <h1>--</h1>
        </div>
        <div className="contenido">
          <div className="seccion">
            <br /><br />
            <div className="cube-card">
              <div class="cube">
                <div class="face front">
                  <Link to="/grupos/apex">
                  <img className="" src="../imagenes/apex.jpg"/>
                </Link></div>
                <div class="face back"><Link to="/grupos/cod">
                  <img className="" src="../imagenes/cod.jpg"/>
                </Link></div>
                <div class="face left"><Link to="/grupos/lol">
                  <img className="" src="../imagenes/lol.jpg"/>
                </Link></div>
                <div class="face right"><Link to="/grupos/mortalkombat">
                  <img className="" src="../imagenes/Mortal_Kombat3.jpg"/>
                </Link></div>
              </div>
            </div>
          </div>
        </div>
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      </div>
      <Footer></Footer>
    </>
  );
}

export default Inicio;