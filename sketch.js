var wall,thickness;
var bullet,speed, weight;

function setup() {
   createCanvas(800,400);
  
      speed= random (223,321);
  weight=random(30,52);
  thickness=random(22,83);
  
  bullet=createSprite(50,200,50,20);
  
  bullet.velocityX=speed;

  bullet.shapeColor=("brown");
  
wall=createSprite(600,200,thickness,height/2);

}

function draw() {
  background("white");
 /* if(car.isTouching(wall)){
   car.velocityX=0;
  }*/
  
  if (wall.x-bullet.x < (bullet.width+wall.width)/2)
  {
    bullet.velocityX=0;
   
  var damage=0.5*weight*speed*speed/(thickness *thickness *thickness);
  
    if(damage>10){
    bullet.shapeColor=("red");
      wall.shapeColor=("red")
  }
    
  if (damage<10){
    bullet.shapeColor=("green");
    wall.shapeColor=("green");
  }
    

  }
  
  drawSprites();
}
