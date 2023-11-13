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

function sceneEnd() {
  push();
  background(255);
  textSize(40);
  textAlign(CENTER, CENTER);
  text("END", width / 2 - 200, 170, 400);
  pop();
  endButton.display();
}