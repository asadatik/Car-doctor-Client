import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AuthProvider from './Provider/AuthProvider'
import Root from './Pages/Root/Root';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import SignUp from './Pages/SignUp/SignUp';
import CheckOut from './Pages/CheckOut/CheckOut';
import Mybookings from './Pages/Mybooings/Mybookings';
import PrivetRoute from './Pages/Root/PrivetRoute';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [

      {path: "/",
      element: <Home></Home>
    },
       {
        path:'/LOGIN',
        element:<Login></Login>

       },{
        path:'/signup',
        element:<SignUp></SignUp>

       },
       {
        path:"/check/:id",
        element:<PrivetRoute>     <CheckOut></CheckOut> </PrivetRoute>  ,
        loader: () => fetch(`https://car-doctor-server-v1-green.vercel.app/services`) 
         
       },
       {
        path:"/booking",
        element:
           <PrivetRoute><Mybookings></Mybookings></PrivetRoute>
       }

        
    ]
  },
]);






ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='max-w-7xl mx-auto'>
    <React.StrictMode>
      <AuthProvider>
      <RouterProvider router={router} />
      </AuthProvider>
       
      
    </React.StrictMode>,
  </div>
)
