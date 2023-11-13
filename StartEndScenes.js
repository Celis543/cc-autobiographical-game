function sceneStart() {
  background(255);
  push();
  textSize(40);
  textAlign(CENTER, CENTER);
  text("SARA TAKES CARE OF HERSELF: A GAME", width / 2 - 200, 170, 400);
  pop();
  startButton.setVisible(true);
  startButton.display();
}

function sceneInstructions(){
  background(255);
  nextButton.setVisible(true);
  nextButton.display();
  push();
  textStyle(BOLD);
  textSize(20);
  text('How to Play',10,10);
  text('Spoon Theory',10,150);
  pop();
  push();
  textSize(16);
  text("-This game is about how we cope with daily life and take care of ourselves in the process. there is no way to win; just enjoy the story (or don't, your choice!",10,30,700)
  text('-The entire game is played using the mouse. Click through text, make choices and interact with scenes.',10,90, 700);
  text("The concept of spoon theory is used in this game to demonstrate the difficulty of handling everyday tasks while having a finite amount of energy. The metaphor originated in the chronic illness community and has been adopted by the mental health community.",10,170,700);
  pop();
}

function sceneEnd() {
  push();
  background(255);
  textSize(40);
  textAlign(CENTER, CENTER);
  text("END", width / 2 - 200, 170, 400);
  pop();
  endButton.display();
}