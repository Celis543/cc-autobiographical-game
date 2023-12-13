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
  constructor(img, x, y, bottleTop, bottleTopX, mani) {
    this.img = img;
    this.x = x;
    this.y = y;
    this.bottleTop = bottleTop;
    this.bottleTopX = bottleTopX;
    this.bottleTopY = 122;
    this.bottleTopW = 40;
    this.bottleTopH = 75;
    this.mani = mani;
    let tintVal = [255, 255, 255, 255, 255];
    this.tintVal = tintVal;
  }
  displayNails() {
    if (nailN == this.mani) {
      image(nailBackground[this.mani + 1], 0, 0, width, height);
      push();
      imageMode(CENTER);
      scale(0.2);
      image(this.img, this.x / 0.2, this.y / 0.2);
      push();
      nailX = width * 3 / 4 - 20;
      nailY = height / 2;
      for (let i = 0; i < 5; i++) {
        push();
        tint(255, this.tintVal[i]);
        image(nakedNails[i], nailX / 0.2, nailY / 0.2);
        pop();
      }
      pop();
      image(hand, this.x / 0.2, this.y / 0.2);
      pop();
      /*push();
       stroke(0);
       rectMode(CENTER);
       rect(485, 276, 40, 25);
       rect(494, 245, 40, 30);
       rect(511, 205, 40, 40);
       rect(538, 164, 40, 40);
       rect(511, 33, 40, 40);
       pop();*/
    }
  }

  displayBottleTop() {
    if (nailN == this.mani) {
      push();
      imageMode(CENTER);
      translate(mouseX, mouseY);
      rotate(radians(-40));
      image(this.bottleTop, 0, -30, 40, 149);
      pop();
      //circle(mouseX-71,mouseY-76,20);
    }
  }

  display() {
    this.displayNails();
    this.displayBottleTop();
    this.overNail();
  }

  overBottle() {
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

  overNail() {
    let nailPosX = [485, 490, 511, 538, 511];
    let nailPosY = [276, 240, 205, 164, 33];
    let nailPosW = 40;
    let nailPosH = [25, 30, 35, 35, 30];
    for (let i = 0; i < 5; i++) {
      if (
        (mouseX - 70) > nailPosX[i] - nailPosW / 2 &&
        (mouseX - 70) < nailPosX[i] + nailPosW / 2 &&
        (mouseY - 70) > nailPosY[i] - nailPosH[i] &&
        (mouseY - 70) < nailPosY[i] + nailPosH[i]
      ) {
        console.log('over nail ' + i);
        this.tintVal[i] = 0;
      }
    }
  }

  finishedManicure(){
    if (this.tintVal[0]==0 && this.tintVal[1]==0 && this.tintVal[2]==0 && this.tintVal[3]==0 && this.tintVal[4]==0){
      console.log("finishedManicure");
      return true;
    } else {
      return false;
    }
  }

  clicked() {
    if (this.overBottle()) {
      nailPolish = true;
      nailN = this.mani;
      polishOpening.currentTime(0.0120)
      polishOpening.play();
      console.log(this.mani + " clicked");
    }
  }
}