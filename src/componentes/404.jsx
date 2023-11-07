// 1- importar react
import React from 'react'
// agregar los  enlaces


// 2- crear la funcion
function ERROR() {
    // 3- Metodo que regresa el html
    return (
        <>

<main class="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
  <div class="text-center">
    <p class="text-base font-semibold text-indigo-600">404</p>
    <h1 class="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Pagina no encontrada</h1>
    <p class="mt-6 text-base leading-7 text-gray-600">Disculpa la pagina que busca no se encuentra</p>
    <div class="mt-10 flex items-center justify-center gap-x-6">
      <a href="/" class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Regresar al inicio</a>
    </div>
  </div>
</main>

        </>
    );
}
export default ERROR;