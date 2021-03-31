
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var  backgroundImg


function preload(){
  backgroundImg=loadImage("snow1.jpg")
  }
  
  function setup() {
    createCanvas(800,400);
  
    engine = Engine.create();
    world = engine.world;
  
  
  
    createSprite(400, 200, 50, 50);
  }
  
  function draw() {
    background(backgroundImg);
    
  
    drawSprites();
  }