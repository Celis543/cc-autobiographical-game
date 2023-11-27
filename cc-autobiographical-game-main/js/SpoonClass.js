class Spoon {
  constructor(img, x, y) {
    this.img = img;
    this.x = x;
    this.y = y;
    this.scaleN=0.05
  }
  display() {
    push()
    fill(0);
    imageMode(CENTER);
    scale(this.scaleN);
    image(this.img, this.x/this.scaleN, this.y/this.scaleN);
    pop();  
  }
}

/*class SpoonsDisplayed {
  constructor(){
    this.xS = width-75;
  this.yS = height*0.8;
  this.spoonsNum=spoonsNum;
  this.spoonMax=5;
  }
  display() {
    for (i = 0; i <= spoonMax; i++) {
      this.xS += 12;
      spoonsGray[i] = new Spoon(spoonGray, xSGray, yS);
    }
  }
}*/

