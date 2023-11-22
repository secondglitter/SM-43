import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Sidebar from "../componentes/sidebar";
import '../estilos/tabla.css';
import '../estilos/group.css';
import '../estilos/Bg-stars.css';

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
    <body className="estrellas-2">
    <div className="ab-group">
                <div className="p-4 sm:ml-50">
                  
                    <div className="p-20 border-dashed">

                        <div className="flex items-center justify-center h-48 mb-4 rounded">
                            <div>
                                <div className="relative  left-70 top-24">
                                <Link to="/newgroup"><button class=" bottom-3 left-600 font-medium text-blue-600 dark:text-blue-500 hover:underline"><img className="img-dash" src="https://cdn-icons-png.flaticon.com/128/1828/1828817.png"/></button> </Link>
                                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 marco-brillante-3 tb-user">
                                        <thead className="text-xs text-gray-900 uppercase dark:bg-gray-700 dark:text-gray-400">
                                            <tr>
                                                <th scope="col" className="px-6 py-3 text-center">
                                                    Grupo
                                                </th>
                                                <th scope="col" className="px-6 py-3 text-center">
                                                    Nombre del grupo
                                                </th>
                                                <th scope="col" className="px-6 py-3 text-center">
                                                    Miembros
                                                </th>
                                                <th scope="col" className="px-6 py-3 text-center">
                                                    Clasificacion
                                                </th>
                                                <th scope="col" className="px-6 py-3 text-center">
                                                    Imagen principal
                                                </th>
                                                <th scope="col" className="px-6 py-3 text-center">
                                                    Editar
                                                </th>
                                                <th scope="col" className="px-6 py-3 text-center">
                                                    Eliminar
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>

                                            {Groups.map((groups) => (

                                                <tr className="border-b dark:border-gray-700">
                                                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap text-center">
                                                        {groups.id}
                                                    </td>
                                                    <td className="px-6 py-4 text-center">
                                                        {groups.NameGroup}
                                                    </td>
                                                    <td className="px-6 py-4 text-center">
                                                        {groups.Members}
                                                    </td>
                                                    <td className="px-6 py-4 text-center">
                                                        {groups.Class}
                                                    </td>
                                                    <td className="px-6 py-4 text-center">
                                                        {groups.Image}
                                                    </td>
                                                    <td className="px-6 py-4 text-center">
                                                      <Link to={"/updategroup/" + groups.id}>
                                                        <a  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"><img className="img-dash" src="https://cdn-icons-png.flaticon.com/128/10336/10336582.png"/></a>
                                                      </Link>
                                                    </td>
                                                    <td className="px-6 py-4 text-center">
                                                        <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline" onClick={() =>  HandeDelte(groups.id)}><img className="img-dash" src="https://cdn-icons-png.flaticon.com/128/8258/8258337.png"/></a>
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

export default Group;
