        var ground;
        var bird;
        var log1,log2,log3,log4,box1,box2,box3,box4,box5;
        var pig1,pig2;
        var line1,line2;
        const Engine = Matter.Engine;
        var box2;
        const World = Matter.World;
        const Bodies = Matter.Bodies;
          var engine,world,box1,ball;
          function setup(){
              createCanvas(400,400);
              engine = Engine.create();
                world = engine.world;
        line1=createSprite(150,220,2,1);
        line2=createSprite(350,220,2,1);
        box1= new Box(100,370,50,50);
        box2  = new Box(300,370,50,50);
        pig1= new Pig(200,370);
        log1 = new Log(200,310,250,PI/2);
        box3 = new Box(100,280,50,50);
        box4 = new Box(300,280,50,50);
        pig2 = new Pig(200,280);
        log2 = new Log(200,220,250,PI/2);
        box5 = new Box(200,210,50,50);
        log3 = new Log(250,210,120,PI/-4);
        log4 = new Log(150,210,120,PI/4);
        var  groundoptions={
        isStatic:true 
        }
        ground=Bodies.rectangle(200,380,400,20,groundoptions);
        World.add(world,ground);
                  } 
                    function draw(){ 
                      background(255,255,255);
          Engine.update(engine);
        box1.display();
        box2.display();
        pig1.display();
        log1.display();
        box3.display();
        box4.display();
        pig2.display();
        log2.display();
        box5.display();
        log3.display();
        log4.display();
       displaySprites();
        rectMode(CENTER);
        fill("brown");
        rect(ground.position.x,ground.position.y,400,20);
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            }



























