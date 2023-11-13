function SpoonsDisplayed() {
  let xS = width-75;
  let xSGray = xS;
  let yS = textBoxHeight+20;
  for (i = 0; i <= spoonMax; i++) {
    xSGray += 12;
    spoonsGray[i] = new Spoon(spoonGray, xSGray, yS);
  }

  for (i = 0; i <= spoonsNum; i++) {
    xS += 12;
    spoons[i] = new Spoon(spoon, xS, yS);
  }
}

function clockFormatting(num) {
  if (int(num) < 10) {
    return "0" + num;
  } else{
    return num;
  }
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
  spoonsNum+= changeSpoons;
  previousChoice = setPreviousChoice;
previous = true;
  //redraw();
  if (changeSpoons!=0) {
    spoonPlay=true;
    console.log(spoonPlay);
  }
  console.log("scene " + sceneN);
  console.log("time is " + timeCount + ":" + clockFormatting(timeCountMin));
  };
}

function LRSetup(){
  image(livingRoom, 0, 0, width, height);
  SpoonsDisplayed();
  txtBx = new textBox();
  txtBx.display();
  for (i = 0; i <= spoonMax; i++) {
    spoonsGray[i].display();
  }
  for (i = 0; i <= spoonsNum; i++) {
    spoons[i].display();
  }
  push();
  textSize(25);
  fill("blue");
  text(timeCount + ":" + clockFormatting(timeCountMin), 10, 30);
  textSize(20);
  fill(0, 50, 200);
  textAlign(RIGHT);
  text("Mood: " + Happiness, width-8, textBoxHeight+60); //displays happiness
  pop();
}
