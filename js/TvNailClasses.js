class tvPics {
  constructor(img, tv, tvWidth, tvHeight) {
    this.img = img;
    this.tv = tv;
    this.tvWidth = tvWidth;
    this.tvHeight = tvHeight;
    this.x = width / 2;
    this.y = 140;
  }

  display() {
    push();
    push();
    imageMode(CENTER);
    image(this.img, this.x, this.y, this.tvWidth, this.tvHeight);
    pop();
    push();
    imageMode(CENTER);
    image(this.tv, width / 2, height / 2, width + 3, 533);
    pop();
    pop();
  }
}

class Nail {
  constructor(img, x, y,bottleTop,bottleTopX,mani) {
    this.img = img;
    this.x = x;
    this.y = y;
    this.bottleTop = bottleTop;
    this.bottleTopX = bottleTopX;
    this.bottleTopY = 122;
    this.bottleTopW = 40;
    this.bottleTopH = 75;
    this.mani=mani;
  }
  displayNails() {
    if (nailN==this.mani) {
    push();
    imageMode(CENTER);
    scale(0.2);
    image(this.img, this.x / 0.2, this.y / 0.2);
    image(hand, this.x / 0.2, this.y / 0.2);
    pop();
    }
  }

  displayBottleTop(){
    if (nailN==this.mani) {
      push();
      imageMode(CENTER);
      image(this.bottleTop, mouseX, mouseY, 40, 149);
      pop();
    }
  }

  display(){
    this.displayNails();
    this.displayBottleTop();
  }

  over() {
    if (
      mouseX > this.bottleTopX &&
      mouseX < this.bottleTopX + this.bottleTopW &&
      mouseY > this.bottleTopY &&
      mouseY < this.bottleTopY + this.bottleTopH
    ) {
      return true;
    } else {
      return false;
    }
  }

  clicked() {
    if (this.over()) {
      nailPolish=true;
      nailN=this.mani;
      console.log(this.mani + " clicked");
    }
  }
}