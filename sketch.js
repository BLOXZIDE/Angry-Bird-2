
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var flower_img
var bird
var lodges = []
var pigs = []
function preload()
{
  bird_img = loadImage("birdy.png")
  flower_img = loadImage("FLOWER.png")
  bg_img = loadImage("bg_img.png")
  fire = loadImage("fire.png")
  bg_music = loadSound("bg_music.mp3")
  title_Img = loadImage("title.png")
}
function setup() {
  createCanvas(windowWidth,windowHeight);
  
  engine = Engine.create();
  world = engine.world;
   
  bg_music.play()
  bg_music.loop()
  var title = createSprite(width/2+500,90,100,100)
  title.addImage("titlee",title_Img)
  title.scale = 0.6
  
  //components
  ground = new Ground(width/2,height*0.79,width,10)
  L1 = new Lodge(width-900,height*0.75,25,100)
  pig = new Pig(width/2,height*0.75,50,50)
  L2 = new Lodge(width-800,height*0.65,300,25)
  L3 = new Lodge(width-700,height*0.75,25,100)
  L4 = new Lodge(width-900,height*0.50,25,100)
  pig2 = new Pig(width/2,height/2,50,50)
  L5 = new Lodge(width-800,height*0.49,300,25)
  L6 = new Lodge(width-700,height*0.50,25,100)
  L7 = new Lodge(width-900,height*0.38,25,100)
  pig3 = new Pig(width/2,height/2-50,50,50)
  L8 = new Lodge(width-800,height*0.36,300,25)
  L9 = new Lodge(width-700,height*0.38,25,100)
  
  //bird
  bird = new Player(width-1400,height-600,50,50)
  
  lodges= [L1,L3,L4,L6,L7,L8,L9]
  pigs = [pig,pig2,pig3]

  start()
  rectMode(CENTER)
}


function draw() 
{
  background("black");
 
  image(bg_img,0,0,width,height)  
  
 console.log(bird.body.position.y)
  
  Engine.update(engine);
  L1.show()
  L2.show()
  L3.show()
  L4.show()
  L5.show()
  L6.show()
  L7.show()
  L8.show()
  L9.show()
  pig.show()
  pig2.show()
  pig3.show()
  bird.show()
  keyPressed()
 
  
  for(i = 0;i < lodges.length;i++)
  {
    var birdCollision =Matter.SAT.collides(bird.body,lodges[i].body)
    
    for(j = 0;j < pigs.length;j++)
    {
      var collisionDetetction = Matter.SAT.collides(lodges[i].body,pigs[j].body)
      if(collisionDetetction.collided)
      {
        
        var flower = createSprite(random(0,width),0,50,50)
        flower.addImage("flowerimg",flower_img)
        flower.scale = 0.1
        flower.velocityY = 10
        World.remove(engine.world,pig)
        alert()
      }
      else{
        if(alert != null)
        {setTimeout(() =>{
        swal({
          title: "You lost?",
          text: "press ctrl+r to play again!",
          icon: "warning",
          buttons : false
        })
       },15000)
      }     
      }

      
    }
  
    
  }
  drawSprites()
}

function keyPressed(){
  if(keyCode === 32)
  {
    Matter.Body.applyForce(bird.body,{x:0,y:0},{x:0.05,y:0})
  }
}

function alert()
{
  swal({
    title: "YOU WON!",
    text : "press ctrl+r to play again",
    icon : "success",
    buttons:false 
  });
}

function start()
{
  swal({
    title: "rules!",
    text : "You have 150 seconds to play the game or you lose[press anywhere out to play the game]",
    icon : "warning",
    buttons:false 
  });
}