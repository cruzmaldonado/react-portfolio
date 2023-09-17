import React from 'react'
import './tailwind.css'
import { useRoutes, BrowserRouter } from "react-router-dom"
import Home from '../Home'
import WorksFrontEnd from '../WorksFrontEnd'
import WorksBackEnd from '../WorksBackEnd'
import Services from '../Services'
import Contact from '../Contact'
// import Api from '../api'
import About from '../About'
import NotFound from '../NotFound'

const App = () => {

  const AppRoutes= () => {
    let routes =useRoutes([
      {path:'/',element:<Home/>},
      { path:'/works-frontend',element:<WorksFrontEnd/>},
      { path:'/Works-backend',element:<WorksBackEnd/>},
      { path:'/services',element:<Services/>},
      { path:'/contact',element:<Contact/>},
      // { path:'/api',element:<Api/>}, //!esto no se si dejarlo
      {path:'/about',element:<About/>},
      {path:'/*',element:<NotFound/>},   //? el * es para cualquier otra ruta que no este especificada.
      
      ])
      return routes
  }



  return (
    
    <BrowserRouter>
      <AppRoutes/>
    </BrowserRouter>
    
  )
}

export default App