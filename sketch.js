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
let notebook, spoon, spoonGray, cats, brush, livingRoom, livingRoomDark, Remote, tv, hand, doorClose, meow, purr, spoonSound, bckgrndMusic, storedTime;
let spoonsDisplayed = [];
let spoonsGray = [];
let spoons = [];
let spoonPlay = false;
let tvpics = [];
let nails = [];
let nailBrush = [];
let nailBackground = [];
let previousChoice, previous, nailPolish;
let LRScript1, hwDecision, doHwAnyway, hwPostRelax, goToBed;
let NailPics, NailScript, nakedNails;
let AceClip;
let mood = [];
let hair = [];
var angle = 0;
let clockFont, buttonFont, startScreenFont, journalFont;
let backButton, startButton, nextButton, endButton;

function preload() {
  //bckgrndMusic = loadSound("Assets/Sounds/courtIsNowInSession.mp3");
  bckgrndMusic = loadSound("Assets/Sounds/relaxed-vlog-night-street-131746.mp3");
  doorClose = loadSound("Assets/Sounds/door-open-close-45475.mp3");
  meow = loadSound("Assets/Sounds/cat-meow-6226.mp3");
  purr = loadSound("Assets/Sounds/cat-purring.mp3");
  spoonSound = loadSound("Assets/Sounds/spoon_sound.mp3");
  notebook = loadImage("Assets/IMG_0418.png");
  spoon = loadImage("Assets/kitchen-spoon-icon.png");
  spoonGray = loadImage("Assets/IMG_0404.png");
  livingRoom = loadImage("Assets/IMG_2877.jpeg");
  livingRoomDark = loadImage("Assets/IMG_2930.jpeg");
  cats = loadImage("Assets/cats.jpeg");
  brush = loadImage("Assets/brush.png");
  tv = loadImage("Assets/LivingRoom.png");
  Remote = loadImage("Assets/Remote.png");
  tvpics[0] = loadImage("Assets/Ace.jpeg");
  tvpics[1] = loadImage("Assets/Ofmd.jpeg");
  tvpics[2] = loadImage("Assets/AC.jpeg");
  tvpics[3] = loadImage("Assets/GBBO.jpeg");
  nailBackground[0] = loadImage("Assets/AllPolish.jpeg");
  nailBackground[1] = loadImage("Assets/PurplePolish.jpeg");
  nailBackground[2] = loadImage("Assets/BrownPolish.jpeg");
  nailBackground[3] = loadImage("Assets/GreenPolish.jpeg");
  hand = loadImage("Assets/Hand.png");
  nakedNails = loadImage("Assets/IMG_0414.png");
  nails[0] = loadImage("Assets/IMG_0401.png");
  nails[1] = loadImage("Assets/IMG_0402.png");
  nails[2] = loadImage("Assets/IMG_0424.png");
  nailBrush[0] = loadImage("Assets/IMG_0426.png");
  nailBrush[1] = loadImage("Assets/IMG_0427.png");
  nailBrush[2] = loadImage("Assets/IMG_0427.png");  //need to swap this for green nail brush eventually
  mood[0] = loadImage("Assets/badMood.png");
  mood[1] = loadImage("Assets/meh.png");
  mood[2] = loadImage("Assets/goodMood.png");
  hair[0] = loadImage('Assets/IMG_0419.jpeg');
  hair[1] = loadImage('Assets/IMG_0420.jpeg');
  hair[2] = loadImage('Assets/IMG_0421.jpeg');
  hair[3] = loadImage('Assets/IMG_0422.jpeg');
  clockFont = loadFont('Assets/Fonts/clockType.ttf');
  buttonFont = loadFont('Assets/Fonts/Orbitron-Black.ttf');
  startScreenFont = loadFont('Assets/Fonts/VintageOne.ttf');
  journalFont = loadFont('Assets/Fonts/Architex.ttf');

}

function setup() {
  //createCanvas(windowWidth, windowHeight);
  createCanvas(711, 400);
  textFont("Courier");
  //AceClip= createVideo('Assets/Video/AceAttorney.mp4');
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
  arr = [timestring, 0]
  console.log(arr);
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
    case 11:
      sceneDayEnd();
      break;

  }
}

function initGlobalVariables() {
  sceneN = 3; //scene number
  spoonsNum = 4; //# spoons left
  spoonMax = 4; //spoons maximum
  tvPicNumber = 0; //to cycle tv pictures
  timeCount = 4;
  timeCountMin = 0;
  currentDisplayedText = 0; // reset this after every decision
  nailN = 0;
  Happiness = -10;
  previous = false;
  bckgrndMusic.stop();
  nailPolish=false;
}

function mousePressed() {
  if (sceneN >= 1 && bckgrndMusic.isPlaying() == false) {
    bckgrndMusic.loop();
    bckgrndMusic.setVolume(0.1);
    console.log('background music is playing');
  }

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

  if (sceneN == 6 && endButton.isClicked(mouseX, mouseY)) {
    setup();
  }
}
function mouseReleased() {
  purr.pause();
}
