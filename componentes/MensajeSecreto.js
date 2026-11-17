import React from 'react';
import { View, Text, Button } from 'react-native';
import { styles } from '../styles';

// Recuadro amarillo que aparece cuando se escribe el codigo secreto.
export default function MensajeSecreto(props) {
  return (
    <View style={styles.cajaSecreta}>
      <Text style={styles.textoSecreto}>
        ¡Codigo secreto activado! Desbloqueaste el mensaje oculto del trabajo practico.
      </Text>
      <Button title="Cerrar mensaje secreto" onPress={props.onCerrar} />
    </View>
  );
}
