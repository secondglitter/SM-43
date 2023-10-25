// 1-
import React from "react";
import '../estilos/inicio.css';
import Header from "../componentes/encabezado";
import Footer from "../componentes/footer"

// 2-
function Inicio(){
    // 3-
    return(
        <>
       <Header></Header>
        <div className="inicio-container">
      <div className="bienvenida">
        <h1>Bienvenidos a la Monkeys Store</h1>
      </div>
      <div className="contenido">
        <div className="seccion">
          <br /><br />
          <div className="texto">
            <p>
              Aquí encontrarás todo lo que necesitas para estar a la vanguardia de la
              tecnología.
              <br />
              Estamos emocionados de tenerte como visitante y queremos que disfrutes
              de todas las novedades y dispositivos sorprendentes que tenemos para
              ofrecerte.
            </p>
          </div>
        </div>
        <div className="seccion">
          <div className="texto">
            <p>
              Explora nuestro extenso catálogo de gadgets, desde los últimos
              accesorios para teléfonos y dispositivos para el hogar inteligente y
              accesorios innovadores.
              <br />
              Estamos constantemente actualizando nuestra selección para que siempre
              encuentres lo más nuevo y emocionante en el mundo de la tecnología.
            </p>
          </div>
        </div>
      </div>
  <br /><br /><br /><br />
  </div>
  <Footer></Footer>
</>
    );
}

export default Inicio;