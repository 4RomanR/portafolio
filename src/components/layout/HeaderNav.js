import React from 'react'
import { NavLink } from 'react-router-dom'


export const HeaderNav = () => {
  const linkOver = () =>{
    const audi = document.getElementsByTagName('audio');
    console.log(audi);

  }
  

  
  return (
    <header>
        <h1>Roman</h1>
        <nav>
            <ul className='nav'>
              <li className='NavL'>
                <NavLink to="/inicio" className={({isActive}) => isActive ? "active" : "" } onMouseEnter={linkOver} >Inicio</NavLink>
                <audio src="./audio/signals.mp3"/>
              </li>
              <li className='NavL'>
                <NavLink to="/portafolio">Portafolio</NavLink>
              </li>
              {/* <li className='NavL'>
                <NavLink to="/servicios">Servicios</NavLink>
              </li> */}
              <li className='NavL'>
                <NavLink to="/curriculum">Curriculum</NavLink>
              </li>
              <li className='NavL'>
                <NavLink to="/contacto">Contacto</NavLink>
              </li>
            </ul>
        </nav>
    </header>
  )
}
