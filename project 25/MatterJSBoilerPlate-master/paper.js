class Paper{
    constructor(x,y,radius){
        var options = {
            'restitution':0.3,
            'friction':0.5,
            'density':1.2
        }
        this.body = Bodies.circle(x, y, radius, options);

        this.image = loadImage("images/paper.png");

        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;

        push();
        translate(pos.x, pos.y);
        image("this.image",100,360,20,20);
        pop();
    }
}