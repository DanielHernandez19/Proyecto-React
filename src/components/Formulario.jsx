import React, { useState } from 'react'


export default function Formulario() {

    const [personaje, setPersonaje] = useState({});
    const [name, setName] = useState("");
    const [origin, setOrigin] = useState({});

    const obtenerPersonajeByName = async () => {
        const respuesta = await fetch(`https://rickandmortyapi.com/api/character/${name}`);
        const datos = await respuesta.json();
        setPersonaje(datos);
        setOrigin(datos.origin);
    }
    const handleName = (e) => {
        setName(e.target.value);
    }

    const handleSubmit = (e) => {
        obtenerPersonajeByName();
        e.preventDefault();
    }

    return (
        <div className='container'>
            <h1 className='text-center fst-italic'>Encuentra a tu Personaje</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="">Ingresa el nombre del personaje</label>
                <input type="text" placeholder='Ingresa Personaje' className='form-control' onChange={handleName} /><br></br>
                <button className='btn btn-dark' type='submit'>Personaje</button>
            </form><br></br>
            <div className="card justify-content-center">
                <div className="card-body">
                    <h5 className="card-title">{personaje.name}</h5>
                    <img src={personaje.image} alt="" />
                    <p><b>Status: {personaje.status}</b></p>
                    <p><b>Gender: {personaje.gender}</b></p>
                    <p><b>Origin: {origin.name}</b></p>
                </div>
            </div>
        </div>
    )
}
