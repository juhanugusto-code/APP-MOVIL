import React from 'react';
import { View, Text, Button } from 'react-native';
import { styles } from '../styles';

// Dibuja la lista de tareas con los botones de completar y eliminar.
export default function ListaTareas(props) {
  return (
    <View style={styles.seccionLista}>
      <Text style={styles.subtitulo}>Tareas:</Text>

      {props.tareas.map(function (tarea) {
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
                    props.onCambiarEstado(tarea.id);
                  }}
                />
              </View>

              <View style={styles.botonIndividual}>
                <Button
                  title="Eliminar"
                  color="red"
                  onPress={function () {
                    props.onEliminar(tarea.id);
                  }}
                />
              </View>
            </View>
          </View>
        );
      })}
    </View>
  );
}
