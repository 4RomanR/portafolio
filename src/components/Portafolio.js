import React from 'react'
import { trabajos } from '../data/trabajos'
export const Portafolio = () => {
  return (
    <div className='vh'>
      <h1 className='fx-h1'>Portafolio</h1>
      {
      trabajos.map(trabajo =>(
        <article key={trabajo.id}>
          <span>{trabajo.categoria}</span>
          <h2><Link to={'/proyeto/'+trabajo.id}>{trabajo.nombre}</Link></h2>
        </article>
      ))
      
      }

    </div>
  )
}
