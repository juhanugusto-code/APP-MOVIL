import React, { useState } from 'react';
import { View, Text, TextInput, Button, ScrollView } from 'react-native';
import { styles } from './styles';

export default function App() {
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

    if (tareaTexto === '123456') {
      setMostrarSecreto(true);
      setTareaTexto('');
    } else {
      const nuevaTarea = {
        id: Date.now(),
        texto: tareaTexto,
        completada: false,
      };

      const nuevaLista = listaTareas.concat(nuevaTarea);
      setListaTareas(nuevaLista);
      setTareaTexto('');
    }
  }

  function cambiarEstadoTarea(idBuscado) {
    const listaActualizada = listaTareas.map(function (tarea) {
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

    setListaTareas(listaActualizada);
  }

  function eliminarTarea(idBorrar) {
    const listaSinTarea = [];

    for (let i = 0; i < listaTareas.length; i = i + 1) {
      if (listaTareas[i].id !== idBorrar) {
        listaSinTarea.push(listaTareas[i]);
      }
    }

    setListaTareas(listaSinTarea);
  }

  const tareasFiltradas = [];
  for (let i = 0; i < listaTareas.length; i = i + 1) {
    const tareaActual = listaTareas[i];
    const textoEnMinuscula = tareaActual.texto.toLowerCase();
    const busquedaEnMinuscula = textoBusqueda.toLowerCase();

    if (textoEnMinuscula.includes(busquedaEnMinuscula)) {
      tareasFiltradas.push(tareaActual);
    }
  }

  const totalTareas = listaTareas.length;
  let tareasCompletadas = 0;
  let tareasPendientes = 0;

  for (let i = 0; i < listaTareas.length; i = i + 1) {
    if (listaTareas[i].completada === true) {
      tareasCompletadas = tareasCompletadas + 1;
    } else {
      tareasPendientes = tareasPendientes + 1;
    }
  }

  let recuadroSecreto = null;
  if (mostrarSecreto === true) {
    recuadroSecreto = (
      <View style={styles.cajaSecreta}>
        <Text style={styles.textoSecreto}>
          ¡Codigo secreto activado! Desbloqueaste el mensaje oculto del trabajo practico.
        </Text>
        <Button
          title="Cerrar mensaje secreto"
          onPress={function () {
            setMostrarSecreto(false);
          }}
        />
      </View>
    );
  }

  return (
    <ScrollView style={styles.contenedorPrincipal}>
      <Text style={styles.titulo}>Mi Lista de Tareas</Text>

      <View style={styles.seccionAgregar}>
        <Text style={styles.subtitulo}>Nueva tarea:</Text>
        <TextInput
          style={styles.input}
          placeholder="Escribe una tarea o el codigo..."
          value={tareaTexto}
          onChangeText={function (texto) {
            setTareaTexto(texto);
          }}
        />
        <Button title="Agregar tarea" onPress={agregarTarea} />
      </View>

      {recuadroSecreto}

      <View style={styles.seccionContadores}>
        <Text style={styles.textoContador}>Total de tareas: {totalTareas}</Text>
        <Text style={styles.textoContador}>Completadas: {tareasCompletadas}</Text>
        <Text style={styles.textoContador}>Pendientes: {tareasPendientes}</Text>
      </View>

      <View style={styles.seccionBuscador}>
        <Text style={styles.subtitulo}>Buscar tarea:</Text>
        <TextInput
          style={styles.input}
          placeholder="Escribe para filtrar tareas..."
          value={textoBusqueda}
          onChangeText={function (texto) {
            setTextoBusqueda(texto);
          }}
        />
      </View>

      <View style={styles.seccionLista}>
        <Text style={styles.subtitulo}>Tareas:</Text>

        {tareasFiltradas.map(function (tarea) {
          let textoMostrar = '[ ] ' + tarea.texto;
          let estiloTexto = styles.textoPendiente;
          let tituloBotonEstado = 'Completar';

          if (tarea.completada === true) {
            textoMostrar = '[✓] ' + tarea.texto;
            estiloTexto = styles.textoCompletado;
            tituloBotonEstado = 'Desmarcar';
          }

          return (
            <View key={tarea.id} style={styles.itemTarea}>
              <Text style={estiloTexto}>{textoMostrar}</Text>

              <View style={styles.contenedorBotones}>
                <View style={styles.botonIndividual}>
                  <Button
                    title={tituloBotonEstado}
                    onPress={function () {
                      cambiarEstadoTarea(tarea.id);
                    }}
                  />
                </View>

                <View style={styles.botonIndividual}>
                  <Button
                    title="Eliminar"
                    color="red"
                    onPress={function () {
                      eliminarTarea(tarea.id);
                    }}
                  />
                </View>
              </View>
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
}
