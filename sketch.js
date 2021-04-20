var fixedRect, movingRect, wall;




function setup() {
  createCanvas(800,400);   
  //createSprite(400, 200, 50, 50);
fixedRect = createSprite(400,200,60,60);
movingRect = createSprite(100,200,30,30);
wall = createSprite(0,200,1,400);
wall.shapeColor = "black"
fixedRect.debug=true
movingRect.debug=true
movingRect.velocityX = 4
}

function draw() {
  background("black");  
 
 bouncingOff(movingRect, fixedRect);
 
 
  




if(isTouch(movingRect, wall))
  
  {

    movingRect.velocityX = 0
    movingRect.shapeColor = "red"

}


drawSprites();
}

