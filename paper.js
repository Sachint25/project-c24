class paper{

    constructor(x,y,radius){
        var option = {
          isStatic: false,
          restitution: 0.3,
          friction: 0.5,
          density: 1.2  
        }
        
        this.body = Bodies.circle(x, y, radius, option);
        World.add(world, this.body);

    }

    display(){
        push();
        fill("purple");
        ellipse(this.body.position.x, this.body.position.y);
        pop();
    }
}