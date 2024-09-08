import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import "./assets/fonts/selection.json";

// For JS Library
import './injectJQuery'

// for Routing
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './component/pages/Home'
import Contact from './component/pages/Contact'
import About from './component/pages/About'
import ErrorPage from './component/pages/ErrorPage'


function App() {  

  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Home/></>
    },
    {
      path: "/about-us",
      element: <><About/></>
    },
    {
      path: "/contact-us",
      element: <><Contact/></>
    },
    {
      path: "/:error-page",
      element: <><ErrorPage/></>
    },
  ])

  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
