import { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Work from './components/Work'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Projects/>
      <Work/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
