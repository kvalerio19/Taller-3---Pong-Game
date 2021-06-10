let canvas;
let context;
let gameLoop;

const boardX = 300;
const boardY = 300;
const paddleH = 10;
const paddleD = boardY - paddleH;
const paddleW = 150;


let paddleX = 150;
let ballX = 150;
let ballY = 150;
let ballDx = 2;
let ballDy = 4;

let score = 0;


function drawGameCanvas() {
    canvas = document.getElementById('gameBoard');

    if (canvas.getContext) {
        context = canvas.getContext('2d');
        gameLoop = setInterval(draw, 16);
        window.addEventListener('keydown', keyInput, true);

    }
}


function draw() {

    context.clearRect(0, 0, boardX, boardY);

    context.fillStyle = 'thistle';
    context.beginPath();
    context.rect(0, 0, boardX, boardY);
    context.closePath();
    context.fill();

    context.fillStyle = 'tomato';
    context.beginPath();
    context.arc(ballX, ballY, 15, 0, Math.PI * 2, true);
    context.closePath();
    context.fill();

    context.fillStyle = 'navy';
    context.beginPath();
    context.rect(paddleX, paddleD, paddleW, paddleH);
    context.closePath();
    context.fill();

    ballX += ballDx;
    ballY += ballDy;


    if (ballX + ballDx > boardX - 15 || ballX + ballDx < 15) {
        ballDx = -ballDx;

    }
    if (ballY + ballDy < 10) {
        ballDy = -ballDy;

    } else if (ballY + ballDx > boardY - 15) {
        if (ballX > paddleX && ballX < paddleX + paddleW) {
            ballDy = -ballDy;
            score++;
        } else {
            clearInterval(gameLoop);
            //alert('Game Over');
            //swal("Oops!", "Game Over!");
            //displayMessage('Ocurrio un Error', 'warning');
            error = "GAME OVER";
            document.getElementById("gameOver").innerHTML = error;

        }


    }
    fill('#ffff');
    textSize(24);
    text("Score: " + score, 10, 25);

}


function keyInput(e) {
    switch (e.keyCode) {
        case 37:
            paddleX -= 20;
            if (paddleX < 0) {
                paddleX = 0;
            }
            break;
        case 39:
            paddleX += 20;
            if (paddleX > boardX - paddleW) {
                paddleX = boardX - paddleW;
            }
            break;
    }
}

function resetGame() {
    window.location.reload()

}


drawGameCanvas();