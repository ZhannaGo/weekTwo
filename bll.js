//Set global variable that would contain the position, velocity and the html element "ball"

//write a function that can change the position of the html element "ball"
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
//Set global variable that would contain the position, velocity and the html element "ball"
var positionX = 0;
var positionY = 0;
var velocity = 100;
var reverse = false;
var ball = document.getElementById("ball");

//write a function that can change the position of the html element "ball"
function moveBall() {
  // two x-axis coordinates
  var Xmin = 0;
  var Xmax = 500;

  // two y-axis coordinates
  var Ymin = 0;
  var Ymax = 700;

  if (reverse) {
    positionX = positionX - velocity;
    positionY = positionY - velocity;
    ball.style.left = positionX + "px";
    ball.style.top = positionY + "px";
  } else {
    positionX = positionX + velocity;
    positionY = positionY + velocity;
    ball.style.left = positionX + "px";
    ball.style.top = positionY + "px";
  }

  if (
    positionX > Xmax ||
    positionX === Xmin ||
    positionY > Ymax ||
    positionY === Ymin
  ) {
    reverse = !reverse;
  }
}

setInterval(moveBall, 100);