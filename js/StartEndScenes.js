function sceneStart() {
  StartBackground=new Hair(hair[0],hair[1],255,100);
  StartBackground.display();
  push();
  textStyle(BOLD);
  textSize(50);
  textFont(startScreenFont);
  textAlign(CENTER, CENTER);
  let texty=160;
  let textw=600;
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

function sceneInstructions(){
  InstructionBackground=new Hair(hair[1],hair[2],150,150);
  InstructionBackground.display();
  nextButton.setVisible(true);
  nextButton.display();
  push();
  textStyle(BOLD);
  textSize(20);
  fill(255);
  text('How to Play',10,30);
  text('Spoon Theory',10,160);
  pop();
  push();
  textSize(16);
  fill(255);
  text("-This game is about how we cope with daily life and take care of ourselves in the process. there is no way to win; just enjoy the story (or don't, your choice!",10,40,700)
  text('-The entire game is played using the mouse. Click through text, make choices and interact with scenes.',10,100, 700);
  text("The concept of spoon theory is used in this game to demonstrate the difficulty of handling everyday tasks while having a finite amount of energy. The metaphor originated in the chronic illness community and has been adopted by the mental health community.",10,170,700);
  pop();
}

function sceneJournal() {
  JournalBackground=new Hair(hair[3],hair[1],255,100);
  JournalBackground.display();
  push();
  rectMode(CENTER);
  let rWidth = 300;
  let rHeight = 350;
  //rect(width / 2, height / 2, rWidth, rHeight, 20);
  imageMode(CENTER);
  image(notebook, width / 2 + 10, height / 2, 525, 525);
  textAlign(LEFT);
  textFont(journalFont);
  textSize(14);
  text("JOURNAL", (width - rWidth) / 2 + 5, (height - rHeight) / 2 + 10);
  text(
    "Who knew art school would be so hard?? \nJust kidding. But seriously, it’s been a huge adjustment. Back when I was an engineer, nobody cared about my thoughts. Now, every assignment is something personal to me. It’s next to impossible to work on something without putting your heart into it. It’s exhausting. Lately all I want to do is play video games or watch TV. I can barely bring myself to shower consistently. My plants are dying because I’m too busy to take care of them. I don’t remember the last time I cooked a real meal for myself. \nI told myself this wouldn’t be like the first time I was in school. I need to get better at taking care of myself.",
    width / 2 - 40,
    height / 2 + 30,
    210,
    340
  );
  pop();
  nextButton.setVisible(true);
  nextButton.display();
}

function sceneEnd() {
  EndBackground=new Hair(hair[0],hair[1],255,100);
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

