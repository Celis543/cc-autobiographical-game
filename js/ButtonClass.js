class Button {
  constructor(x, y, w, h, labeled) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.label = labeled;
    this.isVisible=false;
  }
  display() {
    if(this.isVisible){
    push();
    stroke(0);
    if (this.over()) {
      fill(204, 50, 128);
    } else {
      fill(157, 0, 100);
    }
    rectMode(CENTER);
    rect(this.x, this.y, this.w, this.h, 5);
    fill(0);
    noStroke();
    textAlign(CENTER, CENTER);
    textSize(18);
    text(this.label, this.x, this.y);
    pop();
    } else {
      console.log(this.label + " is not visible");
    }
  }

  over() {
    if (
      mouseX > this.x - this.w / 2 &&
      mouseX < this.x + this.w / 2 &&
      mouseY > this.y - this.h / 2 &&
      mouseY < this.y + this.h / 2
    ) {
      return true;
    } else {
      return false;
    }
  }
  isClicked(px, py) {
if (this.isVisible) {
      let b =
        px < this.x + this.w / 2 &&
        px > this.x - this.w / 2 &&
        py > this.y - this.h / 2 &&
        py < this.y + this.h / 2;
      console.log(this.label + " button clicked");
      return b;
 }
  }
  setVisible(bool){
    this.isVisible=bool;
  }
}
