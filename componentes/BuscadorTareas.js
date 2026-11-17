import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { styles } from '../styles';

// Input de busqueda para filtrar las tareas por texto.
export default function BuscadorTareas(props) {
  return (
    <View style={styles.seccionBuscador}>
      <Text style={styles.subtitulo}>Buscar tarea:</Text>
      <TextInput
        style={styles.input}
        placeholder="Escribe para filtrar tareas..."
        value={props.textoBusqueda}
        onChangeText={props.onCambiarBusqueda}
      />
    </View>
  );
}
