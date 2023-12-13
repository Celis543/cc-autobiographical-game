function sceneStart() {
  StartBackground = new Hair(hair[0], hair[1], 255, 100);
  StartBackground.display();
  push();
  textStyle(BOLD);
  textSize(50);
  textFont(startScreenFont);
  textAlign(CENTER, CENTER);
  this.texty = 160;
  this.textw = 600;
  // fill('red');
  // text("SARA TAKES CARE OF HERSELF: A GAME", width / 2 - 297, texty, textw);
  fill(0);
  text("SARA TAKES CARE OF HERSELF: A GAME", width / 2 - 300, texty, textw);
  // fill('blue');
  // text("SARA TAKES CARE OF HERSELF: A GAME", width / 2 - 303, texty, textw);
  pop();
  startButton.setVisible(true);
  startButton.display();
}

function sceneInstructions() {
  /*InstructionBackground=new Hair(hair[1],hair[2],150,150);
  InstructionBackground.display();*/
  StartBackground = new Hair(hair[0], hair[1], 255, 100);
  StartBackground.display();
  nextButton.setVisible(true);
  nextButton.display();
  push();
  textStyle(BOLD);
  textSize(20);
  fill(255);
  text('How to Play', 10, 30);
  text('Spoon Theory', 10, 170);
  pop();
  push();
  textSize(16);
  fill(255);
  text("-This game is about how we cope with daily life and take care of ourselves in the process. there is no way to win; just enjoy the story (or don't, your choice!)\n-The entire game is played using the mouse. Click through text, make choices and interact with scenes.", 10, 50, 700);
  text("The concept of spoon theory is used in this game to demonstrate the difficulty of handling everyday tasks while having a finite amount of mental and physical energy. The metaphor originated a way to illustrate the energy limitations that can result from living with a chronic illness. It has since been adopted in mental health circles to communicate the challenges of living with an invisible illness like depression.", 10, 190, 700);
  pop();
}

function initJournal() {
  let journals = [];
  journaltext = ["Who knew art school would be so hard?? \nJust kidding. But seriously, it' s been a huge adjustment. Back when I was an engineer, nobody cared about my thoughts. Now, every assignment is something personal to me. It's next to impossible to work on something without putting your heart into it. It's exhausting. Lately all I want to do is play video games or watch TV. I can barely bring myself to shower consistently. My plants are dying because I'm too busy to take care of them. I don't remember the last time I cooked a meal for myself. \nI told myself this wouldn't be like the first time I was in school. I need to get better at taking care of myself.", `It took me awhile after finishing undergrad to realize how much of a toll it took on me. \nBefore college I was a straight A student, and I loved learning. But when I started studying to become an engineer I was struggling just to keep up with everyone else. \nI NEVER felt like I could take a break. There was always work to be done. I longed for the days when I could graduate and work some shitty 9-5 and actually enjoy my life outside of work. \nI did get a shitty job, but that old feeling never went away. Whenever I would do something for fun, instead of feeling happy and rejuvenated, I would feel guilty.\nLike if I wasn't cleaning the house or otherwise doing something 'productive' then my time wasn't being well-spent. But that meant I felt terrible all the time. Having fun led to guilt, and trying to handle the everyday demands of life felt like such a massive burden.\nI've been slowly learning that it's not a sustainable way to live.`];
  for (let i = 0; i < journaltext.length; i++) {
    journals[i] = new Journal(journaltext[i]);
  }
  return journals;
}

function sceneJournal() {
  /*JournalBackground=new Hair(hair[3],hair[1],255,100);
  JournalBackground.display();*/
  push();
  image(bedRoom, 0, 0, width, height);
  filter(BLUR);
  pop();
  //console.log(journal[inGameDay-1]);
  journal[inGameDay - 1].display();
  journal[inGameDay - 1].move();
  nextButton.setVisible(true);
  nextButton.display();
}

function journalMousePressed() {
  if (sceneN == 7 && nextButton.isClicked(mouseX, mouseY)) {
    if (inGameDay == 1) {
      sceneN = 1;
    }
    if (inGameDay == 2) {
      sceneN = 11;
      playDoorClose = true;
    }
    nextButton.setVisible(false);
    console.log("scene" + sceneN);
  }
}

class Journal {
  constructor(journalText) {
    this.journalText = journalText;
    this.rWidth = 300; //width of notebook img
    this.rHeight = 365; //height of notebook img
    this.startHeight = height + this.rHeight / 2;
    this.stopHeight = height / 2 + 20;
    this.angle = 90;
    this.journalX = width / 2 + 10;
    this.journalY = this.startHeight;
    this.titleX = this.journalX - 155;
    this.titleY = this.journalY - 165;
    this.textX = this.journalX - 40;
    this.textY = this.journalY + 30;
  }

  display() {
    push();
    rectMode(CENTER);
    imageMode(CENTER);
    image(notebook, this.journalX, this.journalY, 525, 525);
    textAlign(LEFT);
    textFont(journalFont);
    textSize(13);
    text("JOURNAL", this.titleX, this.titleY);
    text(this.journalText, this.textX, this.textY, 240, 340);
    pop();
    //console.log(this.angle,this.journalY,this.titleY);
  }

  move() {
    if (this.angle <= 360) {
      this.journalY = this.startHeight + (this.stopHeight - this.startHeight) * cos(radians(this.angle));
      this.titleY = this.journalY - 165;
      this.textY = this.journalY + 30;
      this.angle += 5;
    }
    if (this.angle == 120) {
      journalSound.play();
    }
  }
}

function sceneEnd() {
  EndBackground = new Hair(hair[0], hair[1], 255, 100);
  EndBackground.display();
  //background(255);
  push();
  textSize(40);
  textFont(startScreenFont);
  textAlign(CENTER, CENTER);
  text("END", width / 2 - 200, 170, 400);
  pop();
  endButton.setVisible(true);
  endButton.display();
}

