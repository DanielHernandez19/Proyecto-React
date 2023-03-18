import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function ListaPersonajes() {

    const [listaPersonaje, setListaPersonaje] = useState([]);

    const personajes = async () => {
        axios.get('https://rickandmortyapi.com/api/character')
            .then((response) => {
                console.log(response.data.results);
                setListaPersonaje(response.data.results);
            }).catch((error) => {
                console.log(error);
            })
    }

    useEffect(() => { personajes() }, []);

    const idModal = `#${[listaPersonaje.id]}`;
    return (
        <div>
            <div className='container'>
                <h1 className='text-center fst-italic'>Lista Personajes</h1>
                <div className='row'>
                    {
                        listaPersonaje.map((persona, indice) => {
                            return (
                                <div className='col-md-4 mt-4' key={indice}>
                                    <div className="card">
                                        <div className='card-body'>
                                            <h5 className='card-title'>{persona.name} </h5>
                                            <img src={persona.image} alt="" />
                                            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target={idModal}>
                                                Ver mas Info
                                            </button>
                                        </div>
                                    </div>
                                    <div className="modal fade" id={persona.indice} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div className="modal-dialog">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <h1 className="modal-title fs-5" id="exampleModalLabel">{persona.name}</h1>
                                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                </div>
                                                <div className="modal-body">
                                                    <img src={persona.image} alt={persona.name} />
                                                    <p><b>ID: {persona.indice}</b></p>
                                                    <p><b>Status: {persona.status}</b></p>
                                                    <p><b>Gender: {persona.gender}</b></p>
                                                    <p><b>Origin: {persona.origin.name}</b></p>
                                                </div>
                                                <div className="modal-footer">
                                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                    <button type="button" className="btn btn-primary">Save changes</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>

    )
}
