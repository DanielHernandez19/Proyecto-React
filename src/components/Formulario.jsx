import React, { useEffect, useState } from 'react'


export default function Formulario() {

    const [personaje, setPersonaje] = useState([]);
    const [name, setName] = useState("");


    const obtenerPersonajeByName = async () => {
        const respuesta = await fetch(`https://rickandmortyapi.com/api/character/?name=${name}`);
        const datos = await respuesta.json();
        setPersonaje(datos.results);
        console.log(datos.results);
    }

    const handleName = (e) => {
        setName(e.target.value);
    }

    const handleSubmit = (e) => {
        obtenerPersonajeByName();
        e.preventDefault();
    }

    useEffect(() => {
        obtenerPersonajeByName()
    }, []);

    return (
        <div>
            <div className='container'>
                <h1 className='text-center fst-italic'>Encuentra a tu Personaje por nombre</h1>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="">Ingresa el nombre del personaje</label>
                    <div className="input-group mb-3">
                        <input type="text" placeholder='Ingresa Personaje' className='form-control' onChange={handleName} />
                        <button className='btn btn-outline-primary' type='submit'>Personaje</button>
                    </div>
                </form>
                <br />
                <div className="row">
                    {
                        personaje.map((nombre, indice) => {
                            return (
                                <div key={indice} className='col-md-4 mt-4'>
                                    <div className="card ">
                                        <div className="card-body">
                                            <h5 className='card-title'>{nombre.name} </h5>
                                            <img src={nombre.image} alt="" />
                                            <p><b>{nombre.status}</b></p>
                                            <p><b>{nombre.species}</b></p>
                                            <p><b>{nombre.gender}</b></p>
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
