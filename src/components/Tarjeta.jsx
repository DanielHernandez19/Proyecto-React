import React, { useEffect, useState } from 'react'

export default function Tarjeta(props) {

    const [personajes, setPersonaje] = useState({});
    const [image, setImage] = useState({});
    const [origin, setOrigin] = useState({});

    const obtenerPersonajesByUrl = async (url) => {
        let respuesta = await fetch(url);
        let datos = await respuesta.json();
        setPersonaje(datos);
        setImage(datos.image);
        setOrigin(datos.origin);
    }

    useEffect(() => {
        obtenerPersonajesByUrl(props.url);
    }, []);

    console.log(image);
    const idModal = `#${personajes.id}`;

    return (
        <div>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{personajes.name}</h5>
                    <img src={personajes.image} alt="" />
                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target={idModal}>
                        Ver mas Info
                    </button>
                </div>
            </div>

            {/** apartado del modal */}
            <div className="modal fade" id={personajes.id} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">{personajes.name}</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <img src={personajes.image} alt={personajes.name} />
                            <p><b>ID: {personajes.id}</b></p>
                            <p><b>Status: {personajes.status}</b></p>
                            <p><b>Gender: {personajes.gender}</b></p>
                            <p><b>origin: {origin.name}</b></p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
