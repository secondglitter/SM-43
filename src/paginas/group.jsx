import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Sidebar from "../componentes/sidebar";
import '../estilos/tabla.css';

function Group() {
  const [view, setView] = useState(false)
   
  const [Groups, setGroups] = useState([]);
  useEffect(() => {
    fecthGroups()
  }, []);

  const HandeDelte = async (id) => {

  const response = await axios.delete(`http://localhost:3000/groups/${id}`);
   
   if(response.status == 200){
     alert("Se borro correctamente")
   } else{
     alert("Sucedio un error")
   }
   fecthGroups()
   }

  const fecthGroups = async () => {
    try{
    const response = await axios.get('http://localhost:3000/groups/')
    setGroups(response.data)
    console.log('Datos de la api')
    console.log(response.data)
    } catch(error) {
      console.log(error)
    }
  }
  return (
    <>
    <Sidebar></Sidebar>
    <div class="p-4 sm:ml-64">
                <div class="p-4 sm:ml-50">
                  
                    <div class="p-20 border-dashed">

                        <div class="flex items-center justify-center h-48 mb-4 rounded">
                            <div>
                                <div class="relative  left-70 top-24">
                                <Link to="/newgroup"><button class="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">Crear</button> </Link>
                                    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                        <thead class="text-xs text-gray-900 uppercase dark:bg-gray-700 dark:text-gray-400">
                                            <tr>
                                                <th scope="col" class="px-6 py-3">
                                                    Grupo
                                                </th>
                                                <th scope="col" class="px-6 py-3">
                                                    Nombre del grupo
                                                </th>
                                                <th scope="col" class="px-6 py-3">
                                                    Miembros
                                                </th>
                                                <th scope="col" class="px-6 py-3">
                                                    Clasificacion
                                                </th>
                                                <th scope="col" class="px-6 py-3">
                                                    Imagen principal
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>

                                            {Groups.map((groups) => (

                                                <tr class="border-b dark:border-gray-700">
                                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                                        {groups.id}
                                                    </th>
                                                    <td class="px-6 py-4">
                                                        {groups.NameGroup}
                                                    </td>
                                                    <td class="px-6 py-4">
                                                        {groups.Members}
                                                    </td>
                                                    <td class="px-6 py-4">
                                                        {groups.Class}
                                                    </td>
                                                    <td class="px-6 py-4">
                                                        {groups.Image}
                                                    </td>
                                                    <td class="px-6 py-4">
                                                      <Link to={"/updategroup/" + groups.id}>
                                                        <a  class="font-medium text-blue-600 dark:text-blue-500 hover:underline" >Editar</a>
                                                      </Link>
                                                    </td>
                                                    <td class="px-6 py-4">
                                                        <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline" onClick={() =>  HandeDelte(groups.id)}>Eliminar</a>
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

export default Group;


