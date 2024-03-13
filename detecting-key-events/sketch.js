// Variables for the ball
let ballPosX;
let ballPosY;
let diameter;
let xBallDir;
let yBallDir;
let xSpeed;
let ySpeed;

// Variables for the paddle
let paddlePosX;
let paddlePosY;
let paddleWidth;
let paddleHeight;
let started;

function setup() {
  createCanvas(windowWidth, windowHeight);
  ballPosX = random(25, width - 25);
  ballPosY = 50;
  diameter = 50;
  xBallDir = random(-5,5);
  yBallDir = random(3,5);
  xSpeed = random(1,2);
  ySpeed = random(1,2);
  paddleWidth = 100;
  paddleHeight = 25; 
  started = false
}

function draw() {
  background(0);
  // Ball bounces off walls
  ballPosX += xSpeed * xBallDir;
  ballPosY += ySpeed * yBallDir ;
  if (ballPosX < diameter/2 || 
      ballPosX > windowWidth - 0.5 * diameter) {
    xSpeed *= -1.001;
  }
  if (ballPosY < diameter/2 || 
      ballPosY > windowHeight - diameter) {
     ySpeed *= -1.001;
  }
  
  // Detect collision with paddle
  if ((ballPosX > paddlePosX &&
      ballPosX < paddlePosX + paddleWidth) &&
      (ballPosY + (diameter/2) >= paddlePosY)) {
    xSpeed *= -1;    
    ySpeed *= -1;
  }
  
  // Draw ball
  fill(255);
  noStroke();
  ellipse(ballPosX, ballPosY, diameter, diameter);
  
  // Update paddle location
  if (!started) {
    paddlePosX = windowWidth / 2;
    paddlePosY = windowHeight - 100;
    started = true;
  }
  
  // Draw paddle
  fill(255);
  noStroke();
  rect(paddlePosX, paddlePosY, paddleWidth, paddleHeight);

  // TODO: Using the spacebar create a game reset button
  if (keyIsPressed && key === ' ') {
    ballPosX = 50;
    ballPosY = 50;
    started = false;
  }
}

// TODO: Create a keyPressed() function and inside the function, control the paddle using the right and left arrow keys 
function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    paddlePosX -= 50;
  } else if (keyCode === RIGHT_ARROW) {
    paddlePosX += 50;
  }
}