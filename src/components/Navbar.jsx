import React from 'react'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import ListaPersonajes from './axios/ListaPersonajes'
import Formulario from './Formulario'

export default function Navbar() {
  return (
    <BrowserRouter>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Bienvenido, </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <ul className='navbar-nav'>
                <li className='nav-item'>
                  <a href="#" className="nav-link" aria-current="page">Home</a>
                </li>
                <li className='nav-item'>
                  <Link to="/personajes" className='nav-link'>Personajes</Link>
                </li>
                <li className='nav-item'>
                  <Link to="/formulario" className='nav-link'>Formulario</Link>
                </li>
                <li className='nav-item'>
                  <a className="nav-link " aria-current="page" href="#">Perfiles</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path='/personajes' element={<ListaPersonajes />} />
        <Route path='/formulario' element={<Formulario />} />
      </Routes>
    </BrowserRouter>
  )
}
