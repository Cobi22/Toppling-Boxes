class Box{
    constructor(x,y,w,h){
        var bOptions = {
            restitution:0.5
          }
        this.body = Bodies.rectangle(x,y,w,h,bOptions);
        World.add(myWorld, this.body);
        this.width = w;
        this.height = h;
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push()
        translate(pos.x,pos.y)
        rotate(angle)
        rectMode(CENTER)
        fill("brown");
        rect(0,0,this.width,this.height);
        pop()
    }
}