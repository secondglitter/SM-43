import React from "react";
import Encabezado from "../componentes/encabezado";
import "../estilos/conocenos.css";
import "../estilos/Animations.css";
import Footer from "../componentes/footer";
import Redes from "../componentes/Redes";

// 2-
function Texto() {
  // 3-
  return (
    <>
      <div className="fondo-pro-3">
        <Encabezado />
        <div className="inicio-container">
          <main className="seccion-texto">
            <div className="texto">
              <br /><br />
              <h1 className="izquierda">Conócenos</h1>
              <br />
              <img src='/imagenes/conocenos.png' alt="Acceso principal" className="foto" />
              <p>
                Somos un equipo apasionado de jugadores y entusiastas de los videojuegos. Nos hemos unido para crear un lugar donde los jugadores de todas las edades y niveles de habilidad puedan encontrar un hogar en línea. Nuestra comunidad es diversa y acogedora, y estamos aquí para fomentar la amistad, la competencia saludable y el intercambio de conocimientos. <br /><br />
                Queremos construir la comunidad de videojuegos en línea más vibrante y unida. Queremos que te sientas parte de algo más grande, donde puedas discutir tus juegos favoritos, encontrar compañeros de juego, obtener consejos y trucos, y celebrar tus logros. <br /><br />
                Te invitamos a unirte a MOKEYS GAMES y a formar parte de esta emocionante comunidad de videojuegos. ¡Regístrate hoy y comienza tu viaje en el mundo de los videojuegos como nunca antes! Juntos, creamos una comunidad que celebra la diversidad, la amistad y la pasión por los juegos.
              </p>
              <br />
            </div>
            <Redes />
          </main>
        </div>
        <Footer />
      </div>
    </>
  );
}

// 4-

export default Texto;