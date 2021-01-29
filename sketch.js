const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;


function preload() {

}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    
 ground = new Ground(330 , 265, 300 , 20);
 stand = new Ground(810 , 180 , 200 , 20);

block1 = new Ground(240 , 235 , 30 , 40);
block2 = new Ground(270 , 235 , 30 , 40);
block3 = new Ground(300 , 235 , 30 , 40);
block4 = new Ground(330 , 235 , 30 , 40);
block5 = new Ground(360 , 235 , 30 , 40);
block6 = new Ground(390 , 235 , 30 , 40);
block7 = new Ground(420 , 235 , 30 , 40);
block8 = new Ground1(390 , 195 , 30 , 40);
block9 = new Ground1(360 , 195 , 30 , 40);
block10 = new Ground1(330 , 195 , 30 , 40);
block11 = new Ground1(300 , 195 , 30 , 40);
block12 = new Ground1(270 , 195 , 30 , 40);
block13 = new Ground2(300 , 195-40 , 30 , 40);
block14 = new Ground2(330 , 195-40 , 30 , 40);
block15 = new Ground2(360 , 195-40 , 30 , 40);
block16 = new Ground(330 , 195-80 , 30 , 40);
block17 = new Ground(750 , 150 , 30 , 40);
block18 = new Ground(780 , 150 , 30 , 40);
block19 = new Ground(810 , 150 , 30 , 40);
block20 = new Ground(840 , 150 , 30 , 40);
block21 = new Ground(870 , 150 , 30 , 40);
block22 = new Ground1(780 , 110 , 30 , 40);
block23 = new Ground1(810 , 110 , 30 , 40);
block24 = new Ground1(840 , 110 , 30 , 40);
block25 = new Ground2(810 , 70 , 30 , 40);



}

function draw(){
    background(0);
    Engine.update(engine);




ground.display();
stand.display();
block1.display();
block2.display();
block3.display();
block4.display();
block5.display();
block6.display();
block7.display();
block8.display();
block9.display();
block10.display();
block11.display();
block12.display();
block13.display();
block14.display();
block15.display();
block16.display();
block17.display();
block18.display();
block19.display();
block20.display();
block21.display();
block22.display();
block23.display();
block24.display();
block25.display();





}