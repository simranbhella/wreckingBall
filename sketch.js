const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var wreckingBall, rope, ground, box1, box2, box3, box4, box5, box6;

function setup() {
  createCanvas(800,600);
  engine = Engine.create();
    world = engine.world;
ground = new Ground(400,580,800,50);
    wreckingBall = new Ball(300,500,100);
    box1 = new Box(500,400,60,60);
    box2 = new Box(500,400,60,60);
    box3 = new Box(500,400,60,60);
    box4 = new Box(650,400,60,60);
    box5 = new Box(650,400,60,60);
    box6 = new Box(650,400,60,60);

    rope = new Rope(wreckingBall.body,{x:300, y:100} )

}

function draw() {
  background(255,255,255);  
  Engine.update(engine)
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  wreckingBall.display();
  rope.display();
  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(wreckingBall.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  rope.fly();
}

function keyPressed(){
  if(keyCode === 32){
      Matter.Body.setPosition(wreckingBall.body, {x: 300, y: 500});
      rope = new Rope(wreckingBall.body,{x:300, y:100});

  }
}
