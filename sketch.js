var bg,bg2,form,system,code,security;
var score=0;

function preload() {
  bg = loadImage("fondo_4.jpg");
  bg2 = loadImage("fondo_preguntas.jpg")
}

function setup() {
  createCanvas(1000,500);
  system = new System()
  security = new Security()
}

function draw() {
  background(bg);
  clues();
  security.display();
  textSize(20);
  fill("white");
  text("Puntuación: " + score, 450, 50);

  if(score === 3) {
    clear()
    background(bg2)
    fill("black")
    textSize(40);
    text("TESORO DESBLOQUEADO",250, 200);
  }

  drawSprites()
}