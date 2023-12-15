let hair0, hair1;
let ig1,img2,op1,op2;
var angle = 0;

function preload() {
    hair0 = loadImage('Assets/IMG_0419.jpeg');
    hair1 = loadImage('Assets/IMG_0420.jpeg');
}

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0, 0); // Position the canvas at top-left
    canvas.style('z-index', '-1'); // Place the canvas behind other elements
};

function draw() {
HairBG(hair0,hair1);
};

function HairBG(img1, img2) {
    push();
    translate(width / 2, height / 2);
    rotate(radians(90));
    scale(0.5);
    imageMode(CENTER);
    tint(255, 255);
    image(img1, 0, 0);
    push();
    tint(255, 100);
    var x = 0 + 20 * cos(angle);
    var y = 0 + 20 * sin(angle);
    image(img2, x, y);
    angle += 0.01;
    pop();
    pop();
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
  }