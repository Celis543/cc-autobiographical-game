//initialize living room script text

function LivingRoomScript1() {
  scriptText = ["4:00 P.M.", "*meow*", "Hi kitties. *sigh*"];
  scriptStyle=[ITALIC,NORMAL,NORMAL]
  let script1 = new Script(scriptText,scriptStyle);
  return script1;
}

function initDecisionPane1() {
  let decisionPane_1;
  options = ["Do homework", "Turn on the TV", "Play with Cats", "Paint Nails"];
  sceneAction = [];
  sceneAction[0] = createAction(5,0,0,0,0,0); //hw scene
  sceneAction[1] = createAction(2, 1, 0, 20, 0, 0); //tv scene
  sceneAction[2] = createAction(4, 0, 30, 10, 0, 1); //cat scene
  sceneAction[3] = createAction(3, 2, 0, 30, 0, 2); //nail scene

  decisionPane_1 = new decisionPane(
    "What would you like to do?",
    options,
    sceneAction,
    "green",
    BOLDITALIC,
    5000
  );
  return decisionPane_1;
}



//living room scene
function sceneLiving() {
  LRSetup();
  //display script text, if end of script text display text choices
  LRScript1.display();
  LRScript1.begin(true);
  if (LRScript1.isScriptDone()) {
    decisionPane1.setVisible(true);
    decisionPane1.display();
  }
  hwDecision.setVisible(false);
}

function lrMousePressed() {
  //everything that goes in mousePressed
    LRScript1.clicked();
  if (LRScript1.isScriptDone()) {
  decisionPane1.clicked();
  }
  if (sceneN == 7 && LRScript1.currentText == 0) {
    doorClose.play();
  }
  if (sceneN == 1 && LRScript1.currentText == 1) {
    meow.setVolume(0.5);
    meow.play();
  }
}
