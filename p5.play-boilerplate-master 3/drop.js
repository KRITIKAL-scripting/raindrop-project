class Drop {

    constructor() {
        this.x = random(width);
        this.y = 0;
        this.z = random(0,20);
        this.len = 10;
        this.yspeed = random(10,40);
    }
    fall() {
        this.y = this.y + this.yspeed;
        if(this.y > height) {
         this.y = random(0,10);

        }
    }
    display() {
        strokeWeight(4);
        stroke("blue");
        line(this.x,this.y,this.x,this.y+this.len);
    }
}