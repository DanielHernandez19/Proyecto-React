import React, { useEffect, useState } from 'react'

export default function BuscarStatus() {
    const [personaje, setPersonaje] = useState([]);
    const [status, setStatus] = useState("");

    const obtenerPersonajeByStatus = async () => {
        const respuesta = await fetch(`https://rickandmortyapi.com/api/character/?status=${status}`);
        const datos = await respuesta.json();
        setPersonaje(datos.results);
        console.log(datos.results);
    }

    const handleStatus = (e) => {
        setStatus(e.target.value);
    }

    const handleSubmit1 = (e) => {
        obtenerPersonajeByStatus();
        e.preventDefault();
    }

    useEffect(() => {
        obtenerPersonajeByStatus()
    }, []);
    return (
        <div>
            <div className="container">
                <h1 className='text-center fst-italic'>Encuentra a tu Personaje por status</h1>
                <form onSubmit={handleSubmit1}>
                    <label htmlFor="">Ingresa el status del personaje</label>
                    <div className="input-group mb-3">
                        <input type="text" placeholder='Ingresa Personaje' className='form-control' onChange={handleStatus} /><br></br>
                        <button className='btn btn-outline-primary' type='submit'>Personaje</button>
                    </div>
                </form><br></br>
                <div className="row">
                    {
                        personaje.map((status, indice) => {
                            return (
                                <div key={indice} className='col-md-4 mt-4'>
                                    <div className="card ">
                                        <div className="card-body">
                                            <h5 className='card-title'>{status.name} </h5>
                                            <img src={status.image} alt="" />
                                            <p><b>{status.status}</b></p>
                                            <p><b>{status.species}</b></p>
                                            <p><b>{status.gender}</b></p>
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
