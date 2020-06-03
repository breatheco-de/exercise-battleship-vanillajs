# Battleship In Vanilla.js

Write a battleship game using Vanilla.js

## 💻 Installation

Start a new project using the Vanilla.js boilerplate.

## 📝Instructions

1. Create your HTML/CSS First, we recomend using a parent div with `display:flex` and `flex-wrap: wrap` (to allow multiple rows), the container must have 100 divs inside.
2. After your HTML/CSS looks good, start thinking on how to make it dynamic using JS.
3. To represent the gameBoard you can use a JS matrix like this:

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
4. Add one onClick to every `<div>` and call the `fireTorpedo` function with the coordinates of the div.
5. Replace the value on the gameBoard and render the board again.

## 😎 Feeling confident?

+ Try implementing a "showShips" function that shows the ship positoins when clicked.