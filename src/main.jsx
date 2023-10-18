import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// eslint-disable-next-line no-unused-vars
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root/Root.jsx';
import Header from './Pages/Header/Header.jsx';
import Errorpage from './Pages/Errorpage/Errorpage.jsx';
import Login from './Pages/Login/Login.jsx';
import Register from './Pages/Register/Register.jsx';
import AuthProvider from './Provider/AuthProvider.jsx';
import Detailsproduct from './Pages/Products/Detailsproduct.jsx';
import Privatedetails from './Provider/Privatedetails.jsx';
import Addproducts from './Pages/Products/Addproducts.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Errorpage></Errorpage>,
    children:[
      {
        path:'/',
        element:<Header></Header>,
        loader:()=> fetch('data.json'),
      },
      {
        path:'/login',
        element:<Login></Login>,
      },
      {
        path:'/register',
        element:<Register></Register>,
      },
      {
        path:'/products',
        element:<Addproducts></Addproducts>,
      },
      {
        path:'/productdetails',
        element:<Privatedetails>
          <Detailsproduct></Detailsproduct>
        </Privatedetails>,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProvider>
   <RouterProvider router={router} />
   </AuthProvider>
   <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />
  </React.StrictMode>,
)
