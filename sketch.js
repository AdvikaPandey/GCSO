var carZenia,carTourus,carCyclap,wall;
//var speedZenia = 60,speedTourus = 50,speedCyclap = 45,weight,defoZenia,defoTourus,defoCyclap;
var speed,weight;


function setup() {
  createCanvas(1600,400);
  background("black");
  speed = random(55,90);
  weight = random(400,1500);

  car = createSprite(50, 200, 50, 50);
  wall = createSprite(1500,200,30,height/2)
  wall.shapeColor = color(80,80,80);

  car.velocityX = speed;
}

function draw() {
  background(0,0,139);  

  if(wall.x-car.x<(car.width+wall.width)/2){
    car.velocityX = 0;
    var defo = 0.5*weight*speed*speed/22509;
    if (defo >180)
     {
        car.shapeColor = color(255,0,0);
     }

    if (defo<180 && defo>100)
     {
        car.shapeColor = color(230,230,0);
     }

    if (defo<100)
     {
        car.shapeColor = color(0,255,0);
     }

  }

  drawSprites();
}