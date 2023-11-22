import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Encabezado from "../componentes/encabezado";
import Footer from "../componentes/footer";
import '../estilos/Bg-stars.css';
import '../estilos/Animations.css';



function Construction() {

  const { id } = useParams();

  const [Groups, setGroups] = useState([]);
  useEffect(() => {
    fecthGroups(6)
  }, []);

  const fecthGroups = async (id) => {
    try {
      const response = await axios.get(`http://localhost:3000/groups/${id}`)
      setGroups(response.data)
      // console.log('Datos de la api')
      // console.log(response.data)
    } catch (error) {
      // console.log(error)
    }
  }
  return (
    <>
    <body className="estrellas">
      <Encabezado />
      <div className="inicio-container">
        <div className="bg-white">
          <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 text-groups">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900">Construction</h1>

            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              <div key={Groups.id} className="group relative">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-40 lg:h-80 marco-brillante-2">
                  <img
                    src={`/imagenes/${Groups.Image}`}
                    alt={Groups.imageAlt}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href={"/grupos/" + Groups.id}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {Groups.NameGroup}
                      </a>
                    </h3>
                  </div>
                </div>
              </div>
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

export default Construction;