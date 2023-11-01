import React, { useState, useEffect } from "react";
import axios from "axios";
import { Formik } from "formik";
import { useParams,Link } from "react-router-dom";

export default function Updategroup() {
  const {id} = useParams();
  console.log(id);

  const [Group, setGroup] = useState({
    NameGroup: "",
    Members: "",
    Class: "",
    Description: "",
    List1: "",
    List2: "",
    List3: "",
    List4: "",
    Image: "",
    Image1: "",
    Image2: "",
    Image3: "",
  });

  useEffect(() => {
    const loadGroup = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/groups/${id}`);
        console.log(response);
        setGroup({
            NameGroup: response.data.NameGroup,
            Members: response.data.Members,
            Class: response.data.Class,
            Description: response.data.Description,
            List1: response.data.List1,
            List2: response.data.List2,
            List3: response.data.List3,
            List4: response.data.List4,
            Image: response.data.Image,
            Image1: response.data.Image1,
            Image2: response.data.Image2,
            Image3: response.data.Image3,
        });
      } catch (error) {
        console.error("Error while loading group: ", error);
      }
    };

    loadGroup();
  }, [id]);

  const Editar = async (group, des, members, clas, lis1, lis2, lis3, lis4, img, img1, img2, img3) => {
    await axios.patch(`http://localhost:3000/groups/${id}`, {
        NameGroup: group,
        Members: members,
        Class: clas,
        Description: des,
        List1: lis1,
        List2: lis2,
        List3: lis3,
        List4: lis4,
        Image: img,
        Image1: img1,
        Image2: img2,
        Image3: img3,
    });
  }

  return (
    <div className="container mx-15 w-50 p-20">
      <Formik
        initialValues={Group}
        enableReinitialize={true}
        onSubmit={async (values, actions) => {
          console.log(values);
        }}
      >
        {({ handleChange, values }) => (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
      <img className="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
      <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Grupo a editar</h2>
    </div>

    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form className="space-y-6" action="#" method="POST">
        
        <div>
          <label className="block text-sm font-medium leading-6 text-gray-900">
            Nombre del grupo
          </label>
          <div className="mt-2">
            <input
              name="NameGroup"
              type="text"
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              onChange={handleChange}
              value={values.NameGroup}
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium leading-6 text-gray-900">
          Descripción
          </label>
          <div className="mt-2">
            <input
              name="Description"
              type="text"
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              onChange={handleChange}
              value={values.Description}
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium leading-6 text-gray-900">
            Miembros
          </label>
          <div className="mt-2">
            <input
              name="Members"
              type="number"
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              onChange={handleChange}
              value={values.Members}
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium leading-6 text-gray-900">
            Clasificacion
          </label>
          <div className="mt-2">
            <input
              name="Class"
              type="text"
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              onChange={handleChange}
              value={values.Class}
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium leading-6 text-gray-900">
            Lista 1
          </label>
          <div className="mt-2">
            <input
              name="List1"
              type="text"
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              onChange={handleChange}
              value={values.List1}
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium leading-6 text-gray-900">
            Lista 2
          </label>
          <div className="mt-2">
            <input
              name="List2"
              type="text"
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              onChange={handleChange}
              value={values.List2}
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium leading-6 text-gray-900">
            Lista 3
          </label>
          <div className="mt-2">
            <input
              name="List3"
              type="text"
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              onChange={handleChange}
              value={values.List3}
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium leading-6 text-gray-900">
            Lista 4
          </label>
          <div className="mt-2">
            <input
              name="List4"
              type="text"
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              onChange={handleChange}
              value={values.List4}
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium leading-6 text-gray-900">
            Imagen Principal
          </label>
          <div className="mt-2">
            <input
              name="Image"
              type="text"
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              onChange={handleChange}
              value={values.Image}
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium leading-6 text-gray-900">
            Imagen 1
          </label>
          <div className="mt-2">
            <input
              name="Image1"
              type="text"
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              onChange={handleChange}
              value={values.Image1}
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium leading-6 text-gray-900">
            Imagen 2
          </label>
          <div className="mt-2">
            <input
              name="Image2"
              type="text"
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              onChange={handleChange}
              value={values.Image2}
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium leading-6 text-gray-900">
            Imagen 3
          </label>
          <div className="mt-2">
            <input
              name="Image3"
              type="text"
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              onChange={handleChange}
              value={values.Image3}
            />
          </div>
        </div>

        <div> 
        <Link to="/groups">
          <button
            type='onSubmit'
            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            onClick={() => Editar(values.NameGroup, values.Description, values.Members, values.Class, values.List1, values.List2, values.List3, values.List4, values.Image, values.Image1, values.Image2, values.Image3)}
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
