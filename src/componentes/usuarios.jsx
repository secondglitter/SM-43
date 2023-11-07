import React from "react";

function Usuarios() {
    return (
        <>

            <div class="p-4 sm:ml-64">
                <div class="p-4 sm:ml-50">
                    <div class="p-20 border-dashed">

                        <div class="flex items-center justify-center h-48 mb-4 rounded">
                            <div class="container">
                                <div class="relative  left-70 top-24">
                                    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                        <thead class="text-xs text-gray-900 uppercase dark:bg-gray-700 dark:text-gray-400">
                                            <tr>
                                                <th scope="col" class="px-6 py-3">
                                                    ID
                                                </th>
                                                <th scope="col" class="px-6 py-3">
                                                    Nombre
                                                </th>
                                                <th scope="col" class="px-6 py-3">
                                                    Apellidos
                                                </th>
                                                <th scope="col" class="px-6 py-3">
                                                    Nombre de usuario
                                                </th>
                                                <th scope="col" class="px-6 py-3">
                                                    Contraseña
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>

                                            {Users.map((users) => (

                                                <tr class="border-b dark:border-gray-700">
                                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                                        {users.id}
                                                    </th>
                                                    <td class="px-6 py-4">
                                                        {users.Nombre}
                                                    </td>
                                                    <td class="px-6 py-4">
                                                        {users.Apellido}
                                                    </td>
                                                    <td class="px-6 py-4">
                                                        {users.UserName}
                                                    </td>
                                                    <td class="px-6 py-4">
                                                        {users.Password}
                                                    </td>
                                                    <td class="px-6 py-4">
                                                        <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
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
        </>

    );
}
export default Usuarios;