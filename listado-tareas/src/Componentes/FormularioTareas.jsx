import { useState } from "react";
import Tarea from "./Tarea";
import '../Estilos/FormularioTareas.css';
import { v4 as uuidv4 } from "uuid";



function FormularioTareas(props) {

    const [input, setInput] = useState('');

    const manejarCambio = e => {
        setInput(e.target.value);
    }

    const manejarEnvio = e => {

        e.preventDefault();

        const tareaNueva = {
            /* Generador de Ids: npm install uuid */
            id: uuidv4(),
            texto: input,
            completada: false
        }

        props.onSubmit(tareaNueva);

    }

    return (
        <form className="formulario-tarea"
          onSubmit={manejarEnvio}>
      
          <input
            className="input-tarea"
            type="text"
            placeholder="Escribe una tarea"
            name="texto"
            onChange={manejarCambio}
          />
      
          <button className="boton-tarea">Agregar</button>
        </form>
      );

}

export default FormularioTareas;