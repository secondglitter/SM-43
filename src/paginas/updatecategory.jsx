import React, { useState, useEffect } from "react";
import axios from "axios";
import { Formik } from "formik";
import { useParams,Link } from "react-router-dom";

export default function Updatecategory() {
  const {id} = useParams();
  console.log(id);

  const [Categorias, setCategorias] = useState({
    Categoria: "",
    Imagen: "",
    URL: "",
  });

  useEffect(() => {
    const loadCategoria = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/categorias/${id}`);
        console.log(response);
        setCategorias({
            Categoria: response.data.Categoria,
            Imagen: response.data.Imagen,
            URL: response.data.URL,
        });
      } catch (error) {
        console.error("Error while loading user: ", error);
      }
    };

    loadCategoria();
  }, [id]);

  const Editar = async (categoria, imagen, url) => {
    await axios.patch(`http://localhost:3000/categorias/${id}`, {
        Categoria: categoria,
        Imagen: imagen, 
        URL: url, 
    });
  }

  return (
    <div className="container mx-15 w-50 p-20">
      <Formik
        initialValues={Categorias}
        enableReinitialize={true}
        onSubmit={async (values, actions) => {
          console.log(values);
        }}
      >
        {({ handleChange, values }) => (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
      <img className="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
      <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Categoria a editar</h2>
    </div>

    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form className="space-y-6" action="#" method="POST">
        
        <div>
          <label className="block text-sm font-medium leading-6 text-gray-900">
            Categoria
          </label>
          <div className="mt-2">
            <input
              name="Categoria"
              type="text"
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              onChange={handleChange}
              value={values.Categoria}
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium leading-6 text-gray-900">
            Imagen
          </label>
          <div className="mt-2">
            <input
              name="Imagen"
              type="text"
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              onChange={handleChange}
              value={values.Imagen}
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium leading-6 text-gray-900">
            Redireccion
          </label>
          <div className="mt-2">
            <input
              name="URL"
              type="text"
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              onChange={handleChange}
              value={values.URL}
            />
          </div>
        </div>

        <div> 
        <Link to="/category">
          <button
            type='onSubmit'
            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            onClick={() => Editar(values.Categoria, values.Imagen, values.URL)}
          >
            Actualizar
          </button>
          </Link>
        </div>
      </form>
    </div>
  </div>
        )}
      </Formik>
    </div>
  );
}