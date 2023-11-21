import React,{useState, useEffect} from "react";
import axios from "axios";
import Encabezado from "../componentes/encabezado";
import Footer from "../componentes/footer";

  
function Categorias() {
  // 3-  const [view, setView] = useState(false)
   
  const [Categorias, setCategorias] = useState([]);
  useEffect(() => {
    fecthCategorias()
  }, []);

  const fecthCategorias = async () => {
    try{
    const response = await axios.get('http://localhost:3000/categorias/')
    setCategorias(response.data)
    console.log('Datos de la api')
    console.log(response.data)
    } catch(error) {
      console.log(error)
    }
  }
  return (
    <>
      <Encabezado />

     <div className="inicio-container">
        <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Nuestras categorias</h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {Categorias.map((categoria) => (
            <div key={categoria.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src={`/imagenes/${categoria.Imagen}`}
                  alt={categoria.imageAlt}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                  <a href={categoria.URL}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {categoria.Categoria}
                    </a>
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
     </div>
     </div>
      <Footer />
    </>
  );
}

// 4-

export default Categorias;