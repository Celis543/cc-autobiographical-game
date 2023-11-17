function initNails(){
  let nailPNGs=[];
  for (i=0; i<nails.length;i++){
    nailPNGs[i]=new Nail(nails[i],hand,(width/2),height/2);
  }
  return nailPNGs;
}

function initNailScript() {
  scriptNail = ["There's a part of me that wants to feel bad about painting \n my nails when I have so many other responsibilities.", 'I actually used to be ashamed of having such a "useless" \n hobby.' , "But, I don't know, it just makes me feel calm for some \n reason.","So I'm trying not to feel guilty about it.","Plus, look at how far my skills have come!"];
  let nailScript = new Script(scriptNail, NORMAL);
  return nailScript;
}

function sceneNails() {
  decisionPane1.setVisible(false);
  if (timeCount >= 6){
    image(livingRoomDark, 0, 0, width, height);
  } else{
    image(livingRoom, 0, 0, width, height);
  }
  txtBx = new textBox();
  txtBx.display();
  NailScript.display();
  NailScript.begin(true);
  if (NailScript.isScriptDone()){
  NailPics[nailN].display();
    backButton.setVisible(true);
  backButton.display();
  }
}

function nailMousePressed(){
  NailScript.clicked();
  if (sceneN == 3) {
    if (nailN >= NailPics.length - 1) {
      nailN = 0;
    } else {
      nailN++;
    }
  }
}