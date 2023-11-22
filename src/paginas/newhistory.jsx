import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Newhistoria() {
  const [newNameGame, setNewNameGame] = useState("");
  const [newImage, setNewImage] = useState("");
  const [newDescription1, setNewDescription1] = useState("");
  const [newDescription2, setNewDescription2] = useState("");
  const [newDescription3, setNewDescription3] = useState("");
  const [newNameList1, setNewNameList1] = useState("");
  const [newList1, setNewList1] = useState("");
  const [newNameList2, setNewNameList2] = useState("");
  const [newList2, setNewList2] = useState("");
  const [newNameList3, setNewNameList3] = useState("");
  const [newList3, setNewList3] = useState("");
  const [newSubName, setNewSubName] = useState("");
  const [newDescription4, setNewDescription4] = useState("");

  const addHistoria = async () => {
    const newHistoria = {
      NameGame: newNameGame,
      Image: newImage,
      Description1: newDescription1,
      Description2: newDescription2,
      Description3: newDescription3,     
      NameList1: newNameList1,    
      List1: newList1,    
      NameList2: newNameList2,    
      List2: newList2,  
      NameList3: newNameList3, 
      List3: newList3,  
      SubName: newSubName, 
      Description4: newDescription4,
    };

    try {
      const response = await axios.post("http://localhost:3000/historia", newHistoria);
    } catch (error) {
      console.error("Error", error);
      window.alert("ERROR");
    }
  };

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img className="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Historia nueva</h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action="#" method="POST">
          
          <div>
            <label htmlFor="usuario" className="block text-sm font-medium leading-6 text-gray-900">
            Nombre del juego
            </label>
            <div className="mt-2">
              <input
                id="usuario"
                name="usuario"
                type="text"
                autoComplete="text"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                onChange={(e) => setNewNameGame(e.target.value)}
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
            Imagen
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="text"
                autoComplete="email"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                onChange={(e) => setNewImage(e.target.value)}
              />
            </div>
          </div>

          <div>
            <label htmlFor="contrasena" className="block text-sm font-medium leading-6 text-gray-900">
            Description 1
            </label>
            <div className="mt-2">
              <input
                id="contrasena"
                name="contrasena"
                type="text"
                autoComplete="current-password"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                onChange={(e) => setNewDescription1(e.target.value)}
              />
            </div>
          </div>

          <div>
            <label htmlFor="contrasena" className="block text-sm font-medium leading-6 text-gray-900">
            Description 2
            </label>
            <div className="mt-2">
              <input
                id="contrasena"
                name="contrasena"
                type="text"
                autoComplete="current-password"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                onChange={(e) => setNewDescription2(e.target.value)}
              />
            </div>
          </div>

          <div>
            <label htmlFor="contrasena" className="block text-sm font-medium leading-6 text-gray-900">
            Description 3
            </label>
            <div className="mt-2">
              <input
                id="contrasena"
                name="contrasena"
                type="text"
                autoComplete="current-password"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                onChange={(e) => setNewDescription3(e.target.value)}
              />
            </div>
          </div>

          <div>
            <label htmlFor="contrasena" className="block text-sm font-medium leading-6 text-gray-900">
            Nombre de lista 1
            </label>
            <div className="mt-2">
              <input
                id="contrasena"
                name="contrasena"
                type="text"
                autoComplete="current-password"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                onChange={(e) => setNewNameList1(e.target.value)}
              />
            </div>
          </div>

          <div>
            <label htmlFor="contrasena" className="block text-sm font-medium leading-6 text-gray-900">
            Description de lista 1
            </label>
            <div className="mt-2">
              <input
                id="contrasena"
                name="contrasena"
                type="text"
                autoComplete="current-password"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                onChange={(e) => setNewList1(e.target.value)}
              />
            </div>
          </div>

          <div>
            <label htmlFor="contrasena" className="block text-sm font-medium leading-6 text-gray-900">
            Nombre de lista 2
            </label>
            <div className="mt-2">
              <input
                id="contrasena"
                name="contrasena"
                type="text"
                autoComplete="current-password"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                onChange={(e) => setNewNameList2(e.target.value)}
              />
            </div>
          </div>

          <div>
            <label htmlFor="contrasena" className="block text-sm font-medium leading-6 text-gray-900">
            Description de lista 2
            </label>
            <div className="mt-2">
              <input
                id="contrasena"
                name="contrasena"
                type="text"
                autoComplete="current-password"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                onChange={(e) => setNewList2(e.target.value)}
              />
            </div>
          </div>

          <div>
            <label htmlFor="contrasena" className="block text-sm font-medium leading-6 text-gray-900">
            Nombre de lista 3
            </label>
            <div className="mt-2">
              <input
                id="contrasena"
                name="contrasena"
                type="text"
                autoComplete="current-password"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                onChange={(e) => setNewNameList3(e.target.value)}
              />
            </div>
          </div>

          <div>
            <label htmlFor="contrasena" className="block text-sm font-medium leading-6 text-gray-900">
            Description de lista 3
            </label>
            <div className="mt-2">
              <input
                id="contrasena"
                name="contrasena"
                type="text"
                autoComplete="current-password"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                onChange={(e) => setNewList3(e.target.value)}
              />
            </div>
          </div>

          <div>
            <label htmlFor="contrasena" className="block text-sm font-medium leading-6 text-gray-900">
            Sub nombre
            </label>
            <div className="mt-2">
              <input
                id="contrasena"
                name="contrasena"
                type="text"
                autoComplete="current-password"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                onChange={(e) => setNewSubName(e.target.value)}
              />
            </div>
          </div>

          <div>
            <label htmlFor="contrasena" className="block text-sm font-medium leading-6 text-gray-900">
            Description 4
            </label>
            <div className="mt-2">
              <input
                id="contrasena"
                name="contrasena"
                type="text"
                autoComplete="current-password"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                onChange={(e) => setNewDescription4(e.target.value)}
              />
            </div>
          </div>

          <div> 
            <Link to="/tablahistoria">
            <button
              type="button"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              onClick={() => addHistoria()}
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

export default Newhistoria;
