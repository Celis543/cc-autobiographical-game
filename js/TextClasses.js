class textBox {
  constructor() {
    this.yPos = textBoxHeight;
    this.h = height-this.yPos;
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
    this.txtWidth = textWidth(this.words);
    this.txtStyle = txtStyle;
    this.currentText = 0;
    this.isVisible=false;
    this.txtPos=textBoxHeight+7;
  }
  display() {
    if (this.currentText < this.script.length) {
      push();
      textAlign(LEFT,TOP);
      fill(0);
      textStyle(this.txtStyle[this.currentText]);
      textSize(16);
      this.buttonTextWidth = textWidth(this.script[this.currentText]);
      text(this.script[this.currentText], 10, this.txtPos,(width * 5) / 6);
      push();
      textAlign(LEFT,TOP);
      fill("green");
      textStyle(BOLD);
      textSize(20);
      text('>', this.buttonTextWidth+16, this.txtPos-2,(width * 5) / 6);
      pop();
      pop();
    }
  }
  clicked() {
    if (this.isVisible) {
      if (this.currentText < this.script.length) {
        this.currentText++;
      }
      redraw();
    }
  }
  isScriptDone() {
    return this.currentText == this.script.length;
  }
  begin(bool){
    this.isVisible=bool;
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
    this.promptPos=textBoxHeight+7;
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
    this.savedTime=millis();
    this.passedTime = millis() - this.savedTime;
    this.waitTime=waitTime;
    this.isVisible=false;
  }
  display() {
    if(this.isVisible){
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
          if (this.buttons[i].over()){
            console.log(this.buttons[i].buttonText + ' clicked');
            }
          this.buttons[i].action();
        }
      }
    }
  }
  delay(){
    if(this.passedTime>=this.waitTime){
      return true;
    }
  }
  setVisible(bool){
    this.isVisible=bool;
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

