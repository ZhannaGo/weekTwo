var ball = document.getElementById("ball");
var velocity = 100;
var position = 0;
var reverse = false;

function moveBall() {
        position = position + velocity;
        ball.style.left = position + 'px';
        var Xmin = 0;
        var Xmax = 300;
    }
   
setInterval(moveBall, 100);

