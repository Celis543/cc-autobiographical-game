class Hair {
    constructor(img1, img2,opacity1,opacity2) {
        this.img1 = img1;
        this.img2 = img2;
        this.op1=opacity1;
        this.op2=opacity2;
    }
    display() {
        push();
        translate(width / 2, height / 2);
        scale(0.5);
        imageMode(CENTER);
        tint(255, this.op1);
        image(this.img1, 0, 0);
        push();
        tint(255, this.op2);
        var x = 0 + 20 * cos(angle);
        var y = 0 + 20 * sin(angle);
        image(this.img2, x, y);
        angle += 0.01;
        pop();
        pop();
    }
}