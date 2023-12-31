import React, { useState, useEffect } from "react";
import axios from "axios";
import '../estilos/inicio.css';
import '../estilos/Animations.css';
import '../estilos/Cube.css';
import '../estilos/article-card.css';
import Header from "../componentes/encabezado";
import Footer from "../componentes/footer";
import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom";

// 2-
function Inicio() {

  //apex

  const { id } = useParams();

  const [Groups, setGroups] = useState([]);
  useEffect(() => {
    fecthGroups(8)
  }, []);

  const fecthGroups = async (id) => {
    try {
      const response = await axios.get(`http://localhost:3000/groups/${id}`)
      setGroups(response.data)
      // console.log('Datos de la api')
      // console.log(response.data)
    } catch (error) {
      // console.log(error)
    }
  }

  //cod

  const { id1 } = useParams();

  const [Groups1, setGroups1] = useState([]);
  useEffect(() => {
    fecthGroups1(11)
  }, []);

  const fecthGroups1 = async (id1) => {
    try {
      const response = await axios.get(`http://localhost:3000/groups/${id1}`)
      setGroups1(response.data)
      // console.log('Datos de la api')
      // console.log(response.data)
    } catch (error) {
      // console.log(error)
    }
  }

  //LoL

  const { id2 } = useParams();

  const [Groups2, setGroups2] = useState([]);
  useEffect(() => {
    fecthGroups2(3)
  }, []);

  const fecthGroups2 = async (id2) => {
    try {
      const response = await axios.get(`http://localhost:3000/groups/${id2}`)
      setGroups2(response.data)
      // console.log('Datos de la api')
      // console.log(response.data)
    } catch (error) {
      // console.log(error)
    }
  }

  //For Honor

  const { id3 } = useParams();

  const [Groups3, setGroups3] = useState([]);
  useEffect(() => {
    fecthGroups3(4)
  }, []);

  const fecthGroups3 = async (id3) => {
    try {
      const response = await axios.get(`http://localhost:3000/groups/${id3}`)
      setGroups3(response.data)
      // console.log('Datos de la api')
      // console.log(response.data)
    } catch (error) {
      // console.log(error)
    }
  }

  //frase

  const [frases, setFrases] = useState({});
  const randomId = Math.floor(Math.random() * 10) + 1;

  useEffect(() => {
    const loadUser = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/frases/${randomId}`);
        console.log(response);
        setFrases({
          Texto: response.data.Texto,
          Autor: response.data.Autor,
        });
      } catch (error) {
        console.error("Error while loading user: ", error);
      }
    };

    loadUser();
  }, [randomId]);

  // 3-
  return (
    <>
      <body className="fondo-pro-4">
        <Header></Header>
        <div className="inicio-container">

          <div className="bienvenida">
            <br />
            <div className="title-2"><span>MONKEYS GAMES</span></div>

          </div>
          <br />
          <br />
          <div className="contenido">
            <div className="seccion" style={{ padding: '3px', width: '100%', height: '100px' }}>
              <span className="title-3">-Frase del día-</span>
              <br></br>
              <span className="title-3">{frases.Texto}</span>
              <span className="title-3">{frases.Autor}</span>
              <div className="card-container-1">
                <div className="card-1">
                  <div className="main-content">
                    <div className="header">
                    </div>
                    <p className="heading">¿QUIERES DIVERTIRTE UN RATO Y DESESTRESARTE? JUEGA LEAGUE OF LEGENDS</p>
                    <br />
                    <Link to="https://www.leagueoflegends.com/es-mx/"><button class="learn-more"> JUGAR AHORA
                    </button></Link>
                  </div>
                  <div className="by">
                    - by LL
                  </div>
                </div>
              </div>

              <div className="card-container-2">
                <div className="card-1">
                  <div className="main-content">
                    <div className="header">
                    </div>
                    <p className="heading">Conoce nuestras categorias de videojuegos y encuentra tu favorita</p>
                    <br />
                    <Link to="/categorias"><button class="learn-more"> Conocer Ahora
                    </button></Link>
                  </div>
                  <div className="by">
                    - by LL
                  </div>
                </div>
              </div>

              <div className="card-container-3">
                <div className="card-1">
                  <div className="main-content">
                    <div className="header">
                    </div>
                    <p className="heading">Adentrate en las noticias de tus juegos favoritos y enterate de todo lo nuevo</p>
                    <br />
                    <Link to="/noticias-2"><button class="learn-more"> Ver mas
                    </button></Link>
                  </div>
                  <div className="by">
                    - by LL
                  </div>
                </div>
              </div>

              <div className="card-art">
                <div className="content-art">
                  <p className="heading-art">¿Eres un Gamer real?</p>
                  <p className="para-art">
                    Tomate un descanso y comprueba cual es tu conocimiento
                    general sobre los videojuegos que ha existido a lo largo de la historia.
                  </p>
                  <Link to="/trivia">
                    <button className="btn-art">VAMOS JUGAR</button>
                  </Link>
                </div>
              </div>

              <div className="myCard-1">
                <div className="innerCard">
                  <div className="frontSide">
                    <p className="title2">BEST GAME</p>
                    <p>Descubre el juego más popular</p>
                    <p className="title2">☝🏼</p>
                  </div>
                  <div className="backSide">
                    <Link to={"/grupos/" + Groups2.id}><img src={`/imagenes/${Groups2.Image}`} /></Link>
                  </div>
                </div>
              </div>

              <div className="myCard-2">
                <div className="innerCard">
                  <div className="frontSide">
                    <p className="title2">NEW GAME</p>
                    <p>Descubre el juego más reciente</p>
                    <p className="title2">☝🏼</p>
                  </div>
                  <div className="backSide">
                    <Link to={"/grupos/" + Groups1.id}><img src={`/imagenes/${Groups1.Image}`} /></Link>
                  </div>
                </div>
              </div>

              <div className="myCard-3">
                <div className="innerCard">
                  <div className="frontSide">
                    <p className="title2">BEST GROUP</p>
                    <p>Descubre el grupo más popular</p>
                    <p className="title2">☝🏼</p>
                  </div>
                  <div className="backSide">
                    <Link to={"/grupos/" + Groups3.id}><img src={`/imagenes/${Groups3.Image}`} /></Link>
                  </div>
                </div>
              </div>

            </div>
            <div className="inicio-container-cube">
              <div className="cube-card">
                <div className="cube">
                  <div className="face front">
                    <Link to={"/grupos/" + Groups2.id}><img src={`/imagenes/${Groups2.Image}`} /></Link>
                  </div>
                  <div className="face back">
                    <Link to={"/grupos/" + Groups.id}><img src={`/imagenes/${Groups.Image}`} /></Link>
                  </div>
                  <div className="face left">
                    <Link to={"/grupos/" + Groups1.id}><img src={`/imagenes/${Groups1.Image}`} /></Link>
                  </div>
                  <div className="face right">
                    <Link to={"/grupos/" + Groups3.id}><img src={`/imagenes/${Groups3.Image}`} /></Link>
                  </div>
                </div>
              </div>
            </div>
            <div class="image-container">
              <img src="/imagenes/robot.png" />
            </div>
            <br />
          </div>
          <br /><br /><br /><br /><br /><br /><br /><br />
          <br /><br /><br /><br /><br /><br /><br /><br />
          <br /><br /><br /><br />
        </div>
        <Footer></Footer>
      </body>
    </>
  );
}

export default Inicio;