import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './component/Layout/Home';
import Shop from './component/Shop/Shop';
import Order from './component/Order/Order';
import Inventory from './component/Inventory/Inventory';
import Login from './component/Login/Login';
import cartProductsLoader from './cartProductsLoader';
import Checkout from './component/Checkout/Checkout';
import AuthProvider from './provider/AuthProvider';
import Signup0 from './component/SignUp/Signup0';
import PrivateRoute from './component/PrivateRoute/PrivateRoute';




const router = createBrowserRouter([
  {
    path : "/",
    element : <Home></Home>,
    children : [
      {
        path : "/",
        element : <Shop></Shop>
      },
      {
        path : "/Order",
        element : <Order></Order>,
        loader : cartProductsLoader
      },
      {
        path : "/Checkout",
        element : <PrivateRoute><Checkout></Checkout></PrivateRoute>
      },
      {
        path : "/Inventory",
        element : <Inventory></Inventory>
      },
      {
        path : "/Login",
        element : <Login></Login>
      },
      {
        path: "Signup",
        element: <Signup0></Signup0>
      }
      
      
    ]
  }
])





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <AuthProvider> 
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
