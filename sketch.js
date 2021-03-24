const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var world, engine;
var manWithUmbrella;
var umbrellaCircle;

var drops = [];

function preload(){
    
}

function setup(){
    createCanvas(500,500);
    engine = Engine.create();
    world = engine.world;
    manWithUmbrella = new Man(250,350);
    umbrellaCircle = Bodies.circle(250,280,80,{isStatic:true});
    World.add(world,umbrellaCircle);
    for(var i = 0 ; i<500 ; i++){
        var drop = new Drop(random(0,width),random(0,500),2)
        drops.push(drop);
    }
}

function draw(){
    background(220);
    Engine.update(engine);
    manWithUmbrella.display();
    for(var i in drops){
        drops[i].display();
    }
    // ellipseMode(RADIUS);
    // ellipse(umbrellaCircle.position.x, umbrellaCircle.position.y, 200, 200);
}  


