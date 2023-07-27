import React from 'react'
import prog from '../img/prog.png';

export const Inicio = () => {
  return (
    <div className='vh-inicio'>
      <div className='div-1'>
        <h1>Desarrollador Frontend</h1>
        <p className='shortDescript'>Especialista en el desarrollo web centrado en la experiencia del usuario.</p>
        <p className='inicio'>Realizo sitios y <strong>aplicaciones webs</strong> a partir de código nativo y CMS Wordpress y Wix.<br/>
        Entre páginas estáticas y dinámicas para consultores de negocios, portafolios, <strong>eCommerces</strong>, entre otros.<br/>
        Actualmente soy <strong>webmaster</strong> de algunas fundaciones en los Estados Unidos y Venezuela.</p>
      </div>
      <div className='div-2'>
          <img src={prog}/>
      </div>
    </div>
  )
}
