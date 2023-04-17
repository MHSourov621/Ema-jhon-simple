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
import SignUp from './component/SignUp/SignUp';



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
        element : <Checkout></Checkout>
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
        path: '/SignUp',
        element: <SignUp></SignUp>
      }
    ]
  }
])





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
