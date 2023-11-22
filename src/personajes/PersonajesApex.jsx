import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link,useParams } from "react-router-dom";
import Header from "../componentes/encabezado";
import Footer from "../componentes/footer";
  
  export default function PersonajesApex() {
      //LoL

  const { id2 } = useParams();

  const [Groups2, setGroups2] = useState([]);
  useEffect(() => {
    fecthGroups2(1)
  }, []);

  const fecthGroups2 = async (id2) => {
    try {
      const response = await axios.get(`http://localhost:3000/personajes/${id2}`)
      setGroups2(response.data)
      // console.log('Datos de la api')
      // console.log(response.data)
    } catch (error) {
      // console.log(error)
    }
  }

  //For Honor

  const { id3 } = useParams();

  const [Groups3, setGroups3] = useState([]);
  useEffect(() => {
    fecthGroups3(2)
  }, []);

  const fecthGroups3 = async (id3) => {
    try {
      const response = await axios.get(`http://localhost:3000/personajes/${id3}`)
      setGroups3(response.data)
      // console.log('Datos de la api')
      // console.log(response.data)
    } catch (error) {
      // console.log(error)
    }
  }

  const features = [
    { name: Groups2.NombrePersonaje, description: Groups2.Description },
    { name: 'Material', description: 'Solid walnut base with rare earth magnets and powder coated steel card cover' },
    { name: 'Dimensions', description: '6.25" x 3.55" x 1.15"' },
    { name: 'Finish', description: 'Hand sanded and finished with natural oil' },

  ]
    return (
      <>
      <Header></Header>
      <div className="bg-white">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
          <div>
          <Link to={"/grupos/menu/"+ Groups2.id}><button className="text-base font-semibold leading-7 text-indigo-600">Regresar</button></Link>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Technical Specifications</h2>
            <p className="mt-4 text-gray-500">
              The walnut wood card tray is precision milled to perfectly fit a stack of Focus cards. The powder coated
              steel divider separates active cards from new ones, or can be used to archive important task lists.
            </p>
  
            <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
              {features.map((feature) => (
                <div key={feature.name} className="border-t border-gray-200 pt-4">
                  <dt className="font-medium text-gray-900">{feature.name}</dt>
                  <dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
            <img
              src={`/imagenes/${Groups2.Imagen}`}
              alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
              className="rounded-lg bg-gray-100"
            />
            <img
              src={`/imagenes/${Groups3.Imagen}`}
              alt="Top down view of walnut card tray with embedded magnets and card groove."
              className="rounded-lg bg-gray-100"
            />
            <img
              src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-03.jpg"
              alt="Side of walnut card tray with card groove and recessed card area."
              className="rounded-lg bg-gray-100"
            />
            <img
              src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-04.jpg"
              alt="Walnut card tray filled with cards and card angled in dedicated groove."
              className="rounded-lg bg-gray-100"
            />
          </div>
        </div>
      </div>
      <Footer></Footer>
      </>
    )
  }