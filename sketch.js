var score = 0;
var PLAY = 1;
var END = 0;
var gameState = PLAY;
var bow , arrow,  background;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;
var score = 0 ;

function preload(){
  
  backgroundImage = loadImage("background0.png");
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  
}



function setup() {
  createCanvas(400, 400);
  
  
  scene = createSprite(0,0,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 2.5
  
 arrow = createSprite (380,220,50,50);
 arrow.addImage (arrowImage);
 arrow.scale = 0.5;
  bow = createSprite(380,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;

red_ballonImageGroup = new Group ();
score = 0
arrowGroup= new Group();


}
  

function draw() {
 background(0);
  // mover o chão
    scene.velocityX = -3 
    
   
    if (scene.x < 0){
      scene.x = scene.width/2;
    }
   
  //mover o arco
  bow.y = World.mouseY
  arrow.y = World.mouseY
  if (arrow.x < 50){
    arrow.x = 380
    arrow.velocityX = 0;
      }
    
   // soltar a flecha quando a tecla espaço for pressionada
  if (keyDown("space")&&arrow.y>160) {
    arrow.velocityX = -5
    //createArrow();
   
  }  if(arrowGroup.isTouching(red_ballonImageGroup)){
      
      arrowGroup.destroy (red_ballonImageGroup);
      gameState = END; 
  }
  
  //mude o valor do balão aleatório para 4
  
  
  redBalloon ();
arrow();
  drawSprites();
}


// criar flechas para o arco


 

function redBalloon() {
  if (frameCount % 200 === 0) {
  var red = createSprite(0,Math.round(random(20, 370)), 10, 10);
  red.addImage(red_balloonImage);
  red.velocityX = 3;
  red.lifetime = 250;
  red.scale = 0.1;
  }
}
 
 function arrow (){
if (frameCount % 100 === 0) {
  var flecha = createSprite (0,Math.round(random(300,300)),10,10);
  flecha.addImage (arrowImage);
  flecha.velocityX = 3;
  flecha.lifetime = 250;
  flecha.scale = 0.1
}

 }
