import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Sidebar from "../componentes/sidebar";
import '../estilos/users.css';
import '../estilos/Bg-stars.css';
import '../estilos/Animations.css';

function Users() {
  const [view, setView] = useState(false)
   
  const [Users, setUsers] = useState([]);
  useEffect(() => {
    fecthUsers()
  }, []);

  const HandeDelte = async (id) => {

  const response = await axios.delete(`http://localhost:3000/users/${id}`);
   
   if(response.status == 200){
     alert("Se borro correctamente")
   } else{
     alert("Sucedio un error")
   }
   fecthUsers()
   }

  const fecthUsers = async () => {
    try{
    const response = await axios.get('http://localhost:3000/users')
    setUsers(response.data)
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
    <div class="ab-users">
                <div class="p-4 sm:ml-50">
                  
                    <div class="p-20 border-dashed">

                        <div class="flex items-center justify-center h-48 mb-4 rounded">
                            <div class="container">
                                <div class="relative  left-70 top-24">
                                <Link to="/newuser"><button class=" bottom-3 left-600 font-medium text-blue-600 dark:text-blue-500 hover:underline"><img className="img-dash" src="https://cdn-icons-png.flaticon.com/128/1828/1828817.png"/></button> </Link>

                                    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 marco-brillante-3 tb-user">
                                        <thead class="text-xs text-gray-900 uppercase dark:bg-gray-700 dark:text-gray-400">
                                            <tr>
                                                <th scope="col" class="px-6 py-3 text-center">
                                                    Usuario
                                                </th>
                                                <th scope="col" class="px-6 py-3 text-center">
                                                    Nombre de usuario
                                                </th>
                                                <th scope="col" class="px-6 py-3 text-center">
                                                    Correo
                                                </th>
                                                <th scope="col" class="px-6 py-3 text-center">
                                                    Editar
                                                </th>
                                                <th scope="col" class="px-6 py-3 text-center">
                                                    Eliminar
                                                </th>                                                
                                            </tr>
                                        </thead>
                                        <tbody>

                                            {Users.map((users) => (

                                                <tr class="border-b dark:border-gray-700">
                                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap text-center">
                                                        {users.id}
                                                    </th>
                                                    <td class="px-6 py-4 text-center">
                                                        {users.UserName}
                                                    </td>
                                                    <td class="px-6 py-4 text-center">
                                                        {users.Email}
                                                    </td>
                                                    <td class="px-6 py-4 text-center">
                                                      <Link to={"/updateuser/" + users.id}>
                                                        <a  class="font-medium text-blue-600 dark:text-blue-500 hover:underline" ><img className="img-dash" src="https://cdn-icons-png.flaticon.com/128/10336/10336582.png"/></a>
                                                      </Link>
                                                    </td>
                                                    <td class="px-6 py-4 text-center">
                                                        <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline" onClick={() =>  HandeDelte(users.id)}><img className="img-dash" src="https://cdn-icons-png.flaticon.com/128/8258/8258337.png"/></a>
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

export default Users;


