import React, { useEffect, useState } from "react";
import axios from "axios";
import "../estilos/Animations.css";
import "../estilos/efect-card.css";
import Header from "../componentes/encabezado";
import Footer from "../componentes/footer";
import { Link, useParams } from "react-router-dom";



function MenuGrupos() {

  const { id } = useParams();

  const [Groups, setGroups] = useState([]);
  useEffect(() => {
    fecthGroups(id)
  }, []);
  
  const fecthGroups = async (id) => {
    try{
    const response = await axios.get(`http://localhost:3000/groups/${id}`)
    setGroups(response.data)
    // console.log('Datos de la api')
    // console.log(response.data)
    } catch(error) {
     // console.log(error)
    }
  }
  
  const Grupos = [
      {
        name: "Historia",
        description: "Aprende un poco sobre tu videojuego",
        imageSrc: "historia.jpg",
        imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
        href: `/grupos/historia/${Groups.id}`,
      },
      {
        name: "Personajes",
        description: "Conoce mejor a los personajes",
        imageSrc: 'personajes.jpg',
        imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
        href: `/grupos/personajes/${Groups.NameGroup}`,
      },
      {
        name: 'Logros',
        description: 'Descubre los logros trae tu juego',
        imageSrc: 'logros.jpg',
        imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
        href: `/grupos/logros/${Groups.NameGroup}`,
      },
    ]
    return (
      <>
      <Header></Header>
        <div className="bg-gray-100">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
              <h2 className="text-2xl font-bold text-gray-900">Menu del grupo</h2>
    
              <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
                {Grupos.map((grupo) => (
                  <div key={grupo.name} className="group relative">
                    <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                      <img
                        src={`/imagenes/${grupo.imageSrc}`}
                        alt={grupo.imageAlt}
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                    <h3 className="mt-6 text-sm text-gray-500">
                      <a href={grupo.href}>
                        <span className="absolute inset-0" />
                        {grupo.name}
                      </a>
                    </h3>
                    <p className="text-base font-semibold text-gray-900">{grupo.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <Footer></Footer>
        </>
      )
}

export default MenuGrupos;