import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link,useParams } from "react-router-dom";
import Header from "../componentes/encabezado";
import Footer from "../componentes/footer";

export default function LogrosApex() {
    const { id } = useParams();

    const [Groups, setGroups] = useState([]);
    useEffect(() => {
        fecthGroups(1)
    }, []);

    const fecthGroups = async (id) => {
        try {
            const response = await axios.get(`http://localhost:3000/logros/${id}`)
            setGroups(response.data)
            // console.log('Datos de la api')
            // console.log(response.data)
        } catch (error) {
            // console.log(error)
        }
    }

    const posts = [
        {
            id: 1,
            logro: Groups.NombreLogro,
            description: Groups.Description,
            valor: Groups.Valor,
            trofeo: Groups.Trofeo,
            imageUrl: `/imagenes/${Groups.Imagen}`,
        },
        // More posts...
    ]
    return (
        <>
        <Header></Header>
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                <Link to={"/grupos/menu/"+ Groups.id}><button className="text-base font-semibold leading-7 text-indigo-600">Regresar</button></Link>
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Logros de Apex Legends</h2>
                    <p className="mt-2 text-lg leading-8 text-gray-600">
                        ¿Cuales te faltan?
                    </p>
                </div>
                <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {posts.map((post) => (
                        <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
                            <div className="flex items-center gap-x-4 text-xs">
                            </div>
                            <div className="group relative">
                                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900">
                                    <a>
                                        <span className="absolute inset-0" />
                                        {post.logro}
                                    </a>
                                    <br></br><br></br>
                                    <img src={post.imageUrl} alt="" className="h-60 w-80 bg-gray-50 imagen-con-borde" />
                                </h3>
                                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
                            </div>
                            <div className="relative mt-4 flex items-center gap-x-4">
                                <div className="text-sm leading-6">
                                    <p className="font-semibold text-gray-900">
                                        <a >
                                            <span className="absolute inset-0" />
                                            Logro en xbox: {post.valor}
                                        </a>
                                    </p>
                                    <p className="font-semibold text-gray-900">
                                        <a >
                                            <span className="absolute inset-0" />
                                            Trofeo en playstation: {post.trofeo}
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
    )
}