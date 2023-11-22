import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../componentes/encabezado";
import Footer from "../componentes/footer";
import Cube from "../componentes/Cube";
import '../estilos/Glitch.css';

function Noticias() {
    const [noticias, setNoticias] = useState([]);

    useEffect(() => {
        fetchNoticias();
    }, []);

    const fetchNoticias = async () => {
        try {
            const response = await axios.get(
                'https://newsapi.org/v2/everything?q=videojuegos&from=2023-11-21&to=2023-11-22&apiKey=5c089e19f2324d0583f5b57f90c48f42'
            );
            setNoticias(response.data.articles);
            console.log('Datos de la API', response.data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
            <Header></Header>
            <div className="bg-black py-24 ">
                
            <div className="Cube-cont">
                            <Cube></Cube>
                        </div>
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:mx-0">
                        <h2 className="text-3xl font-bold tracking-tight title-noticia">Noticias</h2>
                        <p className="mt-2 text-lg leading-8 title-noticia-2">
                            Las noticias más recientes sobre el mundo de los videojuegos
                        </p>
                    </div>
                    <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                        {noticias.map((noticia) => (
                            <article key={noticia.publishedAt} className="flex max-w-xl flex-col items-start justify-between">
                                <div className="group relative">
                                    <h3 className="mt-3 text-lg font-semibold leading-6 texto-brillante">
                                        <a href={noticia.url}>
                                            <span className="absolute inset-0" />
                                            {noticia.title}
                                        </a>
                                        <div className="flex items-center gap-x-4 text-xs">
                                            <time className="text-gray-500">{noticia.publishedAt}</time>
                                        </div>
                                        <br></br>
                                        <img src={noticia.urlToImage} alt="" className="h-60 w-92 bg-gray-50 imagen-con-borde" />
                                    </h3>
                                    <p className="mt-5 line-clamp-3 text-sm leading-6 texto-brillante">{noticia.description}</p>
                                </div>
                                <div className="relative mt-8 flex items-center gap-x-4">
                                    <div className="text-sm leading-6">
                                        <p className="font-semibold texto-brillante">
                                            <a href={noticia.author.href}>
                                                <span className="absolute inset-0" />
                                                {noticia.author}
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
}

export default Noticias;
