var bg,bg2,form,system,code,security;
var score=0;

function preload() {
  bg = loadImage("fondo_preguntas.jpg");
  bg2 = loadImage("fondo_4.jpg")
}

function setup() {
  createCanvas(windowWidth,windowHeight);
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
    text("SIGUIENTE NIVEL (っ◕‿◕)っ☺→ 1\n\ INSTRUCCIONES 1\n\ Has sido el elegido para seguir aqui 1\n\  ",100, 100);
  }

  drawSprites()
}