import React from 'react'
import { useState, useEffect } from 'react'
import Tarjeta from './Tarjeta';

export default function ListRicky() {

    const [personaje, setPersonaje] = useState({});

    const obtenerPersonajes = async () =>{
        let respuesta = await fetch('https://rickandmortyapi.com/api/character');
        let datos = await respuesta.json();
        setPersonaje(datos.results);
    }

    useEffect(() => {
        obtenerPersonajes();
    }, []);

    console.log(personaje);
    return (
    <div className='container'>
        <h1 className='text-center fst-italic'>Lista Personajes</h1>
        <div className='row'>
            {
                personaje.map((personajes, indice) => {
                    /**
                    * Enviando la informacion del estado a otro componente mediante las props
                    */
                    return (
                        <div className='col-md-4 mt-4'>
                            <Tarjeta key={indice} {...personajes}/>
                        </div>                    
                    )
                })
            }
        </div>
    </div>
  )
}
