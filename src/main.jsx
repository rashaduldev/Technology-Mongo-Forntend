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
import PrivetAddproduct from './Provider/PrivetAddproduct.jsx';
import AddProducts from './Pages/Products/Addproducts.jsx';
import Itemdetailes from './Pages/Products/Itemdetailes.jsx';
import Cart from './Pages/Products/Cart/Cart.jsx';
import Update from './Pages/Products/Update.jsx';
import Privetupdate from './Provider/Privetupdate.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Errorpage></Errorpage>,
    children:[
      {
        path:'/',
        element:<Header></Header>,
        // loader:()=> fetch('data.json'),
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
        path:'/cart',
        element:<Cart></Cart>,
      },
      {
        path:'/update/:id',
        element:<Privetupdate>
          <Update></Update>
        </Privetupdate>,
        loader:()=>fetch(`https://ass-10-backend-dwyjuure1-rashaduldev.vercel.app/productdetails`)
      },
      {
        path:'/item/:name',
        element:<Itemdetailes></Itemdetailes>,
        loader:()=>fetch(`https://ass-10-backend-dwyjuure1-rashaduldev.vercel.app/productdetails`)
      },
      {
        path:'/products',
        element:<PrivetAddproduct>
          <AddProducts></AddProducts>
        </PrivetAddproduct>,
      },
      {
        path:'/productdetails/:name',
        element:<Privatedetails>
          <Detailsproduct></Detailsproduct>
        </Privatedetails>,
        loader:()=>fetch(`https://ass-10-backend-dwyjuure1-rashaduldev.vercel.app/productdetails`)
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
