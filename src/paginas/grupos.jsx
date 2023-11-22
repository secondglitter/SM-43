import React, { useState, useEffect } from "react";
import axios from "axios";
import Encabezado from "../componentes/encabezado";
import Footer from "../componentes/footer";
import '../estilos/Animations.css';
import '../estilos/Bg-stars.css';



function Grupos() {

  const [Groups, setGroups] = useState([]);
  useEffect(() => {
    fecthGroups()
  }, []);

  const fecthGroups = async () => {
    try {
      const response = await axios.get('http://localhost:3000/groups/')
      setGroups(response.data)
      console.log('Datos de la api')
      console.log(response.data)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
      <body className="estrellas">
        <Encabezado />
        <div className="inicio-container">
          <div>
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 text-groups">
              <h1 className="text-2xl font-bold tracking-tight">Nuestros grupos</h1>
              <br></br><br></br>
              <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                {Groups.map((groups) => (
                  <div key={groups.id} className="group relative">
                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-40 lg:h-80 marco-brillante-2">
                      <img
                        src={`/imagenes/${groups.Image}`}
                        alt={groups.Image}
                        className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                      />
                    </div>
                    <div className="mt-4 flex justify-between">
                      <div>
                        <h3>
                          <a href={"/grupos/" + groups.id}>
                            <span aria-hidden="true" className="absolute inset-0" />
                            {groups.NameGroup}
                          </a>
                        </h3>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </body>
    </>
  );
}

// 4-

export default Grupos;