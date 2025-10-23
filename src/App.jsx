import { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Machines from "./Components/Machines";
import MachineDetail from "./Components/MachineDetails"; // si el archivo se llama MachineDetail.jsx, corrige el import
import Solutions from './Components/Solutions'
import Industries from './Components/Industries'
import Demos from './Components/Demos'
import Stats from './Components/Stats'
import Testimonials from './Components/Testimonials'
import Contact from './Components/Contact'
import Footer from './Components/Footer'

function Home() {
  return (
    <main>
      <Hero/>
      <Industries/>
      <Demos/>
      <Solutions/>
      <Machines/>
  <Hero/>
      <Testimonials/>
      <Contact/>
    </main>
  );
}

export default function App(){
  useEffect(()=>{
    const handler = (e)=>{
      const a = e.target.closest('a[href^="#"]')
      if(a){
        e.preventDefault()
        document.querySelector(a.getAttribute('href'))?.scrollIntoView({behavior:'smooth'})
      }
    }
    document.addEventListener('click', handler)
    return ()=> document.removeEventListener('click', handler)
  },[])

  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        {/* 👇 ESTA RUTA FALTABA */}
        <Route path="/" element={<Home/>} />
        <Route path="/maquina/:id" element={<MachineDetail/>} />
        <Route path="*" element={<div style={{padding:24}}>404 – Página no encontrada</div>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}
