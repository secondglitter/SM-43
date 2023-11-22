import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Encabezado from "../componentes/encabezado";
import Footer from "../componentes/footer";
import '../estilos/Bg-stars.css';
import '../estilos/Animations.css';



function Shooter() {

  //id 1
  const { id } = useParams();

  const [Groups, setGroups] = useState([]);
  useEffect(() => {
    fecthGroups(1)
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

  //id 2
  const { id1 } = useParams();

  const [Groups1, setGroups1] = useState([]);
  useEffect(() => {
    fecthGroups1(2)
  }, []);

  const fecthGroups1 = async (id1) => {
    try {
      const response = await axios.get(`http://localhost:3000/groups/${id1}`)
      setGroups1(response.data)
      // console.log('Datos de la api')
      // console.log(response.data)
    } catch (error) {
      // console.log(error)
    }
  }

  //id 3
  const { id2 } = useParams();

  const [Groups2, setGroups2] = useState([]);
  useEffect(() => {
    fecthGroups2(11)
  }, []);

  const fecthGroups2 = async (id2) => {
    try {
      const response = await axios.get(`http://localhost:3000/groups/${id2}`)
      setGroups2(response.data)
      // console.log('Datos de la api')
      // console.log(response.data)
    } catch (error) {
      // console.log(error)
    }
  }

  const Categoria = [
    {
      url: Groups.id,
      NameGroup: Groups.NameGroup,
      Image: Groups.Image,
    },
    {
      url: Groups1.id,
      NameGroup: Groups1.NameGroup,
      Image: Groups1.Image,
    },
    {
      url: Groups2.id,
      NameGroup: Groups2.NameGroup,
      Image: Groups2.Image,
    },
    // More products...
  ]
  return (
    <>
    <body className="estrellas">
      <Encabezado />
      <div className="inicio-container">
        <div className="bg-white">
          <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 text-groups">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900">Shooter</h1>

            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              {Categoria.map((categoria) => (
                <div key={categoria.url} className="group relative">
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-40 lg:h-80 marco-brillante-2">
                    <img
                      src={`/imagenes/${categoria.Image}`}
                      alt={categoria.Image}
                      className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                    />
                  </div>
                  <div className="mt-4 flex justify-between">
                    <div>
                      <h3 className="text-sm text-gray-700">
                        <a href={"/grupos/" + categoria.url}>
                          <span aria-hidden="true" className="absolute inset-0" />
                          {categoria.NameGroup}
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

export default Shooter;