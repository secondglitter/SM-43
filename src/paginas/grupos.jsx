import React from "react";
import Encabezado from "../componentes/encabezado";
import Footer from "../componentes/footer";


// 2-
const products = [
    {
      id: 1,
      name: 'Apex Legends',
      href: '/grupos/apex',
      imageSrc: '/imagenes/apex.jpg',
      imageAlt: "Apex",
    },
    {
        id: 2,
        name: 'Call of Duty',
        href: '/grupos/cod',
        imageSrc: '/imagenes/cod.jpg',
        imageAlt: "Call of Duty",
        
      },
      {
        id: 3,
        name: 'Elden Ring',
        href: '/grupos/elden',
        imageSrc: '/imagenes/Elden4.jpg',
        imageAlt: "Elden Ring",
        
      },
      {
        id: 4,
        name: 'For Honor',
        href: '/grupos/forhonor',
        imageSrc: '/imagenes/ForHonor.jpg',
        imageAlt: "For Honor",
        
      },
      {
        id: 5,
        name: 'League of Legends',
        href: '/grupos/lol',
        imageSrc: '/imagenes/lol.jpg',
        imageAlt: "league of legends",
        
      },
      {
        id: 6,
        name: 'Minecraft',
        href: '/grupos/minecraft',
        imageSrc: '/imagenes/Minecraft.jpg',
        imageAlt: "Minecraft",
        
      },
      {
        id: 7,
        name: 'Mortal Kombat',
        href: '/grupos/mortalkombat',
        imageSrc: '/imagenes/Mortal_Kombat.jpg',
        imageAlt: "Mortal Kombat",
        
      },
      {
        id: 8,
        name: 'Red dead redemption II',
        href: '/grupos/redead',
        imageSrc: '/imagenes/Redead.jpg',
        imageAlt: "Red dead redemption II",
        
      },
      {
        id: 9,
        name: 'Smite',
        href: '/grupos/redead',
        imageSrc: '/imagenes/Smite.jpg',
        imageAlt: "Red dead redemption II",
        
      },
      {
        id: 10,
        name: 'Hollow Knigth',
        href: '/grupos/redead',
        imageSrc: '/imagenes/Redead.jpg',
        imageAlt: "Red dead redemption II",
        
      },
      {
        id: 11,
        name: 'Gears ',
        href: '/grupos/redead',
        imageSrc: '/imagenes/Redead.jpg',
        imageAlt: "Red dead redemption II",
        
      },
      {
        id: 12,
        name: 'Halo',
        href: '/grupos/redead',
        imageSrc: '/imagenes/Redead.jpg',
        imageAlt: "Red dead redemption II",
        
      },
      {
        id: 13,
        name: 'Street Fighter',
        href: '/grupos/redead',
        imageSrc: '/imagenes/Redead.jpg',
        imageAlt: "Red dead redemption II",
        
      },
      {
        id: 14,
        name: 'Super Smash Bros',
        href: '/grupos/redead',
        imageSrc: '/imagenes/Redead.jpg',
        imageAlt: "Red dead redemption II",
        
      },
      {
        id: 15,
        name: 'Souls',
        href: '/grupos/redead',
        imageSrc: '/imagenes/Redead.jpg',
        imageAlt: "Red dead redemption II",
        
      },
      {
        id: 16,
        name: 'Leaf for dead',
        href: '/grupos/redead',
        imageSrc: '/imagenes/Redead.jpg',
        imageAlt: "Red dead redemption II",
        
      },
      {
        id: 17,
        name: 'Valorant',
        href: '/grupos/redead',
        imageSrc: '/imagenes/Redead.jpg',
        imageAlt: "Red dead redemption II",
        
      },
      {
        id: 18,
        name: 'Titanfall 2',
        href: '/grupos/redead',
        imageSrc: '/imagenes/Redead.jpg',
        imageAlt: "Red dead redemption II",
        
      },
      {
        id: 19,
        name: 'La tierra media',
        href: '/grupos/redead',
        imageSrc: '/imagenes/Redead.jpg',
        imageAlt: "Red dead redemption II",
        
      },
      {
        id: 20,
        name: 'Destiny',
        href: '/grupos/redead',
        imageSrc: '/imagenes/Redead.jpg',
        imageAlt: "Red dead redemption II",
        
      },
    // More products...
  ]
  
function Grupos() {
  // 3-
  return (
    <>
      <Encabezado />

     <div className="inicio-container">
        <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Nuestros grupos</h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
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

export default Grupos;