class Pig{

    constructor(x,y,){
    var options={
    restitution:1.0
    
     }
    this.body=Bodies.rectangle(x,y,40,40,options);
    this.width=40;
    this.height=40;
    World.add(world,this.body);
    }
    display(){
    var angle=this.body.angle;
    push ();
    translate(this.body.position.x,this.body.position.y);
    angleMode(RADIANS);
    rotate(angle);
    rectMode(CENTER);
    strokeWeight(4);
    stroke("green");
    
    rect(0,0,this.width,this.height);
    pop ();
    
    }
    
    }
    