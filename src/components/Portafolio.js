import React from 'react'
import { trabajos } from '../data/trabajos'
import { Link } from 'react-router-dom'
export const Portafolio = () => {
  return (
    <div className='vh-port'>
      <h1 className='fx-h1'>Portafolio</h1>
      <div className='port'>
      {
      trabajos.map(trabajo =>(
       
            <article key={trabajo.id} className='artPort'>
              <div className='imgPort'>
                <img src={'/img/'+trabajo.id+'.png'}/>  
              </div>
              
              <span>{trabajo.categoria}</span>
              <h3><Link to={'/proyecto/'+trabajo.id}>{trabajo.nombre}</Link></h3>
              <p>{trabajo.tecnologias}</p>
            </article>
       
        
      ))
      
      }
      </div>
    </div>
  )
}
