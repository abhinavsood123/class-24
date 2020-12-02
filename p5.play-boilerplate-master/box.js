class Box{

constructor(x,y,w,h){
var options={
restitution:1.0

 }
this.body=Bodies.rectangle(x,y,w,h,options);
this.width=w;
this.height=h;
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





























