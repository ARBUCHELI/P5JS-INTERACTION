let isDrawing = true; // Variable to track drawing mode
let isMarker = false; // Variable to track marker mode
let originalStrokeWeight = 1; // Variable to store the original stroke weight
let drawingAreaWidth;
let drawingAreaHeight;
let drawingAreaX;
let drawingAreaY;

function setup() {
  // Set the canvas size
  createCanvas(windowWidth, windowHeight);
  
  // Set the fill color to the specified color for the area outside the drawing area
  fill('#034f84');
  // Fill the entire canvas with the specified color
  rect(0, 0, windowWidth, windowHeight);
  
  // Adjust drawing area dimensions and position
  drawingAreaWidth = windowWidth - 200;
  drawingAreaHeight = windowHeight - 100;
  drawingAreaX = (windowWidth - drawingAreaWidth) / 2;
  drawingAreaY = (windowHeight - drawingAreaHeight) / 2;

  // Draw white border around the drawing area
  stroke(255); // Set stroke color to white
  strokeWeight(2); // Set stroke weight to 2 pixels
  noFill(); // Disable fill for the border
  rect(drawingAreaX - 1, drawingAreaY - 1, drawingAreaWidth + 2, drawingAreaHeight + 2); // Draw the border

  // Draw drawing area
  fill(0, 55, 0);
  rect(drawingAreaX, drawingAreaY, drawingAreaWidth, drawingAreaHeight);

  // Draw pencil button
  let pencilButtonX = drawingAreaX + drawingAreaWidth + 20;
  let pencilButtonY = drawingAreaY + 20;
  drawButton(pencilButtonX, pencilButtonY, '✏️');

  // Draw marker button below pencil button
  let markerButtonX = drawingAreaX + drawingAreaWidth + 20;
  let markerButtonY = pencilButtonY + 60;
  drawButton(markerButtonX, markerButtonY, '🖊️');
  
  // Draw eraser button below marker button
  let eraserButtonX = drawingAreaX + drawingAreaWidth + 20;
  let eraserButtonY = markerButtonY + 60;
  drawButton(eraserButtonX, eraserButtonY, '🧽');

  // Draw clean screen button below eraser button
  let cleanButtonX = drawingAreaX + drawingAreaWidth + 20;
  let cleanButtonY = eraserButtonY + 60;
  drawButton(cleanButtonX, cleanButtonY, '🧹');
}

function drawButton(x, y, symbol) {
  // Draw button background
  fill('#87bdd8'); // Set fill color to black
  rect(x, y, 50, 50);

  // Draw button symbol
  fill(255); // Set fill color to white
  textSize(20);
  text(symbol, x + 15, y + 35);
}

function mousePressed() {
  // Check if mouse is clicked on pencil button
  if (
    mouseX >= drawingAreaX + drawingAreaWidth + 20 &&
    mouseX <= drawingAreaX + drawingAreaWidth + 70 &&
    mouseY >= drawingAreaY + 20 &&
    mouseY <= drawingAreaY + 70
  ) {
    // Set drawing mode
    setDrawingMode();
  }
  // Check if mouse is clicked on marker button
  else if (
    mouseX >= drawingAreaX + drawingAreaWidth + 20 &&
    mouseX <= drawingAreaX + drawingAreaWidth + 70 &&
    mouseY >= drawingAreaY + 80 &&
    mouseY <= drawingAreaY + 130
  ) {
    // Set marker mode
    setMarkerMode();
  }
  // Check if mouse is clicked on eraser button
  else if (
    mouseX >= drawingAreaX + drawingAreaWidth + 20 &&
    mouseX <= drawingAreaX + drawingAreaWidth + 70 &&
    mouseY >= drawingAreaY + 140 &&
    mouseY <= drawingAreaY + 190
  ) {
    // Set erasing mode
    setErasingMode();
  }
  // Check if mouse is clicked on clean screen button
  else if (
    mouseX >= drawingAreaX + drawingAreaWidth + 20 &&
    mouseX <= drawingAreaX + drawingAreaWidth + 70 &&
    mouseY >= drawingAreaY + 200 &&
    mouseY <= drawingAreaY + 250
  ) {
    clearScreen(); // Call the function to clear the screen
  }
}


// Function to set drawing mode
function setDrawingMode() {
  isDrawing = true; // Set drawing mode to true
  isMarker = false; // Set marker mode to false
  stroke(255); // Set stroke color to white (pencil color)
  strokeWeight(originalStrokeWeight);
}

// Function to set erasing mode
function setErasingMode() {
  isDrawing = false; // Set drawing mode to false (eraser mode)
  isMarker = false; // Set marker mode to false
  let bg = color(0, 55, 0); // Get the background color
  stroke(bg); // Set stroke color to background color (eraser color)
}

// Function to set marker mode
function setMarkerMode() {
  isDrawing = true; // Set drawing mode to true
  isMarker = true; // Set marker mode to true
  stroke(255); // Set stroke color to white (marker color)
  strokeWeight(4); // Set stroke weight to 4 pixels
}

function draw() {
  // Draw only when mouse is pressed and we are in drawing mode
  if (
    mouseIsPressed &&
    mouseX >= drawingAreaX &&
    mouseX <= drawingAreaX + drawingAreaWidth &&
    mouseY >= drawingAreaY &&
    mouseY <= drawingAreaY + drawingAreaHeight
  ) {
    if (isDrawing) {
      if (isMarker) {
        strokeWeight(4); // Set stroke weight to 4 pixels for marker
      } else {
        strokeWeight(originalStrokeWeight); // Use original stroke weight for pencil
      }
      line(pmouseX, pmouseY, mouseX, mouseY); // Draw a line from previous mouse position to current position
    } else {
      eraseWithBackground(); // Erase with background color
    }
  }
}

function eraseWithBackground() {
  let bg = color(0, 55, 0); // Get the background color
  let eraserStrokeWeight = 10 * 1; // Four times the stroke weight of the pencil
  strokeWeight(eraserStrokeWeight); // Set stroke weight to the eraser's stroke weight
  line(pmouseX, pmouseY, mouseX, mouseY); // Draw a line with background color
}

function clearScreen() {
  // Set the fill color to match the background color of the drawing area
  fill(0, 55, 0);
  // Clear only the drawing area
  rect(drawingAreaX, drawingAreaY, drawingAreaWidth, drawingAreaHeight);
  
  // Reset stroke color to white
  stroke(255);
  stroke(255); // Set stroke color to white
  strokeWeight(2); // Set stroke weight to 2 pixels
  noFill(); // Disable fill for the border
  rect(drawingAreaX - 1, drawingAreaY - 1, drawingAreaWidth + 2, drawingAreaHeight + 2); // Draw the border
}

