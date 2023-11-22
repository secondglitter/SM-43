import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Sidebar from "../componentes/sidebar";
import '../estilos/users.css';  // Puedes reutilizar los estilos de Users o crear unos nuevos específicos para TablaLogro
import '../estilos/Bg-stars.css';
import '../estilos/Animations.css';

function TablaLogro() {
  const [Logros, setLogros] = useState([]);

  useEffect(() => {
    fetchLogros();
  }, []);

  const HandeDelte = async (id) => {
    const response = await axios.delete(`http://localhost:3000/logros/${id}`);

    if (response.status === 200) {
      alert("Se borró correctamente");
    } else {
      alert("Sucedio un error");
    }

    fetchLogros();
  };

  const fetchLogros = async () => {
    try {
      const response = await axios.get('http://localhost:3000/logros/');
      setLogros(response.data);
      console.log('Datos de la API');
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Sidebar></Sidebar>
      <body className="estrellas-2">
        <div className="ab-users">
          <div className="p-4 sm:ml-50">
            <div className="p-20 border-dashed">
              <div className="flex items-center justify-center h-48 mb-4 rounded">
                <div className="container">
                  <div className="relative left-70 top-24">
                    <Link to="/newlogro">
                      <button className=" bottom-3 left-600 font-medium text-blue-600 dark:text-blue-500 hover:underline">
                        <img className="img-dash" src="https://cdn-icons-png.flaticon.com/128/1828/1828817.png" alt="Add Logro" />
                      </button>
                    </Link>
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 marco-brillante-3 tb-user">
                      <thead className="text-xs text-gray-900 uppercase dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                          <th scope="col" className="px-6 py-3 text-center">
                            Logro
                          </th>
                          <th scope="col" className="px-6 py-3 text-center">
                            Nombre del logro
                          </th>
                          <th scope="col" className="px-6 py-3 text-center">
                            Description
                          </th>
                          <th scope="col" className="px-6 py-3 text-center">
                            Imagen
                          </th>
                          <th scope="col" className="px-6 py-3 text-center">
                            Valor
                          </th>
                          <th scope="col" className="px-6 py-3 text-center">
                            Trofeo
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
                        {Logros.map((logro) => (
                          <tr className="border-b dark:border-gray-700" key={logro.id}>
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap text-center">
                              {logro.id}
                            </th>
                            <td className="px-6 py-4 text-center">
                              {logro.NombreLogro}
                            </td>
                            <td className="px-6 py-4 text-center">
                              {logro.Description}
                            </td>
                            <td className="px-6 py-4 text-center">
                              {logro.Imagen}
                            </td>
                            <td className="px-6 py-4 text-center">
                              {logro.Valor}
                            </td>
                            <td className="px-6 py-4 text-center">
                              {logro.Trofeo}
                            </td>
                            <td className="px-6 py-4 text-center">
                              <Link to={"/updatelogro/" + logro.id}>
                                <a className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                                  <img className="img-dash" src="https://cdn-icons-png.flaticon.com/128/10336/10336582.png" alt="Editar" />
                                </a>
                              </Link>
                            </td>
                            <td className="px-6 py-4 text-center">
                              <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline" onClick={() => HandeDelte(logro.id)}>
                                <img className="img-dash" src="https://cdn-icons-png.flaticon.com/128/8258/8258337.png" alt="Eliminar" />
                              </a>
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
