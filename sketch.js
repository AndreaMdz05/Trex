var trex, trex_running, edges;
var groundImage;
var ground;
function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  groundImage = loadImage("ground2.png")
}

function setup(){
  createCanvas(600,200);
  
  //crear sprite de Trex
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  ground = createSprite(150,200,600,30);
  ground.addImage(groundImage);
  ground.x = ground.width/2;
  edges = createEdgeSprites();
  
  //agregar tamaño y posición al Trex
  trex.scale = 0.5;
  trex.x = 50
}


function draw(){
  //establecer color de fondo.
  background("white");
  ground.velocityX = -8;
  if(ground.x<0){
    ground.x = ground.width/2;
  }
  //cargar la posición Y del Trex
  console.log(trex.y)
  
  //hacer que el Trex salte al presionar la barra espaciadora
  if(keyDown("space")){
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.5;
  trex.collide(ground);
  
  //evitar que el Trex caiga
  //trex.collide(edges[3])
  drawSprites();
}
