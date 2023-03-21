import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Tarjeta from './Tarjeta'
import Paginacion from './Paginacion';

export default function ListaPersonajes() {

    const [listaPersonaje, setListaPersonaje] = useState([]);
    const [info, setInfo] = useState({});

    const personajes = () => {
        axios.get('https://rickandmortyapi.com/api/character').then((response) => {
            setListaPersonaje(response.data.results);
            setInfo(response.data.info);
            console.log(response.data.results);
            console.log(response.data.info);
        }).catch((error) => {
            console.log(error);
        })
    }

    useEffect(() => { personajes() }, []);

    const onPrevious = () => {
        personajes(info.prev);
    }

    const onNext = () => {
        personajes(info.next);
    }

    return (
        <div>
            <div className='container'>
                <h1 className='text-center fst-italic'>Lista Personajes</h1>
                <div className='row'>
                    {
                        listaPersonaje.map((persona, indice) => {
                            return (
                                <div className='col-md-4 mt-4' >
                                    <br />
                                    <Tarjeta key={indice} personaje={persona} />
                                    <br />
                                </div>
                            )
                        })
                    }
                    <Paginacion prev={info.prev} next={info.next} onPrevious={onPrevious} onNext={onNext} />
                </div>
            </div>
        </div>
    )
}
