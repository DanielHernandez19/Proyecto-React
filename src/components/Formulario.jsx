import React, { useState } from 'react'


export default function Formulario() {

    const [personaje, setPersonaje] = useState({});
    const [nombre, setNombre] = useState("");
    const [origin, setOrigin] = useState({});

    const obtenerPersonajeByName = async () => {
        /** hacemos referencia al nombre que manejamos en el estado para obtener informacion de dicho pokemon */
        const respuesta = await fetch(`https://rickandmortyapi.com/api/character/${nombre}`);
        const datos = await respuesta.json();
        setPersonaje(datos);
        setOrigin(datos.origin);
    }
    const handleName = (e) => {
        /** capturando el value del input */
        //console.log(e.target.value);
        /** llamando al estado nombre para guardar el value del input */
        setNombre(e.target.value);
    }
    /** asignando el metodo del formulario */
    const handleSubmit = (e) => {
        obtenerPersonajeByName();
        /** cancelando el boton submit */
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
