class Drop{
    constructor(x,y,radius){
        var options = {
            isStatic : false,
            friction : 0.1
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius;
        this.x = x;
        World.add(world, this.body);
    }
    display(){
        push();
        ellipseMode(RADIUS);
        ellipse(this.body.position.x, this.body.position.y, this.radius, this.radius);
        pop();
        if(this.body.position.y>height){
            // this.body.position.y = random(-500,0);
            var y = random(-500,0);
            Matter.Body.setPosition(this.body, {x:this.x, y:y})
        }
    }
    
}