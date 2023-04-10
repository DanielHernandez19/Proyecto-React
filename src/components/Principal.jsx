import React from 'react'
import { Link } from 'react-router-dom'
import image from './imagenes/b.jpg'
import vg from './imagenes/des-michelle.jpg'
import vg2 from './imagenes/dany.jpg'
import vg3 from './imagenes/vladi.jpg'

export default function Principal() {
    return (
        <div>
            <div className='back-prin'>
                <div className="textoh">
                    <h2>
                        RICK AND MORTY
                    </h2>
                    <h2>Pero los discursos son para hacer campaña. Ahora es el momento para la acción.</h2>
                </div>
            </div>
            <div className='container'>
                <div className="card mb-3" >
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={image} className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">Ver nuestros pensajes.</h5>
                                <p className="card-text">Puedes conocer un poco sobre nuestros personajes acá.</p>
                            </div>
                            <div className="card-body">
                                <a className='card-link'><Link to="/personajes" className='nav-link'>Ver personajes</Link></a>
                            </div>
                        </div>
                    </div>
                </div>
                <h1>Desarrolladores</h1>
                <div id="carouselExampleCaptions" className="carousel slide">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={vg} className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Michelle Moran</h5>
                                <p>Estudiante de Ingenieria de Software.</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={vg2} className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Daniel Hernández</h5>
                                <p>Estudiante de Ingeniería en Sistemas.</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={vg3} className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Vladimir Gonzalez</h5>
                                <p>Estudiante de Desarrollo Web.</p>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
    )
}
