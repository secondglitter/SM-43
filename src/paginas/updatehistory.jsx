import React, { useState, useEffect } from "react";
import axios from "axios";
import { Formik } from "formik";
import { useParams,Link } from "react-router-dom";

export default function UpdateHistoria() {
  const {id} = useParams();
  console.log(id);

  const [Historia, setHistoria] = useState({
    NameGame: "",
    Image: "",
    Description1: "",
    Description2: "",
    Description3: "",     
    NameList1: "",    
    List1: "",    
    NameList2: "",    
    List2: "",  
    NameList3: "", 
    List3: "",  
    SubName: "", 
    Description4: "",
  });

  useEffect(() => {
    const loadHistoria = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/historia/${id}`);
        console.log(response);
        setHistoria({
          NameGame: response.data.NameGame,
          Image: response.data.Image,
          Description1: response.data.Description1,
          Description2: response.data.Description2,
          Description3: response.data.Description3,     
          NameList1: response.data.NameList1,    
          List1: response.data.List1,    
          NameList2: response.data.NameList2,    
          List2: response.data.List2,  
          NameList3: response.data.NameList3, 
          List3: response.data.List3,  
          SubName: response.data.SubName, 
          Description4: response.data.Description4,
        });
      } catch (error) {
        console.error("Error while loading user: ", error);
      }
    };

    loadHistoria();
  }, [id]);

  const Editar = async (na,ima,des1,des2,des3,nal1,lis1,nal2,lis2,nal3,lis3,sub,des4,) => {
    await axios.patch(`http://localhost:3000/historia/${id}`, {
      NameGame: na,
      Image: ima,
      Description1: des1,
      Description2: des2,
      Description3: des3,     
      NameList1: nal1,    
      List1: lis1,    
      NameList2: nal2,    
      List2: lis2,  
      NameList3: nal3, 
      List3: lis3,  
      SubName: sub, 
      Description4: des4,
    });
  }

  return (
    <div className="container mx-15 w-50 p-20">
      <Formik
        initialValues={Historia}
        enableReinitialize={true}
        onSubmit={async (values, actions) => {
          console.log(values);
        }}
      >
        {({ handleChange, values }) => (
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
              name="NameGame"
              type="text"
              autoComplete="text"
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              onChange={handleChange}
              value={values.NameGame}
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
              name="Image"
              type="text"
              autoComplete="email"
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              onChange={handleChange}
              value={values.Image}
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
              name="Description1"
              type="text"
              autoComplete="current-password"
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              onChange={handleChange}
              value={values.Description1}
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
              name="Description2"
              type="text"
              autoComplete="current-password"
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              onChange={handleChange}
              value={values.Description2}
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
              name="Description3"
              type="text"
              autoComplete="current-password"
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              onChange={handleChange}
              value={values.Description3}
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
              name="NameList1"
              type="text"
              autoComplete="current-password"
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              onChange={handleChange}
              value={values.NameList1}
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
              name="List1"
              type="text"
              autoComplete="current-password"
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              onChange={handleChange}
              value={values.List1}
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
              name="NameList2"
              type="text"
              autoComplete="current-password"
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              onChange={handleChange}
              value={values.NameList2}
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
              name="List2"
              type="text"
              autoComplete="current-password"
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              onChange={handleChange}
              value={values.List2}
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
              name="NameList3"
              type="text"
              autoComplete="current-password"
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              onChange={handleChange}
              value={values.NameList3}
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
              name="List3"
              type="text"
              autoComplete="current-password"
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              onChange={handleChange}
              value={values.List3}
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
              name="SubName"
              type="text"
              autoComplete="current-password"
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              onChange={handleChange}
              value={values.SubName}
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
              name="Description4"
              type="text"
              autoComplete="current-password"
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              onChange={handleChange}
              value={values.Description4}
            />
          </div>
        </div>

        <div> 
        <Link to="/tablaHistoria">
          <button
            type='onSubmit'
            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            onClick={() => Editar(
              
              values.NameGame,
              values.Image,
              values.Description1,
              values.Description2,
              values.Description3,
              values.NameList1,
              values.List1,
              values.NameList2, 
              values.List2,
              values.NameList3,
              values.List3,
              values.SubName,
              values.Description4)}
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
