import { useState } from "react";
import FormularioTareas from "./FormularioTareas";
import '../Estilos/ListaDeTareas.css';
import Tarea from "./Tarea";


function ListaDeTareas() {

    /* Arreglo para crear las listas de tareas */
    const [tareas, setTareas] = useState([]);

    const agregarTarea = tarea => {
      // console.log('Tarea agregada');
      if (tarea.texto.trim()) {
        tarea.texto = tarea.texto.trim();
        const tareasActualizadas = [tarea, ...tareas];
        setTareas(tareasActualizadas);
      }
    }

    const eliminarTarea = id => {
        const tareasActualizadas = tareas.filter(tarea => tarea.id !== id);
        setTareas(tareasActualizadas);
    }

    const completarTarea = id => {
        const tareasActualizadas = tareas.map(tarea =>
            {
                if (tarea.id === id) {
                    tarea.completada = !tarea.completada;
                }
                return tarea;
            });

        setTareas(tareasActualizadas);
    }

    return (
      <>
        <FormularioTareas onSubmit={agregarTarea} />
        <div className="contenedor-lista-tareas">
          {
            tareas.map(
                (tarea) => <Tarea
                                key={tarea.id}
                                id={tarea.id}
                                texto={tarea.texto}
                                completada={tarea.completada}
                                completarTarea={completarTarea}
                                eliminarTarea={eliminarTarea}
                            />
            )
          }
        </div>
      </>
    );

}

export default ListaDeTareas;