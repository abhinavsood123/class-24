class Log{

    constructor(x,y,h,angle){
    var options={
    restitution:1.0
    
     }
    this.body=Bodies.rectangle(x,y,20,h,options);
    this.width= 20;
    this.height= h;
    Matter .Body.setAngle(this.body,angle);
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
    stroke("yellow");
    
    rect(0,0,this.width,this.height);
    pop ();
    
    }
    
    }
    