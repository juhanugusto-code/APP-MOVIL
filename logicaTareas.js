// Funciones que trabajan con la lista de tareas.
// Las saque de App.js para que ese archivo quede mas corto y ordenado.

export function agregarTareaALista(lista, texto) {
  const nuevaTarea = {
    id: Date.now(),
    texto: texto,
    completada: false,
  };

  return lista.concat(nuevaTarea);
}

export function cambiarEstadoDeTarea(lista, idBuscado) {
  const listaActualizada = lista.map(function (tarea) {
    if (tarea.id === idBuscado) {
      if (tarea.completada === true) {
        return { id: tarea.id, texto: tarea.texto, completada: false };
      } else {
        return { id: tarea.id, texto: tarea.texto, completada: true };
      }
    } else {
      return tarea;
    }
  });

  return listaActualizada;
}

export function eliminarTareaDeLista(lista, idBorrar) {
  const listaSinTarea = [];

  for (let i = 0; i < lista.length; i = i + 1) {
    if (lista[i].id !== idBorrar) {
      listaSinTarea.push(lista[i]);
    }
  }

  return listaSinTarea;
}

export function filtrarTareas(lista, textoBusqueda) {
  const tareasFiltradas = [];
  const busquedaEnMinuscula = textoBusqueda.toLowerCase();

  for (let i = 0; i < lista.length; i = i + 1) {
    const tareaActual = lista[i];
    const textoEnMinuscula = tareaActual.texto.toLowerCase();

    if (textoEnMinuscula.includes(busquedaEnMinuscula)) {
      tareasFiltradas.push(tareaActual);
    }
  }

  return tareasFiltradas;
}

export function contarTareas(lista) {
  let completadas = 0;
  let pendientes = 0;

  for (let i = 0; i < lista.length; i = i + 1) {
    if (lista[i].completada === true) {
      completadas = completadas + 1;
    } else {
      pendientes = pendientes + 1;
    }
  }

  return {
    total: lista.length,
    completadas: completadas,
    pendientes: pendientes,
  };
}
