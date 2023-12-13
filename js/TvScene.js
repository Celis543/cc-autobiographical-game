function initTvPics() {    //initializing tv scene pictures
  let pics = [];
  tvwidth = [445, 445, 500, 445];
  tvheight = [250, 249, 250, 250];
  for (i = 0; i < tvpics.length; i++) {
    pics[i] = new tvPics(tvpics[i], tv, tvwidth[i], tvheight[i]);
  }
  return pics;
}

function vidLoad() {
  AceClip.size(445, 250);
  AceClip.position(width / 2, height / 2);
  AceClip.play();
}

function initTvScript() {
  scriptTV = ["This is the only thing I’ve been able to think about all day. My brain is completely fried.", "I should probably feel bad about playing games or watching tv when I have so much work to do.", "But I literally cannot make myself be creative when I feel like this.", "You’re still tired, but the brain fog isn’t as bad as when you first got home."];
  scriptStyleTV = [NORMAL, NORMAL, NORMAL, ITALIC];
  tvScript = new Script(scriptTV, scriptStyleTV);
  return tvScript;
}

function sceneTV() {
  decisionPane1.setVisible(false);
  tvPictures[tvPicNumber].display();
  push();
  noCursor();
  imageMode(CENTER);
   let txtBx = new textBox();
   txtBx.display();
   tvScript.display();
   tvScript.begin(true);
  image(Remote, mouseX, mouseY, 45, 135);
  //console.log(mouseX + ', ' + mouseY);
  pop();
  if (tvPicNumber == tvpics.length - 1) {
    backButton.setVisible(true);
  }
  backButton.display();
}

function tvMousePressed() {
  if (sceneN == 2) {
    tvScript.clicked();
    if (tvPicNumber >= tvpics.length - 1) {
      tvPicNumber = 0;
    } else {
      tvPicNumber++;
    }
  }
}