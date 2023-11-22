import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Sidebar from "../componentes/sidebar";
import '../estilos/tabla.css';
import '../estilos/group.css';
import '../estilos/Bg-stars.css';

function TablaLogro() {
  const [view, setView] = useState(false)
   
  const [Logros, setLogros] = useState([]);
  useEffect(() => {
    fecthLogros()
  }, []);

  const HandeDelte = async (id) => {

  const response = await axios.delete(`http://localhost:3000/logros/${id}`);
   
   if(response.status == 200){
     alert("Se borro correctamente")
   } else{
     alert("Sucedio un error")
   }
   fecthLogros()
   }

  const fecthLogros = async () => {
    try{
    const response = await axios.get('http://localhost:3000/logros/')
    setLogros(response.data)
    console.log('Datos de la api')
    console.log(response.data)
    } catch(error) {
      console.log(error)
    }
  }
  return (
    <>
    <Sidebar></Sidebar>
    <body className="estrellas bg-stars">
    <div class="ab-group">
                <div class="p-4 sm:ml-50">
                  
                    <div class="p-20 border-dashed">

                        <div class="flex items-center justify-center h-48 mb-4 rounded">
                            <div>
                                <div class="relative  left-70 top-24">
                                <Link to="/newlogro"><button class="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">Crear</button> </Link>
                                    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                        <thead class="text-xs text-gray-900 uppercase dark:bg-gray-700 dark:text-gray-400">
                                            <tr>
                                                <th scope="col" class="px-6 py-3">
                                                    Logro
                                                </th>
                                                <th scope="col" class="px-6 py-3">
                                                    Nombre del logro
                                                </th>
                                                <th scope="col" class="px-6 py-3">
                                                    Description
                                                </th>
                                                <th scope="col" class="px-6 py-3">
                                                    Imagen
                                                </th>
                                                <th scope="col" class="px-6 py-3">
                                                    Valor
                                                </th>
                                                <th scope="col" class="px-6 py-3">
                                                    Trofeo
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>

                                            {Logros.map((logros) => (

                                                <tr class="border-b dark:border-gray-700">
                                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                                        {logros.id}
                                                    </th>
                                                    <td class="px-6 py-4">
                                                        {logros.NombreLogro}
                                                    </td>
                                                    <td class="px-6 py-4">
                                                        {logros.Description}
                                                    </td>
                                                    <td class="px-6 py-4">
                                                        {logros.Imagen}
                                                    </td>
                                                    <td class="px-6 py-4">
                                                        {logros.Valor}
                                                    </td>
                                                    <td class="px-6 py-4">
                                                        {logros.Trofeo}
                                                    </td>
                                                    <td class="px-6 py-4">
                                                      <Link to={"/updatelogro/" + logros.id}>
                                                        <a  class="font-medium text-blue-600 dark:text-blue-500 hover:underline" >Editar</a>
                                                      </Link>
                                                    </td>
                                                    <td class="px-6 py-4">
                                                        <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline" onClick={() =>  HandeDelte(Logros.id)}>Eliminar</a>
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
            </body>
    </>
  );
}

export default TablaLogro;
