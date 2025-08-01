import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';
import Home from './pages/Home'
import Nav from './component/Navbar/Navbar'
import Footer from './component/Footer/Footer'
import { Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Policy from './pages/Policy'
import Register from './pages/Register'
import Subnav from './component/subnavbar/Subnav'
import Terms from './component/termsandcond/Terms'
import WhatsAppChat from './component/WhatsAppChat'

export default function App() {
  return (
    <div>
       <WhatsAppChat />
      <Subnav />
      <Nav />
      <Routes>
        {
          [
            { path: "/", elem: <Home /> },
            { path: "/about", elem: <About /> },
            { path: "/policy", elem: < Policy /> },
            { path: "/register", elem: <Register /> },
            { path: "/terms", elem: <Terms /> }

          ].map((obj, index) => {
            return <Route key={index} element={obj.elem} path={obj.path} />
          })
        }
      </Routes>
      <Footer />
    </div >
  )
}


