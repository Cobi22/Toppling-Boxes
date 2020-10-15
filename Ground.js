class Ground{
    constructor(x,y,w,h){
        var gOptions = {
            isStatic:true
        }
        this.body = Bodies.rectangle(x,y,w,h,gOptions);
        World.add(myWorld, this.body);
        this.width = w;
        this.height = h;
    }
    display(){
        var pos = this.body.position
        rectMode(CENTER);
        fill("green");
        rect(pos.x,pos.y,this.width,this.height);
    }
}