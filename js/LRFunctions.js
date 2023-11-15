function SpoonsDisplayed() {
  // let xS = width - 75;
  let xS = 10;
  let xSGray = xS;
  // let yS = textBoxHeight + 20;
  let yS = 80;
  for (i = 0; i <= spoonMax; i++) {
    xSGray += 12;
    spoonsGray[i] = new Spoon(spoonGray, xSGray, yS);
  }

  for (i = 0; i <= spoonsNum; i++) {
    xS += 12;
    spoons[i] = new Spoon(spoon, xS, yS);
  }
  for (i = 0; i <= spoonMax; i++) {
    spoonsGray[i].display();
  }
  for (i = 0; i <= spoonsNum; i++) {
    spoons[i].display();
  }
}

function clockFormatting(num) {
  if (int(num) < 10) {
    return "0" + num;
  } else {
    return num;
  }
}

function clockDisplay(){
  push();
  textAlign(CENTER);
  rectMode(CENTER);
  textSize(20);
  let time = clockFormatting(timeCount) + ":" + clockFormatting(timeCountMin);  //formatting clock time
  push();
  fill(0);
  strokeWeight(2);
  stroke(90);
  rect(45, 21, textWidth(time) + 20, 25, 5);  //clock background
  pop();
  textFont(clockFont);
  fill("red");
  text(time, 45, 30); //clock time
}

function moodMeter(){
  let rectLength = map(Happiness, -10, 50, 10, 60);
  console.log('Mood ' + Happiness);
  push();
  let f;
  let j;
  if (Happiness < 0) {
    f = 'red';
    j = 0;
  }
  if (Happiness == 0) {
    f = 'yellow';
    j = 1;
  }
  if (Happiness >= 0) {
    f = 'green';
    j = 2;
  }
  rectMode(LEFT);
  imageMode(CENTER);
  fill(f);
  image(mood[j], 15, 50, 20, 21); //mood symbol
  rect(30, 45, rectLength, 10, 3); //mood meter
  pop();
}

function createAction(
  setSceneN,
  changeTimeCount,
  changeTimeMin,
  changeHappiness,
  changeSpoons,
  setPreviousChoice
) {
  return () => {
    sceneN = setSceneN;
    timeCount += changeTimeCount;
    timeCountMin += changeTimeMin;
    Happiness += changeHappiness;
    spoonsNum += changeSpoons;
    previousChoice = setPreviousChoice;
    previous = true;
    //redraw();
    if (changeSpoons != 0) {
      spoonPlay = true;
      console.log(spoonPlay);
    }
    console.log("scene " + sceneN);
    console.log("time is " + timeCount + ":" + clockFormatting(timeCountMin));
  };
}

function LRSetup() { //setup function for Living Room scenes
  image(livingRoom, 0, 0, width, height);
  cursor();
  SpoonsDisplayed();
  txtBx = new textBox();
  txtBx.display();
  push();
  fill(105, 191, 194, 230);
  rect(0, 0, 100, 100, 0, 0, 10, 0);
  pop();
  SpoonsDisplayed();
  clockDisplay();
  moodMeter();
}
