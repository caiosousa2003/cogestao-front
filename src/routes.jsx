import {
    createBrowserRouter,
    Route,
    createRoutesFromElements,
    RouterProvider,
  } from 'react-router-dom';
import AppLayout from './components/appLayout/AppLayout';
import Home from './pages/Home/Home';
import GerenciarEventos from './pages/GerenciarEventos/GerenciarEventos';
import Eventos from './pages/Eventos/Eventos';
  
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/' element={<AppLayout />}>
            <Route index element={<Home />} />
            <Route path="gerenciar-eventos" element={<GerenciarEventos/>}/>
            <Route path="eventos" element={<Eventos/>}/>
        </Route>
      </Route>,
    ),
  );
  
  export default function Routes() {
    return <RouterProvider router={router} />;
  }
  