import React, { useEffect, useState } from "react";
import axios from "axios";
import { StarIcon } from '@heroicons/react/20/solid'
import { Link, useParams } from "react-router-dom";

const reviews = { average: 3, totalCount: 24200 }

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Grupoid() {
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

  return (
    
    
    <div className="bg-white">
      <div className="pt-6">
        <nav aria-label="Breadcrumb">
          <ol role="list" className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
              <li key={Groups.id}>
                <div className="flex items-center">
                  <a href="/grupos" className="mr-2 text-sm font-medium text-gray-900">
                    Regresar
                  </a>
                  <svg
                    width={16}
                    height={20}
                    viewBox="0 0 16 20"
                    fill="currentColor"
                    aria-hidden="true"
                    className="h-5 w-4 text-gray-300"
                  >
                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                  </svg>
                </div>
              </li>
            <li className="text-sm">

              <a href={`/categorias/${Groups.Class}`} aria-current="page" className="font-medium text-gray-500 hover:text-gray-600">
                {Groups.Class}
              </a>
            </li>
          </ol>
        </nav>

        {/* Image gallery */}
        
        <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
          <div className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
            <img
              src={`/imagenes/${Groups.Image1}`}
              alt={Groups.Image1}
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
            <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
            <img
              src={`/imagenes/${Groups.Image2}`}
              alt={Groups.Image2}
              className="h-full w-full object-cover object-center"
            />
            </div>
            <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
            <img
              src={`/imagenes/${Groups.Image3}`}
              alt={Groups.Image3}
              className="h-full w-full object-cover object-center"
            />
            </div>
          </div>
          <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
            <img
              src={`/imagenes/${Groups.Image}`}
              alt={Groups.Image}
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>

        {/* Product info */}
        <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{Groups.NameGroup}</h1>
          </div>

          {/* Options */}
          <div className="mt-4 lg:row-span-3 lg:mt-0">
            <p className="text-3xl tracking-tight text-gray-900">Contenido</p>

            {/* Reviews */}
            <div className="mt-6">
              <div className="flex items-center">
                <div className="flex items-center">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <StarIcon
                      key={rating}
                      className={classNames(
                        reviews.average > rating ? 'text-gray-900' : 'text-gray-200',
                        'h-5 w-5 flex-shrink-0'
                      )}
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <p className="sr-only">{reviews.average}</p>
                <a className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                  {reviews.totalCount} Miembros
                </a>
              </div>
            </div>

            <form className="mt-10">
              

              
              <Link to={"/categorias/menu/"+ Groups.id}>
              <button
                type="submit"
                className="mt-5 flex w-full items-center justify-center rounded-md border border-transparent bg-blue-800 px-8 py-3 text-base font-medium text-white hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Ver menu del grupo
              </button>
              </Link>
              <button
                type="submit"
                className="mt-5 flex w-full items-center justify-center rounded-md border border-transparent bg-green-500 px-8 py-3 text-base font-medium text-white hover:bg-green-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Historia
              </button>
              <button
                type="submit"
                className="mt-5 flex w-full items-center justify-center rounded-md border border-transparent bg-green-500 px-8 py-3 text-base font-medium text-white hover:bg-green-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Personajes
              </button>
              <button
                type="submit"
                className="mt-5 flex w-full items-center justify-center rounded-md border border-transparent bg-green-500 px-8 py-3 text-base font-medium text-white hover:bg-green-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Logros
              </button>
            </form>
          </div>

          <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
              <div className="space-y-6">
                <p className="text-base text-gray-900">{Groups.Description}</p>
              </div>

            <div className="mt-10">
              <h3 className="text-sm font-medium text-gray-900">Información general</h3>

              <div className="mt-4">
                <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                    <li key={Groups.id} className="text-gray-400">
                      <span className="text-gray-600">{Groups.List1}</span>
                    </li>
                    <li key={Groups.id} className="text-gray-400">
                      <span className="text-gray-600">{Groups.List2}</span>
                    </li>
                    <li key={Groups.id} className="text-gray-400">
                      <span className="text-gray-600">{Groups.List3}</span>
                    </li>
                    <li key={Groups.id} className="text-gray-400">
                      <span className="text-gray-600">{Groups.List4}</span>
                    </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}