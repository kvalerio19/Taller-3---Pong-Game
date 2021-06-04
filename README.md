# Taller de JavaScript

![Resultado](/images/result.png)

Autor: Eduardo Oviedo Blanco

Para usar este taller efectivamente, clone el código en su ambiente local.
```
git clone https://github.com/edWAR6/JavaScript-Pong-Game.git
```
Si desea subir el taller en su repositorio personal.
Cree un repositorio en su perfil, luego:
```
git remote set-url origin https://github.com/<tu usuario>/JavaScript-Pong-Game.git
```

> El nombre del repositorio puede cambiar. Siga las instrucciones y guarde sus cambios.

## Propósito

Este taller te enseñará lo básico del elemento Canvas y es una buena práctica de variables y operadores básicos en JavaScript.

## Instrucciones

1. Cree el elemento *Canvas* en el HTML.
```html
<canvas id="gameBoard" width="300" height="300">
</canvas>
```
2. Inicie creando las variables para crear el código JavaScript inicial del juego.
```javascript
let canvas; // Canvas element.
let ctx; // Canvas context.
let gameLoop; // Game loop time interval.
```
3. Crea la primer función.
```javascript
function drawGameCanvas() {

  // Get the canvas element.
  canvas = document.getElementById("gameBoard");

  // Make sure you got it.
  if (canvas.getContext) {
    // Specify 2d canvas type.
    ctx = canvas.getContext("2d");
  }
}
```
4. Llama a la función para ver el resultado hasta ahora.
```javascript
drawGameCanvas();
```
5. Crea el resto de variables para las siguientes funciones al inicio del archivo.
```javascript
const boardX = 300; // Board width.
const boardY = 300; // Board height.
const paddleH = 10; // Paddle height.
const paddleD = boardY - paddleH; // Paddle depth.
const paddleW = 150; // Paddle width.

let paddleX = 150; // Initial paddle location.
let ballX = 150; // Ball x position.
let ballY = 150; // Ball y position.
let ballDX = 2; // Change in ball x position.
let ballDY = 4; // Change in ball y position.
```
6. Crea la función para dibujar el juego.
```javascript
function draw() {

  // Clear the board.
  ctx.clearRect(0, 0, boardX, boardY);

  // Fill the board.
  ctx.fillStyle = "thistle";
  ctx.beginPath();
  ctx.rect(0, 0, boardX, boardY);
  ctx.closePath();
  ctx.fill();

  // Draw a ball.
  ctx.fillStyle = "tomato";
  ctx.beginPath();
  ctx.arc(ballX, ballY, 15, 0, Math.PI * 2, true);
  ctx.closePath();
  ctx.fill();

  // Draw the paddle.
  ctx.fillStyle = "navy";
  ctx.beginPath();
  ctx.rect(paddleX, paddleD, paddleW, paddleH);
  ctx.closePath();
  ctx.fill();

  // Change the ball location.
  ballX += ballDX;
  ballY += ballDY;

  // Bounce on a left or right edge.
  if (ballX + ballDX > boardX - 15 || ballX + ballDX < 15)
    ballDX = -ballDX;

  // If ball hits the top, bounce it. 
  if (ballY + ballDY < 15) ballDY = -ballDY;
  // If the ball hits the bottom, check see if it hits a paddle.
  else if (ballY + ballDY > boardY - 15) {
    // If the ball hits the paddle, bounce it.
    if (ballX > paddleX && ballX < paddleX + paddleW) 
      ballDY = -ballDY;
    // Otherwise the game is over.
    else {
      clearInterval(gameLoop);
      alert("Game over!");
    }
  }
}
```
7. Al final de la función *drawGameCanvas*, agregue el código para iniciar el ciclo del juego y que este llame a dibujar cada 16 milisegundos.
```javascript
  // Play the game until the ball stops.
  gameLoop = setInterval(draw, 16);
```
8. Mira el resultado.
9. Crea una función para capturar las flechas de derecha e izquierda del teclado.
```javascript
// Get key press.
function whatKey(evt) {

  switch (evt.keyCode) {
    // Left arrow.
  case 37:
    paddleX = paddleX - 20;
    if (paddleX < 0) paddleX = 0;
    break;

    // Right arrow.
  case 39:
    paddleX = paddleX + 20;
    if (paddleX > boardX - paddleW) paddleX = boardX - paddleW;
    break;
  }
}
```
10. Agrega el siguiente código al final de *drawGameCanvas* para activar la captura del teclado.
```javascript
  // Add keyboard listener.
  window.addEventListener('keydown', whatKey, true);
```
11. Observa el resultado.

## Conclusión

Las variables pueden ser declaradas, inicializadas, reasignadas y usadas para hacer operaciones tales como comparaciones, sumas, restas, etc.

Intenta cambiar los valores en las variables y observe el resultado.
