class Ball {
    constructor(x,y,radius){
        var options = {
            isStatic: false,
            friction:0.2,
            restitution:1.25
        };
        this.body = Matter.Bodies.circle(x,y,radius,options);
        this.r = radius
        World.add(world ,this.body)
    }
    display(){
        var pos = this.body.position;
        fill("Pink");
        ellipseMode(CENTER);
        ellipse(pos.x,pos.y,this.r,this.r);
    }
}