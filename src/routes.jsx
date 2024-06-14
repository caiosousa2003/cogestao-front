import {
    createBrowserRouter,
    Route,
    createRoutesFromElements,
    RouterProvider,
  } from 'react-router-dom';
  
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/' element={<AppLayout />}>
            <Route index element={<Home />} />
        </Route>
      </Route>,
    ),
  );
  
  export default function Routes() {
    return <RouterProvider router={router} />;
  }
  