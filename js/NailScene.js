function initNails() {
  let nailPNGs = [];
  btX=[90,166,240];
  for (i = 0; i < nails.length; i++) {
    nailPNGs[i] = new Nail(nails[i], width * 3 / 4 - 20, height / 2, nailBrush[i],btX[i],i);
  }
  return nailPNGs;
}

function initNailScript() {
  scriptNail = ["There's a part of me that wants to feel bad about painting \n my nails when I have so many other responsibilities.", 'I actually used to be ashamed of having such a "useless" \n hobby.', "But, I don't know, it just makes me feel calm for some \n reason.", "So I'm trying not to feel guilty about it.", "Plus, look at how far my skills have come!"];
  let nailScript = new Script(scriptNail, NORMAL);
  return nailScript;
}

function sceneNails() {
  decisionPane1.setVisible(false);
  /*if (timeCount >= 6){
    image(livingRoomDark, 0, 0, width, height);
  } else{
    image(livingRoom, 0, 0, width, height);
  }*/
  image(nailBackground[0], 0, 0, width, height);
  txtBx = new textBox();
  txtBx.display();
  NailScript.display();
  NailScript.begin(true);
  if (NailScript.isScriptDone()) {
    image(nailBackground[0], 0, 0, width, height);
    if (nailPolish==true){
        NailPics[nailN].display();
    } else{
      push();
      imageMode(CENTER);
      scale(0.2);
      nailX=width * 3 / 4 - 20;
      nailY=height / 2;
      image(nakedNails, nailX / 0.2, nailY / 0.2);
      image(hand, nailX / 0.2, nailY / 0.2);
      pop(); 
        if(NailPics[0].over()||NailPics[1].over()||NailPics[2].over()){
          cursor(HAND);
        } else {
          cursor(ARROW);
      }
    }
    }
    //console.log(nailN + NailPics[nailN].over());
    backButton.setVisible(true);
    backButton.display();
  push();
  noFill();
 // rect(78, 193, 72, 70);
 // rect(90, 122, 40, 75);
  //rect(166, 122, 40, 75);
  //rect(240, 122, 40, 75);
  pop();
  text(mouseX + ", " + mouseY, mouseX, mouseY);
  
}

function nailMousePressed() {
  NailScript.clicked();
  if (sceneN == 3) {
    if (nailN >= NailPics.length - 1) {
      nailN = 0;
    } else {
      nailN++;
    }
  }
  if (NailScript.isScriptDone()) {
    for (j = 0; j < nails.length; j++) {
    NailPics[j].clicked();
    }
  }
}