function setup() {
    createCanvas(windowWidth, windowHeight);
    noStroke();
  
    // TODO: Move background() in draw() function here
    background(75);
  }
  
  function draw() {
    // TODO: Move below background() to setup()
    ellipse(mouseX, mouseY, 75, 75);
  
    // TODO: Set fill() using mouseX and mouseY variables
    fill(mouseX, 135, mouseY);
    // TODO: Draw an ellipse using mouseX and mouseY for the x and y position
  
  }