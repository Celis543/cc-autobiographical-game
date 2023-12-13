function initSteam(){
    for (i = 0; i < 2; i++) {
        let s = new Steam();
        steam.push(s);
      }
}
function sceneShower(){
    push();
    frameRate(10)
    ellipseMode(RADIUS);
    let steam = [];
    //image(showerOn,0,0,width,height);
    background(195, 214, 227);
  
    for (i = 0; i < steam.length; i++) {
      steam[i].rise();
      steam[i].show();
      steam[i].shrink();
  
      if (steam[i].radius <= 0) {
        steam.splice(i, 1);
      }
    }
    pop();
}

class Steam {
    constructor() {
      this.speed = random(3, 8);
      this.radius = random(width / 12, width / 8);
      this.x1 = random(0, width / 2.5);
      this.x2 = random(width / 1.5, width);
      this.x3 = random(width / 2.5, width / 1.5);
      this.y = height;
    }
    rise() {
      this.y -= this.speed;
    }
    show() {
      noStroke();
      fill('228, 238, 247, 40');
      ellipse(this.x1, this.y, this.radius);
      ellipse(this.x2, this.y, this.radius);
      ellipse(this.x3, this.y, width / 30);
    }
    shrink() {
      this.radius -= 0.8;
    }
  }