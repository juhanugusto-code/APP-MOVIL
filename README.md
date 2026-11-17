# Mi Lista de Tareas

Trabajo practico de React Native con Expo. Es una lista de tareas donde se pueden
agregar, completar, buscar y eliminar tareas.

## Como correrlo

Instalar las dependencias:

```
npm install
```

Levantar el proyecto:

```
npx expo start
```

Se puede abrir en el celular con la app Expo Go escaneando el QR, o en el
navegador apretando la tecla `w`.

## Funcionalidades

- Agregar una tarea nueva.
- Marcar una tarea como completada o desmarcarla.
- Eliminar una tarea.
- Buscar tareas por texto.
- Ver el total de tareas, las completadas y las pendientes.
- Mensaje secreto escondido (ver mas abajo).

## Estructura del proyecto

```
mi-lista-de-tareas/
├── App.js                    Componente principal
├── index.js                  Punto de entrada
├── styles.js                 Estilos de toda la app
├── logicaTareas.js           Funciones que trabajan con las tareas
├── hooks/
│   └── useTareas.js          Guarda el estado y las acciones de las tareas
├── componentes/
│   ├── FormularioTarea.js    Input y boton para agregar una tarea
│   ├── BuscadorTareas.js     Input para buscar tareas
│   ├── ContadoresTareas.js   Total, completadas y pendientes
│   ├── ListaTareas.js        Dibuja la lista con sus botones
│   └── MensajeSecreto.js     Recuadro del mensaje secreto
├── app.json                  Configuracion de Expo
└── package.json              Dependencias y scripts
```

## Como esta organizado el codigo

El codigo esta separado en cuatro partes, para que `App.js` no tenga todo adentro.

### 1. La logica (`logicaTareas.js`)

Aca estan las funciones que trabajan con la lista de tareas: agregar, cambiar el
estado, eliminar, filtrar y contar.

Ninguna de estas funciones usa React y ninguna modifica la lista original: todas
reciben una lista y devuelven una lista nueva. Eso hace que sean faciles de leer
y de probar por separado.

### 2. Los componentes (`componentes/`)

Cada componente dibuja una sola parte de la pantalla. Son componentes "tontos":
no guardan estado ni conocen la lista de tareas. Reciben los datos por `props` y
avisan lo que paso por callbacks (`onAgregar`, `onEliminar`, `onCambiarEstado`).

### 3. El hook (`hooks/useTareas.js`)

Es una funcion propia que empieza con `use`, como las de React. Adentro tiene los
`useState` de la app y las acciones que los modifican: agregar, cambiar el estado,
eliminar y cerrar el mensaje secreto.

Devuelve un objeto con todo lo que necesita la pantalla para dibujarse. Gracias a
esto, el estado de la app vive en un solo lugar y no esta mezclado con el diseño.

### 4. El componente principal (`App.js`)

Es el que arma la pantalla. Llama al hook, recibe los datos y se los pasa a cada
componente por `props`. No tiene logica propia: solo ordena las piezas.

Hacerlo asi tiene una ventaja concreta: si hay que cambiar una regla de las
tareas, se toca `logicaTareas.js`. Si hay que cambiar el estado, se toca el hook.
Si hay que cambiar como se ve algo, se toca el componente correspondiente. Casi
nunca hace falta abrir `App.js`.

## Codigo secreto

Si se escribe `123456` en el campo de nueva tarea y se apreta el boton, aparece
un mensaje secreto escondido en la app.

## Hecho con

- React Native 0.76
- Expo 52
- JavaScript (sin TypeScript)
