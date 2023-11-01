// 1-
import React from "react";
import '../estilos/inicio.css';
import '../estilos/Animations.css';
import Header from "../componentes/encabezado";
import Footer from "../componentes/footer";

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
        <div className="contenido">
          <div className="seccion" style={{ border: '2px solid white', padding: '20px', width: '100%', height: '100px' }}>
            {/* Contenido de la primera sección */}
          </div>

          <div className="seccion" style={{ border: '2px solid white', padding: '20px', width: '50%', height: '200px' }}>
            {/* Contenido de la segunda sección */}
          </div>

          <div className="seccion" style={{ border: '2px solid white', padding: '20px', width: '100%', height: '100px' }}>
            {/* Contenido de la tercera sección */}
          </div>
        </div>
        <div className="contenido">
          <div className="seccion" style={{ border: '2px solid white', padding: '20px', width: '100%', height: '100px' }}>
            {/* Contenido de la primera sección */}
          </div>

          <div className="seccion" style={{ border: '2px solid white', padding: '20px', width: '50%', height: '200px' }}>
            {/* Contenido de la segunda sección */}
          </div>

          <div className="seccion" style={{ border: '2px solid white', padding: '20px', width: '100%', height: '100px' }}>
            {/* Contenido de la tercera sección */}
          </div>
        </div>
      </div>

      <Footer></Footer>
    </>
  );
}

export default Inicio;