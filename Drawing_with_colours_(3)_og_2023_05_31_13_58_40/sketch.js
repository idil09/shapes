let switchVal, sizeDiff;
var squareColor;
function setup() {
  createCanvas(600, 600);
  background("#FFEB3B");
}
function keyPressed(D) {
  let createCanvas;
  600, 600;
  background("#FFEB3B");
}
function draw() {
  SetRandos();
}
function SetRandos() {
  switchVal = random(0, 4);
  randoColor = color(
    random(1, 360),
    random(1, 360),
    random(1, 360),
    random(50, 360)
  );
}

function DrawStuff(mX, mY, pmX, pmY) {
  sizeDiff = dist(mX, mY, pmX, pmY);
  if (switchVal >= 3) {
    triangle(mX + sizeDiff, mY, mX, mY - sizeDiff, mX - sizeDiff, mY);
  } else {
    circle(mX, mY, sizeDiff);
  }
}
function mouseDragged() {
  fill(randoColor);
  noStroke();
  DrawStuff(mouseX, mouseY, pmouseX, pmouseY);
}
