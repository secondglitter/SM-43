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
//Trivia
import TablaTrivia from './paginas/tabla-de-trivia';
import Newtrivia from './paginas/newtrivia';
import Updatetrivia from './paginas/updatetrivia';
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
import Categorias from './paginas/cateogias';
import TriviaGame from './paginas/trivia';
//Categorias Paginas
import Shooter from './categorias/shooter';
import Moba from './categorias/moba';
import Action from './categorias/action';
import Construction from './categorias/construction';
import Fight from './categorias/fight';
import MundoAbierto from './categorias/mundo_abierto';
import MenuGrupos from './paginas/menu-grupos';




function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Inicio />
    },
    {
      path: "/dashboard",
      element: <Dashboard />
    },
    {
      path: "/404",
      element: <ERROR />
    },
    {
      path: "/login",
      element: <Login />
    },
    {
      path: "/registro",
      element: <Registro />
    },
    {
      path: "/conocenos",
      element: <Texto />
    },
    //CRUD DEL DASHBOARD
    //Usuarios
    {
      path: "/users",
      element: <Users />
    },
    {
      path: "/newuser",
      element: <Newuser />
    },
    {
      path: "/updateuser/:id",
      element: <Updateuser />
    },
    //Grupos
    {
      path: "/groups",
      element: <Group />
    },
    {
      path: "/newgroup",
      element: <Newgroup />
    },
    {
      path: "/updategroup/:id",
      element: <Updategroup />
    },
    //Frases
    {
      path: "/frases",
      element: <Frases />
    },
    {
      path: "/newfrase",
      element: <NewFrase />
    },
    {
      path: "/updatefrase/:id",
      element: <Updatefrase />
    },
    //Categorias
    {
      path: "/category",
      element: <Category />
    },
    {
      path: "/newcategory",
      element: <NewCategory />
    },
    {
      path: "/updatecategory/:id",
      element: <Updatecategory />
    },
    //Trivia
    {
      path: "/tablatrivia",
      element: <TablaTrivia />
    },
    {
      path: "/newtrivia",
      element: <Newtrivia />
    },
    {
      path: "/updatetrivia/:id",
      element: <Updatetrivia />
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
      element: <Grupos />
    },
    {
      path: "/grupos/:id",
      element: <Grupoid />
    },
    {
      path: "/grupos/apex",
      element: <Apex />
    },
    {
      path: "/grupos/cod",
      element: <Cod />
    },
    {
      path: "/grupos/elden",
      element: <Elden />
    },
    {
      path: "/grupos/forhonor",
      element: <ForHonor />
    },
    {
      path: "/grupos/lol",
      element: <Lol />
    },
    {
      path: "/grupos/minecraft",
      element: <Minecraft />
    },
    {
      path: "/grupos/mortalkombat",
      element: <MortalKombat />
    },
    {
      path: "/grupos/redead",
      element: <RedeadII />
    },
    {
      path: "/API",
      element: <API />
    },
    {
      path: "/gobierno",
      element: <ApiGob />
    },
    {
      path: "/frase-gigapro/",
      element: <Frase />
    },
    {
      path: "/noticias",
      element: <Noticias />
    },
    {
      path: "/categorias",
      element: <Categorias />
    },
    {
      path: "/trivia",
      element: <TriviaGame />
    },
    {
      path: "/categorias/menu/:id",
      element: <MenuGrupos />
    },



  ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}


export default App;