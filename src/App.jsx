import React from 'react'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import About from './pages/About'
import Home from './pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path="/"element={<Home/>} />
    <Route path= "/about" element={<About/>}/>
    </Routes>
    <Footer/>  
    </BrowserRouter>
    </>
  )
}

export default App
