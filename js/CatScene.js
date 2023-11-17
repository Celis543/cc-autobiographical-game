function sceneCats() {
    noCursor();
    decisionPane1.setVisible(false);
    image(cats, 0, 0, width, height);
    push();
    imageMode(CENTER);
    pop();
    if (purr.isPlaying()){
    backButton.setVisible(true);
    }
    backButton.display();
    image(brush,mouseX,mouseY,100,74);
    console.log(mouseX + ', ' + mouseY);
    push();
    noFill();
    //ellipse(307,245,200);
    //ellipse(470,130,215);
    pop;
  }

  function catPosCheck(){
    let d1 = dist(mouseX, mouseY, 307, 245);
    let d2 = dist(mouseX, mouseY, 470, 130);
    if (d1 < 200 || d2 < 215){
        return true;
    }
  }

  function catsPressed(){
    if (sceneN==4 && catPosCheck()){
        purr.play();
    }
  }