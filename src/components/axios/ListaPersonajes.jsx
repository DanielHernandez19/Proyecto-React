import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Tarjeta from './Tarjeta'
import Paginacion from './Paginacion';

export default function ListaPersonajes() {

    const [listaPersonaje, setlistaPersonaje] = useState([]);
    const [info, setInfo] = useState([]);

    const url1 = 'https://rickandmortyapi.com/api/character';

    const personajes = (url) => {
        axios.get(url).then((response) => {
            setlistaPersonaje(response.data.results);
            setInfo(response.data.info);
            console.log(response.data.results);
            console.log(response.data.info);
        }).catch((error) => {
            console.log(error);
        })
    }

    const onPrevious = () => {
        personajes(info.prev);
    }

    const onNext = () => {
        personajes(info.next);
    }

    useEffect(() => {
        personajes(url1)
    }, []);

    return (
        <div>
            <div className='container'>
                <h1 className='text-center fst-italic'>Lista Personajes</h1>
                <div className='row'>
                    <Paginacion prev={info.prev} next={info.next} onPrevious={onPrevious} onNext={onNext} />
                    {
                        listaPersonaje.map((persona, indice) => {
                            return (
                                <div className='col-md-4 mt-4' >
                                    <Tarjeta key={indice} personaje={persona} />
                                    <br />

                                </div>
                            )
                        })
                    }
                    <Paginacion prev={info.prev} next={info.next} onPrevious={onPrevious} onNext={onNext} />
                    <br />

                </div>
            </div>
        </div>
    )
}
