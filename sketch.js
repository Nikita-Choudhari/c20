var mov,fix;
function setup() {
  createCanvas(1200,800);
  mov=createSprite(400, 200, 80, 60);
  mov.shapeColor="green";
  fix=createSprite(200,200,50,30);
  fix.shapeColor="green";
  
 
}

function draw() {
  background("white");  
  mov.x=World.mouseX
  mov.y=World.mouseY;
  if(mov.x-fix.x<mov.width/2+fix.width/2 && fix.x-mov.x<fix.width/2+mov.width/2 && mov.y-fix.y<fix.height/2+mov.height/2 && fix.y-mov.y<fix.height/2+mov.height/2 )
  {
    mov.shapeColor="red";
    fix.shapeColor="red";
  }
  else{
    mov.shapeColor="green";
    fix.shapeColor="green";
  }
  console.log(mov.x-fix.x);
  drawSprites();
}