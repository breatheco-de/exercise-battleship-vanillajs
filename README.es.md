
# Battleship In Vanilla.js

Crea un batalla naval usando Vanilla.js

![Demonstration of Battleship](https://github.com/breatheco-de/exercise-battleship-vanillajs/blob/master/preview.gif?raw=true)

## 🌱  Cómo iniciar este proyecto

 No clones este repositorio. El primer paso para comenzar a codificar es clonar el [vanillajs boilerplate](https://github.com/4GeeksAcademy/vanillajs-hello) en tu computador local o con Gitpod.

a) Si usas Gitpod (recomendada) puedes clonar el boilerplate [clic aquí](https://github.com/4GeeksAcademy/vanillajs-hello).

b) Si trabajas localmente, escribe el siguiente comando en tu terminal: 
```sh
git clone  https://github.com/4GeeksAcademy/vanillajs-hello
```
💡 Importante: Recuerda actualizar el `remote` del proyecto con el de tu repositorio usando `git remote set-url origin <your new url>`, y luego guardar tu código en tu nuevo repositorio usando `add`, `commit` y `push`.

## 📝Instrucciones

1. Crea tu HTML / CSS. Primero, te recomendamos usar un div padre con `display: flex` y` flex-wrap: wrap` (para permitir múltiples filas), el contenedor debe tener 100 divs adentro.
2. Una vez que tu HTML / CSS se vea bien, comienza a pensar en cómo hacerlo dinámico usando JS.
3. Para representar el tablero de juego, puedes usar una array o arreglo JS como este:

```js
// 0 = empty
// 1 = part of a ship
// 2 = a sunken part of a ship
// 3 = a missed shot
let gameBoard = [
    [1,1,1,1,1,0,0,0,0,1],
    [0,0,0,0,0,0,0,0,0,1],
    [0,0,0,0,0,0,0,0,0,1],
    [0,0,0,0,0,0,0,0,0,1],
    [0,0,0,0,0,0,0,0,0,0],
    [1,0,0,1,1,0,0,0,0,0],
    [1,0,0,0,0,0,0,0,0,0],
    [1,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [1,1,1,1,0,0,0,0,0,0]
];
```

4. Agrega un onClick a cada `<div>` y llama a la función `fireTorpedo` con las coordenadas del div.
5. Reemplaza el valor en el tablero y muestra (render) el tablero nuevamente.

## 😎 ¿Te sientes seguro?

+ Intenta implementar una función "showShips" que muestre las posiciones del barco cuando se hace clic.