import React, { useEffect } from 'react'

export default function ListRicky() {

    const[rickys, setList]=useStates([]);

    const obtenerList = async () =>{
        let respuesta = await fetch('https://rickandmortyapi.com/api/character');
        let datos = await respuesta.json();
        setList(datos.results);

    }


    useEffect(() => {obtenerList();}, []);
  return (
    <div className='container'>
        <h1 className='text-center fst-italic'>Lista Pokemones</h1>
        <div className='row'>
            {
                pokemones.map((personajes, indice) => {
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
