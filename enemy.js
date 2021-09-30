class Pig
{
  constructor(x, y, w,h) 
  {
    let options = {
     isStatic:false,
     friction: 0.1,
     restitution: 0
  
    };
    
    this.body = Bodies.rectangle(x, y, w, h, options);
    this.w = w;
    this.h = h;
    this.image = loadImage("Angry.png")
    World.add(world, this.body);
  }

  show() {
    let pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.w, this.h);
   
    pop();
    
  
  }
}