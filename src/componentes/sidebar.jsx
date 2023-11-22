import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../estilos/Sidebar.css";

function Sidebar() {
  const [view, setView] = useState(false)

  const [Users, setUsers] = useState([]);
  useEffect(() => {
    fecthUsers()
  }, []);

  const HandeDelte = async (id) => {

    const response = await axios.delete(`http://localhost:3000/users/${id}`);

    if (response.status == 200) {
      alert("Se borro correctamente")
    } else {
      alert("Sucedio un error")
    }
    fecthUsers()
  }

  const fecthUsers = async () => {
    try {
      const response = await axios.get('http://localhost:3000/users')
      setUsers(response.data)
      console.log('Datos de la api')
      console.log(response.data)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>

      <body>
        <div className="div-sidebar">
          <ul className="ul-sidebar">
          <Link to="/"><li className="li-sidebar" style={{ '--i': 9 }}><a className="a-sidebar" >Inicio</a><img className="img-sidebar" src="https://cdn-icons-png.flaticon.com/128/69/69524.png"/></li></Link>
          <Link to="/estadisticas"><li className="li-sidebar" style={{ '--i': 8 }}><a className="a-sidebar" >Estadísticas</a><img className="img-sidebar" src="https://cdn-icons-png.flaticon.com/128/603/603066.png"/></li></Link>
          <Link to="/users"><li className="li-sidebar" style={{ '--i': 7 }}><a className="a-sidebar" >Usuarios<img className="img-sidebar" src="https://cdn-icons-png.flaticon.com/128/12117/12117593.png"/></a></li></Link>
          <Link to="/groups"><li className="li-sidebar" style={{ '--i': 6 }}><a className="a-sidebar" >Grupos</a><img className="img-sidebar" src="https://cdn-icons-png.flaticon.com/128/11507/11507818.png"/></li></Link>
          <Link to="/category"><li className="li-sidebar" style={{ '--i': 5 }}><a className="a-sidebar" >Categorias</a><img className="img-sidebar" src="https://cdn-icons-png.flaticon.com/128/3405/3405802.png"/></li></Link>
          <Link to="/frases"><li className="li-sidebar" style={{ '--i': 4 }}><a className="a-sidebar" >Frases</a><img className="img-sidebar" src="https://cdn-icons-png.flaticon.com/128/4928/4928929.png"/></li></Link>
          <Link to="/tablahistoria"><li className="li-sidebar" style={{ '--i': 3 }}><a className="a-sidebar" >Historia</a><img className="img-sidebar" src="https://cdn-icons-png.flaticon.com/128/1422/1422756.png"/></li></Link>
          <Link to="/tablapersonaje"><li className="li-sidebar" style={{ '--i': 2 }}><a className="a-sidebar" >Personajes</a><img className="img-sidebar" src="https://cdn-icons-png.flaticon.com/128/5825/5825396.png"/></li></Link>
          <Link to="/tablalogro"><li className="li-sidebar" style={{ '--i': 1 }}><a className="a-sidebar" >Logros</a><img className="img-sidebar" src="https://cdn-icons-png.flaticon.com/128/6491/6491012.png"/></li></Link>
          <Link to="/404"><li className="li-sidebar" style={{ '--i': 0}}><a className="a-sidebar" >Salir</a><img className="img-sidebar" src="https://cdn-icons-png.flaticon.com/128/320/320140.png"/></li></Link>
          </ul>
        </div>
      </body>

    </>
  );
}

export default Sidebar;