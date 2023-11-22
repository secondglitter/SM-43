import React from "react";
import "../estilos/Animations.css";
import "../estilos/efect-card.css";


function InicioGrupos() {
  return (
    <>
      <body className="estrellas">
        <div>
          <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
            <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
              <div className="slide-top-2">
                <div className="sm:max-w-lg slide-top">
                  <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                    Bienvenido a los grupos
                  </h1>
                  <p className="mt-4 text-xl text-white">
                    Aquí encontrarás los grupos de tus juegos favoritos
                  </p>
                </div>
              </div>
              <div>
                <div className="mt-52">
                  <div
                    aria-hidden="true"
                    className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                  >
                    <div className="absolute img-inicio-groups">
                      <div className="flex items-center space-x-6 lg:space-x-8">
                        <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                          <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100 rotate-in-ver marco-brillante">
                            <img
                              src="/imagenes/lol.jpg"
                              alt=""
                              className="h-full w-full object-cover object-center"
                            />
                          </div>
                          <div className="h-64 w-44 overflow-hidden rounded-lg rotate-in-ver  marco-brillante">
                            <img
                              src="/imagenes/Elden.jpg"
                              alt=""
                              className="h-full w-full object-cover object-center"
                            />
                          </div>
                        </div>
                        <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                          <div className="h-64 w-44 overflow-hidden rounded-lg rotate-in-ver marco-brillante">
                            <img
                              src="/imagenes/cod.jpg"
                              alt=""
                              className="h-full w-full object-cover object-center"
                            />
                          </div>
                          <div className="h-64 w-44 overflow-hidden rounded-lg rotate-in-ver marco-brillante">
                            <img
                              src="/imagenes/Halo.jpg"
                              alt=""
                              className="h-full w-full object-cover object-center"
                            />
                          </div>
                          <div className="h-64 w-44 overflow-hidden rounded-lg rotate-in-ver marco-brillante">
                            <img
                              src="/imagenes/hollow_knight1.jpg"
                              alt=""
                              className="h-full w-full object-cover object-center"
                            />
                          </div>
                        </div>
                        <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                          <div className="h-64 w-44 overflow-hidden rounded-lg rotate-in-ver marco-brillante">
                            <img
                              src="/imagenes/Redead.jpg"
                              alt=""
                              className="h-full w-full object-cover object-center"
                            />
                          </div>
                          <div className="h-64 w-44 overflow-hidden rounded-lg rotate-in-ver marco-brillante">
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
                    className="inline-block separacion" >
                    <div className="box">
                      <button className="button">Regresar</button>
                      <div className="space">
                        <span style={{ '--i': 31 }} className="star"></span>
                        <span style={{ '--i': 12 }} className="star"></span>
                        <span style={{ '--i': 57 }} className="star"></span>
                        <span style={{ '--i': 93 }} className="star"></span>
                        <span style={{ '--i': 23 }} className="star"></span>
                        <span style={{ '--i': 70 }} className="star"></span>
                        <span style={{ '--i': 6 }} className="star"></span>
                      </div>
                    </div>
                  </a>
                  <a
                    href="/grupos"
                    className="inline-block  separacion" >
                  <div className="box">
                      <button className="button">Continuar</button>
                      <div className="space">
                        <span style={{ '--i': 31 }} className="star"></span>
                        <span style={{ '--i': 12 }} className="star"></span>
                        <span style={{ '--i': 57 }} className="star"></span>
                        <span style={{ '--i': 93 }} className="star"></span>
                        <span style={{ '--i': 23 }} className="star"></span>
                        <span style={{ '--i': 70 }} className="star"></span>
                        <span style={{ '--i': 6 }} className="star"></span>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </>
  )
}

export default InicioGrupos;