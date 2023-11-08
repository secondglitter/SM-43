import React from "react";
import "../estilos/Animations.css";
import "../estilos/efect-card.css";


function InicioGrupos() {
  return (
    <>

      <div className="fondo-pro-1">
        <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
          <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
            <div className="sm:max-w-lg slide-top">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                Bienvenido a los grupos
              </h1>
              <p className="mt-4 text-xl text-white">
                Aquí encontrarás los grupos de tus juegos favoritos
              </p>
            </div>
            <div>
              <div className="mt-40">
                <div
                  aria-hidden="true"
                  className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                >
                  <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                    <div className="flex items-center space-x-6 lg:space-x-8">
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100 rotate-in-ver">
                          <img
                            src="/imagenes/lol.jpg"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg rotate-in-ver">
                          <img
                            src="/imagenes/Elden.jpg"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg rotate-in-ver">
                          <img
                            src="/imagenes/apex.jpg"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg rotate-in-ver">
                          <img
                            src="/imagenes/Mortal_Kombat.jpg"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg rotate-in-ver">
                          <img
                            src="/imagenes/Minecraft.jpg"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg rotate-in-ver">
                          <img
                            src="/imagenes/Redead.jpg"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg rotate-in-ver">
                          <img
                            src="/imagenes/ForHonor.jpg"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <a
                  href="/"
                  className="mr-10 inline-block rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-center font-medium text-white separacion" >
                  Regresar
                </a>
                <a
                  href="/grupos"
                  className="inline-block rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-center font-medium text-white separacion" >
                  Continuar
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default InicioGrupos;