import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  contenedorPrincipal: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    padding: 20,
    marginTop: 30,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333333',
  },
  subtitulo: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333333',
  },
  seccionAgregar: {
    backgroundColor: '#ffffff',
    padding: 15,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#cccccc',
  },
  seccionBuscador: {
    backgroundColor: '#ffffff',
    padding: 15,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#cccccc',
  },
  input: {
    borderWidth: 1,
    borderColor: '#999999',
    padding: 8,
    marginBottom: 10,
    backgroundColor: '#ffffff',
  },
  cajaSecreta: {
    backgroundColor: '#fff3cd',
    borderWidth: 2,
    borderColor: '#ffecb5',
    padding: 15,
    marginBottom: 15,
  },
  textoSecreto: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#856404',
    marginBottom: 10,
    textAlign: 'center',
  },
  seccionContadores: {
    backgroundColor: '#e9ecef',
    padding: 12,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#cccccc',
  },
  textoContador: {
    fontSize: 15,
    marginBottom: 4,
    color: '#222222',
  },
  seccionLista: {
    marginBottom: 40,
  },
  itemTarea: {
    backgroundColor: '#ffffff',
    padding: 12,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#cccccc',
  },
  textoPendiente: {
    fontSize: 16,
    color: '#000000',
    marginBottom: 10,
  },
  textoCompletado: {
    fontSize: 16,
    color: 'green',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  contenedorBotones: {
    flexDirection: 'row',
  },
  botonIndividual: {
    marginRight: 10,
  },
});

