function initNails(){
  let nailPNGs=[];
  for (i=0; i<nails.length;i++){
    nailPNGs[i]=new Nail(nails[i],hand,(width/2),height/2);
  }
  return nailPNGs;
}
function sceneNails() {
  image(livingRoom, 0, 0, width, height);
  NailPics[nailN].display();
    backButton.setVisible(true);
  backButton.display();
}