function initCatScript() {
  scriptCat = ["I don't know what I would do without these guys. I would literally die for them.", "I say that, but I definitely don't always do enough for them. I'm pretty sure they're long overdue for a vet appointment.", "Taking care of them is incredibly rewarding though. Look how content they are!"];
  let catScript = new Script(scriptCat, NORMAL);
  return catScript;
}

function sceneCats() {
  decisionPane1.setVisible(false);
  image(cats, 0, 0, width, height);
  txtBx = new textBox();
  txtBx.display();
  catScript.display();
  catScript.begin(true);
  if (catScript.isScriptDone()) {
    noCursor();
    image(cats, 0, 0, width, height);
    if (purr.isPlaying()) {
      backButton.setVisible(true);
    }
    backButton.display();
    image(brush, mouseX, mouseY, 100, 74);
    push();
    noFill();
    //ellipse(307,245,200);
    //ellipse(470,130,215);
    pop;
  }
}

function catPosCheck() {
  let d1 = dist(mouseX, mouseY, 307, 245);
  let d2 = dist(mouseX, mouseY, 470, 130);
  if (d1 < 200 || d2 < 215) {
    return true;
  }
}

function catsPressed() {
  catScript.clicked();
  if (sceneN == 4 && catPosCheck() && catScript.isScriptDone()) {
    purr.play();
  }
}