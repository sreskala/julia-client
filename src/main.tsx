import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.tsx'
import ErrorPage from './NotFound.tsx';
import './index.css'
import Planets from './routes/Planets.tsx';
import Planet, {loader as planetLoader } from './routes/Planet.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />
  },
  {
    path: "/planets",
    element: <Planets />
  },
  {
    path: "/planets/:id",
    element: <Planet />,
    loader: planetLoader
  },
  {
    path: "/not-found",
    element: <ErrorPage />
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
    {/* <App /> */}
  </React.StrictMode>,
)
