/* desarrolladores*/
import React from 'react';


function Desarrolladores(props) {
  return (
    <div className='contenedor-desarrollador'>
      <img 
        className='imagen-desarrollador'
        src={props.imagen}
        alt='Foto de Emma'/>
      <div className='contenedor-texto-desarrollador'>
        <p className='nombre-desarrollador'>
          <strong>{props.nombre}</strong> 
        </p>
        <p className='cargo-desarrollador'>
          {props.profesion}
        </p>
        <p className='texto-desarrollador'>"{props.texto}"</p>
      </div>
    </div>
  );
}

export default Desarrolladores;