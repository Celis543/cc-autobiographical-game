class tvPics{
  constructor(img, tv, tvWidth, tvHeight){
  this.img=img;
  this.tv=tv;
  this.tvWidth=tvWidth;
  this.tvHeight=tvHeight;
  this.x=width/2;
  this.y=140;            
}
  
  display(){
    push();
    //scale(6/8);
 push();
  imageMode(CENTER);
  image(this.img, this.x, this.y, this.tvWidth, this.tvHeight);
  pop();
  push();
  imageMode(CENTER);
  image(this.tv, width/2, height/2, width+3, 533);
  pop();
    pop();
  }
}

class Nail{
  constructor(img,hand,x,y){
    this.img=img;
    this.hand=hand;
    this.x=x;
    this.y=y;
  }
  display(){
    push();
    imageMode(CENTER);
    scale(0.2);
    image(this.img,this.x/0.2,this.y/0.2)
    image(this.hand,this.x/0.2,this.y/0.2)
    pop();
  }
}