import React, { useState, useEffect } from 'react'
import axios from 'axios';


export default function Tarjeta({ personaje, infor, prev, next }) {

    const [persona, setPersona] = useState({});
    const [origin, setOrigin] = useState({});


    const obtenerPersonaje = (url) => {
        axios.get(url).then((response) => {
            setPersona(response.data);
            setOrigin(response.data.origin);

        })
    }


    useEffect(() => {
        obtenerPersonaje(personaje.url);
    }, [])

    const idModal = `#${persona.id}`;
    return (
        <div>
            <div className="card">
                <div className='card-body'>
                    <h5 className='card-title'>{persona.name} </h5>
                    <img src={persona.image} alt="" />
                    <br />
                    <br />
                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target={idModal}>
                        Ver mas Info
                    </button>
                </div>
            </div>
            <div className="modal fade" id={persona.id} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">{persona.name}</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <img src={persona.image} alt={persona.name} />
                            <p><b>ID: {persona.id}</b></p>
                            <p><b>Status: {persona.status}</b></p>
                            <p><b>Gender: {persona.gender}</b></p>
                            <p><b>Origin: {origin.name}</b></p>
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
}
