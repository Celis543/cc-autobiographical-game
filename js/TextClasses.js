class textBox {
  constructor() {
    this.yPos = textBoxHeight;
    this.h = height - this.yPos;
  }
  display() {
    push();
    fill(105, 191, 194, 230);
    rectMode(CORNER);
    rect(0, this.yPos, width, this.h);
    pop();
  }
}

class Script {
  constructor(script, txtStyle) {
    this.script = script;
    this.txtStyle = txtStyle;
    this.currentText = 0;
    this.txtWidth = textWidth(this.script[this.currentText]);
    this.isVisible = false;
    this.txtPos = textBoxHeight + 7;
    this.textBoxWidth = (width * 7) / 8;
    this.arrowPos = this.textBoxWidth;
    this.forward = true;
    this.move = false;
    this.vel = 0;
  }
  display() {
    if (this.currentText < this.script.length) {
      this.moveArrow();
      push();
      textAlign(LEFT, TOP);
      fill(0);
      textStyle(this.txtStyle[this.currentText]);
      textSize(16);
      // this.buttonTextWidth = textWidth(this.script[this.currentText]);
      text(this.script[this.currentText], 10, this.txtPos, this.textBoxWidth);
      //let size = courierFont.textBounds(this.script[this.currentText], 10, this.txtPos, 16);
      //console.log(size.w,this.buttonTextWidth + 'size.w,this.buttonTextWidth');
      //console.log(size.h + ' size.h');
      push();
      textAlign(LEFT, TOP);
      fill("green");
      textStyle(BOLD);
      textSize(40);
      text('>', this.arrowPos, this.txtPos - 2);
      //text('>', width-100, textBoxHeight+((height-textBoxHeight)/2));
      //console.log(mouseX, mouseY + ' mouseX, mouseY');
      //console.log(this.buttonTextWidth,this.textBoxWidth);
      /*if (size.h<30) {
        textSize(20);
        text('>', this.txtWidth + 16, this.txtPos - 2, this.textBoxWidth);
        console.log('> height 1');
      } else {
        textSize(40);
        text('>', this.txtWidth + 16, this.txtPos, this.textBoxWidth);
        console.log('> height 2');
      }*/
      pop();
      pop();
    }
  }
  clicked() {
    if (this.isVisible) {
      if (this.currentText < this.script.length) {
        this.currentText++;
        this.move = true;
      }
      redraw();
    }
  }
  isScriptDone() {
    return this.currentText == this.script.length;
  }
  begin(bool) {
    this.isVisible = bool;
  }

  moveArrow() {
    if (this.move) {
      if (this.forward) {
        this.vel++;
        this.arrowPos += this.vel;
      } else {
        this.vel -= 1;
        this.arrowPos += this.vel;
      }
      if (this.vel >= 3) {
        this.forward = false;
      } else if (this.vel < 0) {
        this.move = false;
        this.arrowPos = this.textBoxWidth;
        this.forward = true;
      }
    }
  }
}

class decisionPane {
  constructor(prompt, buttonTextOptions, actions, textColor, promptStyle, waitTime) {
    let locations = [
      { x: 10, y: textBoxHeight + 55 },
      { x: 10, y: textBoxHeight + 85 },
      { x: 170, y: textBoxHeight + 55 },
      { x: 170, y: textBoxHeight + 85 },
    ];
    this.prompt = prompt;
    this.actions = actions;
    this.location = locations;
    this.buttonTextOptions = buttonTextOptions; //array of text button choices
    // Create up to 4 buttons
    this.textColor = textColor;
    this.promptPos = textBoxHeight + 7;
    this.promptStyle = promptStyle;
    this.buttons = [];
    for (let i = 0; i < this.buttonTextOptions.length; i++) {
      this.buttons[i] = new textButton(
        buttonTextOptions[i],
        this.location[i].x,
        this.location[i].y,
        this.actions[i]
      );
    }
    this.savedTime = millis();
    this.passedTime = millis() - this.savedTime;
    this.waitTime = waitTime;
    this.isVisible = false;
  }
  display() {
    if (this.isVisible) {
      this.passedTime = millis() - this.savedTime;
      push();
      textAlign(LEFT);
      fill(this.textColor);
      textSize(16);
      push();
      textAlign(LEFT, TOP);
      textStyle(this.promptStyle);
      text(this.prompt, 10, this.promptPos, (width * 5) / 6);
      pop();
      pop();
      for (i = 0; i < this.buttons.length; i++) {
        this.buttons[i].display();
      }
    } //returns true if display is called
  }
  clicked() {
    if (this.isVisible && this.delay()) {
      //only run if setVisable(true) and delay has passed
      for (i = 0; i < this.buttons.length; i++) {
        if (this.buttons[i].isClicked(mouseX, mouseY)) {
          if (this.buttons[i].over()) {
            console.log(this.buttons[i].buttonText + ' clicked');
          }
          this.buttons[i].action();
        }
      }
    }
  }
  delay() {
    if (this.passedTime >= this.waitTime) {
      return true;
    }
  }
  setVisible(bool) {
    this.isVisible = bool;
  }
}

//class for clickable text button choices
class textButton {
  constructor(buttonText, x, y, action) {
    this.action = action;
    this.buttonText = buttonText;
    this.x = x;
    this.y = y;
    this.textSz = 16;
    this.buttonTextWidth = textWidth(this.buttonText);
  }
  display() {
    push();
    textAlign(LEFT, CENTER);
    if (this.over()) {
      fill("green");
    } else {
      fill(0);
    }
    textSize(16);
    this.buttonTextWidth = textWidth(this.buttonText);
    text(this.buttonText, this.x, this.y);
    pop();
  }
  isClicked(px, py) {
    let b =
      px < this.buttonTextWidth + this.x &&
      px > this.x &&
      py > this.y - this.textSz / 2 &&
      py < this.y + this.textSz / 2;
    return b;
  }
  /*redLine() {
    push();
    stroke(255, 0, 0);
    strokeWeight(2);
    line(this.x, this.y, this.x + this.buttonTextWidth, this.y);
    pop();
  }*/
  over() {
    if (
      mouseX > this.x &&
      mouseX < this.buttonTextWidth + this.x &&
      mouseY > this.y - this.textSz / 2 &&
      mouseY < this.y + this.textSz / 2
    ) {
      return true;
    } else {
      return false;
    }
  }
}

