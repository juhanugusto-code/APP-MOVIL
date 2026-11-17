import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../styles';

// Muestra el total, las completadas y las pendientes.
export default function ContadoresTareas(props) {
  return (
    <View style={styles.seccionContadores}>
      <Text style={styles.textoContador}>Total de tareas: {props.total}</Text>
      <Text style={styles.textoContador}>Completadas: {props.completadas}</Text>
      <Text style={styles.textoContador}>Pendientes: {props.pendientes}</Text>
    </View>
  );
}
