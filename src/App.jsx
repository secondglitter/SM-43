import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Inicio from './paginas/inicio';
import Dashboard from './paginas/dashboard';
import ERROR from './componentes/404';
import Login from './paginas/login';
import Registro from './paginas/registro';
import Texto from './paginas/conocenos';
//User
import Users from './paginas/users';
import Newuser from './paginas/newuser';
import Updateuser from './paginas/updateuser';
//Group
import Group from './paginas/group';
import Newgroup from './paginas/newgroup';
import Updategroup from './paginas/updategroup';
//Frases
import Frases from './paginas/frases';
import NewFrase from './paginas/newfrase';
import Updatefrase from './paginas/updatefrase';
//Category
import Category from './paginas/category';
import NewCategory from './paginas/newcategory';
import Updatecategory from './paginas/updatecategory';
//Historia
import TablaHistoria from './paginas/history';
import Newhistoria from './paginas/newhistory';
import UpdateHistoria from './paginas/updatehistory';
//Personajes
import TablaPersonaje from './paginas/tabla-personajes';
import NewPersonaje from './paginas/newpersonaje';
import UpdatePersonaje from './paginas/updatepersonaje';
//Logros
import TablaLogro from './paginas/tabla-logros';
import NewLogro from './paginas/newlogro';
import UpdateLogro from './paginas/updatelogro';
//Paginas
import InicioGrupos from './paginas/inicio-grupos';
import Grupos from './paginas/grupos';
import API from './paginas/API';
import ApiGob from './paginas/api_del_gobierno';
import Grupoid from './paginas/grupos-id';
import Frase from './paginas/frase-gigapro';
import Noticias from './paginas/noticias';
import Categorias from './paginas/cateogias';
// Trivia
import TriviaGame from './paginas/trivia';
//Categorias Paginas
import Shooter from './categorias/shooter';
import Moba from './categorias/moba';
import Action from './categorias/action';
import Construction from './categorias/construction';
import Fight from './categorias/fight';
import MundoAbierto from './categorias/mundo_abierto';
import MenuGrupos from './paginas/menu-grupos';
// Estadísticas
import Estadisticas from './paginas/Estadisticas';
import Historia from './paginas/historia';
import PersonajesApex from './personajes/PersonajesApex';
import LogrosApex from './logros/logrosapex';




function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Inicio/>
    },
    {
      path: "/dashboard",
      element: <Dashboard/>
    },
    {
      path: "/estadisticas",
      element: <Estadisticas/>
    },
    {
      path: "/404",
      element: <ERROR/>
    },
    {
      path: "/login",
      element: <Login/>
    },
    {
      path: "/registro",
      element: <Registro/>
    },
    {
      path: "/conocenos",
      element: <Texto/>
    },
    //CRUD DE USUARIO
    {
      path: "/users",
      element: <Users/>
    },
    {
      path: "/newuser",
      element: <Newuser/>
    },
    {
      path: "/updateuser/:id",
      element: <Updateuser/>
    },
    //CRUD DE GRUPOS
    {
      path: "/groups",
      element: <Group/>
    },
    {
      path: "/newgroup",
      element: <Newgroup/>
    },
    {
      path: "/updategroup/:id",
      element: <Updategroup/>
    },
    {
      path: "/presentacion",
      element: <InicioGrupos/>
    },
    //CRUD DE FRASES
    {
      path: "/frases",
      element: <Frases/>
    },
    {
      path: "/newfrase",
      element: <NewFrase/>
    },
    {
      path: "/updatefrase/:id",
      element: <Updatefrase/>
    },
    //CRUD DE CATEGORIAS
    {
      path: "/category",
      element: <Category/>
    },
    {
      path: "/newcategory",
      element: <NewCategory/>
    },
    {
      path: "/updatecategory/:id",
      element: <Updatecategory/>
    },
    //CRUD DE HISTORIA
    {
      path: "/tablahistoria",
      element: <TablaHistoria />
    },
    {
      path: "/newhistoria",
      element: <Newhistoria />
    },
    {
      path: "/updatehistoria/:id",
      element: <UpdateHistoria />
    },
    //CRUD DE PERSONAJES
    {
      path: "/tablapersonaje",
      element: <TablaPersonaje />
    },
    {
      path: "/newpersonaje",
      element: <NewPersonaje/>
    },
    {
      path: "/updatepesonaje/:id",
      element: <UpdatePersonaje />
    },
    //CRUD DE LOGROS
    {
      path: "/tablalogro",
      element: <TablaLogro />
    },
    {
      path: "/newlogro",
      element: <NewLogro/>
    },
    {
      path: "/updatelogro/:id",
      element: <UpdateLogro />
    },
    //Categorias paginas
    {
      path: "/categorias/Shooter",
      element: <Shooter />
    },
    {
      path: "/categorias/Moba",
      element: <Moba />
    },
    {
      path: "/categorias/Action",
      element: <Action />
    },
    {
      path: "/categorias/Construction",
      element: <Construction />
    },
    {
      path: "/categorias/Fight",
      element: <Fight />
    },
    {
      path: "/categorias/Mundo abierto",
      element: <MundoAbierto />
    },
    //PAGINAS
    {
      path: "/presentacion",
      element: <InicioGrupos />
    },
    {
      path: "/grupos",
      element: <Grupos/>
    },
    {
      path: "/grupos/:id",
      element: <Grupoid/>
    },
    {
      path:"/API",
      element: <API/>
    },
    {
      path: "/gobierno",
      element: <ApiGob/>
    },
    {
      path: "/frase-gigapro/",
      element: <Frase/>
    },
    {
      path: "/noticias",
      element: <Noticias/>
    },
    {
      path: "/categorias",
      element: <Categorias/>
    },
    {
      path: "/trivia",
      element: <TriviaGame />
    },
    {
      path: "/grupos/menu/:id",
      element: <MenuGrupos />
    },
    {
      path: "/grupos/historia/:id",
      element: <Historia />
    },
    {
      path: "/grupos/personajes/Apex Legends",
      element: <PersonajesApex />
    },
    {
      path: "/grupos/logros/Apex Legends",
      element: <LogrosApex />
    },
    


  ])
  return(
    <>
    <RouterProvider router={router}/>
    </>
  )
}


export default App;