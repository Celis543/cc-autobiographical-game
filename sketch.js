let sceneN,
  spoonsNum,
  spoonMax,
  tvPicNumber,
  timeCount,
  timeCountMin,
  nailN,
  Happiness,
  inGameDay,
  plantN,
  playDoorClose;
const textBoxHeight = 400 * 3 / 4 - 10;
let notebook, spoon, spoonGray, cats, brush, livingRoom, livingRoomDark, livingRoomMessy, bedRoom, Remote, tv, hand, journalSound, doorClose, meow, purr, spoonSound, bckgrndMusic, storedTime, polishOpening;
let spoonsDisplayed = [];
let spoonsGray = [];
let spoons = [];
let spoonPlay = false;
let tvpics = [];
let nakedNails = []
let nails = [];
let nailBrush = [];
let nailBackground = [];
let plants=[];
let previousChoice, previous, nailPolish;
let journal, LRScript1, LRScript2,decisionPane1,decisionPane2, catScript, hwDecision, doHwAnyway, hwPostRelax, goToBed;
let NailPics, NailScript, tvScript, PlantScript, waterMeters, showerOn, laptop, CodeScript;
let AceClip;
let mood = [];
let hair = [];
var angle = 0;
let clockFont, buttonFont, startScreenFont, journalFont, courierFont;
let backButton, startButton, nextButton, endButton, backButtonDay2;

function preload() {
  //bckgrndMusic = loadSound("Assets/Sounds/courtIsNowInSession.mp3");
  //bckgrndMusic = loadSound("Assets/Sounds/John Coltrane - In A Sentimental Mood.mp3");
  bckgrndMusic = loadSound("Assets/Sounds/reflected-light-147979.mp3"); //Music by <a href="https://pixabay.com/users/sergepavkinmusic-6130722/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=147979">Sergii Pavkin</a> from <a href="https://pixabay.com/music//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=147979">Pixabay</a>
  journalSound = loadSound("Assets/Sounds/handle-paper-foley-2-172689.mp3");
  doorClose = loadSound("Assets/Sounds/door-open-close-45475.mp3");
  meow = loadSound("Assets/Sounds/cat-meow-6226.mp3");
  purr = loadSound("Assets/Sounds/cat-purring.mp3");
  polishOpening = loadSound("Assets/Sounds/Open-polish.m4a");
  spoonSound = loadSound("Assets/Sounds/spoon_sound.mp3");
  notebook = loadImage("Assets/IMG_0418.png");
  spoon = loadImage("Assets/kitchen-spoon-icon.png");
  spoonGray = loadImage("Assets/IMG_0404.png");
  livingRoom = loadImage("Assets/IMG_2877.jpeg");
  livingRoomDark = loadImage("Assets/IMG_2930.jpeg");
  livingRoomMessy = loadImage("Assets/IMG_3101.jpeg");
  bedRoom = loadImage("Assets/IMG_2931.jpeg");
  cats = loadImage("Assets/cats.jpeg");
  brush = loadImage("Assets/brush.png");
  tv = loadImage("Assets/LivingRoom.png");
  Remote = loadImage("Assets/Remote.png");
  tvpics[0] = loadImage("Assets/Ace.jpeg");
  tvpics[1] = loadImage("Assets/Ofmd.jpeg");
  tvpics[2] = loadImage("Assets/AC.jpeg");
  tvpics[3] = loadImage("Assets/GBBO.jpeg");
  nailBackground[0] = loadImage("Assets/allPolish.jpeg");
  nailBackground[1] = loadImage("Assets/purplePolish.jpeg");
  nailBackground[2] = loadImage("Assets/brownPolish.jpeg");
  nailBackground[3] = loadImage("Assets/greenPolish.jpeg");
  hand = loadImage("Assets/Hand.png");
  //nakedNails = loadImage("Assets/IMG_0414.png");
  for (let i = 1; i < 6; i++) {
    nakedNails[i - 1] = loadImage(`Assets/nakedNail${i}.png`);
  }
  nails[0] = loadImage("Assets/IMG_0401.png");
  nails[1] = loadImage("Assets/IMG_0402.png");
  nails[2] = loadImage("Assets/IMG_0424.png");
  nailBrush[0] = loadImage("Assets/IMG_0426.png");
  nailBrush[1] = loadImage("Assets/IMG_0427.png");
  nailBrush[2] = loadImage("Assets/IMG_3099.png");  
  for (let j=0; j<4;j++){
    plants[j]=loadImage(`Assets/plant${j}.jpeg`);    //put this one back when you have all the plant pics
    //plants[j]=loadImage(`Assets/plant0.jpg`);
  }
  mood[0] = loadImage("Assets/badMood.png");
  mood[1] = loadImage("Assets/meh.png");
  mood[2] = loadImage("Assets/goodMood.png");
  hair[0] = loadImage('Assets/IMG_0419.jpeg');
  hair[1] = loadImage('Assets/IMG_0420.jpeg');
  hair[2] = loadImage('Assets/IMG_0421.jpeg');
  hair[3] = loadImage('Assets/IMG_0422.jpeg');
  showerOn=loadImage('Assets/shower_on.jpeg');
  laptop=loadImage('Assets/IMG_3123.jpeg');
  clockFont = loadFont('Assets/Fonts/clockType.ttf');
  buttonFont = loadFont('Assets/Fonts/Orbitron-Black.ttf');
  startScreenFont = loadFont('Assets/Fonts/VintageOne.ttf');
  journalFont = loadFont('Assets/Fonts/GOODDP__.ttf');
  //courierFont = loadFont('Assets/Fonts/CourierPrime-Regular.ttf');

}

function setup() {
  textFont("Courier");
  //createCanvas(windowWidth, windowHeight);
  createCanvas(711, 400);
  //AceClip= createVideo('Assets/Video/AceAttorney.mp4');
  initGlobalVariables();
  journal = initJournal();
  LRScript1 = LivingRoomScript1();
  LRScript2 = LivingRoomScript2();
  decisionPane1 = initDecisionPane1();
  decisionPane2 = initDecisionPane2();
  hwDecision = initHwDecision();
  catScript = initCatScript();
  hwPostRelax = initHwPostRelax();
  doHwAnyway = initDoHwAnyway();
  goToBed = initgoToBed();
  tvPictures = initTvPics();
  tvScript=initTvScript();
  NailPics = initNails();
  NailScript = initNailScript();
  PlantScript=initPlantScript();
  waterMeters=initwaterMeter();
  CodeScript=initCodeScene();
  backButton = new Button(50, 50, 75, 50, "Back");
  backButtonDay2=new Button(50,50,75,50,"Back");
  startButton = new Button(width / 2, height / 2 + 100, 75, 50, "Start");
  endButton = new Button(width / 2, height / 2 + 100, 125, 50, "Start Over");
  nextButton = new Button(width - 60, height - 50, 75, 50, "Next");
  let timetxt = `${timeCount}:${clockFormatting(timeCountMin)}`; //go to bed time dispay maybe get rid of this at some point
  let timestring = timetxt.toString();
  arr = [timestring, 0]
  console.log(arr);
  plantN=0;
  playDoorClose=false;
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
      sceneLivingDay2();
      break;
    case 12:
      scenePlants();
      break;
    case 13:
      sceneShower();
      break;
    case 14:
    sceneDinner();
      break;
    case 15:
      sceneCode();
      break;
  }
}

function initGlobalVariables() {
  sceneN = 1; //scene number
  spoonsNum = 4; //# spoons left
  spoonMax = 4; //spoons maximum
  tvPicNumber = 0; //to cycle tv pictures
  timeCount = 9;
  timeCountMin = 30;
  nailN = 0;
  Happiness = -10;
  previous = false;
  bckgrndMusic.stop();
  nailPolish = false;
  inGameDay = 1;
}

function mousePressed() {
  if (sceneN >= 0 && bckgrndMusic.isPlaying() == false) {
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
  catsPressed();
  tvMousePressed();
  lrMousePressed2();  //living room scene day 2
  lrMousePressed(); //mousePressed functions for Living Room Scene
  hwMousePressed(); //HW scene
  nailMousePressed(); //nail scene
  journalMousePressed();  //journal scene
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
  if (spoonPlay) {
    spoonSound.play();
    spoonPlay = false;
  }
  if (backButtonDay2.isClicked(mouseX, mouseY)) {
    sceneN = 11;  //living room scene day 2
    backButtonDay2.setVisible(false);
    console.log("scene" + sceneN);
  }
  plantsMousePressed();
  codeSceneMousePressed()
  if (sceneN == 6 && endButton.isClicked(mouseX, mouseY)) {
    setup();
  }
}
function mouseReleased() {
  purr.pause();
}
