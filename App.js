import React from 'react';
import { ScrollView, Text } from 'react-native';
import { styles } from './styles';
import useTareas from './hooks/useTareas';
import FormularioTarea from './componentes/FormularioTarea';
import BuscadorTareas from './componentes/BuscadorTareas';
import ContadoresTareas from './componentes/ContadoresTareas';
import ListaTareas from './componentes/ListaTareas';
import MensajeSecreto from './componentes/MensajeSecreto';

export default function App() {
  const {
    tareaTexto,
    textoBusqueda,
    mostrarSecreto,
    tareasFiltradas,
    contadores,
    setTareaTexto,
    setTextoBusqueda,
    agregarTarea,
    cambiarEstadoTarea,
    borrarTarea,
    cerrarMensajeSecreto,
  } = useTareas();

  return (
    <ScrollView style={styles.contenedorPrincipal}>
      <Text style={styles.titulo}>Mi Lista de Tareas</Text>

      <FormularioTarea
        tareaTexto={tareaTexto}
        onCambiarTexto={setTareaTexto}
        onAgregar={agregarTarea}
      />

      {mostrarSecreto && <MensajeSecreto onCerrar={cerrarMensajeSecreto} />}

      <ContadoresTareas
        total={contadores.total}
        completadas={contadores.completadas}
        pendientes={contadores.pendientes}
      />

      <BuscadorTareas
        textoBusqueda={textoBusqueda}
        onCambiarBusqueda={setTextoBusqueda}
      />

      <ListaTareas
        tareas={tareasFiltradas}
        onCambiarEstado={cambiarEstadoTarea}
        onEliminar={borrarTarea}
      />
    </ScrollView>
  );
}
