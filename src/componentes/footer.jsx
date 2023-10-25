<<<<<<< HEAD
// 1- importar react
import React from 'react'
// agregar los  enlaces
import '../estilos/footer.css';


// 2- crear la funcion
function Footer() {
    // 3- Metodo que regresa el html
    return (
        <>
                        <footer class="footer">
                        <div>Todos los derechos reservados a monkeys games | SM-43</div>
                        </footer>
        </>
    );
}

// 4- exportamos
=======
// 1- importar react
import React from 'react'
// agregar los  enlaces
import '../estilos/footer.css';
import { Link } from 'react-router-dom';


// 2- crear la funcion
function Footer() {
    // 3- Metodo que regresa el html
    return (
        <>
                        <footer class="footer">
                        <div>Todos los derechos reservados a monkeys games | SM-43 | <Link to = "/frase-gigapro">🐵</Link></div>
                        </footer>
        </>
    );
}

// 4- exportamos
>>>>>>> 6fdab3317e7e6244b5f5d573370dfe23d080f4fa
export default Footer;