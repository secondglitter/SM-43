import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Inicio from './paginas/inicio';
import Dashboard from './paginas/dashboard';
import ERROR from './componentes/404';
import Login from './paginas/login';
import Registro from './paginas/registro';
import Texto from './paginas/conocenos';
import Newuser from './paginas/newuser';
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
      path: "/newuser",
      element: <Newuser/>
    },
    {
      path: "/presentacion",
      element: <InicioGrupos/>
    },
    {
      path: "/grupos",
      element: <Grupos/>
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
  ])
  return(
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App;
