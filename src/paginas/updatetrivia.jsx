import React, { useState, useEffect } from "react";
import axios from "axios";
import { Formik } from "formik";
import { useParams,Link } from "react-router-dom";

export default function Updatetrivia() {
  const {id} = useParams();
  console.log(id);

  const [Trivia, setTrivia] = useState({
    Pregunta: "",
    Correcta: "",
    Incorrecta1: "",
    Incorrecta2: "",
    Incorrecta3: "",
  });

  useEffect(() => {
    const loadTrivia = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/trivia/${id}`);
        console.log(response);
        setTrivia({
            Pregunta: response.data.Pregunta,
            Correcta: response.data.Correcta,
            Incorrecta1: response.data.Incorrecta1,
            Incorrecta2: response.data.Incorrecta2,
            Incorrecta3: response.data.Incorrecta3,
        });
      } catch (error) {
        console.error("Error while loading user: ", error);
      }
    };

    loadTrivia();
  }, [id]);

  const Editar = async (pre, correc, incorrec1, incorrec2, incorrec3) => {
    await axios.patch(`http://localhost:3000/trivia/${id}`, {
        Pregunta: pre,
        Correcta: correc,
        Incorrecta1: incorrec1,
        Incorrecta2: incorrec2,
        Incorrecta3: incorrec3,
    });
  }

  return (
    <div className="container mx-15 w-50 p-20">
      <Formik
        initialValues={Trivia}
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
            Pregunta 
          </label>
          <div className="mt-2">
            <input
              id="usuario"
              name="Pregunta"
              type="text"
              autoComplete="text"
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              onChange={handleChange}
              value={values.Pregunta}
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
            Respuesta correcta
          </label>
          <div className="mt-2">
            <input
              id="email"
              name="Correcta"
              type="text"
              autoComplete="email"
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              onChange={handleChange}
              value={values.Correcta}
            />
          </div>
        </div>

        <div>
          <label htmlFor="contrasena" className="block text-sm font-medium leading-6 text-gray-900">
            Respuesa incorrecta 1
          </label>
          <div className="mt-2">
            <input
              id="contrasena"
              name="Incorrecta1"
              type="text"
              autoComplete="current-password"
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              onChange={handleChange}
              value={values.Incorrecta1}
            />
          </div>
        </div>

        <div>
          <label htmlFor="contrasena" className="block text-sm font-medium leading-6 text-gray-900">
          Respuesa incorrecta 2
          </label>
          <div className="mt-2">
            <input
              id="contrasena"
              name="Incorrecta2"
              type="text"
              autoComplete="current-password"
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              onChange={handleChange}
              value={values.Incorrecta2}
            />
          </div>
        </div>

        <div>
          <label htmlFor="contrasena" className="block text-sm font-medium leading-6 text-gray-900">
          Respuesa incorrecta 3
          </label>
          <div className="mt-2">
            <input
              id="contrasena"
              name="Incorrecta3"
              type="text"
              autoComplete="current-password"
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              onChange={handleChange}
              value={values.Incorrecta3}
            />
          </div>
        </div>

        <div> 
        <Link to="/tablatrivia">
          <button
            type='onSubmit'
            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            onClick={() => Editar(values.Pregunta, values.Correcta, values.Incorrecta1, values.Incorrecta2, values.Incorrecta3)}
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
