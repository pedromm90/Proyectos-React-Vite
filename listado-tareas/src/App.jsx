/* Proyecto inspirado en app-tareas: https://github.com/miguellopezpatricio/proyectos-react */
import './App.css';
import ListaDeTareas from "./Componentes/ListaDeTareas";

function App() {

  return (
    /* App Listado de tareas */
    <div className="listado-tareas">
        <div className="app-contenedor">
            <h1>Listado de tareas</h1>
            <div className="lista-tareas-principal">
                <h2>Agregar Tareas</h2>
                <ListaDeTareas />
            </div>
        </div>
    </div>
  )
}

export default App;
