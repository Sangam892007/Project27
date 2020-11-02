class ConstraintConnector {
    constructor(bodyA,bodyB,XoffSet,YoffSet){
        this.x = XoffSet;
        this.y = YoffSet;
        var options = {
            bodyA:bodyA,
            bodyB:bodyB,
            pointB:{x:XoffSet,y:YoffSet}
           
        };
        this.constraint = Matter.Constraint.create(options)
        World.add(world ,this.constraint)
    }
    display(){
        var pos = this.constraint.bodyA.position;
        var pos2 = this.constraint.bodyB.position;
        line(pos.x,pos.y,pos2.x + this.x,pos2.y + this.y);
    }
}