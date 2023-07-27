import React from 'react'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import { HeaderNav } from '../components/layout/HeaderNav';
import { Inicio } from '../components/Inicio';
import { Curriculum } from '../components/Curriculum';
// import { Servicios } from '../components/Servicios';
import { Contacto } from '../components/Contacto';
import { Portafolio } from '../components/Portafolio';
import { Footer } from '../components/layout/Footer';


export const MisRutas = () => {
  return (
        
    <BrowserRouter>

    <HeaderNav/>

        <Routes>
            <Route path='/' element={<Inicio/>}/>
            <Route path='/inicio' element={<Inicio/>}/>
            {/* {<Route path='/servicios' element={<Servicios/>}/>} */}
            <Route path='/curriculum' element={<Curriculum/>}/>
            <Route path='/contacto' element={<Contacto/>}/>
            <Route path='/portafolio' element={<Portafolio/>}/>
        </Routes>
    
    <Footer/>

    </BrowserRouter>
    
    
  )
}
