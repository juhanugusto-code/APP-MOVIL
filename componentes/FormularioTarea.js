import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { styles } from '../styles';

// Formulario para escribir y agregar una tarea nueva.
export default function FormularioTarea(props) {
  return (
    <View style={styles.seccionAgregar}>
      <Text style={styles.subtitulo}>Nueva tarea:</Text>
      <TextInput
        style={styles.input}
        placeholder="Escribe una tarea o el codigo..."
        value={props.tareaTexto}
        onChangeText={props.onCambiarTexto}
      />
      <Button title="Agregar tarea" onPress={props.onAgregar} />
    </View>
  );
}
