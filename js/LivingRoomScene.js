//initialize living room script text

function LivingRoomScript1() {
  scriptText = ["4:00 P.M.", "*meow*", "Hi kitties. *sigh*"];
  scriptStyle = [ITALIC, NORMAL, NORMAL]
  let script1 = new Script(scriptText, scriptStyle);
  return script1;
}

function initDecisionPane1() {
  let decisionPane_1;
  options = ["Do homework", "Turn on the TV", "Play with Cats", "Paint Nails"];
  sceneAction = [];
  sceneAction[0] = createAction(5, 0, 0, 0, 0, 0); //hw scene
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

function initgoToBed() {
 let timetxt=`${timeCount}:${clockFormatting(timeCountMin)}`;
  let timestring=timetxt.toString();
  console.log(timestring)
  scriptText = [timestring, "Wow, that late already?", "I guess I should get ready for bed."];
  scriptStyle = [ITALIC, NORMAL, NORMAL]
  let bedScript = new Script(scriptText, scriptStyle);
  return bedScript;
}



//living room scene
function sceneLiving() {
  //console.log(mouseX + ', ' + mouseY);
  LRSetup();
  //display script text, if end of script text display text choices
  LRScript1.display();
  LRScript1.begin(true);
  //console.log(LRScript1.txtPos);

  if (LRScript1.isScriptDone() && timeCount <= 9) {
    decisionPane1.setVisible(true);
    decisionPane1.display();
  }
  hwDecision.setVisible(false);
  if (timeCount >= 9 && timeCountMin == 30 || timeCount >= 10 && timeCountMin == 0) {
    decisionPane1.setVisible(false);
    (console.log(decisionPane1.isVisible));
    goToBed.display();
    goToBed.begin(true);
    console.log("time is " + timeCount + ":" + clockFormatting(timeCountMin));
    if (goToBed.isScriptDone()) {
      sceneN = 6; //end game
    }
  }
}

function lrMousePressed() { //everything that goes in mousePressed
  LRScript1.clicked();
  if (LRScript1.isScriptDone() && timeCount <= 9) {
    decisionPane1.clicked();
  }
  if (sceneN == 7 && LRScript1.currentText == 0) {
    doorClose.play();
  }
  if (sceneN == 1 && LRScript1.currentText == 1) {
    meow.setVolume(0.5);
    meow.play();
  }
  if (timeCount >= 9 && timeCountMin == 30 || timeCount >= 10 && timeCountMin == 0) {
    goToBed.clicked();
  }
}
