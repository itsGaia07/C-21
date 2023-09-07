class Ground 
{
  //specify the options/properties for the physical body:
  constructor(x, y, w, h) 
  {
    let options = {
      isStatic:true
    };
    //we create a body for the ground using the shape of the rectangle and assign it to this.body
    this.body = Bodies.rectangle(x, y, w, h, options);
    this.w = w;
    this.h = h;
    World.add(world, this.body);
  }

  show() {
    var pos = this.body.position;
    
    //If we want to give certain properties for a shape,
    //as color, stroke and strokeWeight - color, stroke and weight or stroke, 
    //we can encapsulate these declarations inside push() and pop().
    push();
    rectMode(CENTER);
    stroke(255);
    fill(127);
    rect(pos.x, pos.y, this.w, this.h);
    pop();
  }
  
}


