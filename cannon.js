class Cannon {
    constructor(x, y, width, height, angle){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.angle = angle;

        this.cannon_image = loadImage("./assets/CANON.png");
        this.base_image = loadImage("./assets/cannon_base.png");

    }

    show(){

        if(keyIsDown(87) && this.angle >  -1.95) {
            this.angle -= 0.01;
            console.log("pao")
        }

        if(keyIsDown(83) && this.angle < 0.35) {
            this.angle += 0.01;
        }

        push();
        translate(this.x, this.y);
        rotate(this.angle);
        imageMode(CENTER);
        image(this.cannon_image, 0,0, this.width, this.height);
        pop();

        image(this.base_image, 70,20, 200, 200);
    }
}