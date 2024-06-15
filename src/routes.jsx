import {
    createBrowserRouter,
    Route,
    createRoutesFromElements,
    RouterProvider,
  } from 'react-router-dom';
import AppLayout from './components/AppLayout/AppLayout';
import Home from './pages/Home/Home';
import Events from './pages/Events/Events';
import ManageEvents from './pages/ManageEvents/ManageEvents';
  
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/' element={<AppLayout />}>
            <Route index element={<Home />} />
            <Route path="gerenciar-eventos" element={<ManageEvents/>}/>
            <Route path="eventos" element={<Events/>}/>
        </Route>
      </Route>,
    ),
  );
  
  export default function Routes() {
    return <RouterProvider router={router} />;
  }
  