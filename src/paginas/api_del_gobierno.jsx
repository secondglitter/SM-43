import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Sidebar from "../componentes/sidebar";

function ApiGob() {
    const [weatherData, setWeatherData] = useState([]);

    useEffect(() => {
      fetch('https://api.datos.gob.mx/v1/condiciones-atmosfericas')
        .then(response => response.json())
        .then(data => {
          if (data && data.results) {
            setWeatherData(data.results);
          } else {
            console.error('La respuesta de la API no tiene el formato esperado.');
          }
        })
        .catch(error => console.error(error));
    }, []);
  return (
    <>
    <Sidebar></Sidebar>
    <div class="p-4 sm:ml-64">
                <div class="p-4 sm:ml-50">
                  
                    <div class="p-20 border-dashed">

                        <div class="flex items-center justify-center h-48 mb-4 rounded">
                            <div class="container">
                                <div class="relative  left-70 top-24">
                                <Link to="/newgroup"><button class="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">Crear</button> </Link>
                                    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                        <thead class="text-xs text-gray-900 uppercase dark:bg-gray-700 dark:text-gray-400">
                                            <tr>
                                                <th scope="col" class="px-6 py-3">
                                                    ID
                                                </th>
                                                <th scope="col" class="px-6 py-3">
                                                    Nombre
                                                </th>
                                                <th scope="col" class="px-6 py-3">
                                                    Miembros
                                                </th>
                                                <th scope="col" class="px-6 py-3">
                                                    Temperatura
                                                </th>
                                                <th scope="col" class="px-6 py-3">
                                                    Clima
                                                </th>
                                                <th scope="col" class="px-6 py-3">
                                                    Humedad
                                                </th>
                                                <th scope="col" class="px-6 py-3">
                                                    Velocidad
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>

                                        {weatherData.map(item => (

                                                <tr class="border-b dark:border-gray-700">
                                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                                    {item._id}
                                                    </th>
                                                    <td class="px-6 py-4">
                                                    {item.name}
                                                    </td>
                                                    <td class="px-6 py-4">
                                                    {item.tempc}
                                                    </td>
                                                    <td class="px-6 py-4">
                                                    {item.skydescriptionlong}
                                                    </td>
                                                    <td class="px-6 py-4">
                                                    {item.relativehumidity}
                                                    </td>
                                                    <td class="px-6 py-4">
                                                    {item.windspeedkm}
                                                    </td>
                                                </tr>
                                            ))}

                                        </tbody>
                                    </table>
                                </div>

                            </div>
                        </div>


                    </div>
                </div>
            </div>
    </>
  );
}

export default ApiGob;
