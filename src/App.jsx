import { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Machines from "./components/Machines";
import MachineDetail from "./components/MachineDetails"; // si el archivo se llama MachineDetail.jsx, corrige el import
import Solutions from './components/Solutions'
import Industries from './components/Industries'
import Demos from './components/Demos'
import Stats from './components/Stats'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

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
