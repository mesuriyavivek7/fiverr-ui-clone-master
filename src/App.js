import React from "react";

//import scss
import './style.scss'

import Navbar from "./Components/navbar/Navbar";
import Footer from "./Components/footer/Footer";
import HomeSet from "./pages/home/HomeSet";

import Gigs from "./pages/gigs/Gigs";
import Gig from "./pages/gig/Gig";
import Add from "./pages/add/Add";
import Message from "./pages/message/Message";
import Messages from "./pages/messages/Messages";
import Order from "./pages/orders/Order";
import MyGigs from "./pages/myGigs/MyGigs";

import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";

function App() {
 
  const Layout =()=>{
    return (
      <div className="app">
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
      </div>
    )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      children:[
        {
          path:"/",
          element:<HomeSet></HomeSet>
        },
        {
          path:"/gigs/:type",
          element:<Gigs></Gigs>
        },
        {
          path:"/gig/:id",
          element:<Gig></Gig>
        },
        {
           path:"/orders",
           element:<Order></Order>
        },
        {
          path:"/mygigs",
          element:<MyGigs></MyGigs>
        },
        {
          path:"/add",
          element:<Add></Add>
        },
        {
          path:"/messages",
          element:<Messages></Messages>
        },
        {
          path:"/message/:id",
          element:<Message></Message>
        }

      ]
    },
  ]);
  return (
    <div>
         <RouterProvider router={router} />
    </div>
  );
}

export default App;
