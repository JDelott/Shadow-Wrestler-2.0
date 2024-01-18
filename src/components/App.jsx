import React from 'react'
import Navbar from './NavBar'
import Footer from './Footer'
import {Route, Routes} from 'react-router-dom'
import Splash from '../Splash'
import About from './about'
import Timer from './Timer'
import Journal from './Journal'
import Login from './Login'
import "./App.css"

function App() {
  return (
    <div>
        <Navbar />
            <Routes >
                <Route path="/" element={<Splash />} />
                <Route path="about" element={<About />} /> 
                <Route path="timer" element={<Timer />} /> 
                <Route path='journal' element={<Journal />} />
                <Route path='login' element={<Login />} />

            </Routes>
        <Footer />
    </div>
  )
}

export default App
