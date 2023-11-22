import React, { useEffect, useState } from "react";
import Sidebar from "../componentes/sidebar";
import "../estilos/Bg-stars.css";
import "../estilos/Estadisticas.css";

// Objeto que asocia cada tipo de API con su respectiva imagen
const apiImages = {
  users: "https://cdn-icons-png.flaticon.com/128/12117/12117593.png",
  groups: "https://cdn-icons-png.flaticon.com/128/11507/11507818.png",
  categorias: "https://cdn-icons-png.flaticon.com/128/3405/3405802.png",
  frases: "https://cdn-icons-png.flaticon.com/128/4928/4928929.png",
  historia: "https://cdn-icons-png.flaticon.com/128/1422/1422756.png",
  personajes: "https://cdn-icons-png.flaticon.com/128/5825/5825396.png",
  logros: "https://cdn-icons-png.flaticon.com/128/6491/6491012.png",
};

function Estadisticas() {
  const [estadisticas, setEstadisticas] = useState([]);

  const apis = [
    "http://localhost:3000/users",
    "http://localhost:3000/groups",
    "http://localhost:3000/categorias",
    "http://localhost:3001/frases",
    "http://localhost:3000/historia",
    "http://localhost:3000/personajes",
    "http://localhost:3000/logros",
  ];

  useEffect(() => {
    fetchEstadisticas();
  }, []);

  const fetchEstadisticas = async () => {
    const estadisticasPromises = apis.map(async (api) => {
      try {
        const response = await fetch(api);
        const data = await response.json();
        const tipoApi = api.split("/").pop(); // Obtener el último segmento de la URL como tipo de API
        return { tipoApi, count: data.length };
      } catch (error) {
        console.error(`Error fetching data from ${api}`, error);
        return { tipoApi: "Desconocido", count: 0 };
      }
    });

    const estadisticasData = await Promise.all(estadisticasPromises);
    setEstadisticas(estadisticasData);
  };

  return (
    <>
      <Sidebar />
      <body className="estrellas-2">
        <div className="ab-estadisticas">
          <div className="card-cont-est">
            {estadisticas.map((estadistica) => (
              <div className="book" key={estadistica.tipoApi}>
                <p>REGISTROS: {estadistica.count}</p>
                <div className="cover">
                  <h3 className="ab-tipo">{estadistica.tipoApi}</h3>
                  <img
                    src={apiImages[estadistica.tipoApi]}
                    alt={`${estadistica.tipoApi} icon`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </body>
    </>
  );
}

export default Estadisticas;
