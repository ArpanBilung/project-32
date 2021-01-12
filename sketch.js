const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var score = 0;

function setup() {
  createCanvas(1200,600);
 

  engine = Engine.create();
  world = engine.world;

  Engine.run(engine)

  ground1 = new Ground(600,580,1200,20);

  ground2 = new Ground(390,300,260,10);
  ground3 = new Ground(900,400,200,10);

  polygon = new Polygon(150,200,30,30);

  launcher = new Slingshot(polygon.body,{x:150, y:110})
  
  
  Box1 = new Box(480,275,30,40);
  Box2 = new Box(450,275,30,40);
  Box3 = new Box(420,275,30,40);
  Box4 = new Box(390,275,30,40);
  Box5 = new Box(360,275,30,40);
  Box6 = new Box(330,275,30,40);
  Box7 = new Box(300,275,30,40);
  Box8 = new Box(330,235,30,40);
  Box9 = new Box(360,235,30,40);
  Box10 = new Box(390,235,30,40);
  Box11 = new Box(420,235,30,40);
  Box12 = new Box(450,235,30,40);
  Box13 = new Box(360,195,30,40);
  Box14 = new Box(390,195,30,40);
  Box15 = new Box(420,195,30,40);
  Box16 = new Box(390,155,30,40);

  b1 = new Box(900,275,30,40);
  b2 = new Box(900,315,30,40);
  b3 = new Box(870,315,30,40);
  b4 = new Box(930,315,30,40);
  b5 = new Box(900,355,30,40);
  b6 = new Box(870,355,30,40);
  b7 = new Box(840,355,30,40);
  b8 = new Box(930,355,30,40);
  b9 = new Box(960,355,30,40);
  


}

function draw() {
  background(55,43,43);
  text("point  " + score, width-100, 60)
   
  
  
  
  ground1.display();
  ground2.display();
  ground3.display();

  Box1.display();
  Box2.display();
  Box3.display();
  Box4.display();
  Box5.display();
  Box6.display();
  Box7.display();
  Box8.display();
  Box9.display();
  Box10.display();
  Box11.display();
  Box12.display();
  Box13.display();
  Box14.display();
  Box15.display();
  Box16.display(); 

  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();
  b8.display();
  b9.display();

  polygon.display();

  launcher.display();
  drawSprites();
}

function mouseDragged()  {
  Matter.Body.setPosition(polygon.body,{x: mouseX, y: mouseY})
}

function mouseReleased()  {
  launcher.fly()
  

}

function keyPressed()  {
  if(keyCode===32)  {
    Matter.Body.setPosition(polygon.body,{x:150, y:200})
    launcher.attach(polygon.body);

  }

}