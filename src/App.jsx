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
import Apex from './paginas/grupos/apex';
import Cod from './paginas/grupos/cod';
import Elden from './paginas/grupos/elden';
import ForHonor from './paginas/grupos/forhonor';
import Lol from './paginas/grupos/lol';
import Minecraft from './paginas/grupos/minecraft';
import MortalKombat from './paginas/grupos/mortalkombat';
import RedeadII from './paginas/grupos/rd2';
import API from './paginas/API';
import ApiGob from './paginas/api_del_gobierno';
import Grupoid from './paginas/grupos-id';
import Frase from './paginas/frase-gigapro';
import Noticias from './paginas/noticias';
import Noticias2 from './paginas/noticias-2';
import Categorias from './paginas/cateogias';
// Trivia
import TablaTrivia from './paginas/tabla-de-trivia';
import Newtrivia from './paginas/newtrivia';
import Updatetrivia from './paginas/updatetrivia';
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
    {
      path: "/category",
      element: <Category/>
    },
    {
      path: "/tablatrivia",
      element: <TablaTrivia/>
    },
    {
      path: "/newcategory",
      element: <NewCategory/>
    },
    {
      path: "/updatetrivia/:id",
      element: <Updatetrivia/>
    },
    {
      path: "/newhistoria",
      element: <Newhistoria />
    },
    {
      path: "/updatehistoria/:id",
      element: <UpdateHistoria />
    },
    {
      path: "/tablapersonaje",
      element: <TablaPersonaje />
    },
    //Trivia
    {
      path: "/newpersonaje",
      element: <NewPersonaje/>
    },
    {
      path: "/updatepesonaje/:id",
      element: <UpdatePersonaje />
    },
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
    {
      path: "/updatecategory/:id",
      element: <Updatecategory/>
    },
    {
      path: "/tablahistoria",
      element: <TablaHistoria />
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
      path: "/grupos/apex",
      element: <Apex/>
    },
    {
      path: "/grupos/cod",
      element: <Cod/>
    },
    {
      path: "/grupos/elden",
      element: <Elden/>
    },
    {
      path: "/grupos/forhonor",
      element: <ForHonor/>
    },
    {
      path: "/grupos/lol",
      element: <Lol/>
    },
    {
      path: "/grupos/minecraft",
      element: <Minecraft/>
    },
    {
      path: "/grupos/mortalkombat",
      element: <MortalKombat/>
    },
    {
      path: "/grupos/redead",
      element: <RedeadII/>
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
      path: "/noticias-2",
      element: <Noticias2/>
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