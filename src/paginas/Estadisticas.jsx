import React from "react";
import Sidebar from "../componentes/sidebar";
import "../estilos/Bg-stars.css";
import "../estilos/Estadisticas.css";

function Estadisticas() {
  return (
    <>
      <Sidebar />
      <body className="estrellas bg-stars">
        <div className="ab-estadisticas">
          {/* Contenido de tu página */}
        </div>
      </body>
    </>
  );
}

export default Estadisticas;
