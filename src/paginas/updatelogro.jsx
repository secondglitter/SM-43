import React, { useState, useEffect } from "react";
import axios from "axios";
import { Formik } from "formik";
import { useParams,Link } from "react-router-dom";

export default function UpdateLogro() {
  const {id} = useParams();
  console.log(id);

  const [Logro, setLogros] = useState({
    NombreLogro: "",
    Description: "",
    Imagen: "",
    Valor: "",
    Trofeo: "",
  });

  useEffect(() => {
    const loadLogro = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/logros/${id}`);
        console.log(response);
        setLogros({
          NombreLogro: response.data.NombreLogro,
          Description: response.data.Description,
          Imagen: response.data.Imagen,
          Valor: response.data.Valor,
          Trofeo: response.data.Trofeo,
        });
      } catch (error) {
        console.error("Error while loading user: ", error);
      }
    };

    loadLogro();
  }, [id]);

  const Editar = async (np, des,img, val, tro) => {
    await axios.patch(`http://localhost:3000/logros/${id}`, {
      NombreLogro: np,
      Description: des, 
      Imagen: img,
      Valor: val,
      Trofeo: tro,
    });
  }

  return (
    <div className="container mx-15 w-50 p-20">
      <Formik
        initialValues={Logro}
        enableReinitialize={true}
        onSubmit={async (values, actions) => {
          console.log(values);
        }}
      >
        {({ handleChange, values }) => (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
      <img className="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
      <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Usuario nuevo</h2>
    </div>

    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form className="space-y-6" action="#" method="POST">
        
        <div>
          <label htmlFor="usuario" className="block text-sm font-medium leading-6 text-gray-900">
            Nombre del Logro
          </label>
          <div className="mt-2">
            <input
              id="usuario"
              name="NombreLogro"
              type="text"
              autoComplete="text"
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              onChange={handleChange}
              value={values.NombreLogro}
            />
          </div>
        </div>

        <div>
          <label htmlFor="Description" className="block text-sm font-medium leading-6 text-gray-900">
            Description
          </label>
          <div className="mt-2">
            <input
              id="Description"
              name="Description"
              type="text"
              autoComplete="Description"
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              onChange={handleChange}
              value={values.Description}
            />
          </div>
        </div>

        <div>
          <label htmlFor="contrasena" className="block text-sm font-medium leading-6 text-gray-900">
            Imagen
          </label>
          <div className="mt-2">
            <input
              id="contrasena"
              name="Imagen"
              type="text"
              autoComplete="current-Valor"
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              onChange={handleChange}
              value={values.Imagen}
            />
          </div>
        </div>

        <div>
          <label htmlFor="contrasena" className="block text-sm font-medium leading-6 text-gray-900">
            Valor
          </label>
          <div className="mt-2">
            <input
              id="contrasena"
              name="Valor"
              type="text"
              autoComplete="current-Valor"
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              onChange={handleChange}
              value={values.Valor}
            />
          </div>
        </div>

        <div>
          <label htmlFor="contrasena" className="block text-sm font-medium leading-6 text-gray-900">
            Trofeo
          </label>
          <div className="mt-2">
            <input
              id="contrasena"
              name="Trofeo"
              type="text"
              autoComplete="current-Valor"
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              onChange={handleChange}
              value={values.Trofeo}
            />
          </div>
        </div>

        <div> 
        <Link to="/tablalogro">
          <button
            type='onSubmit'
            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            onClick={() => Editar(values.NombreLogro, values.Description, values.Imagen,values.Valor, values.Trofeo)}
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