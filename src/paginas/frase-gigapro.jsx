// 1- importar react
import React from 'react'
import AnimatedTypingText from '../componentes/Frase-Gigapro';
import '../estilos/frase-gigapro.css';
import Encabezado from '../componentes/encabezado';
import Footer from '../componentes/footer';


// 2- crear la funcion
function Frase() {
    // 3- Metodo que regresa el html
    return (
        <>
            <Encabezado />
            <div className='frase-fondo frase-texto'>
            <br /><br /><br /><br /><br /><br /><br />
                <h1>
                    <AnimatedTypingText
                        text="  Cada clic es una aventura... Cada jugador es una leyenda... Y cada consola es un portal hacia mundos infinitos..."
                        typingSpeed={60} // Velocidad de escritura en milisegundos por caracter
                        delay={1000} // Retardo en milisegundos antes de comenzar la animación
                    />
                </h1>
            <br /><br /><br /><br /><br /><br /><br />
            </div>
            <Footer />
        </>
    );
}

// 4- exportamos
export default Frase;