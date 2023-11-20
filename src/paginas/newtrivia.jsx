import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Newtrivia() {
  const [newPregunta, setNewPregunta] = useState("");
  const [newCorrecta, setNewCorrecta] = useState("");
  const [newIncorrecta1, setNewIncorrecta1] = useState("");
  const [newIncorrecta2, setNewIncorrecta2] = useState("");
  const [newIncorrecta3, setNewIncorrecta3] = useState("");

  const addTrivia = async () => {
    const newTrivia = {
      Pregunta: newPregunta,
      Correcta: newCorrecta,
      Incorrecta1: newIncorrecta1,
      Incorrecta2: newIncorrecta2,
      Incorrecta3: newIncorrecta3,
    };

    try {
      const response = await axios.post("http://localhost:3000/trivia", newTrivia);
    } catch (error) {
      console.error("Error", error);
      window.alert("ERROR");
    }
  };

  return (
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
                name="usuario"
                type="text"
                autoComplete="text"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                onChange={(e) => setNewPregunta(e.target.value)}
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
                name="email"
                type="text"
                autoComplete="email"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                onChange={(e) => setNewCorrecta(e.target.value)}
              />
            </div>
          </div>

          <div>
            <label htmlFor="contrasena" className="block text-sm font-medium leading-6 text-gray-900">
              Respuesta Incorrecta 1
            </label>
            <div className="mt-2">
              <input
                id="contrasena"
                name="contrasena"
                type="text"
                autoComplete="current-password"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                onChange={(e) => setNewIncorrecta1(e.target.value)}
              />
            </div>
          </div>

          <div>
            <label htmlFor="contrasena" className="block text-sm font-medium leading-6 text-gray-900">
              Respuesta Incorrecta 2
            </label>
            <div className="mt-2">
              <input
                id="contrasena"
                name="contrasena"
                type="text"
                autoComplete="current-password"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                onChange={(e) => setNewIncorrecta2(e.target.value)}
              />
            </div>
          </div>

          <div>
            <label htmlFor="contrasena" className="block text-sm font-medium leading-6 text-gray-900">
              Respuesta Incorrecta 3
            </label>
            <div className="mt-2">
              <input
                id="contrasena"
                name="contrasena"
                type="text"
                autoComplete="current-password"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                onChange={(e) => setNewIncorrecta3(e.target.value)}
              />
            </div>
          </div>

          <div> 
            <Link to="/tablatrivia">
            <button
              type="button"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              onClick={() => addTrivia()}
            >
              Crear
            </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Newtrivia;
