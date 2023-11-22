import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Sidebar from "../componentes/sidebar";
import '../estilos/frases.css';
import '../estilos/Bg-stars.css';

function Frases() {
  const [Frases, setFrases] = useState([]);

  useEffect(() => {
    fetchFrases();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:3001/frases/${id}`);

      if (response.status === 200) {
        alert("Se borró correctamente");
      } else {
        alert("Sucedio un error");
      }

      fetchFrases();
    } catch (error) {
      console.log(error);
    }
  };

  const fetchFrases = async () => {
    try {
      const response = await axios.get('http://localhost:3001/frases');
      setFrases(response.data);
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
        <div className="ab-group">
          <div className="p-4 sm:ml-50">
            <div className="p-20 border-dashed">
              <div className="flex items-center justify-center h-48 mb-4 rounded">
                <div>
                  <div className="relative left-70 top-24">
                    <Link to="/newfrase">
                      <button className="bottom-3 left-600 font-medium text-blue-600 dark:text-blue-500 hover:underline">
                        <img className="img-dash" src="https://cdn-icons-png.flaticon.com/128/1828/1828817.png" alt="Add Frase" />
                      </button>
                    </Link>
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 marco-brillante-3 tb-user">
                      <thead className="text-xs text-gray-900 uppercase dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                          <th scope="col" className="px-6 py-3 text-center">
                            Frase
                          </th>
                          <th scope="col" className="px-6 py-3 text-center">
                            Texto
                          </th>
                          <th scope="col" className="px-6 py-3 text-center">
                            Autor
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
                        {Frases.map((frase) => (
                          <tr className="border-b dark:border-gray-700" key={frase.id}>
                            <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap text-center">
                              {frase.id}
                            </td>
                            <td className="px-6 py-4 text-center">
                              {frase.Texto}
                            </td>
                            <td className="px-6 py-4 text-center">
                              {frase.Autor}
                            </td>
                            <td className="px-6 py-4 text-center">
                              <Link to={`/updatefrase/${frase.id}`}>
                                <a className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                                  <img className="img-dash" src="https://cdn-icons-png.flaticon.com/128/10336/10336582.png" alt="Editar" />
                                </a>
                              </Link>
                            </td>
                            <td className="px-6 py-4 text-center">
                              <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline" onClick={() => handleDelete(frase.id)}>
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

export default Frases;
