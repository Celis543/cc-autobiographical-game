/*function hwCheck() {
  return () => {
    if (Happiness < 0) {
      //console.log(hwDecision.passedTime);
      decisionPane1.setVisible(false);
      hwDecision.setVisible(true);
      hwDecision.display();
    } else if (Happiness >= 0) {
      //probably add more text
      createAction(5, 2, 0, 0, -1, 3)();
    }
  };
}*/

function initHwDecision() {
  hwOptions = [
    "No, this assignment is due tomorrow; I should get it done.",
    "I bet I’d be more productive if I did something fun!",
  ];
  hwActions = [];
  hwActions[0] = createAction(8, 3, 0, -10, -2, 3);
  hwActions[1] = createAction(1,0,0,0,0);
  let hwDec = new decisionPane(
    "I’m exhausted. Maybe I could do something to relax first?",
    hwOptions,
    hwActions,
    0,
    NORMAL,
    10000
  );
  return hwDec;
}

function initDoHwAnyway() {
  hwScriptText = [
    "You wasted an hour procrastinating because you really didn’t want to work.",
    "God, that took forever!",
    "Ugh, I kind of feel like shit now."
  ];
  hwScriptStyle = [ITALIC, NORMAL];
  let hwScript = new Script(hwScriptText, hwScriptStyle);
  return hwScript;
}

function initHwPostRelax(){
  hwScriptText2=["It took two hours to do your work, although you sense that it might have taken longer if you'd started it when you got home.", "Well that took awhile, but it could have been way worse!"];
  hwScriptStyle2 = [ITALIC, NORMAL];
  let hwScript2 = new Script(hwScriptText2, hwScriptStyle2);
  return hwScript2;
}

function sceneHomework() {
  LRSetup();
  if (Happiness < 0) {
    decisionPane1.setVisible(false);
    hwDecision.setVisible(true);
    hwDecision.display();
  } else if (Happiness >= 0) {
    //probably add more text
    createAction(9, 2, 0, 0, -1, 3)();
    console.log('what');
  }
}

function sceneDoHomeworkAnyway() {
  console.log(doHwAnyway.currentText + ' dha currenttxt');
  hwDecision.setVisible(false);
  LRSetup();
  doHwAnyway.display();
  doHwAnyway.begin(true);
  if (doHwAnyway.isScriptDone()) {
    sceneN = 1;
  }
}

function sceneHwPostRelax(){
  LRSetup();
  hwDecision.setVisible(false);
  decisionPane1.setVisible(false);
  hwPostRelax.display();
  hwPostRelax.begin(true);
  if (spoonPlay){
    spoonSound.play();
    spoonPlay=false;
  }
  if (hwPostRelax.isScriptDone()) {
    sceneN = 1;
  }
}

function hwMousePressed() {
  hwDecision.clicked();
  doHwAnyway.clicked();
  hwPostRelax.clicked();
}
