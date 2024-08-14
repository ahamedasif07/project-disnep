import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Home.jsx';
import Login from './pages/Login.jsx';
import SingIn from './pages/SingIn.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home> ,
  },
  {
    path :'/login',
    element : <Login></Login>
  },
  {
    path : '/signIn',
    element : <SingIn></SingIn>
  }
]); 

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
