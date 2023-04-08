import './index.css';
import './hojas de estilo/desarrollador.css'
import Desarrollador from './componentes/Desarrolladores';
import vg from './imagenes/des-michelle.jpg'
import vg2 from './imagenes/dany.jpg'
import vg3 from './imagenes/vladi.jpg'


function App() {
  return (
    <div className='App'>
      <div className='contenedor-principal'>
        <h1>Conoce un poco acerca de los Desarrolladores de este proyecto</h1>
        
        <Desarrollador
          nombre='Michelle Moran'
          imagen={vg}
          profesion='Estudiante de Ingenieria de Software'
          texto='itjgjtrigjwijgiwjg'/>

        <Desarrollador
          nombre='Dany'
          imagen={vg2}
          profesion='Estudiante de Ingenieria en Sistemas'
          texto='vfsdvdrvd'/>       
       
                    
        <Desarrollador
          nombre='Vladimir Gonzalez'
          imagen={vg3}
          profesion='Estudiante de Desarrollo Web'
          texto='El Desarrollo Web es una de las ramas de la informatica no menos importante, la cual combina entre diseño grafico y programacion;
           por ello uniendo dos de mis pasiones decidi estudiar esta carrera, encontrando en ella mas que un trabajo una vocacion.'/>


          




      </div>
    </div>
  );
}

export default App;
