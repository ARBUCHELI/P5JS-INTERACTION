let fillValue; // Used to modify the ellipse's fill color
let shapeScale; // Used to scale the size of the ellipse

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();

  fillValue = 0;
  shapeScale = 50;
}

function draw() {
  background(75, 50);

  // TODO: Add if statement to check if mouseIsPressed and set fill colors accordingly
  if (mouseIsPressed) {
    fill(fillValue, 0, 0, 50);
  } else {
    fill(0, 0, fillValue, 50);
  }

  ellipse(width / 2, height / 2, shapeScale, shapeScale);
}

// TODO: Create a mouseMoved() function and inside the function, set fillValue to a random number between 0 and 255
function mouseMoved() {
  fillValue = random(0, 255);
}


// TODO: Create a mousePressed() function and inside the function, modify shapeScale variable
function mousePressed() {
  if(shapeScale < width) {
    shapeScale *= 2;
  } else {
    shapeScale = 50;
  }
}