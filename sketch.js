let sceneN,
  spoonsNum,
  spoonMax,
  currentDisplayedText,
  tvPicNumber,
  timeCount,
  timeCountMin,
  nailN,
  Happiness;
const textBoxHeight = 400 * 3 / 4 - 10;
let notebook, spoon, spoonGray, cats, brush, livingRoom, Remote, tv, hand, doorClose, meow, purr, spoonSound;
let spoonsDisplayed = [];
let spoonsGray = [];
let spoons = [];
let spoonPlay = false;
let tvpics = [];
let nails = [];
let previousChoice, previous;
let LRScript1, hwDecision, doHwAnyway, hwPostRelax, goToBed;
let NailPics, NailScript;
let AceClip;
let mood = [];
let hair = [];
var angle = 0;

function preload() {
  doorClose = loadSound("Assets/door-open-close-45475.mp3");
  meow = loadSound("Assets/cat-meow-6226.mp3");
  purr = loadSound("Assets/cat-purring.mp3");
  spoonSound = loadSound("Assets/spoon_sound.mp3");
  notebook = loadImage("Assets/IMG_0418.png");
  spoon = loadImage("Assets/kitchen-spoon-icon.png");
  spoonGray = loadImage("Assets/IMG_0404.png");
  livingRoom = loadImage("Assets/IMG_2877.jpeg");
  cats = loadImage("Assets/cats.jpeg");
  brush = loadImage("Assets/brush.png");
  tv = loadImage("Assets/LivingRoom.png");
  Remote = loadImage("Assets/Remote.png");
  tvpics[0] = loadImage("Assets/Ace.jpeg");
  tvpics[1] = loadImage("Assets/Ofmd.jpeg");
  tvpics[2] = loadImage("Assets/AC.jpeg");
  tvpics[3] = loadImage("Assets/GBBO.jpeg");
  hand = loadImage("Assets/Hand.png");
  nails[0] = loadImage("Assets/IMG_0403.png");
  nails[1] = loadImage("Assets/IMG_0402.png");
  nails[2] = loadImage("Assets/IMG_0401.png");
  mood[0] = loadImage("Assets/badMood.png");
  mood[1] = loadImage("Assets/meh.png");
  mood[2] = loadImage("Assets/goodMood.png");
  hair[0] = loadImage('Assets/IMG_0419.jpeg');
  hair[1] = loadImage('Assets/IMG_0420.jpeg');
  clockFont = loadFont('Assets/Fonts/clockType.ttf');
  buttonFont = loadFont('Assets/Fonts/Orbitron-Black.ttf');
  startScreenFont = loadFont('Assets/Fonts/VintageOne.ttf');
  journalFont=loadFont('Assets/Fonts/Architex.ttf');

}

function setup() {
  //createCanvas(windowWidth, windowHeight);
  createCanvas(711, 400);
  textFont("Courier");
  //AceClip= createVideo('Assets/AceAttorney.mp4');
  LRScript1 = LivingRoomScript1();
  decisionPane1 = initDecisionPane1();
  hwDecision = initHwDecision();
  hwPostRelax = initHwPostRelax();
  doHwAnyway = initDoHwAnyway();
  goToBed = initgoToBed();
  initGlobalVariables();
  tvPictures = initTvPics();
  NailPics = initNails();
  NailScript = initNailScript();
  backButton = new Button(50, 50, 75, 50, "Back");
  startButton = new Button(width / 2, height / 2 + 100, 75, 50, "Start");
  endButton = new Button(width / 2, height / 2 + 100, 125, 50, "Start Over");
  nextButton = new Button(width - 60, height - 50, 75, 50, "Next");
  let timetxt = `${timeCount}:${clockFormatting(timeCountMin)}`;
  let timestring = timetxt.toString();
  console.log('timestring ' + timestring);
}

function draw() {
  switch (sceneN) {
    case 0:
      sceneStart();
      break;
    case 1:
      sceneLiving();
      break;
    case 2:
      sceneTV();
      break;
    case 3:
      sceneNails();
      break;
    case 4:
      sceneCats();
      break;
    case 5:
      sceneHomework();
      break;
    case 6:
      sceneEnd();
      break;
    case 7:
      sceneJournal();
      break;
    case 8:
      sceneDoHomeworkAnyway();
      break;
    case 9:
      sceneHwPostRelax();
      break;
    case 10:
      sceneInstructions();
      break;
  }
}

function sceneJournal() {
  background(255);
  push();
  rectMode(CENTER);
  let rWidth = 300;
  let rHeight = 350;
  //rect(width / 2, height / 2, rWidth, rHeight, 20);
  imageMode(CENTER);
  image(notebook,width/2+10,height/2,525,525);
  textAlign(LEFT);
  textFont(journalFont);
  textSize(14);
  text("JOURNAL", (width - rWidth) / 2 + 5, (height - rHeight) / 2 + 10);
  text(
    "Who knew art school would be so hard?? \nJust kidding. But seriously, it’s been a huge adjustment. Back when I was an engineer, nobody cared about my thoughts. Now, every assignment is something personal to me. It’s next to impossible to work on something without putting your heart into it. It’s exhausting. Lately all I want to do is play video games or watch TV. I can barely bring myself to shower consistently. My plants are dying because I’m too busy to take care of them. I don’t remember the last time I cooked a real meal for myself. \nI told myself this wouldn’t be like the first time I was in school. I need to get better at taking care of myself.",
    width / 2-40,
    height / 2 + 30,
    210,
    340
  );
  pop();
  nextButton.setVisible(true);
  nextButton.display();
}

function initGlobalVariables() {
  sceneN = 0; //scene number
  spoonsNum = 4; //# spoons left
  spoonMax = 4; //spoons maximum
  tvPicNumber = 0; //to cycle tv pictures
  timeCount = 4;
  timeCountMin = 0;
  currentDisplayedText = 0; // reset this after every decision
  nailN = 0;
  Happiness = -10;
  previous = false;

}

function mousePressed() {

  if (timeCountMin == 60) {
    timeCount += 1;
    timeCountMin = 0;
  }
  if (backButton.isClicked(mouseX, mouseY)) {
    sceneN = 1;
    backButton.setVisible(false);
    console.log("scene" + sceneN);
  }
  tvMousePressed();
  lrMousePressed(); //mousePressed functions for Living Room Scene
  hwMousePressed(); //HW scene
  nailMousePressed(); //nail scene
  if (sceneN == 7 && nextButton.isClicked(mouseX, mouseY)) {
    sceneN = 1;
    nextButton.setVisible(false);
    console.log("scene" + sceneN);
  }
  if (sceneN == 10 && nextButton.isClicked(mouseX, mouseY)) {
    sceneN = 7;
    nextButton.setVisible(false);
    console.log("scene" + sceneN);
  }
  if (startButton.isClicked(mouseX, mouseY)) {
    sceneN = 10;
    startButton.setVisible(false);
    console.log("scene" + sceneN);
  }
  catsPressed();
  if (spoonPlay) {
    spoonSound.play();
    spoonPlay = false;
  }
  /*  if (timeCount >= 11 && sceneN == 1) {
    sceneN = 6;
  }
  if (sceneN == 6 && endButton.isClicked(mouseX, mouseY)) {
    setup();
  }*/
}
function mouseReleased() {
  purr.pause();
}
