function LivingRoomScript2() {
    scriptText = ["5:00 P.M. Late November.", "Wow, it looks like a bomb went off in here.", "Did I leave the TV on? Oops…", "I remember back when the only times I was able to clean my apartment were when I was avoiding my school work.", "Hey speaking of clean, when was the last time I showered?"];
    scriptStyle = [ITALIC, NORMAL, NORMAL, NORMAL, NORMAL]
    let script2 = new Script(scriptText, scriptStyle);
    return script2;
}

function initDecisionPane2() {
    let decisionPane_2;
    options2 = ["Water Plants", "Shower", "Eat Something"];
    sceneAction2 = [];
    sceneAction2[0] = createAction(12, 0, 30, 10, 1, 0); //plant scene
    sceneAction2[1] = createAction(13, 1, 0, 10, 2, 0); //shower scene
    sceneAction2[2] = createAction(14, 0, 0, 0, 0, 0); //dinner scene

    decisionPane_2 = new decisionPane(
        "What would you like to do?",
        options2,
        sceneAction2,
        "green",
        BOLDITALIC,
        5000
    );
    return decisionPane_2;
}
function sceneLivingDay2() {
    decisionPane1.setVisible(false);
    spoonsNum = 4; //# spoons left
    timeCount = 5;
    timeCountMin = 0;
    Happiness = 0;
    LRSetup();
    LRScript2.display();
    LRScript2.begin(true);
    if (LRScript2.isScriptDone() && timeCount <= 9) {
        decisionPane2.setVisible(true);
        decisionPane2.display();
    }
    if (timeCount >= 9 && timeCountMin == 30 || timeCount >= 10 && timeCountMin == 0) {
        decisionPane2.setVisible(false);
        (console.log(decisionPane2.isVisible));
        /* goToBed.display();
         goToBed.begin(true);
         console.log("time is " + timeCount + ":" + clockFormatting(timeCountMin));
         if (goToBed.isScriptDone()) {
           Day = 2;
           sceneN=11;
         }*/
    }
}

function lrMousePressed2() { //everything that goes in mousePressed
    if (playDoorClose == true) {
        doorClose.play();
    }
    playDoorClose = false;
    LRScript2.clicked();
    if (LRScript2.isScriptDone() && timeCount <= 9) {
        decisionPane2.clicked();
    }


    if (timeCount >= 9 && timeCountMin == 30 || timeCount >= 10 && timeCountMin == 0) {
        //goToBed.clicked();
    }
}