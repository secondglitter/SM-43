import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Inicio from './pagina/inicio';
import Dashboard from './pagina/dashboard';
import ERROR from './componentes/404';
import Login from './pagina/login';
import Registro from './pagina/registro';

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
    }
  ])
  return(
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App;
