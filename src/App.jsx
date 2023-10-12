import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Inicio from './pagina/inicio';
import Dashboard from './pagina/dashboard';
import ERROR from './componentes/404';

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
    }
  ])
  return(
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App;
