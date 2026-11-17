import { useState } from 'react';
import {
  agregarTareaALista,
  cambiarEstadoDeTarea,
  eliminarTareaDeLista,
  filtrarTareas,
  contarTareas,
} from '../logicaTareas';

const CODIGO_SECRETO = '123456';

// Hook propio: guarda el estado de las tareas y las acciones para modificarlo.
// Asi App.js queda solo con el diseño de la pantalla.
export default function useTareas() {
  const [listaTareas, setListaTareas] = useState([
    { id: 1, texto: 'Estudiar React Native', completada: false },
    { id: 2, texto: 'Hacer el trabajo practico', completada: true },
  ]);

  const [tareaTexto, setTareaTexto] = useState('');
  const [textoBusqueda, setTextoBusqueda] = useState('');
  const [mostrarSecreto, setMostrarSecreto] = useState(false);

  function agregarTarea() {
    if (tareaTexto === '') {
      return;
    }

    if (tareaTexto === CODIGO_SECRETO) {
      setMostrarSecreto(true);
      setTareaTexto('');
    } else {
      setListaTareas(agregarTareaALista(listaTareas, tareaTexto));
      setTareaTexto('');
    }
  }

  function cambiarEstadoTarea(idBuscado) {
    setListaTareas(cambiarEstadoDeTarea(listaTareas, idBuscado));
  }

  function borrarTarea(idBorrar) {
    setListaTareas(eliminarTareaDeLista(listaTareas, idBorrar));
  }

  function cerrarMensajeSecreto() {
    setMostrarSecreto(false);
  }

  const tareasFiltradas = filtrarTareas(listaTareas, textoBusqueda);
  const contadores = contarTareas(listaTareas);

  return {
    tareaTexto: tareaTexto,
    textoBusqueda: textoBusqueda,
    mostrarSecreto: mostrarSecreto,
    tareasFiltradas: tareasFiltradas,
    contadores: contadores,
    setTareaTexto: setTareaTexto,
    setTextoBusqueda: setTextoBusqueda,
    agregarTarea: agregarTarea,
    cambiarEstadoTarea: cambiarEstadoTarea,
    borrarTarea: borrarTarea,
    cerrarMensajeSecreto: cerrarMensajeSecreto,
  };
}
