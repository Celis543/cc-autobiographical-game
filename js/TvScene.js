function initTvPics(){    //initializing tv scene pictures
  let pics=[];
  tvwidth=[445,445,500,445];
  tvheight=[250,249,250,250];
  for (i=0; i<tvpics.length;i++){
    pics[i]=new tvPics(tvpics[i],tv,tvwidth[i], tvheight[i]);
  }
  return pics;
}

function vidLoad(){
  AceClip.size(445,250);
  AceClip.position(width/2,height/2);
  AceClip.play();
}

function sceneTV() {
  decisionPane1.setVisible(false);
  tvPictures[tvPicNumber].display();
  push();
  noCursor();
  imageMode(CENTER);
 /* txtBx = new textBox();
  txtBx.display();*/
  
  image(Remote,mouseX,mouseY,45,135);
 //console.log(mouseX + ', ' + mouseY);
  pop();
  if (tvPicNumber == tvpics.length - 1){
    backButton.setVisible(true);
  }
  backButton.display();
}

function tvMousePressed(){
  if (sceneN == 2) {
    if (tvPicNumber >= tvpics.length - 1) {
      tvPicNumber = 0;
    } else {
      tvPicNumber++;
    }
  }
}