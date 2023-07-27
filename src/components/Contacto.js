import React from 'react'
import roman from '../img/roman.png';

export const Contacto = () => {
  return (
    <div className='form-contacto'>
      
      
      <form className='contact-1' action='mailto:4rprogramming@gmail.com'>
        <h1 className='fx-h1'>Contacto</h1>  
        <input type='text' placeholder='Nombre'/>
        <input type='text' placeholder='Apellidos'/>
        <input type='text' placeholder='Email'/>
        <textarea placeholder='Motivo de contacto'/>
        <input type='submit' placeholder='Enviar'/>

      </form>

      <div className='contact-2'>
        <picture className='img-contact'>
          <img src={roman}/>
        </picture>
      </div>
    </div>
  )
}
