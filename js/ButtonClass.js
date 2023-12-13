class Button {
  constructor(x, y, w, h, labeled) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.label = labeled;
    this.savedTime = millis();
    this.passedTime = millis() - this.savedTime;
    this.waitTime = 3000;
    this.isVisible = false;
  }
  display() {
    if (this.isVisible) {
      this.passedTime = millis() - this.savedTime;
      push();
      stroke(48, 0, 44);

      rectMode(CENTER);
      fill(157, 0, 100); //lowlight color
      rect(this.x, this.y, this.w, this.h, 25); //lowlight
      push();
      noStroke();
      fill(212, 0, 135);  //highlight color
      rect(this.x - 1, this.y - 1, this.w - 4, this.h - 4, 23);   //highlight
      pop();
      if (this.over()) {
        fill(214, 122, 206);
        //fill(204, 50, 128);
      } else {
        fill(48, 0, 44);
      }
      noStroke();
      textAlign(CENTER, CENTER);
      textSize(18);
      textFont(buttonFont);
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
    if (this.isVisible && this.delay()) {
      let b =
        px < this.x + this.w / 2 &&
        px > this.x - this.w / 2 &&
        py > this.y - this.h / 2 &&
        py < this.y + this.h / 2;
      return b;
    }
  }
  setVisible(bool) {
    this.isVisible = bool;
  }

  delay() {
    if (this.passedTime >= this.waitTime) {
      return true;
    }
  }
}
